/*
 * Browser/Node prompt engine for the bundled card and preset.
 *
 * The token counter is deliberately injectable.  Its default counts each CJK
 * code point as one token and all other text at one token per 3.5 code points;
 * use a model tokenizer through buildMessages({ countTokens }) when an exact
 * context boundary matters.  {{random}} is intentionally nondeterministic.
 */

const ROLE_BY_NUMBER = ['system', 'user', 'assistant'];
const CJK = /[\u2E80-\u9FFF\uF900-\uFAFF\u3040-\u30FF\uAC00-\uD7AF]/u;

function clone(value) {
    return value == null ? value : JSON.parse(JSON.stringify(value));
}

function messageText(message) {
    const swipe = message?.swipe_id ?? 0;
    return String(message?.swipes?.[swipe] ?? message?.mes ?? '');
}

function getPath(object, path, fallback) {
    if (!path) return object;
    let value = object;
    for (const part of String(path).replace(/\[(?:"([^"]+)"|'([^']+)'|(\d+))\]/g, '.$1$2$3').split('.').filter(Boolean)) {
        if (value == null || !Object.hasOwn(value, part)) return fallback;
        value = value[part];
    }
    return value;
}

function setPath(object, path, value) {
    const parts = pointerParts(path);
    if (!parts.length) return value;
    let target = object;
    for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];
        if (target[key] == null || typeof target[key] !== 'object') target[key] = /^\d+$/.test(parts[i + 1]) ? [] : {};
        target = target[key];
    }
    const key = parts.at(-1);
    if (key === '-' && Array.isArray(target)) target.push(clone(value));
    else target[key] = clone(value);
    return object;
}

function pointerParts(path) {
    if (typeof path !== 'string') throw new TypeError('JSON pointer must be a string');
    if (path === '') return [];
    if (!path.startsWith('/')) throw new TypeError('JSON pointer must begin with /');
    return path.slice(1).split('/').map(part => part.replace(/~1/g, '/').replace(/~0/g, '~'));
}

function removePath(object, path) {
    const parts = pointerParts(path);
    if (!parts.length) return undefined;
    const parent = getPath(object, parts.slice(0, -1).join('.'), undefined);
    if (parent == null) return object;
    const key = parts.at(-1);
    if (Array.isArray(parent) && /^\d+$/.test(key)) parent.splice(Number(key), 1);
    else delete parent[key];
    return object;
}

function applyPatch(document, operations) {
    let result = clone(document);
    if (!Array.isArray(operations)) throw new TypeError('JSON patch is not an array');
    for (const operation of operations) {
        if (!operation || typeof operation.op !== 'string') throw new TypeError('invalid operation');
        const { op, path, value } = operation;
        if (op === 'add' || op === 'replace' || op === 'set' || op === 'assign') result = setPath(result, path, value);
        else if (op === 'remove') result = removePath(result, path);
        else if (op === 'copy' || op === 'move') {
            const source = clone(getPath(result, pointerParts(operation.from).join('.'), undefined));
            if (source === undefined) throw new TypeError('missing patch source');
            if (op === 'move') result = removePath(result, operation.from);
            result = setPath(result, path, source);
        } else if (op === 'test') {
            if (JSON.stringify(getPath(result, pointerParts(path).join('.'), undefined)) !== JSON.stringify(value)) throw new TypeError('test failed');
        } else throw new TypeError('unsupported operation');
    }
    return result;
}

function outsideThinking(text) {
    return String(text).replace(/<(?:think|thinking|reasoning)(?:\s[^>]*)?>[\s\S]*?<\/(?:think|thinking|reasoning)>/gi, '');
}

