// 轻量酒馆：在浏览器里直接玩《看门狗：伦敦》。
// 页面骨架照 SillyTavern 搭，再在 window 上挂一个够用的 SillyTavern.getContext()，
// ctOS 阅读器（data/reader.js，和角色卡里那份是同一份构建产物）照旧跑在一个隐藏的 iframe 里改写主页面，
// 跟它在酒馆助手里的处境一模一样。提示词由 engine.js 按预设「英式早餐」和卡内世界书拼，变量按 MVU 的规矩更新。
import { createGame } from './engine.js';
import * as dice from './dice.js';

const $ = (s, root = document) => root.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clone = (o) => (o === undefined ? o : structuredClone(o));

// 卡和预设一共几百 KB，手机网络断一下就会失败：不白屏，给一句话和一个重试按钮
async function loadData() {
    for (let i = 0; ; i++) {
        try {
            return await Promise.all(['data/card.json', 'data/preset.json'].map((u) => fetch(u, { cache: i ? 'reload' : 'default' }).then((r) => {
                if (!r.ok) throw new Error(u + ' 返回 ' + r.status);
                return r.json();
            })));
        } catch (e) {
            if (i < 1) continue; // 自动再试一次
            document.body.insertAdjacentHTML('beforeend', `<div class="lt-boot-fail"><b>没加载出来</b><p>${esc(e.message)}</p><p>多半是网络断了一下。存档在这台设备的浏览器里，不会丢。</p><button type="button" class="menu_button" onclick="location.reload()">重试</button></div>`);
            throw e;
        }
    }
}
const [card, preset] = await loadData();
const game = createGame({ card, preset });

/* ------------------------------------------------------------
   设置：API、名字、阅读器自己的设置，全部存在 localStorage
   ------------------------------------------------------------ */
const SETTINGS_KEY = 'wdl.settings';
const settings = (() => {
    let s = {};
    try { s = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; } catch { s = {}; }
    s.api ??= { url: '', key: '', model: '', ctx: '', max: '', stream: true };
    s.ext ??= {};
    // 跑团检定：on 总开关，anim 掷骰动画，model 裁判用的模型（空着就用上面那个），reroll 重新生成时重掷
    s.check = { on: true, anim: true, model: '', reroll: false, ...s.check };
    return s;
})();
let settingsTimer = 0;
function saveSettings() {
    clearTimeout(settingsTimer);
    settingsTimer = setTimeout(() => localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)), 300);
}
const userName = () => settings.user?.trim() || '道尔顿';
const apiReady = () => !!(settings.api.url && settings.api.model);

/* ------------------------------------------------------------
   存档：IndexedDB，一局一条
   ------------------------------------------------------------ */
const db = await new Promise((ok, fail) => {
    const req = indexedDB.open('watchdogs-london', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('saves', { keyPath: 'id' });
    req.onsuccess = () => ok(req.result);
    req.onerror = () => fail(req.error);
});
const tx = (mode, fn) => new Promise((ok, fail) => {
    const t = db.transaction('saves', mode);
    const r = fn(t.objectStore('saves'));
    t.oncomplete = () => ok(r?.result);
    t.onerror = () => fail(t.error);
});
const listSaves = () => tx('readonly', (s) => s.getAll());
const getSave = (id) => tx('readonly', (s) => s.get(id));
const putSave = (rec) => tx('readwrite', (s) => s.put(rec));
const delSave = (id) => tx('readwrite', (s) => s.delete(id));

const state = { id: '', title: '', created: 0, chat: [], meta: {}, stream: null, busy: false, abort: null };

// 存档名取最近一个页眉的地点，读起来比日期好认
function titleOf(chat) {
    for (let i = chat.length - 1; i >= 0; i--) {
        const heads = chat[i].is_user ? [] : [...(chat[i].mes || '').matchAll(/^\s*@\s*(.+)$/gm)];
        if (heads.length) return heads.pop()[1].split(/\s*·\s*/).slice(0, 2).join(' · ');
    }
    return '贝克街221B';
}
let saveTimer = 0;
function saveSoon() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 400);
}
async function saveNow() {
    clearTimeout(saveTimer);
    if (!state.id) return;
    await putSave({ id: state.id, title: titleOf(state.chat), created: state.created, updated: Date.now(), chat: state.chat, meta: state.meta });
    if ($('#lt-saves .drawer-content').classList.contains('openDrawer')) drawSaves();
}

/* ------------------------------------------------------------
   酒馆上下文：阅读器、笔记本和状态栏用到的那几样
   ------------------------------------------------------------ */
const listeners = new Map();
const eventSource = {
    on(ev, fn) { if (!listeners.has(ev)) listeners.set(ev, []); listeners.get(ev).push(fn); },
    removeListener(ev, fn) { const l = listeners.get(ev); if (l) l.splice(l.indexOf(fn) >>> 0, 1); },
    emit(ev, ...args) {
        for (const fn of [...(listeners.get(ev) || [])]) {
            try { fn(...args); } catch (e) { console.error('[轻量酒馆] 事件处理出错', ev, e); }
        }
    },
};
const eventTypes = {
    CHAT_CHANGED: 'chat_id_changed', MESSAGE_RECEIVED: 'message_received', MESSAGE_SENT: 'message_sent',
    MESSAGE_DELETED: 'message_deleted', MESSAGE_SWIPE_DELETED: 'message_swipe_deleted', MESSAGE_SWIPED: 'message_swiped',
    MESSAGE_UPDATED: 'message_updated', MESSAGE_EDITED: 'message_edited', GENERATION_STARTED: 'generation_started',
    GENERATION_ENDED: 'generation_ended', GENERATION_STOPPED: 'generation_stopped', MORE_MESSAGES_LOADED: 'more_messages_loaded',
    CHARACTER_MESSAGE_RENDERED: 'character_message_rendered', USER_MESSAGE_RENDERED: 'user_message_rendered',
    STREAM_TOKEN_RECEIVED: 'stream_token_received',
};

