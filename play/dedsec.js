// DedSec 粉丝、成就、手气统计和 DalPost。
// 粉丝和成就不单独记账，每次都从整局聊天重新算一遍：检定结果在玩家消息的 extra.check 上，变量在每条回复的 variables 上，
// 帖子在回复的 posts[swipe_id] 上。这样重新生成、左右翻版、删楼以后数字自己就对了，也刷不出来。

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (n) => Number(n || 0).toLocaleString('en-US');
const get = (o, ...ks) => ks.reduce((x, k) => x?.[k], o);

// 一次检定、一件事各给多少粉丝
const CHECK_FANS = { 大成功: 400, 成功: 120, 代价成功: 60, 失败: 15, 大失败: 250, 做不到: 0 };
const EVENT_FANS = { node: 5000, block: 600, step: 2000, done: 15000, threat: 8000, body: 3000 };
export const MILESTONES = [0, 1000, 5000, 20000, 50000, 100000, 250000, 500000, 1000000, 2000000, 5000000, 10000000];

export const BADGES = [
    { id: 'roll', icon: '🎲', name: '命运的骰子', desc: '第一次掷骰检定' },
    { id: 'lockcrit', icon: '🔓', name: '发卡就是万能钥匙', desc: '撬锁大成功' },
    { id: 'guncrit', icon: '🎯', name: '独行杀手', desc: '手枪射击大成功' },
    { id: 'twocrit', icon: '✨', name: '天选之人', desc: '连着两次大成功' },
    { id: 'longshot', icon: '🪙', name: '以小博大', desc: '成功率不到 25% 也做成了' },
    { id: 'surefail', icon: '🫠', name: '这都能失败？', desc: '成功率 85% 以上还是失败了' },
    { id: 'fumble3', icon: '🌊', name: '泰晤士河欢迎你', desc: '连着三次大失败' },
    { id: 'na', icon: '🙅', name: '她还不会', desc: '让天问干了一件她还没解锁的事' },
    { id: 'roll50', icon: '📈', name: '老骰棍', desc: '一局掷骰满 50 次' },
    { id: 'node', icon: '🖥️', name: '第一次黑进机房', desc: '拿下一区机房的节点证书' },
    { id: 'block', icon: '📦', name: '街区亮了', desc: '第一次打开街区数据机箱' },
    { id: 'allnodes', icon: '🌐', name: '八区通明', desc: '八个区的机房全部黑入' },
    { id: 'opstart', icon: '🗂️', name: '入局', desc: '第一次启动一条主线' },
    { id: 'opdone', icon: '🏁', name: '收官', desc: '走通一条主线' },
    { id: 'body', icon: '🦾', name: '她有了脚', desc: '天问拿到一具身体' },
    { id: 'zeroday', icon: '☠️', name: '能碰零日', desc: '累计算力点到 75' },
    { id: 'bond', icon: '🫀', name: '生死与共', desc: '天问的好感到 80' },
    { id: 'post', icon: '📣', name: '第一条 DalPost', desc: '发出第一条帖子' },
    { id: 'viral', icon: '🔥', name: '上了热搜', desc: '一条帖子点赞过万' },
    { id: 'f1k', icon: '♥', name: '初露锋芒', desc: '粉丝过 1,000' },
    { id: 'f10k', icon: '♥', name: '万粉', desc: '粉丝过 10,000' },
    { id: 'f100k', icon: '♥', name: '十万个为什么', desc: '粉丝过 100,000' },
    { id: 'f1m', icon: '💀', name: '百万 DedSec', desc: '粉丝过 1,000,000' },
];

const OK = new Set(['大成功', '成功', '代价成功']);

