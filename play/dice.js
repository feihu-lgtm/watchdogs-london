// 跑团检定：玩家这一轮做了什么 → 裁判（一次很短的模型请求）挑技能和难度 → 前端按等级掷 d100 → 结果附在玩家这句话后面交给写作模型。
// 骰子结果存在玩家那条消息的 extra.check 上：重新生成沿用同一个结果，免得刷骰；导出的存档里也带着。

// 道尔顿的熟练程度 → 基础成功率
export const DALTON_BASE = { 生疏: 20, 熟练: 45, 精通: 65, 顶尖: 80, 母语: 90 };
// 天问一条线解锁到第几级 → 基础成功率；一级都没解锁就做不到，不掷骰
export const TIANWEN_BASE = [0, 50, 70, 85];
export const DIFFICULTY = { 简单: 20, 普通: 0, 困难: -20, 极难: -40 };

// 五档结果和交给写作模型的写法
export const OUTCOME = {
    大成功: '干得漂亮，比预想的还顺，可以多拿到一点意外的好处。',
    成功: '做成了。',
    代价成功: '做成了，但要付出一个具体的代价：暴露了行踪、受了点伤、耗掉了关键的时间，或者在别人的记录里留了痕，挑最贴合场面的一个写实。',
    失败: '没做成，局面往坏处推一步；对方不会因为道尔顿是主角就放他一马。',
    大失败: '失败，而且捅出一个新麻烦，让处境明显更糟。',
    做不到: '天问还没解锁这项本事，做不到；写她试了一下就碰壁，或者直接告诉道尔顿她现在办不到。',
};

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// 浏览器自带的密码学随机数，1 到 100 均匀分布（拒绝采样，避免取模偏差）
export function d100() {
    const buf = new Uint32Array(1);
    const limit = Math.floor(0x100000000 / 100) * 100;
    do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
    return (buf[0] % 100) + 1;
}

// 从变量里列出能检定的技能：道尔顿的技能和语言、天问每条技能线
export function skillsOf(stat, tianwenInfo = {}) {
    const out = [];
    const sk = stat?.['道尔顿']?.['技能'] ?? {};
    for (const [name, v] of Object.entries(sk)) {
        if (name === '语言') {
            for (const [lang, l] of Object.entries(v ?? {})) {
                const lv = l?.['熟练程度'];
                if (DALTON_BASE[lv] != null) out.push({ id: `道尔顿·语言·${lang}`, who: '道尔顿', level: lv, base: DALTON_BASE[lv], hint: l?.['说明'] || '' });
            }
            continue;
        }
        const lv = v?.['熟练程度'];
        if (DALTON_BASE[lv] == null) continue;
        out.push({ id: `道尔顿·${name}`, who: '道尔顿', level: lv, base: DALTON_BASE[lv], hint: [v?.['擅长'] && '擅长' + v['擅长'], v?.['限制'] && '限制' + v['限制']].filter(Boolean).join('；') });
    }
    const tree = stat?.['天之叩问']?.['技能树'] ?? {};
    for (const [branch, lines] of Object.entries(tree)) {
        for (const [line, tiers] of Object.entries(lines ?? {})) {
            if (!tiers || typeof tiers !== 'object') continue;
            const keys = Object.keys(tiers).filter((k) => /级_/.test(k));
            if (!keys.length) continue;
            const got = keys.filter((k) => tiers[k]?.['状态'] === '已解锁').length;
            const info = tianwenInfo?.[branch]?.[line]?.tiers ?? {};
            const now = got ? keys[got - 1] : '';
            const next = keys[got] ?? '';
            out.push({
                id: `天问·${line}`, who: '天问', branch, level: got ? `${got} 级` : '未解锁', base: TIANWEN_BASE[got] ?? 85,
                hint: [now && `已会：${info[now]?.['说明'] ?? now}`, next && `还不会：${info[next]?.['说明'] ?? next}`].filter(Boolean).join('；'),
            });
        }
    }
    return out;
}

// 交给裁判的提示词：只要一个 JSON
export function judgePrompt({ action, scene, skills, injuries }) {
    const list = skills.map((s) => `- ${s.id}（${s.level}）${s.hint ? '：' + s.hint : ''}`).join('\n');
    const system = `你是一场谍战跑团的裁判，只负责判断玩家这一轮的行动要不要掷骰检定。只回一个 JSON 对象，不要别的字。

要检定：结果不确定、失败有代价的行动，比如撬锁、潜入、跟踪、搏斗、开枪、飙车、说服或骗过一个有戒心的人、让天问入侵或操控设备。
不检定：闲聊、走路、吃饭、普通地看一眼、问问题、亲密互动、明摆着能做成或者根本不可能的事。

技能从下面的列表里挑最贴切的一个，照抄列表里的写法。行动交给天问做（入侵、看摄像头、叫车、关灯之类）就挑天问的那条线，没解锁也照样挑，前端会判她做不到。
难度只能是：简单、普通、困难、极难。
情境修正最多两条，每条在 -20 到 +20 之间，写清楚原因（伤势、趁手的工具、对方的警觉、时间紧不紧）；没有就给空数组。

要检定时回：{"check":true,"skill":"道尔顿·撬锁与开保险箱","difficulty":"困难","mods":[{"why":"左臂抬不过肩","v":-10}],"goal":"一句话说清检定的是什么"}
不检定时回：{"check":false}

可用技能：
${list}`;
    const user = `${injuries ? `道尔顿现在的身体：${injuries}\n\n` : ''}眼下的场面（上一段正文的结尾）：
${scene || '（开场）'}

玩家这一轮的行动：
${action}`;
    return [{ role: 'system', content: system }, { role: 'user', content: user }];
}