// 笔记本的词条库读的是世界书文件；网页版只有卡内这一本，只读
const book = {
    entries: Object.fromEntries((card.character_book?.entries || []).map((e, i) => [String(e.id ?? i), {
        uid: e.id ?? i, comment: e.comment || e.name || '', key: e.keys || [], content: e.content || '',
        constant: !!e.constant, disable: e.enabled === false, order: e.insertion_order ?? 100,
        position: e.extensions?.position ?? (e.position === 'before_char' ? 0 : 1), depth: e.extensions?.depth ?? 4,
    }])),
};

const context = {
    get chat() { return state.chat; },
    characters: [{ name: card.name, avatar: 'card.png', data: card }],
    characterId: '0',
    groupId: undefined,
    get name1() { return userName(); },
    name2: card.name,
    getCurrentChatId: () => state.id,
    get chatMetadata() { return state.meta; },
    saveMetadataDebounced: saveSoon,
    // 状态栏解锁技能改的是消息上的变量，和酒馆一样走 saveChat 存档
    saveChat: saveSoon,
    get extensionSettings() { return settings.ext; },
    saveSettingsDebounced: saveSettings,
    eventSource, eventTypes, event_types: eventTypes,
    get streamingProcessor() { return state.stream; },
    chatCompletionSettings: preset,
    mainApi: 'openai',
    getChatCompletionModel: () => settings.api.model,
    ChatCompletionService: {
        presetToGeneratePayload: async (_a, _b, payload) => payload,
        sendRequest: async (payload) => ({ content: (await complete(payload.messages, { stream: false, max_tokens: payload.max_tokens })).content }),
    },
    ConnectionManagerRequestService: { getSupportedProfiles: () => [] },
    getWorldInfoNames: () => [card.character_book?.name].filter(Boolean),
    loadWorldInfo: async () => clone(book),
    saveWorldInfo: async () => { throw new Error('网页版的世界书是只读的'); },
    getRequestHeaders: () => ({ 'Content-Type': 'application/json' }),
};
window.SillyTavern = { getContext: () => context };

// 阅读器和笔记本弹的小提示
function toast(kind, text) {
    const el = document.createElement('div');
    el.className = 'lt-toast ' + kind;
    el.textContent = text;
    $('#toast-container').append(el);
    setTimeout(() => el.remove(), kind === 'error' ? 8000 : 3500);
}
window.toastr = Object.fromEntries(['success', 'info', 'warning', 'error'].map((k) => [k, (t) => toast(k, t)]));

/* ------------------------------------------------------------
   消息流
   ------------------------------------------------------------ */
const chatEl = $('#chat');
const fmtTime = (t) => (t ? new Date(t).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : '');
const textHtml = (s) => esc(s || '').replace(/\n/g, '<br>');

function mesEl(msg, id) {
    const el = document.createElement('div');
    el.className = 'mes';
    el.setAttribute('mesid', id);
    el.setAttribute('is_user', String(!!msg.is_user));
    el.setAttribute('is_system', 'false');
    el.innerHTML = `
<div class="mesAvatarWrapper"></div>
<div class="swipe_left fa-solid fa-chevron-left" title="上一版"></div>
<div class="mes_block">
  <div class="ch_name"><span class="name_text">${esc(msg.name || '')}</span><span class="timestamp">${fmtTime(msg.send_date)}</span>
    <div class="mes_buttons">
      <div class="mes_button fa-solid fa-copy" data-act="copy" title="复制"></div>
      <div class="mes_button fa-solid fa-pencil" data-act="edit" title="编辑"></div>
      ${id > 0 ? '<div class="mes_button fa-solid fa-trash-can" data-act="delete" title="删除这一条"></div>' : ''}
    </div>
  </div>
  <div class="mes_text">${textHtml(msg.mes)}</div>${msg.is_user && msg.extra?.check?.result && settings.check.on ? dice.cardHtml(msg.extra.check) : ''}
</div>
<div class="swipeRightBlock"><div class="swipe_right fa-solid fa-chevron-right" title="下一版 / 重新生成"></div><div class="swipes-counter"></div></div>`;
    return el;
}

function markLast() {
    const all = chatEl.children;
    for (let i = 0; i < all.length; i++) all[i].classList.toggle('last_mes', i === all.length - 1);
    const last = state.chat[state.chat.length - 1];
    const counter = all[all.length - 1]?.querySelector('.swipes-counter');
    if (counter && last && !last.is_user) counter.textContent = `${(last.swipe_id ?? 0) + 1}/${last.swipes?.length || 1}`;
}

function renderChat() {
    chatEl.replaceChildren(...state.chat.map(mesEl));
    markLast();
    scrollDown();
}

function refreshMes(id) {
    const el = chatEl.querySelector(`.mes[mesid="${id}"]`);
    if (!el) return;
    const text = el.querySelector('.mes_text');
    if (!text.querySelector('.edit_textarea')) text.innerHTML = textHtml(state.chat[id].mes);
    markLast();
}

const scrollDown = () => requestAnimationFrame(() => { chatEl.scrollTop = chatEl.scrollHeight; });

function appendMes(msg) {
    state.chat.push(msg);
    const id = state.chat.length - 1;
    chatEl.append(mesEl(msg, id));
    markLast();
    scrollDown();
    return id;
}

/* ------------------------------------------------------------
   变量：每条回复写完以后，从它前面最近的一份变量出发，套上它自己的 JSONPatch
   ------------------------------------------------------------ */