// 整局算一遍：粉丝总数、每一笔来路、解锁了哪些成就（记着在第几楼解锁）、所有检定
export function tally(chat) {
    let total = 0, prev = null, run = { crit: 0, fumble: 0 };
    const gains = [], checks = [], posts = [], got = new Map();
    const unlock = (id, mid) => { if (!got.has(id)) got.set(id, mid); };
    const add = (mid, n, why) => { if (!n) return; total += n; gains.push({ mid, n, why }); };
    chat.forEach((m, i) => {
        if (m.is_user) {
            const c = m.extra?.check;
            if (!c?.result) return;
            checks.push({ ...c, mid: i });
            add(i, CHECK_FANS[c.result] ?? 0, `${c.result} · ${c.skill}`);
            unlock('roll', i);
            if (c.result === '大成功' && /撬锁/.test(c.skill)) unlock('lockcrit', i);
            if (c.result === '大成功' && /射击/.test(c.skill)) unlock('guncrit', i);
            if (c.result === '做不到') unlock('na', i);
            if (OK.has(c.result) && c.target <= 25) unlock('longshot', i);
            if (!OK.has(c.result) && c.result !== '做不到' && c.target >= 85) unlock('surefail', i);
            run.crit = c.result === '大成功' ? run.crit + 1 : 0;
            run.fumble = c.result === '大失败' ? run.fumble + 1 : 0;
            if (run.crit >= 2) unlock('twocrit', i);
            if (run.fumble >= 3) unlock('fumble3', i);
            if (checks.length >= 50) unlock('roll50', i);
        } else {
            const sid = m.swipe_id ?? 0;
            const s = m.variables?.[sid]?.stat_data;
            const p = m.posts?.[sid];
            if (p?.text) {
                posts.push({ ...p, mid: i });
                add(i, p.fans, 'DalPost');
                unlock('post', i);
                if (p.likes >= 10000) unlock('viral', i);
            }
            if (!s) return;
            if (prev && i > 0) {
                const nodes = Object.entries(s['区域机房'] ?? {}).filter(([k, v]) => v === '已黑入' && get(prev, '区域机房', k) !== '已黑入');
                for (const [k] of nodes) { add(i, EVENT_FANS.node, `黑入${k}机房`); unlock('node', i); }
                const blocks = Object.keys(s['已开街区'] ?? {}).filter((k) => !(k in (prev['已开街区'] ?? {})));
                for (const k of blocks) { add(i, EVENT_FANS.block, `打开街区·${k}`); unlock('block', i); }
                const st = Number(get(s, '主线', '进度')) || 0, ps = Number(get(prev, '主线', '进度')) || 0;
                if (get(s, '主线', '当前') !== '无' && get(prev, '主线', '当前') === '无') unlock('opstart', i);
                if (st > ps) add(i, EVENT_FANS.step * (st - ps), `主线推进 · ${get(s, '主线', '当前')}`);
                for (const k of Object.keys(get(s, '主线', '已完成') ?? {}).filter((k) => !(k in (get(prev, '主线', '已完成') ?? {})))) {
                    add(i, EVENT_FANS.done, `走通 · ${k}`); unlock('opdone', i);
                }
                const lv = Number(get(s, '世界局势', '等级')) || 1, pl = Number(get(prev, '世界局势', '等级')) || 1;
                if (lv > pl) add(i, EVENT_FANS.threat * (lv - pl), `局势升到 ${get(s, '世界局势', '名称')}`);
                if (get(s, '天之叩问', '身体', '有无身体') === '有' && get(prev, '天之叩问', '身体', '有无身体') !== '有') add(i, EVENT_FANS.body, '天问有了身体');
                const cp = (Number(get(s, '天之叩问', '基本', '累计算力点')) || 0) - (Number(get(prev, '天之叩问', '基本', '累计算力点')) || 0);
                if (cp > 0) add(i, cp * 50, `算力到账 +${cp}`);
            }
            // 开局就满足的也算（比如无敌模式），只是不给粉丝
            if (Object.values(s['区域机房'] ?? {}).length && Object.values(s['区域机房']).every((v) => v === '已黑入')) unlock('allnodes', i);
            if (get(s, '天之叩问', '身体', '有无身体') === '有') unlock('body', i);
            if ((Number(get(s, '天之叩问', '基本', '累计算力点')) || 0) >= 75) unlock('zeroday', i);
            if ((Number(get(s, '天之叩问', '基本', '好感度')) || 0) >= 80) unlock('bond', i);
            prev = s;
        }
        for (const [id, n] of [['f1k', 1e3], ['f10k', 1e4], ['f100k', 1e5], ['f1m', 1e6]]) if (total >= n) unlock(id, i);
    });
    return { total, gains, checks, posts, got };
}

export function level(total) {
    let i = MILESTONES.findIndex((m) => total < m);
    if (i < 0) i = MILESTONES.length;
    const lo = MILESTONES[i - 1] ?? 0, hi = MILESTONES[i] ?? lo;
    return { lv: i, lo, hi, pct: hi > lo ? (total - lo) / (hi - lo) : 1 };
}