// 裁判的回答里抠出 JSON；推理模型可能先说一段话或者包在代码块里
export function parseJudge(text) {
    const m = String(text || '').match(/\{[\s\S]*\}/);
    if (!m) return null;
    try { return JSON.parse(m[0]); } catch { return null; }
}

// 按裁判的判断掷骰
export function resolve(judge, skills) {
    if (!judge?.check) return null;
    const want = String(judge.skill || '').trim();
    const s = skills.find((x) => x.id === want)
        ?? skills.find((x) => want && (x.id.endsWith('·' + want) || want.endsWith(x.id.split('·').pop())));
    if (!s) return null;
    const difficulty = DIFFICULTY[judge.difficulty] != null ? judge.difficulty : '普通';
    const mods = (Array.isArray(judge.mods) ? judge.mods : []).slice(0, 2)
        .map((m) => ({ why: String(m?.why || '').slice(0, 30), v: clamp(Math.round(Number(m?.v) || 0), -20, 20) }))
        .filter((m) => m.v);
    const base = { skill: s.id, who: s.who, level: s.level, difficulty, mods, goal: String(judge.goal || '').slice(0, 60), t: Date.now() };
    if (s.who === '天问' && !s.base) return { ...base, base: 0, target: 0, roll: null, result: '做不到' };
    const target = clamp(s.base + DIFFICULTY[difficulty] + mods.reduce((a, m) => a + m.v, 0), 5, 95);
    const roll = d100();
    const result = roll >= 96 ? '大失败'
        : roll <= Math.max(1, Math.floor(target / 5)) ? '大成功'
        : roll <= target ? '成功'
        : roll <= target + 10 ? '代价成功'
        : '失败';
    return { ...base, base: s.base, target, roll, result };
}

// 附在玩家这句话后面的那一段，写作模型照这个写
export function noteOf(c) {
    const mods = c.mods?.length ? '，' + c.mods.map((m) => `${m.why} ${m.v > 0 ? '+' : ''}${m.v}`).join('，') : '';
    const head = c.result === '做不到'
        ? `技能：${c.skill}（未解锁）`
        : `技能：${c.skill}（${c.level}）　难度：${c.difficulty}${mods}　成功率 ${c.target}%　掷出 ${c.roll}`;
    return `<检定 说明="前端已经掷过骰，结果定了">
行动：${c.goal || '这一轮的行动'}
${head}
结果：${c.result}。${OUTCOME[c.result]}
正文照这个结果写出过程和后果，不改判，不重掷；正文里不要出现"检定""掷骰"和这些数字。
</检定>`;
}

// 玩家消息下面那张检定卡
export function cardHtml(c) {
    const cls = { 大成功: 'crit', 成功: 'ok', 代价成功: 'cost', 失败: 'fail', 大失败: 'fumble', 做不到: 'na' }[c.result] || '';
    const mods = c.mods?.length ? c.mods.map((m) => `<span>${esc(m.why)} <b>${m.v > 0 ? '+' : ''}${m.v}</b></span>`).join('') : '';
    const bar = c.roll == null ? '' : `
  <div class="lt-ck-bar" style="--t:${c.target}%;--r:${c.roll}%"><i class="zone"></i><i class="cost"></i><i class="mark"></i></div>`;
    return `<div class="lt-check ${cls}" data-result="${esc(c.result)}">
  <div class="lt-ck-head"><span class="lt-ck-tag">CHECK</span><span class="lt-ck-skill">${esc(c.skill)}</span><span class="lt-ck-lv">${esc(c.level)}</span></div>
  ${c.goal ? `<div class="lt-ck-goal">${esc(c.goal)}</div>` : ''}
  <div class="lt-ck-body">
    <div class="lt-ck-meta"><span>难度 <b>${esc(c.difficulty)}</b></span>${c.roll == null ? '' : `<span>成功率 <b>${c.target}%</b></span>`}${mods}</div>
    <div class="lt-ck-roll"><em data-roll="${c.roll ?? ''}">${c.roll == null ? '—' : String(c.roll).padStart(2, '0')}</em><strong>${esc(c.result)}</strong></div>
  </div>${bar}
</div>`;
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