function statBefore(id) {
    for (let i = id - 1; i >= 0; i--) {
        const v = state.chat[i]?.variables?.[state.chat[i].swipe_id ?? 0];
        if (v?.stat_data) return v.stat_data;
    }
    return card.init_stat;
}
function settleVariables(id) {
    const msg = state.chat[id];
    if (!msg || msg.is_user) return;
    msg.variables ??= [];
    msg.variables[msg.swipe_id ?? 0] = { stat_data: game.applyVariableUpdate(clone(statBefore(id)), msg.mes || '') };
}

/* ------------------------------------------------------------
   调接口：OpenAI 兼容的 /chat/completions，流式按 SSE 读
   ------------------------------------------------------------ */
function endpoint(path) {
    const base = settings.api.url.trim().replace(/\/+$/, '').replace(/\/chat\/completions$/, '');
    return base + path;
}
function headers() {
    const h = { 'Content-Type': 'application/json' };
    if (settings.api.key.trim()) h.Authorization = 'Bearer ' + settings.api.key.trim();
    return h;
}

async function complete(messages, { stream = false, max_tokens, signal, onDelta, model, override } = {}) {
    if (!apiReady()) throw new Error('还没填 API：左边“API 连接”里填好接口地址和模型');
    const body = { ...game.sampling(), ...override, model: (model || settings.api.model).trim(), messages, stream };
    if (max_tokens) body.max_tokens = max_tokens;
    const res = await fetch(endpoint('/chat/completions'), { method: 'POST', headers: headers(), body: JSON.stringify(body), signal });
    if (!res.ok) {
        const detail = (await res.text().catch(() => '')).slice(0, 300);
        throw new Error(`接口返回 ${res.status}${detail ? '：' + detail : ''}`);
    }
    if (!stream) {
        const j = await res.json();
        const m = j.choices?.[0]?.message || {};
        return { content: m.content || '', reasoning: m.reasoning_content || m.reasoning || '' };
    }
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = '', content = '', reasoning = '';
    for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split('\n');
        buf = lines.pop();
        for (const line of lines) {
            const data = line.replace(/^data:\s*/, '').trim();
            if (!line.startsWith('data:') || !data || data === '[DONE]') continue;
            let j;
            try { j = JSON.parse(data); } catch { continue; }
            if (j.error) throw new Error(j.error.message || JSON.stringify(j.error));
            const d = j.choices?.[0]?.delta || {};
            const r = d.reasoning_content || d.reasoning || '';
            if (d.content || r) {
                content += d.content || '';
                reasoning += r;
                onDelta?.(content, reasoning);
            }
        }
    }
    return { content, reasoning };
}

/* ------------------------------------------------------------
   生成：normal 新开一条回复，swipe 给最后一条回复再写一版
   ------------------------------------------------------------ */
function setBusy(on) {
    state.busy = on;
    document.body.classList.toggle('lt-busy', on);
    $('#mes_stop').hidden = !on;
}

/* ------------------------------------------------------------
   跑团检定：发送前先问裁判要不要掷骰，掷完把结果附在玩家这句话后面
   ------------------------------------------------------------ */
// 天问每一级技能的说明在状态栏的数据里，从阅读器那份构建产物里抠出来，裁判按它判断天问会不会
const tianwenInfo = await fetch('data/reader.js').then((r) => r.text()).then((js) => {
    const html = JSON.parse(js.match(/^const HUD_HTML = (".*");$/m)[1]);
    return JSON.parse(html.match(/var STATIC = (\{.*?\});\n/s)[1]).skills ?? {};
}).catch(() => ({}));