/* ---------- 手气 ---------- */
export function luck(checks) {
    const rolled = checks.filter((c) => c.roll != null);
    const n = rolled.length;
    const count = {};
    for (const c of checks) count[c.result] = (count[c.result] || 0) + 1;
    // 每次检定做成（含代价成功）的概率：掷出 ≤ 成功率 + 10，且不到 96
    const ps = rolled.map((c) => Math.min(c.target + 10, 95) / 100);
    const expect = ps.reduce((a, p) => a + p, 0);
    const actual = rolled.filter((c) => OK.has(c.result)).length;
    const sd = Math.sqrt(ps.reduce((a, p) => a + p * (1 - p), 0)) || 1;
    const z = n ? (actual - expect) / sd : 0;
    const verdict = !n ? '还没掷过' : n < 5 ? '还看不出来' : z >= 1.5 ? '欧皇附体' : z >= 0.5 ? '手气不错' : z > -0.5 ? '平平无奇' : z > -1.5 ? '有点黑' : '非酋本酋';
    let best = 0, worst = 0, a = 0, b = 0;
    for (const c of rolled) {
        if (OK.has(c.result)) { a++; b = 0; } else { b++; a = 0; }
        best = Math.max(best, a); worst = Math.max(worst, b);
    }
    const skills = {};
    for (const c of checks) skills[c.skill] = (skills[c.skill] || 0) + 1;
    const top = Object.entries(skills).sort((x, y) => y[1] - x[1]).slice(0, 3);
    const avg = n ? rolled.reduce((s, c) => s + c.roll, 0) / n : 0;
    return { n: checks.length, rolled: n, count, expect, actual, z, verdict, best, worst, top, avg, recent: checks.slice(-30) };
}

/* ---------- DalPost ---------- */
export const RATINGS = {
    正经: '内容干净，像真实的匿名爆料、街头见闻或者日常吐槽，不涉及性。',
    擦边: '可以暧昧、调情、擦边、开点带颜色的玩笑，点到为止，不写露骨的性。',
    ghs: '尺度放开，可以写成人向的露骨调侃和颜色内容，网友评论也可以跟着起哄；只涉及成年角色。',
};
export const AUTHORS = {
    道尔顿: { name: '泰晤士河0441', handle: '@thames_0441', av: '0441', persona: '道尔顿本人用匿名小号发帖。他在官方记录里已经死了，说话克制、体面、带英式冷幽默，偶尔夹一句俄语或德语；绝不露真名、真实住处和下一步计划。' },
    天问: { name: '天问', handle: '@tianwen_best_model', av: '天', persona: '天问替道尔顿代发，用她自己的口吻：傲娇、嘴硬心软、认定自己是全伦敦最好的模型，会顺手吐槽道尔顿、夸自己；发之前替他把能被 ctOS 追查的细节都抹掉了。' },
};

export function postPrompt({ text, head, check, fans, author, style, rating }) {
    const a = AUTHORS[author] ?? AUTHORS.天问;
    const system = `你是社交平台 DalPost 上一个账号的代笔。DalPost 是二〇二九年伦敦地下流传的匿名社交平台，DedSec 的粉丝都在上面；ctOS 和阿尔比恩也在看，所以帖子里不出现真名、真实地址和行动计划。

账号：${a.name}（${a.handle}），现有粉丝 ${fans}。
${a.persona}
尺度：${RATINGS[rating] ?? RATINGS.正经}
${style ? `玩家对这条帖子的要求：${style}\n` : ''}
根据这一段剧情写一条帖子，只回一个 JSON 对象，不要别的字：
{"text":"帖子正文，140 字以内，可以带 emoji","tags":["#话题", "最多四个"],"comments":[{"user":"@网友昵称","text":"评论"}],"hype":1到10的整数}
comments 写三到四条路人网友的评论，口吻各不相同，有起哄的、有阴阳怪气的、有 DedSec 老粉。hype 是你估计这条帖子会有多火。`;
    const user = `${head ? `页眉：${head}\n` : ''}${check ? `这一轮的检定：${check.skill}，${check.result}\n` : ''}剧情：
${text}`;
    return [{ role: 'system', content: system }, { role: 'user', content: user }];
}

