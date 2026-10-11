// 环境氛围：按最近一个页眉的时间和地点给整页罩一层色（深夜偏蓝、黄昏偏橙），正文写到下雨就飘一层雨丝。
// 雨声和城市底噪用 WebAudio 现场合成，不带任何音频文件，和原声面板里那条直链各放各的，叠在一起听。
// 色层和雨丝都是 pointer-events: none 的固定层，盖在全屏阅读器上面也不挡点击。

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// 时段：色层用 color 混合（只改色相不改明暗），光晕用 screen 混合往边上透一点光
const BANDS = [
    { to: 5, name: '深夜', grade: '#3552d6', op: 0.24, glow: 'radial-gradient(120% 70% at 50% -10%, rgba(70,100,220,.16), transparent 70%)' },
    { to: 7, name: '黎明', grade: '#a98bd0', op: 0.14, glow: 'radial-gradient(120% 60% at 50% 110%, rgba(255,170,150,.10), transparent 70%)' },
    { to: 12, name: '上午', grade: '#b9c8d6', op: 0.07, glow: 'none' },
    { to: 17, name: '下午', grade: '#d9c9a2', op: 0.08, glow: 'none' },
    { to: 20, name: '黄昏', grade: '#ff8434', op: 0.22, glow: 'radial-gradient(130% 70% at 50% 115%, rgba(255,120,40,.16), transparent 70%)' },
    { to: 24, name: '夜', grade: '#4760d6', op: 0.19, glow: 'radial-gradient(120% 70% at 50% -10%, rgba(80,110,230,.11), transparent 70%)' },
];
const WORD_HOUR = [[/深夜|凌晨|午夜|半夜/, 2], [/清晨|黎明|拂晓|天刚亮|破晓/, 6], [/早上|早晨|上午/, 9], [/中午|正午|午后/, 13],
    [/下午/, 15], [/傍晚|黄昏|日落|薄暮/, 18], [/晚上|入夜|夜里|夜晚/, 21]];
const PLACES = [
    { key: 'under', name: '地下', re: /地下|机房|隧道|地铁|暗渠|下水|煤窖|车库|金库|防空洞|水底|河底|水下/ },
    { key: 'bar', name: '酒吧', re: /酒吧|夜店|包间|俱乐部|舞厅|吧台/ },
    { key: 'river', name: '河边', re: /泰晤士|河畔|河边|码头|桥上|桥头|堤岸|船/ },
    { key: 'in', name: '室内', re: /室|屋|厅|房间|卧室|公寓|书房|厨房|病房|办公|店里|楼上|楼下|工坊/ },
];

// 最近一个页眉；没有页眉的回复沿用更早那条的
function lastHeader(chat) {
    for (let i = chat.length - 1; i >= 0; i--) {
        const m = chat[i];
        if (m.is_user) continue;
        const hs = [...String(m.mes || '').matchAll(/^\s*@\s*(.+)$/gm)];
        if (hs.length) return { text: hs.pop()[1].trim(), mid: i };
    }
    return null;
}
function hourOf(head) {
    const t = [...head.matchAll(/(\d{1,2})\s*[:：]\s*(\d{2})/g)].pop();
    if (t) return clamp(Number(t[1]), 0, 23) + Number(t[2]) / 60;
    for (const [re, h] of WORD_HOUR) if (re.test(head)) return h;
    return null;
}
const clean = (t) => String(t || '').replace(/<(UpdateVariable|think|thinking)[\s\S]*?<\/\1>/gi, '');
const norm = (t) => String(t || '').replace(/\s+/g, '');
// 阅读器正在看的那一页的页眉：在聊天里找到它，取它到下一个页眉之间的正文
function findHeader(chat, want) {
    const w = norm(want);
    for (let i = chat.length - 1; i >= 0; i--) {
        if (chat[i].is_user) continue;
        const t = clean(chat[i].mes);
        const hs = [...t.matchAll(/^\s*@\s*(.+)$/gm)].reverse();
        const h = hs.find((x) => norm(x[1]) === w);
        if (!h) continue;
        const rest = t.slice(h.index + h[0].length);
        const next = rest.search(/^\s*@\s*.+$/m);
        return { text: h[1].trim(), seg: h[0] + (next < 0 ? rest : rest.slice(0, next)) };
    }
    return null;
}
// 天气默认看最新一条回复在最后一个页眉之后的那段正文：写到雨就下，写到雨停就停
function weatherOf(chat, seg) {
    let t = seg;
    if (t == null) {
        const m = [...chat].reverse().find((x) => !x.is_user);
        if (!m) return { rain: 0, fog: false };
        t = clean(m.mes);
        const at = t.search(/^\s*@\s*.+$/m) >= 0 ? t.lastIndexOf('\n@') : -1;
        if (at >= 0) t = t.slice(at);
    }
    const heavy = /暴雨|大雨|倾盆|瓢泼|雨势|雷雨/;
    const light = /雨丝|细雨|小雨|下雨|雨点|雨水|冒雨|淋雨|雨里|雨中|雨夜|雨声|毛毛雨|雨幕|雨珠|落雨|雨雾|雨滴|阵雨/;
    const stop = /雨停|雨歇|雨住|不下雨|雨已经停|放晴/;
    const last = (re) => { let i = -1; for (const mm of t.matchAll(new RegExp(re.source, 'g'))) i = mm.index; return i; };
    const r = Math.max(last(heavy), last(light));
    const h = last(heavy);
    const rain = r < 0 || last(stop) > r ? 0 : h >= 0 && h >= last(light) - 200 ? 2 : 1;
    return { rain, fog: /雾/.test(t) };
}