function injuriesOf(stat) {
    const body = stat?.['道尔顿']?.['身体组件'] ?? {};
    const parts = Object.entries(body).filter(([k, v]) => k !== '整体' && v && (v['状态'] !== '完好' || (v['影响'] && v['影响'] !== '无')))
        .map(([k, v]) => `${k}${v['状态'] !== '完好' ? v['状态'] : ''}，${v['影响']}`);
    return [body['整体']?.['体力'], ...parts].filter(Boolean).join('；');
}
// 场面取上一段正文的结尾，去掉思考、变量更新和各种标签
function sceneBefore(idx) {
    for (let i = idx - 1; i >= 0; i--) {
        const m = state.chat[i];
        if (m.is_user) continue;
        const t = (m.mes || '').replace(/<(think|thinking|UpdateVariable)[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, '').replace(/^\s*[@&].*$/gm, '').trim();
        return t.slice(-1200);
    }
    return '';
}
async function runCheck(uid, signal) {
    const u = state.chat[uid];
    const stat = statBefore(uid + 1);
    const skills = dice.skillsOf(stat, tianwenInfo);
    let verdict = null;
    try {
        const out = await complete(dice.judgePrompt({ action: u.mes, scene: sceneBefore(uid), skills, injuries: injuriesOf(stat) }), {
            stream: false, max_tokens: 600, signal, model: settings.check.model || undefined, override: { temperature: 0.2 },
        });
        verdict = dice.parseJudge(out.content || out.reasoning);
    } catch (e) {
        if (e.name === 'AbortError') throw e;
        toast('warning', '裁判没回话，这一轮不检定：' + e.message);
    }
    const c = dice.resolve(verdict, skills);
    u.extra = { ...u.extra, check: c ?? { none: true, t: Date.now() } };
    if (c) { drawCheck(uid); if (settings.check.anim) await rollShow(c); }
}
// 写作模型看到的聊天：玩家那句话后面附上检定结果；页面上显示的原文不动
function withChecks(chat) {
    return chat.map((m) => (m.is_user && m.extra?.check?.result ? { ...m, mes: m.mes + '\n\n' + dice.noteOf(m.extra.check) } : m));
}
function drawCheck(uid) {
    const el = chatEl.querySelector(`.mes[mesid="${uid}"] .mes_block`);
    if (!el) return;
    el.querySelector('.lt-check')?.remove();
    const c = state.chat[uid]?.extra?.check;
    if (c?.result && settings.check.on) el.insertAdjacentHTML('beforeend', dice.cardHtml(c));
}
// 掷骰动画：屏幕中间亮一张检定卡，数字滚一阵再停在结果上；减少动态效果时直接出结果
function rollShow(c) {
    return new Promise((done) => {
        const ov = document.createElement('div');
        ov.className = 'lt-dice-ov';
        ov.innerHTML = dice.cardHtml(c);
        document.body.append(ov);
        const card = ov.firstElementChild;
        const em = card.querySelector('.lt-ck-roll em');
        const still = matchMedia('(prefers-reduced-motion: reduce)').matches || c.roll == null;
        let n = 0;
        const spin = still ? 0 : setInterval(() => { em.textContent = String(dice.d100()).padStart(2, '0'); if (++n > 14) settle(); }, 55);
        function settle() {
            clearInterval(spin);
            em.textContent = c.roll == null ? '—' : String(c.roll).padStart(2, '0');
            card.classList.add('done');
            setTimeout(close, 1400);
        }
        function close() { ov.classList.add('out'); setTimeout(() => { ov.remove(); done(); }, 220); }
        card.classList.add('rolling');
        ov.addEventListener('click', () => { if (card.classList.contains('done')) close(); });
        if (still) settle();
    });
}

async function generate(kind = 'normal') {
    if (state.busy) return;
    if (!apiReady()) { openDrawer('lt-api'); toast('warning', '先在“API 连接”里填好接口地址、密钥和模型'); return; }
    // 先检定：这一轮回复对应的那句玩家发言，没掷过就掷；重新生成默认沿用，设置里打开重掷才再掷
    const uid = kind === 'swipe' ? state.chat.length - 2 : state.chat.length - 1;
    const um = state.chat[uid];
    if (settings.check.on && um?.is_user && um.mes.trim() && (!um.extra?.check || (kind === 'swipe' && settings.check.reroll))) {
        const jc = new AbortController();
        state.abort = jc;
        setBusy(true);
        document.body.classList.add('lt-judging');
        try { await runCheck(uid, jc.signal); } catch { /* 按了停止：这一轮不检定也不生成 */ }
        document.body.classList.remove('lt-judging');
        state.abort = null;
        setBusy(false);
        if (jc.signal.aborted) return;
        saveSoon();
    }
    let id, msg;
    const now = Date.now();
    if (kind === 'swipe') {
        id = state.chat.length - 1;
        msg = state.chat[id];
        if (!msg || msg.is_user) return;
        msg.swipes ??= [msg.mes];
        msg.swipe_info ??= [];
        msg.swipes.push('');
        msg.swipe_id = msg.swipes.length - 1;
        msg.swipe_info[msg.swipe_id] = { send_date: now };
        msg.mes = '';
        msg.send_date = now;
        msg.extra = { api: 'openai', model: settings.api.model };
        refreshMes(id);
    } else {
        msg = { name: card.name, is_user: false, is_system: false, send_date: now, mes: '', swipes: [''], swipe_id: 0, swipe_info: [{ send_date: now }], variables: [], extra: { api: 'openai', model: settings.api.model } };
        id = appendMes(msg);
    }
    const messages = game.buildMessages(settings.check.on ? withChecks(state.chat.slice(0, id)) : state.chat.slice(0, id), {
        userName: userName(), charName: card.name,
        ...(Number(settings.api.ctx) > 0 ? { maxContext: Number(settings.api.ctx) } : {}),
    });
    const ctrl = new AbortController();
    state.abort = ctrl;
    state.stream = { messageId: id, isFinished: false, isStopped: false };
    setBusy(true);
    eventSource.emit(eventTypes.GENERATION_STARTED, kind === 'swipe' ? 'swipe' : 'normal', {}, false);
    const write = (content, reasoning) => {
        msg.mes = content;
        msg.swipes[msg.swipe_id] = content;
        if (reasoning) msg.extra.reasoning = reasoning;
        refreshMes(id);
        eventSource.emit(eventTypes.STREAM_TOKEN_RECEIVED, content);
    };
    let failed = null;
    try {
        const out = await complete(messages, {
            stream: settings.api.stream !== false, signal: ctrl.signal,
            max_tokens: Number(settings.api.max) > 0 ? Number(settings.api.max) : undefined,
            onDelta: write,
        });
        write(out.content, out.reasoning);
    } catch (e) {
        if (e.name !== 'AbortError') failed = e;
    }
    state.stream.isFinished = true;
    state.stream.isStopped = ctrl.signal.aborted;
    state.abort = null;
    setBusy(false);
    if (failed && !msg.mes) {
        // 一个字都没收到：这一版不留
        if (kind === 'swipe') {
            msg.swipes.pop(); msg.swipe_info.pop();
            msg.swipe_id = msg.swipes.length - 1;
            msg.mes = msg.swipes[msg.swipe_id];
            msg.extra = {};
            refreshMes(id);
        } else {
            state.chat.splice(id, 1);
            chatEl.querySelector(`.mes[mesid="${id}"]`)?.remove();
            markLast();
        }
        state.stream = null;
        toast('error', '生成失败：' + failed.message);
        eventSource.emit(eventTypes.GENERATION_STOPPED);
        return;
    }
    if (failed) toast('error', '生成中断：' + failed.message);
    settleVariables(id);
    state.stream = null;
    eventSource.emit(eventTypes.MESSAGE_RECEIVED, id, kind === 'swipe' ? 'swipe' : 'normal');
    eventSource.emit(eventTypes.CHARACTER_MESSAGE_RENDERED, id, kind === 'swipe' ? 'swipe' : 'normal');
    eventSource.emit(ctrl.signal.aborted ? eventTypes.GENERATION_STOPPED : eventTypes.GENERATION_ENDED, id);
    saveNow();
}

function send() {
    if (state.busy) return;
    const box = $('#send_textarea');
    const text = box.value.trim();
    if (!apiReady()) { generate(); return; }
    if (text) {
        const id = appendMes({ name: userName(), is_user: true, is_system: false, send_date: Date.now(), mes: text, extra: {} });
        box.value = '';
        fitBox();
        eventSource.emit(eventTypes.MESSAGE_SENT, id);
        eventSource.emit(eventTypes.USER_MESSAGE_RENDERED, id);
    } else if (!state.chat[state.chat.length - 1]?.is_user) {
        // 空着按发送、上一条又是她的回复：没有可回的东西
        return;
    }
    generate('normal');
}

function swipe(dir) {
    if (state.busy) return;
    const id = state.chat.length - 1;
    const msg = state.chat[id];
    if (!msg || msg.is_user) return;
    msg.swipes ??= [msg.mes];
    const n = (msg.swipe_id ?? 0) + dir;
    if (n < 0) return;
    if (n >= msg.swipes.length) {
        if (id === 0) return; // 开场白只有一版
        generate('swipe');
        return;
    }
    msg.swipe_id = n;
    msg.mes = msg.swipes[n];
    msg.send_date = msg.swipe_info?.[n]?.send_date ?? msg.send_date;
    refreshMes(id);
    eventSource.emit(eventTypes.MESSAGE_SWIPED, id);
    saveSoon();
}

/* ------------------------------------------------------------
   消息上的按钮：复制、编辑、删除
   ------------------------------------------------------------ */
chatEl.addEventListener('click', async (e) => {
    const t = e.target;
    if (t.closest('.swipe_left')) { swipe(-1); return; }
    if (t.closest('.swipe_right')) { swipe(1); return; }
    const btn = t.closest('[data-act]');
    const el = t.closest('.mes');
    if (!btn || !el) return;
    const id = Number(el.getAttribute('mesid'));
    const msg = state.chat[id];
    if (!msg) return;
    const act = btn.dataset.act;
    if (act === 'copy') {
        await navigator.clipboard?.writeText(msg.mes || '').catch(() => {});
        toast('success', '已复制');
    } else if (act === 'edit') {
        const text = el.querySelector('.mes_text');
        if (text.querySelector('.edit_textarea')) return;
        text.innerHTML = `<textarea class="edit_textarea"></textarea><div class="lt-editbar"><button type="button" class="menu_button" data-act="save">保存</button><button type="button" class="menu_button" data-act="cancel">取消</button></div>`;
        const ta = text.querySelector('textarea');
        ta.value = msg.mes || '';
        ta.focus();
    } else if (act === 'cancel') {
        el.querySelector('.mes_text').innerHTML = textHtml(msg.mes);
    } else if (act === 'save') {
        msg.mes = el.querySelector('.edit_textarea').value;
        if (msg.swipes) msg.swipes[msg.swipe_id ?? 0] = msg.mes;
        el.querySelector('.mes_text').innerHTML = textHtml(msg.mes);
        settleVariables(id);
        eventSource.emit(eventTypes.MESSAGE_EDITED, id);
        eventSource.emit(eventTypes.MESSAGE_UPDATED, id);
        saveNow();
    } else if (act === 'delete') {
        if (state.busy || !confirm('删掉这一条？')) return;
        state.chat.splice(id, 1);
        renderChat();
        eventSource.emit(eventTypes.MESSAGE_DELETED, state.chat.length);
        saveNow();
    }
});

/* ------------------------------------------------------------
   输入框
   ------------------------------------------------------------ */
const box = $('#send_textarea');
function fitBox() {
    box.style.height = 'auto';
    box.style.height = Math.min(box.scrollHeight, innerHeight * 0.4) + 'px';
}
box.addEventListener('input', fitBox);
box.addEventListener('keydown', (e) => {
    // 手机键盘上的回车是换行，电脑上回车发送、Shift+回车换行；输入法选字时的回车不算
    if (e.key !== 'Enter' || e.shiftKey || e.isComposing || matchMedia('(pointer: coarse)').matches) return;
    e.preventDefault();
    send();
});
$('#send_but').addEventListener('click', send);
$('#mes_stop').addEventListener('click', () => state.abort?.abort());
$('#lt-regen').addEventListener('click', () => swipe(Infinity));

/* ------------------------------------------------------------
   抽屉
   ------------------------------------------------------------ */
function openDrawer(id) {
    for (const d of document.querySelectorAll('#top-settings-holder > .drawer')) {
        d.querySelector('.drawer-content')?.classList.toggle('openDrawer', d.id === id);
    }
    if (id === 'lt-saves') drawSaves();
}
document.querySelector('#top-settings-holder').addEventListener('click', (e) => {
    const toggle = e.target.closest('.drawer-toggle');
    if (!toggle) return;
    const d = toggle.closest('.drawer');
    const open = d.querySelector('.drawer-content').classList.contains('openDrawer');
    openDrawer(open ? '' : d.id);
});
// 点主区收起抽屉
$('#sheld').addEventListener('pointerdown', () => {
    if (document.querySelector('#top-settings-holder .openDrawer')) openDrawer('');
});

/* API 面板 */
const api = settings.api;
const fields = { url: $('#lt-url'), key: $('#lt-key'), model: $('#lt-model'), ctx: $('#lt-ctx'), max: $('#lt-max') };
fields.ctx.placeholder = `跟预设走（${preset.openai_max_context}）`;
fields.max.placeholder = `跟预设走（${game.sampling().max_tokens ?? preset.openai_max_tokens}）`;
for (const [k, el] of Object.entries(fields)) {
    el.value = api[k] ?? '';
    el.addEventListener('input', () => { api[k] = el.value; saveSettings(); });
}
$('#lt-stream').checked = api.stream !== false;
$('#lt-stream').addEventListener('change', (e) => { api.stream = e.target.checked; saveSettings(); });
$('#lt-user').value = settings.user || '';
$('#lt-user').addEventListener('input', (e) => { settings.user = e.target.value; saveSettings(); });
$('#lt-provider').addEventListener('change', (e) => {
    if (!e.target.value) return;
    fields.url.value = api.url = e.target.value;
    saveSettings();
});
/* 配置方案：一套接口设置（地址、密钥、模型、上下文、回复上限、流式、裁判模型）存成一个方案，切换、导入导出 */
settings.profiles ??= [];
const PROF_KEYS = ['url', 'key', 'model', 'ctx', 'max', 'stream'];
const profSel = $('#lt-prof');
function snapshot() {
    const o = Object.fromEntries(PROF_KEYS.map((k) => [k, api[k] ?? '']));
    o.judge = settings.check.model || '';
    return o;
}
function drawProfiles() {
    profSel.innerHTML = '<option value="">（当前填的，未存成方案）</option>'
        + settings.profiles.map((p) => `<option value="${esc(p.name)}">${esc(p.name)}${p.api.model ? ' · ' + esc(p.api.model) : ''}</option>`).join('');
    profSel.value = settings.profiles.some((p) => p.name === settings.profile) ? settings.profile : '';
}
function applyProfile(p) {
    for (const k of PROF_KEYS) api[k] = p.api[k] ?? (k === 'stream' ? true : '');
    settings.check.model = p.api.judge || '';
    for (const [k, el] of Object.entries(fields)) el.value = api[k] ?? '';
    $('#lt-stream').checked = api.stream !== false;
    $('#lt-ck-model').value = settings.check.model;
    settings.profile = p.name;
    saveSettings();
    status(`换成了方案「${p.name}」`, true);
}
profSel.addEventListener('change', () => {
    const p = settings.profiles.find((x) => x.name === profSel.value);
    if (p) applyProfile(p); else { settings.profile = ''; saveSettings(); }
});
$('#lt-prof-save').addEventListener('click', () => {
    const name = prompt('方案叫什么？同名会覆盖。', settings.profile || (api.model ? api.model : '我的接口'))?.trim();
    if (!name) return;
    const i = settings.profiles.findIndex((p) => p.name === name);
    const rec = { name, api: snapshot(), at: Date.now() };
    if (i >= 0) settings.profiles[i] = rec; else settings.profiles.push(rec);
    settings.profile = name;
    saveSettings();
    drawProfiles();
    toast('success', `存好了方案「${name}」`);
});
$('#lt-prof-del').addEventListener('click', () => {
    const name = profSel.value;
    if (!name || !confirm(`删掉方案「${name}」？当前填着的设置不动。`)) return;
    settings.profiles = settings.profiles.filter((p) => p.name !== name);
    settings.profile = '';
    saveSettings();
    drawProfiles();
});
$('#lt-prof-export').addEventListener('click', () => {
    if (!settings.profiles.length) { toast('warning', '还没有方案，先「存为方案」'); return; }
    const withKey = $('#lt-prof-key').checked;
    const profiles = settings.profiles.map((p) => ({ ...p, api: withKey ? p.api : { ...p.api, key: '' } }));
    download(JSON.stringify({ kind: 'watchdogs-london-profiles', v: 1, profiles }, null, 2), `${card.name} - 接口方案${withKey ? '（含密钥）' : ''} - ${stamp()}.json`, 'application/json');
});
$('#lt-prof-import').addEventListener('click', () => $('#lt-prof-file').click());
$('#lt-prof-file').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    try {
        const data = JSON.parse(await file.text());
        const list = (data?.kind === 'watchdogs-london-profiles' ? data.profiles : null)?.filter((p) => p?.name && p.api);
        if (!list?.length) throw new Error('这不是本页导出的方案文件');
        for (const p of list) {
            const i = settings.profiles.findIndex((x) => x.name === p.name);
            // 导入的方案没带密钥时，留着本机同名方案里的那把
            const key = p.api.key || (i >= 0 ? settings.profiles[i].api.key : '') || '';
            const rec = { name: String(p.name), api: { ...Object.fromEntries(PROF_KEYS.map((k) => [k, p.api[k] ?? ''])), judge: p.api.judge || '', key }, at: p.at || Date.now() };
            if (i >= 0) settings.profiles[i] = rec; else settings.profiles.push(rec);
        }
        saveSettings();
        drawProfiles();
        toast('success', `导入了 ${list.length} 个方案，在「配置方案」里选`);
    } catch (err) { toast('error', '导入失败：' + err.message); }
});
// 手改了任何一项，就不再算是那个方案了
for (const el of [...Object.values(fields), $('#lt-stream')]) el.addEventListener('input', () => { if (profSel.value) { profSel.value = ''; settings.profile = ''; saveSettings(); } });
drawProfiles();