export function parsePost(raw) {
    const m = String(raw || '').match(/\{[\s\S]*\}/);
    if (!m) return null;
    try {
        const j = JSON.parse(m[0]);
        if (!j?.text) return null;
        return {
            text: String(j.text).slice(0, 400),
            tags: (Array.isArray(j.tags) ? j.tags : []).slice(0, 4).map((t) => '#' + String(t).replace(/^#+/, '').slice(0, 20)),
            comments: (Array.isArray(j.comments) ? j.comments : []).slice(0, 4).map((c) => ({ user: String(c?.user || '@路人').slice(0, 24), text: String(c?.text || '').slice(0, 120) })).filter((c) => c.text),
            hype: Math.min(10, Math.max(1, Math.round(Number(j.hype) || 5))),
        };
    } catch { return null; }
}

// 点赞、转发和涨粉由前端按现有粉丝、热度和一点运气算，模型只管写
export function engage(post, fans, bonus = 1) {
    const r = 0.7 + Math.random() * 0.6;
    const likes = Math.round((fans * 0.08 + 180) * (0.4 + post.hype / 10) * r * bonus);
    return { ...post, likes, reposts: Math.round(likes * (0.08 + Math.random() * 0.1)), fans: Math.round(likes * 0.25) };
}

const tagged = (s) => esc(s).replace(/(#[^\s#，。！？,.!?]+)/g, '<i>$1</i>').replace(/\n/g, '<br>');
export function postHtml(p, { mid, head } = {}) {
    const a = AUTHORS[p.author] ?? AUTHORS.天问;
    const time = (head || '').split(/\s*·\s*/).pop() || '';
    return `<div class="lt-post r-${esc(p.rating || '正经')}"${mid != null ? ` data-mid="${mid}"` : ''}>
  <div class="lt-post-head"><span class="lt-post-av">${esc(a.av)}</span><div class="lt-post-who"><b>${esc(a.name)}<svg viewBox="0 0 13 13" aria-hidden="true"><path d="M3 1h7v1h1v5h-1v2H9v2H4V9H3V7H2V2h1zM4 4v2h2V4zm3 0v2h2V4zM6 7v1h1V7z" fill="currentColor"/></svg></b><small>${esc(a.handle)}${time ? ' · ' + esc(time) : ''}</small></div><span class="lt-post-brand">DalPost</span></div>
  <div class="lt-post-text">${tagged(p.text)}</div>
  ${p.tags?.length ? `<div class="lt-post-tags">${p.tags.map((t) => `<i>${esc(t)}</i>`).join(' ')}</div>` : ''}
  <div class="lt-post-meta"><span>♥ ${fmt(p.likes)}</span><span>⇄ ${fmt(p.reposts)}</span><span>💬 ${p.comments?.length || 0}</span><span class="lt-post-gain">+${fmt(p.fans)} 粉丝</span>${p.rating && p.rating !== '正经' ? `<span class="lt-post-r">${esc(p.rating)}</span>` : ''}</div>
  ${p.comments?.length ? `<div class="lt-post-cmts">${p.comments.map((c) => `<div><b>${esc(c.user)}</b>${esc(c.text)}</div>`).join('')}</div>` : ''}
  ${mid != null ? `<div class="lt-post-act"><button type="button" data-post="redo">重发</button><button type="button" data-post="del">删帖</button></div>` : ''}
</div>`;
}

/* ---------- 面板 ---------- */
export function heartBar(t) {
    const L = level(t.total);
    return `<div class="lt-fans">
  <div class="lt-fans-top"><span class="lt-fans-heart">♥</span><div><small>DEDSEC 粉丝</small><b>${fmt(t.total)}</b></div><span class="lt-fans-lv">LV ${L.lv}</span></div>
  <div class="lt-fans-bar"><i style="width:${(L.pct * 100).toFixed(1)}%"></i></div>
  <div class="lt-fans-next"><span>${fmt(L.lo)}</span><span>下一档 ${fmt(L.hi)}</span></div>
</div>`;
}

export function panelHtml(t, tab) {
    const tabs = [['fans', '粉丝'], ['badge', `成就 ${t.got.size}/${BADGES.length}`], ['luck', '手气'], ['post', 'DalPost']]
        .map(([k, n]) => `<button type="button" class="${k === tab ? 'on' : ''}" data-ds-tab="${k}">${n}</button>`).join('');
    let body = '';
    if (tab === 'fans') {
        const recent = t.gains.slice(-14).reverse();
        body = `<p class="lt-note">黑机房、开街区、推主线、掷出漂亮的骰子、发 DalPost 都会涨粉。大失败也涨：翻车最好看。</p>
<div class="lt-fans-log">${recent.map((g) => `<div><span>${esc(g.why)}</span><b>+${fmt(g.n)}</b></div>`).join('') || '<p class="lt-note">还没有粉丝。去干点什么吧。</p>'}</div>`;
    } else if (tab === 'badge') {
        body = `<div class="lt-badges">${BADGES.map((b) => {
            const on = t.got.has(b.id);
            return `<div class="lt-badge${on ? ' on' : ''}" title="${esc(b.desc)}"><span>${on ? b.icon : '?'}</span><b>${esc(b.name)}</b><small>${esc(b.desc)}${on ? ` · 第 ${t.got.get(b.id)} 楼` : ''}</small></div>`;
        }).join('')}</div>`;
    } else if (tab === 'luck') {
        const L = luck(t.checks);
        const order = ['大成功', '成功', '代价成功', '失败', '大失败', '做不到'];
        const max = Math.max(1, ...order.map((k) => L.count[k] || 0));
        const cls = { 大成功: 'crit', 成功: 'ok', 代价成功: 'cost', 失败: 'fail', 大失败: 'fumble', 做不到: 'na' };
        body = L.n ? `<div class="lt-luck-head"><b>${esc(L.verdict)}</b><small>${L.rolled} 次掷骰 · 做成 ${L.actual} 次，按成功率该做成 ${L.expect.toFixed(1)} 次 · 平均掷出 ${L.avg.toFixed(1)}</small></div>
<div class="lt-luck-bars">${order.map((k) => `<div class="${cls[k]}"><span>${k}</span><i style="width:${((L.count[k] || 0) / max) * 100}%"></i><b>${L.count[k] || 0}</b></div>`).join('')}</div>
<div class="lt-luck-facts"><div><small>最长连成</small><b>${L.best}</b></div><div><small>最长连败</small><b>${L.worst}</b></div><div><small>最常用</small><b>${esc(L.top[0]?.[0]?.split('·').pop() || '—')}</b></div></div>
<h4>最近 ${L.recent.length} 次</h4>
<div class="lt-luck-recent">${L.recent.map((c) => `<span class="${cls[c.result] || ''}" title="${esc(`${c.skill} · ${c.result}${c.roll != null ? ` · 掷出 ${c.roll} / ${c.target}` : ''}`)}">${c.roll == null ? '—' : String(c.roll).padStart(2, '0')}</span>`).join('')}</div>` : '<p class="lt-note">这一局还没掷过骰。打开“检定”里的跑团检定，做点有风险的事。</p>';
    } else {
        body = `<div class="lt-post-cfg">
  <label class="checkbox_label"><input type="checkbox" data-pc="auto"><span>每轮回复写完自动发一条</span></label>
  <div class="lt-row"><span>谁来发</span><select class="text_pole" data-pc="author"><option value="天问">天问代发</option><option value="道尔顿">道尔顿本人（匿名小号）</option></select></div>
  <div class="lt-row"><span>尺度</span><select class="text_pole" data-pc="rating"><option value="正经">正经</option><option value="擦边">擦边</option><option value="ghs">ghs</option></select></div>
  <div class="lt-row"><span>文风/要求</span><input class="text_pole" data-pc="style" placeholder="比如：像 BBC 快讯；多用 emoji；写成一首打油诗"></div>
  <div class="lt-row"><span>发帖模型</span><input class="text_pole" data-pc="model" list="lt-models" placeholder="空着就用检定的裁判模型，再空就用主模型"></div>
  <div class="lt-inline"><button type="button" class="menu_button" data-post="now">给最新一轮发一条</button></div>
  <p class="lt-note">每条帖子是一次额外的短请求。帖子只是 DalPost 上的事，不会写回剧情。回复右上角的 # 按钮也能单独给那一轮发。</p>
</div>
<div class="lt-feed">${t.posts.slice().reverse().map((p) => postHtml(p, { head: p.head })).join('') || '<p class="lt-note">还没发过帖子。</p>'}</div>`;
    }
    return `${heartBar(t)}<div class="lt-ds-tabs">${tabs}</div><div class="lt-ds-body">${body}</div>`;
}