export function readScene(chat, want) {
    let head = lastHeader(chat), seg;
    const hit = want ? findHeader(chat, want) : null;
    if (hit) { head = { text: hit.text }; seg = hit.seg; }
    const hour = head ? hourOf(head.text) : null;
    const place = head ? PLACES.find((p) => p.re.test(head.text)) ?? null : null;
    const w = weatherOf(chat, seg);
    // 地下听不见也看不见雨；室内看得见窗外的雨，雨丝淡一半
    if (place?.key === 'under') w.rain = 0;
    return { head: head?.text ?? '', hour, band: hour == null ? null : BANDS.find((b) => hour < b.to), place, ...w };
}

export function createAmbience({ settings, save, mount }) {
    const cfg = settings.amb = { tint: true, rain: true, rainSound: false, city: false, vol: 0.5, ...settings.amb };
    const still = matchMedia('(prefers-reduced-motion: reduce)');

    /* ---------- 画面 ---------- */
    const grade = document.createElement('div');
    grade.id = 'lt-amb-grade';
    const glow = document.createElement('div');
    glow.id = 'lt-amb-glow';
    const canvas = document.createElement('canvas');
    canvas.id = 'lt-amb-rain';
    document.body.append(grade, glow, canvas);
    const g = canvas.getContext('2d');
    let scene = readScene([]);
    let drops = [], raf = 0, W = 0, H = 0, dpr = 1;

    function size() {
        dpr = Math.min(1.5, devicePixelRatio || 1);
        W = innerWidth; H = innerHeight;
        canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        seed();
    }
    function seed() {
        const n = scene.rain ? Math.round((scene.rain === 2 ? 240 : 90) * (W * H) / (1280 * 800) * (scene.place?.key === 'in' ? 0.5 : 1)) : 0;
        drops = Array.from({ length: clamp(n, 0, 400) }, () => drop(true));
    }
    function drop(anywhere) {
        const heavy = scene.rain === 2;
        return { x: Math.random() * (W + 200) - 100, y: anywhere ? Math.random() * H : -20 - Math.random() * 80,
            l: (heavy ? 18 : 10) + Math.random() * (heavy ? 22 : 12), v: (heavy ? 900 : 520) + Math.random() * 300, a: 0.08 + Math.random() * (heavy ? 0.22 : 0.16) };
    }
    let lastT = 0;
    function frame(t) {
        raf = 0;
        const dt = Math.min(0.05, (t - (lastT || t)) / 1000);
        lastT = t;
        g.clearRect(0, 0, W, H);
        const slant = 0.18;
        g.lineWidth = 1;
        for (const d of drops) {
            d.y += d.v * dt; d.x += d.v * dt * slant;
            if (d.y - d.l > H) Object.assign(d, drop(false));
            g.strokeStyle = `rgba(205,218,238,${d.a})`;
            g.beginPath(); g.moveTo(d.x, d.y); g.lineTo(d.x - d.l * slant, d.y - d.l); g.stroke();
        }
        if (drops.length && !document.hidden) raf = requestAnimationFrame(frame);
    }
    function paint() {
        const b = scene.band;
        const on = cfg.tint && b;
        let col = b?.grade ?? '#000', op = b?.op ?? 0;
        if (scene.rain) op += 0.04;
        grade.style.background = col;
        grade.style.opacity = on ? String(op) : '0';
        const glows = [];
        if (on && b.glow !== 'none') glows.push(b.glow);
        if (on && scene.place?.key === 'under') glows.push('radial-gradient(100% 80% at 50% 50%, transparent 40%, rgba(40,200,170,.08))');
        if (on && scene.place?.key === 'bar') glows.push('radial-gradient(90% 60% at 80% 100%, rgba(224,54,155,.10), transparent 70%)');
        if (on && scene.fog) glows.push('linear-gradient(rgba(190,200,212,.05), rgba(190,200,212,.09))');
        glow.style.background = glows.join(',') || 'none';
        glow.style.opacity = glows.length ? '1' : '0';
        const rainOn = cfg.rain && scene.rain && !still.matches;
        canvas.style.opacity = rainOn ? '1' : '0';
        if (rainOn) { if (!drops.length) seed(); if (!raf) { lastT = 0; raf = requestAnimationFrame(frame); } }
        else { drops = []; cancelAnimationFrame(raf); raf = 0; g.clearRect(0, 0, W, H); }
    }
    addEventListener('resize', () => { size(); paint(); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden && drops.length && !raf) { lastT = 0; raf = requestAnimationFrame(frame); } sound(); });
    size();

    /* ---------- 声音：雨声是滤过的白噪声加零星雨点，城市底噪是低频车流、远处一阵阵的车声和很偶尔的警笛 ---------- */
    let ac = null, nodes = null, sirenTimer = 0, idleTimer = 0;
    function noiseBuffer(ctx) {
        const len = ctx.sampleRate * 4, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        return buf;
    }
    function src(ctx, buf) { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; s.loopStart = Math.random(); s.start(0, Math.random() * 3); return s; }
    function filt(ctx, type, f, q = 0.7) { const x = ctx.createBiquadFilter(); x.type = type; x.frequency.value = f; x.Q.value = q; return x; }
    function build() {
        ac = new (window.AudioContext || window.webkitAudioContext)();
        const buf = noiseBuffer(ac);
        const master = ac.createGain(); master.gain.value = cfg.vol; master.connect(ac.destination);
        const muffle = filt(ac, 'lowpass', 18000); muffle.connect(master);
        // 雨
        const rain = ac.createGain(); rain.gain.value = 0; rain.connect(muffle);
        src(ac, buf).connect(filt(ac, 'highpass', 500)).connect(filt(ac, 'lowpass', 7000)).connect(rain);
        const patter = ac.createGain(); patter.gain.value = 0.35;
        src(ac, buf).connect(filt(ac, 'bandpass', 2600, 1.4)).connect(patter).connect(rain);
        const drip = ac.createGain(); drip.gain.value = 0; drip.connect(rain);
        const dripSrc = src(ac, buf); dripSrc.connect(filt(ac, 'bandpass', 4200, 3)).connect(drip);
        // 城市
        const city = ac.createGain(); city.gain.value = 0; city.connect(muffle);
        const hum = ac.createGain(); hum.gain.value = 1.4;
        src(ac, buf).connect(filt(ac, 'lowpass', 160)).connect(hum).connect(city);
        const swell = ac.createGain(); swell.gain.value = 0.12;
        src(ac, buf).connect(filt(ac, 'bandpass', 520, 0.6)).connect(swell).connect(city);
        const lfo = ac.createOscillator(); lfo.frequency.value = 0.045;
        const lfoAmt = ac.createGain(); lfoAmt.gain.value = 0.1; lfo.connect(lfoAmt).connect(swell.gain); lfo.start();
        nodes = { master, muffle, rain, drip, city };
        // 雨点：每隔一小会儿随机冒一下
        setInterval(() => {
            if (!ac || ac.state !== 'running' || !scene.rain) return;
            const t = ac.currentTime, p = scene.rain === 2 ? 0.8 : 0.45;
            if (Math.random() < p) { drip.gain.setValueAtTime(0.5 + Math.random() * 0.6, t); drip.gain.setTargetAtTime(0, t + 0.01, 0.03); }
        }, 90);
    }
    function siren() {
        clearTimeout(sirenTimer);
        sirenTimer = setTimeout(siren, 45000 + Math.random() * 90000);
        if (!ac || ac.state !== 'running' || !cfg.city || document.hidden) return;
        const t = ac.currentTime, o = ac.createOscillator(), gn = ac.createGain(), lp = filt(ac, 'lowpass', 1400);
        o.type = 'triangle';
        for (let k = 0; k < 7; k++) { o.frequency.setValueAtTime(640, t + k * 1.1); o.frequency.linearRampToValueAtTime(920, t + k * 1.1 + 0.55); o.frequency.linearRampToValueAtTime(640, t + k * 1.1 + 1.1); }
        gn.gain.setValueAtTime(0, t); gn.gain.linearRampToValueAtTime(0.025, t + 2.5); gn.gain.linearRampToValueAtTime(0, t + 7.7);
        o.connect(lp).connect(gn).connect(nodes.city);
        o.start(t); o.stop(t + 8);
    }
    function sound() {
        const want = (cfg.rainSound && scene.rain) || cfg.city;
        if (!want && !ac) return;
        if (!ac) { build(); siren(); }
        const t = ac.currentTime, night = scene.hour != null && (scene.hour < 6 || scene.hour >= 22);
        const k = scene.place?.key;
        nodes.master.gain.setTargetAtTime(cfg.vol, t, 0.2);
        nodes.muffle.frequency.setTargetAtTime(k === 'under' ? 320 : k === 'in' || k === 'bar' ? 1600 : 18000, t, 0.6);
        nodes.rain.gain.setTargetAtTime(cfg.rainSound && scene.rain && !document.hidden ? (scene.rain === 2 ? 0.75 : 0.38) : 0, t, 1.2);
        nodes.city.gain.setTargetAtTime(cfg.city && !document.hidden ? (night ? 0.45 : 0.8) : 0, t, 1.5);
        clearTimeout(idleTimer);
        if (!want || document.hidden) idleTimer = setTimeout(() => ac?.state === 'running' && ac.suspend(), 5000);
        else if (ac.state !== 'running') ac.resume().catch(() => {});
    }
    // 浏览器要一次点击才肯出声：设置里已经开着的，等第一下点击再起
    addEventListener('pointerdown', () => sound(), { once: true, capture: true });

    /* ---------- 面板 ---------- */
    const box = mount;
    box.innerHTML = `
<h4>环境氛围</h4>
<p class="lt-note">按最近一个页眉的时间和地点给画面上色，正文写到下雨就飘雨丝。雨声和城市底噪是浏览器现场合成的，和上面的直链叠着放；进了地下、屋里，声音会闷一些。</p>
<label class="checkbox_label"><input type="checkbox" data-amb="tint"><span>画面上色（深夜偏蓝、黄昏偏橙）</span></label>
<label class="checkbox_label"><input type="checkbox" data-amb="rain"><span>雨丝</span></label>
<label class="checkbox_label"><input type="checkbox" data-amb="rainSound"><span>雨声（下雨时才响）</span></label>
<label class="checkbox_label"><input type="checkbox" data-amb="city"><span>城市底噪</span></label>
<label class="lt-audio-vol lt-amb-vol">环境音量 <input type="range" data-amb="vol" min="0" max="1" step="0.05"></label>
<div class="lt-amb-now lt-note"></div>`;
    for (const el of box.querySelectorAll('[data-amb]')) {
        const k = el.dataset.amb;
        if (el.type === 'checkbox') el.checked = !!cfg[k]; else el.value = cfg[k];
        el.addEventListener(el.type === 'checkbox' ? 'change' : 'input', () => {
            cfg[k] = el.type === 'checkbox' ? el.checked : Number(el.value);
            save(); paint(); sound();
        });
    }
    const now = box.querySelector('.lt-amb-now');
    function describe() {
        const bits = [scene.band?.name, scene.place?.name, scene.rain === 2 ? '大雨' : scene.rain ? '小雨' : '', scene.fog ? '有雾' : ''].filter(Boolean);
        now.textContent = bits.length ? '现在：' + bits.join(' · ') : '现在：页眉里没有时间，不上色';
    }

    // 阅读器底栏显示的是正在看的那一页的页眉；翻回前面的页，颜色和天气跟着那一页走
    let pending = 0, lastChat = [], reading = '';
    const placeNow = () => document.querySelector('.b-place')?.textContent.trim() || '';
    setInterval(() => { const r = placeNow(); if (r !== reading) update(lastChat); }, 800);
    function update(chat, { soon = false } = {}) {
        lastChat = chat;
        const run = () => {
            pending = 0;
            reading = placeNow();
            const next = readScene(chat, reading);
            const reseed = next.rain !== scene.rain || next.place?.key !== scene.place?.key;
            scene = next;
            if (reseed) seed();
            paint(); sound(); describe();
        };
        if (!soon) { clearTimeout(pending); run(); return; }
        if (!pending) pending = setTimeout(run, 1500); // 流式输出时一秒半看一次就够
    }
    return { update, scene: () => scene };
}