/* 检定面板 */
const ck = settings.check;
for (const [id, k] of [['lt-ck-on', 'on'], ['lt-ck-anim', 'anim'], ['lt-ck-reroll', 'reroll']]) {
    $('#' + id).checked = !!ck[k];
    $('#' + id).addEventListener('change', (e) => {
        ck[k] = e.target.checked;
        saveSettings();
        if (k === 'on') state.chat.forEach((m, i) => m.is_user && drawCheck(i));
    });
}
$('#lt-ck-model').value = ck.model || '';
$('#lt-ck-model').addEventListener('input', (e) => { ck.model = e.target.value; saveSettings(); });

const status = (text, ok) => { const s = $('#lt-status'); s.textContent = text; s.className = 'lt-note ' + (ok ? 'lt-ok' : 'lt-bad'); };
$('#lt-fetch').addEventListener('click', async () => {
    try {
        const res = await fetch(endpoint('/models'), { headers: headers() });
        if (!res.ok) throw new Error('接口返回 ' + res.status);
        const ids = ((await res.json()).data || []).map((m) => m.id).filter(Boolean).sort();
        $('#lt-models').innerHTML = ids.map((m) => `<option value="${esc(m)}">`).join('');
        status(`拿到 ${ids.length} 个模型，在模型框里选`, true);
    } catch (e) { status('拉不到模型列表：' + e.message, false); }
});
$('#lt-test').addEventListener('click', async () => {
    status('正在试…', true);
    try {
        const out = await complete([{ role: 'user', content: '只回两个字：收到' }], { stream: false, max_tokens: 4000 });
        status('连上了：' + (out.content || out.reasoning || '（空回复）').trim().slice(0, 40), true);
    } catch (e) { status(e.name === 'TypeError' ? '连不上：接口不允许浏览器跨域访问，或者地址写错了' : e.message, false); }
});