function yaml(value, indent = '') {
    if (value == null) return 'null';
    if (typeof value === 'boolean' || typeof value === 'number') return String(value);
    if (typeof value === 'string') return /[:#\n{}\[\],&*?!|>'"%@`]/.test(value) ? JSON.stringify(value) : value;
    if (Array.isArray(value)) return value.length ? value.map(item => `${indent}- ${typeof item === 'object' && item !== null ? `\n${yaml(item, `${indent}  `)}` : yaml(item)}`).join('\n') : '[]';
    const entries = Object.entries(value).filter(([key]) => !key.startsWith('$'));
    return entries.length ? entries.map(([key, item]) => `${indent}${key}: ${typeof item === 'object' && item !== null ? `\n${yaml(item, `${indent}  `)}` : yaml(item)}`).join('\n') : '{}';
}

function defaultCountTokens(text) {
    let cjk = 0;
    let other = 0;
    for (const char of String(text)) {
        if (CJK.test(char)) cjk++;
        else other++;
    }
    return cjk + Math.ceil(other / 3.5);
}

function parseRegex(source) {
    if (source instanceof RegExp) return source;
    const match = String(source || '').match(/^\/([\s\S]*)\/([a-z]*)$/i);
    return match ? new RegExp(match[1], match[2]) : new RegExp(String(source));
}

function trimStrings(text, values) {
    return (values || []).reduce((result, item) => result.split(String(item)).join(''), text);
}

function applyRegexScripts(text, scripts, placement, depth) {
    return (scripts || []).reduce((result, script) => {
        if (script?.disabled || !script.findRegex || !Array.isArray(script.placement) || !script.placement.includes(placement)) return result;
        if (script.markdownOnly && !script.promptOnly) return result;
        if (script.minDepth != null && depth != null && depth < script.minDepth) return result;
        if (script.maxDepth != null && depth != null && depth > script.maxDepth) return result;
        try {
            const regex = parseRegex(script.findRegex);
            return result.replace(regex, (...args) => String(script.replaceString ?? '').replace(/{{match}}/gi, '$&').replace(/\$(\d+)|\$<([^>]+)>/g, (_, number, named) => {
                const found = number ? args[Number(number)] : args.at(-1)?.[named];
                return trimStrings(found == null ? '' : String(found), script.trimStrings);
            }));
        } catch {
            return result;
        }
    }, String(text));
}

function ejs(template, scope) {
    if (!String(template).includes('<%')) return String(template);
    let source = String(template);
    source = source.replace(/<%_([\s\S]*?)_%>/g, (_, code) => code.replace(/^\s+/, '')).replace(/<%_([\s\S]*?)%>/g, (_, code) => code.replace(/^\s+/, ''));
    source = source.replace(/<%([\s\S]*?)_%>\s*(?:\r?\n)?/g, '<%$1%>');
    const pieces = [];
    let at = 0;
    const tag = /<%([=_\-]?)([\s\S]*?)%>/g;
    let match;
    const literal = value => value && pieces.push(`__out+=${JSON.stringify(value)};`);
    while ((match = tag.exec(source))) {
        literal(source.slice(at, match.index));
        const [_, mode, code] = match;
        if (mode === '=' || mode === '-') pieces.push(`__out+=__string(${code});`);
        else if (mode !== '_') pieces.push(code);
        at = tag.lastIndex;
    }
    literal(source.slice(at));
    try {
        const render = new Function('scope', `const __string=v=>v==null?'':String(v); let __out=''; with(scope){${pieces.join('')}} return __out;`);
        return render(scope);
    } catch {
        return String(template);
    }
}

function splitExample(text, userName, charName) {
    if (!text) return [];
    const result = [];
    const parts = String(text).replace(/<START>/gi, '').split(/\n(?=(?:{{user}}|{{char}}|[^\n:]+):)/);
    for (const part of parts) {
        const value = part.trim();
        if (!value) continue;
        const user = new RegExp(`^(?:${escapeRegExp(userName)}|{{user}}):\\s*`).exec(value);
        const char = new RegExp(`^(?:${escapeRegExp(charName)}|{{char}}):\\s*`).exec(value);
        result.push(user ? { role: 'user', content: value.slice(user[0].length) } : { role: 'assistant', content: char ? value.slice(char[0].length) : value });
    }
    return result;
}

function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function wordMatch(text, key, entry) {
    if (!key) return false;
    const insensitive = entry.extensions?.case_sensitive !== true;
    const source = insensitive ? text.toLocaleLowerCase() : text;
    const needle = insensitive ? String(key).toLocaleLowerCase() : String(key);
    if (entry.extensions?.match_whole_words === true && !/[\u2E80-\u9FFF\u3040-\u30FF\uAC00-\uD7AF]/u.test(needle)) {
        return new RegExp(`(^|[^\\p{L}\\p{N}_])${escapeRegExp(needle)}(?=$|[^\\p{L}\\p{N}_])`, 'u').test(source);
    }
    return source.includes(needle);
}

function activeWorldInfo(card, chat, stat, substitute, transform = value => value) {
    const entries = card.character_book?.entries || [];
    const defaultDepth = 4;
    const scan = chat.slice(-defaultDepth).map(messageText).join('\n');
    const activated = [];
    const seen = new Set();
    let scanText = scan;
    for (let cycle = 0; cycle < 16; cycle++) {
        const found = [];
        for (const entry of entries) {
            if (!entry?.enabled || seen.has(entry.id)) continue;
            if (entry.constant) found.push(entry);
            else {
                const primary = (entry.keys || []).some(key => wordMatch(scanText, substitute(key), entry));
                if (!primary) continue;
                const secondaries = entry.secondary_keys || [];
                if (!entry.selective || !secondaries.length) found.push(entry);
                else {
                    const hits = secondaries.map(key => wordMatch(scanText, substitute(key), entry));
                    const logic = entry.extensions?.selectiveLogic ?? 0;
                    if ((logic === 0 && hits.some(Boolean)) || (logic === 1 && hits.every(Boolean)) || (logic === 2 && !hits.some(Boolean)) || (logic === 3 && !hits.every(Boolean))) found.push(entry);
                }
            }
        }
        if (!found.length) break;
        for (const entry of found) {
            seen.add(entry.id);
            activated.push(entry);
        }
        const recursive = found.filter(entry => !entry.extensions?.prevent_recursion && !entry.extensions?.exclude_recursion).map(entry => substitute(entry.content)).join('\n');
        if (!recursive) break;
        scanText = `${recursive}\n${scanText}`;
    }
    const ordered = activated.sort((a, b) => (a.insertion_order ?? 0) - (b.insertion_order ?? 0));
    const before = [];
    const after = [];
    const depth = [];
    for (const entry of ordered) {
        const content = transform(substitute(entry.content), entry.extensions?.depth ?? 4);
        const position = entry.extensions?.position ?? (entry.position === 'before_char' ? 0 : 1);
        if (position === 0) before.unshift(content);
        else if (position === 1) after.unshift(content);
        else if (position === 4) depth.push({ role: ROLE_BY_NUMBER[entry.extensions?.role ?? 0] || 'system', depth: entry.extensions?.depth ?? 4, content });
    }
    return { before: before.join('\n'), after: after.join('\n'), depth };
}

function squash(messages, config, substitute) {
    if (!config?.enabled) return messages;
    const affix = {
        user: { prefix: substitute(config.user_prefix || ''), suffix: substitute(config.user_suffix || '') },
        assistant: { prefix: substitute(config.char_prefix || ''), suffix: substitute(config.char_suffix || '') },
        system: { prefix: substitute(config.prefix_system || ''), suffix: substitute(config.suffix_system || '') },
    };
    const role = config.role === 'follow' ? (messages[0]?.role || 'user') : config.role;
    const output = [];
    let previous = '';
    let content = '';
    const flush = () => {
        if (!content) return;
        if (previous) content += affix[previous].suffix;
        let transformed = content;
        if (config.squashed_post_script_enable && config.squashed_post_script) {
            try {
                const processor = new Function(`return (${config.squashed_post_script.trim().replace(/;+\s*$/, '')})`)();
                transformed = processor(transformed);
            } catch { /* ST preserves the unsquashed value when this extension script fails. */ }
        }
        output.push({ role, content: String(transformed) });
        previous = '';
        content = '';
    };
    for (const input of messages) {
        if (!input?.content) continue;
        const message = { role: input.role, content: String(input.content) };
        if (config.conditional_enabled && config.conditional_tag) message.content = message.content.replace(config.conditional_tag, '');
        let separate = false;
        if (config.enable_squashed_separator && config.squashed_separator_string) {
            try {
                const separator = config.squashed_separator_regex ? new RegExp(config.squashed_separator_string) : config.squashed_separator_string;
                if (typeof separator === 'string' ? message.content.includes(separator) : separator.test(message.content)) {
                    message.content = message.content.replace(separator, '');
                    separate = true;
                }
            } catch { /* malformed preset separator is ignored by ST's extension */ }
        }
        if (config.parse_clewd && message.content.includes('<|no-trans|>')) {
            message.content = message.content.replace('<|no-trans|>', '');
            separate = true;
        }
        if (separate) {
            flush();
            output.push(message);
            continue;
        }
        if (message.role !== previous) {
            if (previous) content += affix[previous].suffix;
            content += affix[message.role].prefix;
        } else content += '\n';
        content += message.content;
        previous = message.role;
    }
    flush();
    return output;
}

export function createGame({ card, preset }) {
    if (!card || !preset) throw new TypeError('card and preset are required');

    function latestStat(chat) {
        for (let i = chat.length - 1; i >= 0; i--) {
            const message = chat[i];
            const value = message?.variables?.[message.swipe_id ?? 0]?.stat_data;
            if (value !== undefined) return clone(value);
        }
        return clone(card.init_stat);
    }

    function applyVariableUpdate(prevStat, mesText) {
        let result = clone(prevStat);
        const visible = outsideThinking(mesText);
        const blocks = visible.matchAll(/<UpdateVariable(?:\s[^>]*)?>[\s\S]*?<JSONPatch(?:\s[^>]*)?>([\s\S]*?)<\/JSONPatch>[\s\S]*?<\/UpdateVariable>/gi);
        for (const block of blocks) {
            try { result = applyPatch(result, JSON.parse(block[1].trim())); } catch { /* invalid MVU blocks never prevent a reply */ }
        }
        return result;
    }

    function firstMessage() {
        const mes = String(card.first_mes || '');
        return { name: card.name, is_user: false, mes, swipes: [mes], swipe_id: 0, variables: [{ stat_data: clone(card.init_stat) }] };
    }

    function buildMessages(chat, { userName = '道尔顿', charName = card.name, countTokens = defaultCountTokens, maxContext } = {}) {
        const local = Object.create(null);
        const stat = latestStat(chat || []);
        const lastUserMessage = [...(chat || [])].reverse().find(message => message?.is_user)?.mes || '';
        const substitute = raw => {
            let text = String(raw ?? '');
            text = text.replace(/{{\s*\/\/[\s\S]*}}/g, '');
            text = text.replace(/{{\s*setvar::([^:}]+)::([\s\S]*?)}}/g, (_, key, value) => (local[key.trim()] = value, ''));
            text = text.replace(/{{\s*getvar::([^}]+)}}/g, (_, key) => String(local[key.trim()] ?? ''));
            text = text.replace(/{{\s*format_message_variable::([^}]+)}}/g, (_, path) => yaml(getPath({ stat_data: stat }, path.trim(), {})));
            text = text.replace(/{{\s*lastUserMessage\s*}}/gi, String(lastUserMessage));
            text = text.replace(/{{\s*random::([^}]+)}}/g, (_, choices) => { const values = choices.split('::'); return values[Math.floor(Math.random() * values.length)] ?? ''; });
            text = text.replace(/{{\s*user\s*}}/gi, userName).replace(/{{\s*char\s*}}/gi, charName);
            text = text.replace(/{{\s*trim\s*}}/gi, '');
            return text;
        };
        const templated = raw => ejs(substitute(raw), {
            getvar: (path, options = {}) => getPath({ ...local, stat_data: stat }, path, options.defaults),
            setvar: (path, value) => setPath(local, `/${String(path).replaceAll('.', '/')}`, value),
            stat_data: stat,
        });
        const scripts = [...(preset.extensions?.regex_scripts || []), ...(card.extensions?.regex_scripts || [])];
        const wi = activeWorldInfo(card, chat || [], stat, templated, (content, depth) => applyRegexScripts(content, scripts, 5, depth));
        const order = preset.prompt_order?.find(item => String(item.character_id) === '100001')?.order
            || preset.prompt_order?.find(item => String(item.character_id) === '100000')?.order || [];
        const promptById = new Map((preset.prompts || []).map(prompt => [prompt.identifier, prompt]));
        const system = [];
        const depthPrompts = [];
        const custom = [];
        const marker = {
            worldInfoBefore: wi.before,
            worldInfoAfter: wi.after,
            charDescription: card.description || '',
            charPersonality: card.personality || '',
            scenario: card.scenario || '',
            personaDescription: '',
        };
        const mainOrder = order.find(entry => entry?.identifier === 'main');
        const mainPrompt = promptById.get('main');
        if (mainOrder?.enabled && mainPrompt) {
            templated(card.system_prompt || mainPrompt.content || ''); // preserve main-prompt setvar side effects
        }
        for (const entry of order) {
            if (!entry?.enabled || ['main', 'chatHistory', 'dialogueExamples', 'agentSystemPrompt', 'agentTask', 'agentResults'].includes(entry.identifier)) continue;
            const prompt = promptById.get(entry.identifier) || {};
            const cardOverride = entry.identifier === 'jailbreak' ? card.post_history_instructions : '';
            const raw = Object.hasOwn(marker, entry.identifier) ? marker[entry.identifier] : (cardOverride || prompt.content);
            const content = templated(raw || '');
            if (!content.trim()) continue;
            const position = prompt.injection_position ?? 0;
            const role = prompt.role || 'system';
            if (position === 1) depthPrompts.push({ role, content, depth: prompt.injection_depth ?? 4, order: prompt.injection_order ?? 100, fixed: true });
            else custom.push({ role, content, fixed: true });
        }
        // ST's marker order is already represented by the prompt-order list.  At-depth
        // lore is a true history insertion and remains independent of that list.
        system.push(...custom);
        if (mainOrder?.enabled && mainPrompt) {
            const control = String(card.system_prompt || mainPrompt.content || '').replace(/{{\s*(?:trim|setvar::[^}]+)\s*}}/gi, '');
            if (control.trim()) system.unshift({ role: mainPrompt.role || 'system', content: control, fixed: true });
        }
        const history = (chat || []).map((message, index) => ({
            role: message.is_user ? 'user' : 'assistant',
            content: applyRegexScripts(messageText(message), [...(preset.extensions?.regex_scripts || []), ...(card.extensions?.regex_scripts || [])], message.is_user ? 1 : 2, (chat.length - 1 - index)),
            history: true,
        })).filter(message => message.content);
        const injected = [...depthPrompts, ...wi.depth].sort((a, b) => (b.depth - a.depth) || (b.order - a.order));
        for (const item of injected) {
            const index = Math.max(0, history.length - item.depth + 1);
            history.splice(index, 0, { role: item.role, content: item.content, fixed: true });
        }
        const budget = maxContext ?? Math.max(0, Number(preset.openai_max_context ?? 0) - Number(preset.openai_max_tokens ?? 0));
        if (budget) {
            let total = [...system, ...history].reduce((sum, message) => sum + countTokens(message.content), 0);
            while (total > budget) {
                const index = history.findIndex(message => message.history);
                if (index < 0) break;
                total -= countTokens(history[index].content);
                history.splice(index, 1);
            }
        }
        let messages = [...system, ...history].map(({ role, content }) => ({ role, content }));
        if (preset.squash_system_messages) {
            const squashed = [];
            for (const message of messages) {
                const prior = squashed.at(-1);
                if (message.role === 'system' && prior?.role === 'system') prior.content += `\n\n${message.content}`;
                else squashed.push(message);
            }
            messages = squashed;
        }
        return squash(messages, preset.extensions?.SPreset?.ChatSquash, substitute);
    }

    function sampling() {
        return {
            temperature: preset.temperature,
            top_p: preset.top_p,
            frequency_penalty: preset.frequency_penalty,
            presence_penalty: preset.presence_penalty,
            max_tokens: preset.openai_max_tokens,
            stream: true,
        };
    }

    return { firstMessage, buildMessages, applyVariableUpdate, sampling };
}