/* 存档面板 */
async function drawSaves() {
    const saves = (await listSaves()).sort((a, b) => b.updated - a.updated);
    $('#lt-list').innerHTML = saves.map((s) => `
<div class="lt-save${s.id === state.id ? ' on' : ''}" data-id="${esc(s.id)}">
  <b>${esc(s.title || '未命名')}</b>
  <small>${fmtTime(s.updated)} · ${s.chat.length} 楼${s.id === state.id ? ' · 正在玩' : ''}</small>
  <div class="lt-inline">${s.id === state.id ? '' : '<button type="button" class="menu_button" data-save="load">读取</button>'}<button type="button" class="menu_button" data-save="export">导出</button><button type="button" class="menu_button" data-save="del">删除</button></div>
</div>`).join('') || '<p class="lt-note">还没有存档。</p>';
}
$('#lt-list').addEventListener('click', async (e) => {
    const act = e.target.closest('[data-save]')?.dataset.save;
    const id = e.target.closest('.lt-save')?.dataset.id;
    if (!act || !id || state.busy) return;
    if (act === 'load') { await saveNow(); await openSave(await getSave(id)); }
    if (act === 'export') { if (id === state.id) await saveNow(); exportSave(await getSave(id)); }
    if (act === 'del') {
        if (!confirm('删掉这个存档？删了找不回来。')) return;
        await delSave(id);
        if (id === state.id) await newGame();
    }
    drawSaves();
});
$('#lt-new').addEventListener('click', async () => {
    if (state.busy || !confirm('新开一局？当前这局已经自动存好，随时可以在存档里读回来。')) return;
    await saveNow();
    await newGame();
    drawSaves();
});
function download(text, name, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name.replace(/[\\/:*?"<>|]/g, '_');
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
const stamp = () => new Date().toISOString().slice(0, 16).replace(/[T:]/g, '-');
// 导出成 SillyTavern 的聊天格式：第一行是聊天信息，往后一行一条消息
function exportSave(rec) {
    const head = { user_name: userName(), character_name: card.name, create_date: new Date(rec.created || Date.now()).toISOString(), chat_metadata: rec.meta || {} };
    download([head, ...rec.chat].map((x) => JSON.stringify(x)).join('\n'), `${card.name} - ${titleOf(rec.chat)} - ${stamp()}.jsonl`, 'application/jsonl');
}
$('#lt-export').addEventListener('click', async () => { await saveNow(); exportSave({ created: state.created, chat: state.chat, meta: state.meta }); });
// 备份全部：所有存档打成一个 JSON；恢复时按存档 id 合并，同一局留更新的那份
$('#lt-backup').addEventListener('click', async () => {
    await saveNow();
    const saves = await listSaves();
    download(JSON.stringify({ kind: 'watchdogs-london-backup', v: 1, at: Date.now(), saves }), `${card.name} - 全部存档 - ${stamp()}.json`, 'application/json');
    toast('success', `备份了 ${saves.length} 个存档`);
});
$('#lt-restore').addEventListener('click', () => $('#lt-bfile').click());
$('#lt-bfile').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file || state.busy) return;
    try {
        const data = JSON.parse(await file.text());
        const saves = (data?.kind === 'watchdogs-london-backup' ? data.saves : null)?.filter((r) => r?.id && Array.isArray(r.chat));
        if (!saves?.length) throw new Error('这不是本页导出的备份文件');
        let added = 0, kept = 0;
        for (const rec of saves) {
            const old = await getSave(rec.id);
            if (old && (old.updated || 0) >= (rec.updated || 0)) { kept++; continue; }
            await putSave(rec);
            added++;
        }
        if (saves.some((r) => r.id === state.id)) await openSave(await getSave(state.id));
        drawSaves();
        toast('success', `恢复了 ${added} 个存档${kept ? `，${kept} 个本机已有更新的版本，没动` : ''}`);
    } catch (err) { toast('error', '恢复失败：' + err.message); }
});
$('#lt-import').addEventListener('click', () => $('#lt-file').click());
$('#lt-file').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file || state.busy) return;
    try {
        const rows = (await file.text()).split('\n').map((l) => l.trim()).filter(Boolean).map((l) => JSON.parse(l));
        const head = rows[0] && !('mes' in rows[0]) ? rows.shift() : {};
        const chat = rows.filter((m) => typeof m.mes === 'string' && !m.is_system);
        if (!chat.length) throw new Error('文件里没有消息');
        await saveNow();
        await openSave({ id: 'wdl-' + Date.now(), created: Date.now(), chat, meta: head.chat_metadata || {} });
        await saveNow();
        drawSaves();
        toast('success', `导入了 ${chat.length} 条消息`);
    } catch (err) { toast('error', '导入失败：' + err.message); }
});

/* ------------------------------------------------------------
   开局与读档
   ------------------------------------------------------------ */
async function openSave(rec) {
    state.id = rec.id;
    state.created = rec.created || Date.now();
    state.chat = rec.chat;
    state.meta = rec.meta || {};
    settings.current = rec.id;
    saveSettings();
    renderChat();
    eventSource.emit(eventTypes.CHAT_CHANGED, state.id);
}
async function newGame() {
    await openSave({ id: 'wdl-' + Date.now(), created: Date.now(), chat: [game.firstMessage()], meta: {} });
    await saveNow();
}

const last = settings.current && await getSave(settings.current);
if (last) await openSave(last);
else await newGame();

// 阅读器：和角色卡里那份是同一份脚本，跑在隐藏的 iframe 里，parent 就是这一页
const frame = document.createElement('iframe');
frame.hidden = true;
frame.title = 'ctOS 阅读器';
frame.srcdoc = `<!doctype html><meta charset="utf-8"><script>window.SillyTavern = parent.SillyTavern;<\/script><script type="module" src="${new URL('data/reader.js', location.href).href}"><\/script>`;
document.body.append(frame);

/* ------------------------------------------------------------
   伦敦暗流 · 伴读原声
   ------------------------------------------------------------ */
const OST_TRACKS = [
    { tag: '机房算力', title: 'The Entity', artist: 'Lorne Balfe', ost: '《碟中谍7：致命清算》', id: '2059054982' },
    { tag: '静默潜入', title: 'The Heist', artist: 'Danny Elfman', ost: '《碟中谍1》', id: '473187110' },
    { tag: '街头追逐', title: 'Stairs and Rooftops', artist: 'Lorne Balfe', ost: '《碟中谍6：全面瓦解》', id: '1294165108' },
    { tag: '西敏雾夜', title: 'A Foggy Night in London', artist: 'Joe Kraemer', ost: '《碟中谍5：神秘国度》', id: '33728269' },
    { tag: '抵抗之声', title: 'Welcome to the Resistance', artist: 'Stephen Barton', ost: '《看门狗：军团》', id: '1803518592' },
    { tag: '南伦敦碎拍', title: 'Archangel', artist: 'Burial', ost: '《Untrue》', id: '16640371' },
    { tag: '冷战特工', title: 'Tinker Tailor Soldier Spy', artist: 'Alberto Iglesias', ost: '《锅匠，裁缝，士兵，间谍》', id: '990303' },
    { tag: '心跳监视', title: 'Bullets', artist: 'Archive', ost: '《Controlling Crowds》', id: '3884715' },
    { tag: '重装尾随', title: 'Angel', artist: 'Massive Attack', ost: '《Mezzanine》', id: '21252137' },
    { tag: '神经脉冲', title: 'Open Eye Signal', artist: 'Jon Hopkins', ost: '《Immunity》', id: '26321472' },
    { tag: '残破哀歌', title: 'Acid Rain', artist: 'Lorn', ost: '《The Maze To Nowhere》', id: '1497854235' },
    { tag: '泰晤士晨雾', title: 'November', artist: 'Max Richter', ost: '《Memoryhouse》', id: '16964075' },
    { tag: '屏幕冷光', title: 'Hand Covers Bruise', artist: 'Trent Reznor / Atticus Ross', ost: '《社交网络》', id: '1061850' },
    { tag: '白厅突围', title: 'Burn My Shadow', artist: 'UNKLE', ost: '《War Stories》', id: '21986980' },
];

function initOst() {
    const listEl = $('#lt-ost-list');
    if (!listEl) return;
    listEl.innerHTML = OST_TRACKS.map((t) => `
<div class="lt-ost-item">
  <span class="lt-ost-tag">${esc(t.tag)}</span>
  <div class="lt-ost-info">
    <b>${esc(t.title)}</b>
    <small>${esc(t.artist)} · ${esc(t.ost)}</small>
  </div>
  <a href="https://music.163.com/#/song?id=${esc(t.id)}" target="_blank" rel="noopener noreferrer" class="lt-ost-link">网易云 ↗</a>
</div>`).join('');

    const audio = $('#lt-audio');
    const urlInput = $('#lt-audio-url');
    const playBtn = $('#lt-audio-play');
    const stopBtn = $('#lt-audio-stop');
    const volInput = $('#lt-audio-vol');
    const statusEl = $('#lt-audio-status');

    settings.ost ??= { url: '', volume: 0.5 };
    urlInput.value = settings.ost.url || '';
    volInput.value = settings.ost.volume ?? 0.5;
    audio.volume = Number(volInput.value);

    urlInput.addEventListener('input', () => {
        settings.ost.url = urlInput.value.trim();
        saveSettings();
    });
    volInput.addEventListener('input', () => {
        audio.volume = Number(volInput.value);
        settings.ost.volume = audio.volume;
        saveSettings();
    });
    playBtn.addEventListener('click', async () => {
        const u = urlInput.value.trim();
        if (!u) { toast('warning', '请先贴入一个可播放的音频直链 URL'); return; }
        if (audio.src !== u) audio.src = u;
        if (audio.paused) {
            try {
                await audio.play();
                statusEl.textContent = '正在循环播放中…';
                statusEl.className = 'lt-note lt-gap lt-ok';
                playBtn.textContent = '暂停';
            } catch (e) {
                statusEl.textContent = '播放失败：' + e.message;
                statusEl.className = 'lt-note lt-gap lt-bad';
            }
        } else {
            audio.pause();
            statusEl.textContent = '已暂停';
            statusEl.className = 'lt-note lt-gap';
            playBtn.textContent = '播放';
        }
    });
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        statusEl.textContent = '已停止';
        statusEl.className = 'lt-note lt-gap';
        playBtn.textContent = '播放';
    });
}
initOst();

if (!apiReady()) openDrawer('lt-api');
