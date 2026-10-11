const STYLE = "@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Noto+Serif+SC:wght@400;600&display=swap');\n\n/* ctOS 重绘 · 黑\n   全部规则挂在 body.ctos 下，关掉开关就完全回到原样。\n   电脑上左侧竖栏；窄屏（≤1000px，与酒馆自己的手机断点一致）改成顶栏，规则在文件末尾。\n   令牌与状态栏、设计稿同一套。 */\n\n/* 世界书自检弹窗：关掉 ctOS 重绘时也要能看，所以不挂 body.ctos；\n   贴在下沿而不是盖满整屏，顶栏永远点得到，手机和电脑都这样；\n   手机上酒馆把 body 设成 fixed、html 高度塌成 0，靠 bottom 定位会跑到屏幕上方去，\n   所以位置一律用 top 加 100dvh 算 */\n#ctr-lore { position: fixed; left: 12px; right: 12px; top: calc(100dvh - 12px - env(safe-area-inset-bottom)); transform: translateY(-100%); z-index: 3006; display: flex; justify-content: center; align-items: flex-end; pointer-events: none; font: 400 14px/1.7 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', sans-serif; color: #dcd8d0; text-align: left; }\n#ctr-lore * { box-sizing: border-box; }\n#ctr-lore .ctr-lore-box { pointer-events: auto; width: min(440px, 100%); max-height: 60dvh; overflow-y: auto; background: #111316; border: 1px solid #383d44; border-top: 2px solid #ff4d2e; padding: 18px 20px 16px; border-radius: 0; box-shadow: 0 20px 50px rgba(0, 0, 0, .6); }\n#ctr-lore .ctr-lore-k { margin-bottom: 10px; font: 700 10px/1 'JetBrains Mono', Menlo, monospace; letter-spacing: .18em; color: #ff4d2e; }\n#ctr-lore b { display: block; margin-bottom: 8px; font-size: 17px; font-weight: 600; color: #ebe8e2; }\n#ctr-lore p { margin: 0 0 10px; color: #9097a0; }\n#ctr-lore p[hidden] { display: none; }\n#ctr-lore .ctr-lore-warn, #ctr-lore .ctr-lore-manual { color: #ebe8e2; }\n#ctr-lore .ctr-lore-row { display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px; }\n#ctr-lore button { min-height: 40px; margin: 0; padding: 0 16px; border: 1px solid #383d44; border-radius: 0; background: transparent; color: #9097a0; font: inherit; cursor: pointer; }\n#ctr-lore button:hover { color: #ebe8e2; border-color: #9097a0; }\n#ctr-lore button.main { background: #ff4d2e; border-color: #ff4d2e; color: #0b0c0e; font-weight: 600; }\n#ctr-lore button:disabled { opacity: .5; cursor: default; }\n\n/* 底部控制条：整局一条，贴在输入框和状态栏上方；阅读器自己的表头全部收起来，控制都在这里 */\n#ctr-bar { display: flex; flex-wrap: wrap; align-items: stretch; gap: 0; flex: none; width: 100%; box-sizing: border-box; background: var(--k-panel, #111316); border: 1px solid var(--k-line-2, #383d44); border-bottom: 0; font: 500 11px/1 var(--k-mono, monospace); letter-spacing: .1em; color: var(--k-dim, #5c626a); }\n#ctr-bar[hidden] { display: none; }\n#ctr-bar .b-place { display: flex; align-items: center; gap: 6px; flex: 1 1 120px; min-width: 0; padding: 0 12px; min-height: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--k-mute, #9097a0); border-right: 1px solid var(--k-line, #262a2f); }\n#ctr-bar .b-place b { color: var(--k-ink, #ebe8e2); font-weight: 500; }\n#ctr-bar .b-title { display: flex; align-items: center; padding: 0 12px; min-height: 40px; white-space: nowrap; }\n#ctr-bar .b-swipe, #ctr-bar .b-page { display: flex; align-items: stretch; border-left: 1px solid var(--k-line, #262a2f); }\n#ctr-bar .b-swipe[hidden], #ctr-bar .b-page[hidden] { display: none; }\n#ctr-bar .b-swipe em { align-self: center; padding: 0 8px; font-style: normal; color: var(--k-mute, #9097a0); }\n#ctr-bar .b-goto { display: flex; align-items: center; gap: 6px; padding: 0 10px; white-space: nowrap; }\n#ctr-bar .b-goto input { width: 42px; height: 26px; margin: 0; padding: 0 4px; text-align: center; font: 700 12px/1 var(--k-cond, sans-serif); color: var(--k-ink, #ebe8e2); background: var(--k-bg, #0b0c0e); border: 1px solid var(--k-line-2, #383d44); -moz-appearance: textfield; }\n#ctr-bar .b-goto input::-webkit-inner-spin-button, #ctr-bar .b-goto input::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }\n#ctr-bar .b-goto b { font-weight: 400; color: var(--k-dim, #5c626a); }\n#ctr-bar .b-goto i { font-style: normal; color: var(--k-ink, #ebe8e2); }\n#ctr-bar .b-count { display: flex; align-items: center; padding: 0 12px; color: var(--k-mute, #9097a0); }\n#ctr-bar .ctr-btn { display: grid; place-items: center; min-width: 42px; min-height: 40px; padding: 0 10px; border: 0; border-left: 1px solid var(--k-line, #262a2f); background: none; color: var(--k-mute, #9097a0); font: 500 12px/1 var(--k-cjk, sans-serif); cursor: pointer; }\n#ctr-bar .ctr-btn:hover:not(:disabled) { color: var(--k-ink, #ebe8e2); background: var(--k-raise, #16191d); }\n#ctr-bar .ctr-btn:disabled { opacity: .3; cursor: default; }\n#ctr-bar .b-mode { margin-left: auto; font: 700 10px/1 var(--k-mono, monospace); letter-spacing: .14em; }\n#ctr-bar .b-stop { color: var(--k-acc, #ff4d2e); }\n#ctr-bar.live { border-color: var(--k-acc, #ff4d2e); }\n#ctr-bar .b-msg { display: none; }\nbody.ctos.ctr-full #ctr-bar .b-msg { display: grid; }\n#ctr-bar .b-goto input:focus { border-color: var(--k-ink, #ebe8e2); outline: none; }\n\n/* 表头收起来：地点、翻版、页码、全屏都在底部那一条上，消息里不再重复（选择器要比原来的 display:grid 更具体） */\nbody.ctos .ctr .ctr-head { display: none; }\n/* 页脚只留页码和进度格，翻页按钮也搬到控制条 */\nbody.ctos .ctr-foot .ctr-nav, body.ctos .ctr-foot .ctr-hint { display: none !important; }\n/* [hidden] 要压过 .ctr-btn 的 display，否则停止按钮一直挂在那儿 */\n#ctr-bar [hidden] { display: none !important; }\n\n/* 全屏下点控制条上的 ⋯：把这一条的消息按钮浮出来，编辑、删除、复制都在里面。\n   酒馆把 .mes_buttons 放在 .ch_name 里面，而全屏时 .ch_name 是隐藏的，所以要先把它放出来，再把名字和时间藏掉 */\nbody.ctos.ctr-full.ctr-msgb #chat > .mes.ctr-focus .ch_name { display: flex !important; position: static; margin: 0; }\nbody.ctos.ctr-full.ctr-msgb #chat > .mes.ctr-focus .ch_name > :not(.mes_buttons) { display: none !important; }\nbody.ctos.ctr-msgb #chat > .mes.ctr-focus .mes_buttons { display: flex !important; position: fixed; left: 50%; transform: translateX(-50%); bottom: calc(var(--ctr-dock, 0px) + 6px); z-index: 46; gap: 2px; padding: 6px 10px; background: var(--k-panel, #111316); border: 1px solid var(--k-line-2, #383d44); overflow: visible; }\nbody.ctos.ctr-msgb #chat > .mes.ctr-focus .mes_buttons > * { display: block !important; opacity: 1; padding: 4px 8px; }\n\n/* 摘要和变量更新这两块是按预设在消息里的内联样式排的（max-width:920px; margin:10px auto），\n   它在 ctOS 里比正文左右各宽出一截。这里用 !important 压回去，让它们的左右边缘和正文对齐：\n   --ctr-pad-x 跟着阅读器的正文左右内边距走，见 .ctr-stage 那几条规则。\n   酒馆给 .mes_text 留了 30px 右内边距（给消息按钮让位），阅读器模式下按钮在名字那一行，这里不需要，去掉它右边缘才对得上 */\nbody.ctos .mes.ctr-on:not(:has(.edit_textarea)) > .mes_block > .mes_text { padding-left: 0; padding-right: 0; }\nbody.ctos .mes > .mes_block > .mes_text > details {\n    max-width: calc(var(--ctr-measure) + var(--ctr-gutter)) !important;\n    width: calc(100% - 2 * var(--ctr-pad-x));\n    margin: 12px auto !important;\n    box-sizing: border-box;\n}\nbody.ctos.ctr-full .mes.ctr-focus > .mes_block > .mes_text > details { display: none; }\n\n/* 状态栏：整个聊天只有一份，钉在输入框上方；关掉 ctOS 重绘时也照常显示 */\n #ctr-hud { display: block; flex: none; width: 100%; height: 50px; margin: 0; padding: 0; border: 0; background: transparent; }\nbody.ctos :is(#ctr-hud, #ctr-bar) { width: calc(100% - 64px); max-width: var(--ctr-col); margin: 0 auto; }\nbody.ctos.ctr-full :is(#ctr-hud, #ctr-bar) { width: calc(100% - 80px); max-width: none; margin: 0 40px; }\n\n#ctr-brand, #ctr-tools { display: none; }\n\nbody.ctos {\n  --k-bg: #0b0c0e; --k-panel: #111316; --k-raise: #16191d;\n  --k-line: #262a2f; --k-line-2: #383d44;\n  --k-ink: #ebe8e2; --k-prose: #dcd8d0; --k-voice: #b9bcc1; --k-mute: #9097a0; --k-dim: #5c626a;\n  --k-acc: #ff4d2e;\n  --k-river: #7fa6bd; --k-old: #c2a878; --k-lily: #b3a4d4; --k-hood: #8fb07f;\n  --k-mono: 'JetBrains Mono', 'SF Mono', Menlo, monospace;\n  --k-cond: 'Barlow Condensed', 'DIN Condensed', 'Arial Narrow', sans-serif;\n  --k-cjk: 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;\n  --k-serif: 'Noto Serif SC', 'Songti SC', 'STSong', serif;\n  --k-ease: cubic-bezier(.22, .8, .3, 1);\n  --ctr-rail: 232px;\n  --ctr-drawer: 560px;\n  --ctr-drawer-wide: min(960px, calc(100vw - var(--ctr-rail) - 80px));\n  --ctr-col: 920px;\n  --ctr-gutter: 120px;\n  --ctr-measure: 666px;\n  /* 正文左右内边距，摘要和变量更新那两块拿它和正文对齐；全屏和手机各有一处覆盖 */\n  --ctr-pad-x: 28px;\n\n  /* 酒馆自己的主题变量：挂在 body 上，盖过 html 上的内联值 */\n  --SmartThemeBodyColor: var(--k-prose);\n  --SmartThemeEmColor: var(--k-mute);\n  --SmartThemeUnderlineColor: var(--k-ink);\n  --SmartThemeQuoteColor: var(--k-ink);\n  --SmartThemeBlurTintColor: var(--k-panel);\n  --SmartThemeChatTintColor: transparent;\n  --SmartThemeUserMesBlurTintColor: transparent;\n  --SmartThemeBotMesBlurTintColor: transparent;\n  --SmartThemeShadowColor: transparent;\n  --SmartThemeBorderColor: var(--k-line-2);\n  --SmartThemeCheckboxTickColor: var(--k-acc);\n  --SmartThemeBlurStrength: 0px;\n  --mainFontFamily: var(--k-cjk);\n  --monoFontFamily: var(--k-mono);\n  --interactable-outline-color: var(--k-ink);\n\n  background: var(--k-bg) !important;\n  color: var(--k-prose);\n  font-family: var(--k-cjk);\n  -webkit-font-smoothing: antialiased;\n}\nbody.ctos ::selection { background: var(--k-acc); color: var(--k-bg); }\nbody.ctos #bg1, body.ctos #bg_custom, body.ctos #top-bar { display: none !important; }\nbody.ctos * { scrollbar-width: thin; scrollbar-color: var(--k-line-2) transparent; }\nbody.ctos ::-webkit-scrollbar-thumb { background-color: var(--k-line-2); border-radius: 0; box-shadow: none; }\n\n/* ============================================================\n   左侧栏：#top-settings-holder 竖起来\n   ============================================================ */\nbody.ctos #top-settings-holder {\n  position: fixed; inset: 0 auto 0 0; z-index: 3005;\n  width: var(--ctr-rail); height: 100dvh; margin: 0;\n  display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; gap: 0;\n  background: var(--k-panel); border-right: 1px solid var(--k-line-2);\n  backdrop-filter: none; -webkit-backdrop-filter: none;\n}\nbody.ctos #ctr-brand {\n  order: -1; display: flex; align-items: center; gap: 10px; flex: none;\n  min-height: 56px; padding: 0 16px; margin-bottom: 10px;\n  background: var(--k-ink); color: var(--k-bg);\n}\nbody.ctos #ctr-brand b { font: 800 20px/1 var(--k-cond); letter-spacing: .04em; }\nbody.ctos #ctr-brand span { font: 700 9px/1.25 var(--k-mono); letter-spacing: .14em; }\n\nbody.ctos #top-settings-holder > .drawer { display: block; width: 100%; flex: none; position: static; }\nbody.ctos #top-settings-holder > .drawer > .drawer-toggle {\n  position: relative; width: 100%;\n  display: grid; grid-template-columns: 22px 1fr auto; align-items: center; gap: 12px;\n  padding: 9px 16px 9px 18px; color: var(--k-mute); cursor: pointer;\n  transition: color .16s, background .16s;\n}\nbody.ctos #top-settings-holder > .drawer > .drawer-toggle:hover { color: var(--k-ink); background: var(--k-raise); }\nbody.ctos #top-settings-holder .drawer-toggle .drawer-icon {\n  order: 1; font-size: 16px; width: 22px; padding: 0; text-align: center; color: inherit; opacity: 1 !important; filter: none;\n}\n/* 让图标盖住整行：点行里任何地方都算点图标，酒馆的\"点外面就收起\"才不会抢先关掉抽屉 */\nbody.ctos #top-settings-holder .drawer-toggle .drawer-icon::after { content: ''; position: absolute; inset: 0; }\nbody.ctos #top-settings-holder .drawer-toggle::before { content: var(--zh, ''); order: 2; font: 400 13.5px/1.2 var(--k-cjk); white-space: nowrap; }\nbody.ctos #top-settings-holder .drawer-toggle::after { content: var(--code, ''); order: 3; font: 500 10px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-dim); }\nbody.ctos #top-settings-holder > .drawer:has(> .drawer-content.openDrawer) > .drawer-toggle,\nbody.ctos #top-settings-holder > .drawer:has(> nav.openDrawer) > .drawer-toggle { color: var(--k-ink); background: var(--k-raise); box-shadow: inset 3px 0 0 var(--k-acc); }\nbody.ctos #top-settings-holder > .drawer:has(> .openDrawer) > .drawer-toggle::after { color: var(--k-acc); }\n\nbody.ctos #rightNavHolder { order: 1; --zh: '角色'; --code: 'CAST'; }\nbody.ctos #WI-SP-button { order: 2; --zh: '世界书'; --code: 'LORE'; }\nbody.ctos #persona-management-button { order: 3; --zh: '我的人设'; --code: 'PERSONA'; }\nbody.ctos #ai-config-button { order: 4; --zh: '生成参数'; --code: 'PRESET'; margin-top: 10px; border-top: 1px solid var(--k-line); padding-top: 10px; }\nbody.ctos #sys-settings-button { order: 5; --zh: 'API 连接'; --code: 'LINK'; }\nbody.ctos #advanced-formatting-button { order: 6; --zh: '格式'; --code: 'FORMAT'; }\nbody.ctos #extensions-settings-button { order: 7; --zh: '扩展'; --code: 'EXT'; }\nbody.ctos #user-settings-button { order: 8; --zh: '界面'; --code: 'UI'; }\nbody.ctos #backgrounds-button { order: 9; --zh: '背景'; --code: 'BG'; }\nbody.ctos #top-settings-holder > .drawer:not([id]) { order: 10; }\n\nbody.ctos #ctr-tools { order: 99; margin-top: auto; display: grid; gap: 8px; padding: 14px 16px 16px 18px; border-top: 1px solid var(--k-line-2); }\nbody.ctos .ctr-label { display: flex; justify-content: space-between; font: 500 9.5px/1 var(--k-mono); letter-spacing: .18em; color: var(--k-dim); }\nbody.ctos .ctr-label i { font: 400 11px/1 var(--k-cjk); font-style: normal; letter-spacing: .04em; }\nbody.ctos .ctr-seg { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--k-line-2); }\nbody.ctos .ctr-seg .ctr-btn { height: 32px; font: 500 12.5px/1 var(--k-cjk); color: var(--k-mute); }\nbody.ctos .ctr-seg .ctr-btn + .ctr-btn { border-left: 1px solid var(--k-line-2); }\nbody.ctos .ctr-seg .ctr-btn.on { background: var(--k-ink); color: var(--k-bg); }\nbody.ctos .ctr-sound { display: flex; justify-content: space-between; align-items: center; height: 32px; padding: 0 10px; border: 1px solid var(--k-line-2); font: 500 12.5px/1 var(--k-cjk); color: var(--k-mute); }\nbody.ctos .ctr-sound em { font: 700 10px/1 var(--k-mono); letter-spacing: .14em; font-style: normal; color: var(--k-dim); }\nbody.ctos .ctr-sound.on em { color: var(--k-acc); }\n\n/* 侧栏收起：点品牌条右边的按钮，侧栏缩成一列图标贴在左边，主区跟着变宽；只在电脑上有，手机上侧栏本来就是顶栏 */\nbody.ctos #ctr-railbtn { margin-left: auto; width: 28px; height: 28px; display: grid; place-items: center; flex: none; font: 700 15px/1 var(--k-mono); color: var(--k-bg); border: 1px solid rgba(11, 12, 14, .3); }\nbody.ctos #ctr-railbtn:hover { background: var(--k-bg); color: var(--k-ink); }\nbody.ctos #top-settings-holder { transition: width 200ms var(--k-ease); }\nbody.ctos #sheld { transition: opacity 280ms var(--k-ease), left 200ms var(--k-ease); }\n@media screen and (min-width: 1001px) {\n  body.ctos.ctr-railmin { --ctr-rail: 56px; }\n  body.ctos.ctr-railmin #ctr-brand { justify-content: center; padding: 0; }\n  body.ctos.ctr-railmin #ctr-brand > :is(b, span), body.ctos.ctr-railmin #ctr-tools { display: none; }\n  body.ctos.ctr-railmin #ctr-railbtn { margin: 0; }\n  body.ctos.ctr-railmin #top-settings-holder > .drawer > .drawer-toggle { grid-template-columns: 1fr; justify-items: center; gap: 0; padding: 10px 0; }\n  body.ctos.ctr-railmin #top-settings-holder .drawer-toggle::before, body.ctos.ctr-railmin #top-settings-holder .drawer-toggle::after { content: none; }\n}\n\n/* ============================================================\n   抽屉：从侧栏后面滑出来，满高\n   ============================================================ */\nbody.ctos #top-settings-holder .drawer-content {\n  position: fixed !important; top: 0 !important; bottom: auto; left: var(--ctr-rail) !important; right: auto !important;\n  margin: 0 !important; width: var(--ctr-drawer); min-width: 0; max-width: calc(100vw - var(--ctr-rail) - 80px);\n  height: 100dvh; max-height: 100dvh;\n  padding: 14px 18px; border: 0; border-right: 1px solid var(--k-line-2); border-radius: 0;\n  background: var(--k-panel); color: var(--k-prose);\n  box-shadow: 24px 0 60px rgba(0, 0, 0, .45);\n  backdrop-filter: none; -webkit-backdrop-filter: none;\n}\nbody.ctos #top-settings-holder .drawer-content.openDrawer { height: 100dvh; animation: ctr-drawer-in 280ms var(--k-ease) both; }\nbody.ctos #top-settings-holder .drawer-content.maximized { width: calc(100vw - var(--ctr-rail)) !important; left: var(--ctr-rail) !important; top: 0 !important; max-width: none; }\nbody.ctos #top-settings-holder :is(#WorldInfo, #AdvancedFormatting, #rm_extensions_block, #user-settings-block) { width: var(--ctr-drawer-wide); }\n@keyframes ctr-drawer-in { from { transform: translateX(-28px); opacity: 0; } to { transform: none; opacity: 1; } }\nbody.ctos:has(#top-settings-holder .openDrawer:not(.pinnedOpen)) #sheld { opacity: .4; }\n\n/* ============================================================\n   主区：消息流居中一栏\n   ============================================================ */\nbody.ctos #sheld {\n  top: 0; left: var(--ctr-rail); right: 0; width: auto; margin: 0;\n  height: 100dvh; max-height: 100dvh;\n  backdrop-filter: none; -webkit-backdrop-filter: none;\n  transition: opacity 280ms var(--k-ease);\n}\nbody.ctos #chat {\n  max-height: none; padding: 20px 32px 8px;\n  background: transparent; backdrop-filter: none; -webkit-backdrop-filter: none; text-shadow: none;\n}\nbody.ctos #chat > .mes { width: 100%; max-width: var(--ctr-col); margin-inline: auto; }\nbody.ctos #form_sheld { width: calc(100% - 64px); max-width: var(--ctr-col); margin: 4px auto 16px; }\nbody.ctos #chat .mes .mes_block { padding-left: 0; margin-left: 0; }\n\nbody.ctos #chat .mes {\n  padding: 18px 0 22px; border: 0; border-bottom: 1px solid var(--k-line); border-radius: 0;\n  background: transparent; box-shadow: none;\n}\nbody.ctos #chat .mes:last-child { border-bottom: 0; }\nbody.ctos #chat .mes .mesAvatarWrapper { display: none; }\nbody.ctos .mes .ch_name { margin-bottom: 10px; }\nbody.ctos .mes .name_text { font: 700 11px/1 var(--k-mono); letter-spacing: .16em; text-transform: uppercase; color: var(--k-ink); }\nbody.ctos .mes .timestamp { font: 400 10.5px/1 var(--k-mono); letter-spacing: .06em; color: var(--k-dim); margin-left: 12px; }\nbody.ctos .mes_buttons .mes_button, body.ctos .extraMesButtonsHint { color: var(--k-dim); opacity: 1; }\nbody.ctos .mes_buttons .mes_button:hover { color: var(--k-ink); }\nbody.ctos .mes_text { font: 400 16.5px/1.95 var(--k-serif); color: var(--k-prose); }\nbody.ctos .mes_text p { margin: 0 0 .9em; }\nbody.ctos .mes_text q, body.ctos .mes_text q i { color: var(--k-ink); }\nbody.ctos .mes_text em, body.ctos .mes_text i { color: var(--k-mute); }\nbody.ctos .mes_text strong, body.ctos .mes_text b { color: var(--k-ink); }\nbody.ctos .mes_text blockquote {\n  margin: 1em 0; padding: 2px 0 2px 16px; border-left: 2px solid var(--k-line-2); background: none;\n  font: 400 15.5px/1.9 var(--k-cjk); color: var(--k-voice);\n}\nbody.ctos .mes_text code, body.ctos .mes_text pre { font-family: var(--k-mono); background: var(--k-raise); border-radius: 0; border-color: var(--k-line); }\nbody.ctos .mes_text hr { border: 0; border-top: 1px solid var(--k-line); margin: 1.4em 0; }\nbody.ctos .mes_text details { margin: 14px 0 0; background: var(--k-bg); border: 1px solid var(--k-line); font: 11px/1.6 var(--k-mono); color: var(--k-mute); }\nbody.ctos .mes_text details summary { padding: 9px 14px; cursor: pointer; letter-spacing: .14em; color: var(--k-ink); }\nbody.ctos .mes[is_user=\"true\"] .mes_text {\n  font: 400 14px/1.8 var(--k-cjk); color: var(--k-mute);\n  padding: 12px 16px; background: var(--k-panel); border: 1px solid var(--k-line);\n}\nbody.ctos .mes[is_user=\"true\"] .name_text { color: var(--k-mute); }\nbody.ctos .swipe_left, body.ctos .swipe_right { color: var(--k-dim); opacity: 1; }\nbody.ctos .swipe_left:hover, body.ctos .swipe_right:hover { color: var(--k-ink); }\nbody.ctos .swipes-counter { font: 400 10.5px/1 var(--k-mono); color: var(--k-dim); }\n/* 排成阅读器的消息，翻回复版本的箭头收进阅读器页眉 */\nbody.ctos .mes.ctr-on > .swipe_left, body.ctos .mes.ctr-on > .swipeRightBlock { display: none !important; }\nbody.ctos .mes_reasoning_details { border-color: var(--k-line); background: var(--k-panel); }\n\n/* ============================================================\n   输入区：一条直角的机柜面板。快捷按钮一排在上，图标、输入框、发送在下\n   ============================================================ */\nbody.ctos #form_sheld { animation: ctr-dock-in 320ms var(--k-ease); }\nbody.ctos.ctr-dockoff #form_sheld { display: none; }\n@keyframes ctr-dock-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }\nbody.ctos #send_form {\n  display: flex; flex-wrap: wrap; align-items: stretch; gap: 0; padding: 0; min-height: 0;\n  background: var(--k-panel); border: 1px solid var(--k-line-2);\n  box-shadow: none; backdrop-filter: none; -webkit-backdrop-filter: none;\n}\nbody.ctos #send_form:focus-within { border-color: var(--k-mute); }\nbody.ctos #send_form > :is(#qr--bar, #qr-bar) {\n  order: -1; width: 100%; margin: 0; padding: 8px 10px; gap: 6px; justify-content: flex-start;\n  background: var(--k-bg); border-bottom: 1px solid var(--k-line);\n}\nbody.ctos #send_form > :is(#qr--bar, #qr-bar):not(:has(.qr--button)) { display: none; }\nbody.ctos #send_form .qr--buttons { display: flex; flex-wrap: wrap; gap: 6px; justify-content: flex-start; margin: 0; padding: 0; }\nbody.ctos #send_form .qr--button {\n  height: 26px; min-height: 26px; margin: 0; padding: 0 10px;\n  background: transparent !important; border: 1px solid var(--k-line-2) !important; color: var(--k-mute) !important;\n  font: 500 12px/24px var(--k-cjk) !important; letter-spacing: .04em; opacity: 1; filter: none;\n}\nbody.ctos #send_form .qr--button:hover { background: var(--k-raise) !important; color: var(--k-ink) !important; }\nbody.ctos #nonQRFormItems { display: flex; align-items: stretch; width: 100%; min-height: 52px; gap: 0; padding: 0; }\nbody.ctos :is(#leftSendForm, #rightSendForm) { display: flex; align-items: stretch; gap: 0; padding: 0; margin: 0; }\nbody.ctos :is(#leftSendForm, #rightSendForm) > div {\n  display: grid; place-items: center; align-items: center; justify-content: center;\n  width: 46px; min-height: 52px; margin: 0; padding: 0;\n  font-size: 16px; color: var(--k-mute); opacity: 1; filter: none;\n}\nbody.ctos #leftSendForm > div { border-right: 1px solid var(--k-line); }\nbody.ctos #rightSendForm > div { border-left: 1px solid var(--k-line); }\nbody.ctos :is(#leftSendForm, #rightSendForm) > div:hover { color: var(--k-ink); background: var(--k-raise); }\nbody.ctos #rightSendForm > #send_but { width: 64px; background: var(--k-acc); color: var(--k-bg); font-size: 18px; border-left: 0; }\nbody.ctos #rightSendForm > #send_but:hover { background: #ff6a4f; color: var(--k-bg); }\nbody.ctos #send_textarea {\n  flex: 1; min-height: 52px; padding: 15px 16px; margin: 0;\n  font: 400 14px/1.6 var(--k-cjk); color: var(--k-ink); background: transparent; border: 0;\n}\nbody.ctos #send_textarea::placeholder { color: var(--k-dim); }\nbody.ctos #options, body.ctos #extensionsMenu, body.ctos .list-group { background: var(--k-panel); border: 1px solid var(--k-line-2); backdrop-filter: none; }\nbody.ctos .list-group-item:hover { background: var(--k-raise); }\n\n/* ============================================================\n   通用控件\n   ============================================================ */\nbody.ctos .menu_button {\n  border-radius: 0; background-color: transparent; border: 1px solid var(--k-line-2);\n  color: var(--k-mute); box-shadow: none; filter: none;\n}\nbody.ctos .menu_button:hover { background-color: var(--k-raise); color: var(--k-ink); }\nbody.ctos .menu_button.active, body.ctos .menu_button.toggleEnabled { border-color: var(--k-acc); color: var(--k-acc); }\nbody.ctos .text_pole, body.ctos select, body.ctos textarea:not(#send_textarea),\nbody.ctos input:is([type=\"text\"], [type=\"number\"], [type=\"search\"], [type=\"password\"], [type=\"url\"], [type=\"email\"]) {\n  border-radius: 0; background-color: var(--k-bg); border: 1px solid var(--k-line-2); color: var(--k-ink); box-shadow: none;\n}\nbody.ctos .text_pole:focus, body.ctos select:focus, body.ctos textarea:not(#send_textarea):focus, body.ctos input:focus { border-color: var(--k-ink); outline: none; }\nbody.ctos input[type=\"checkbox\"] {\n  border-radius: 0; background-color: var(--k-bg); border: 1px solid var(--k-line-2); outline: 0; filter: none; box-shadow: none;\n}\nbody.ctos input[type=\"checkbox\"]::before { clip-path: none; width: .55em; height: .55em; box-shadow: inset 1em 1em var(--k-acc); }\nbody.ctos input[type=\"checkbox\"]:checked { border-color: var(--k-ink); }\nbody.ctos input[type=\"range\"] { -webkit-appearance: none; appearance: none; height: 18px; background: transparent; accent-color: var(--k-ink); }\nbody.ctos input[type=\"range\"]::-webkit-slider-runnable-track { height: 2px; background: var(--k-line-2); border: 0; }\nbody.ctos input[type=\"range\"]::-webkit-slider-thumb { -webkit-appearance: none; width: 10px; height: 16px; margin-top: -7px; background: var(--k-ink); border: 0; box-shadow: none; }\nbody.ctos input[type=\"range\"]:active::-webkit-slider-thumb { background: var(--k-acc); }\nbody.ctos .inline-drawer-header { border-bottom: 1px solid var(--k-line); border-radius: 0; background: none; box-shadow: none; padding: 10px 2px; }\nbody.ctos :is(#extensions_settings, #extensions_settings2) .inline-drawer-toggle.inline-drawer-header,\nbody.ctos #user-settings-block h4, body.ctos .standoutHeader {\n  background: var(--k-bg); border: 1px solid var(--k-line); border-radius: 0; padding: 8px 10px; margin-bottom: 6px;\n}\nbody.ctos :is(#extensions_settings, #extensions_settings2) .inline-drawer-toggle.inline-drawer-header:hover { background: var(--k-raise); }\nbody.ctos .inline-drawer-header b { font-weight: 500; color: var(--k-ink); }\nbody.ctos .inline-drawer-icon { filter: none; color: var(--k-dim); }\nbody.ctos h3, body.ctos h4 { font-family: var(--k-cjk); font-weight: 500; color: var(--k-ink); }\nbody.ctos .popup, body.ctos dialog.popup { background: var(--k-panel); border: 1px solid var(--k-line-2); border-radius: 0; color: var(--k-prose); box-shadow: 0 30px 80px rgba(0, 0, 0, .6); }\nbody.ctos .popup::backdrop { background: rgba(5, 6, 7, .7); backdrop-filter: none; }\nbody.ctos .character_select, body.ctos .group_select, body.ctos .bogus_folder_select { border-radius: 0; }\nbody.ctos .character_select:hover, body.ctos .group_select:hover { background: var(--k-raise); }\nbody.ctos .character_select.is_fav, body.ctos #rm_print_characters_block .selected { border-color: var(--k-acc); }\nbody.ctos .avatar img, body.ctos .avatar { border-radius: 0 !important; }\nbody.ctos #toast-container > div { border-radius: 0; background-color: var(--k-panel); border: 1px solid var(--k-line-2); box-shadow: none; opacity: 1; }\n\n/* 统一夺舍：圆角、文字阴影、毛玻璃一律去掉 */\nbody.ctos *, body.ctos *::before, body.ctos *::after { border-radius: 0 !important; text-shadow: none !important; }\nbody.ctos :is(#sheld, #chat, #form_sheld, #send_form, .drawer-content, .popup, .list-group, #toast-container > div) { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n\n/* ============================================================\n   ctOS 阅读器（正常模式：嵌在消息流里）\n   ============================================================ */\nbody.ctos .mes.ctr-on:not(:has(.edit_textarea)) .mes_text > :not(.TH-render):not(details) { display: none; }\nbody.ctos .mes.ctr-on:has(.edit_textarea) > .mes_block > .ctr { display: none; }\nbody.ctos .mes.ctr-on .mes_text { font-size: 0; }\nbody.ctos .mes.ctr-on:has(.edit_textarea) .mes_text { font-size: inherit; }\nbody.ctos .mes.ctr-on .mes_text > .TH-render { margin-top: 0; }\nbody.ctos .mes.ctr-on.ctr-hasthink .mes_text > .TH-render:first-child { display: none; }\n\nbody.ctos .ctr { display: grid; grid-template-rows: auto auto minmax(0, 1fr) auto; margin: 4px 0 14px; background: var(--k-bg); border: 1px solid var(--k-line-2); font-family: var(--k-cjk); }\nbody.ctos .ctr-btn { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }\nbody.ctos .ctr-head {\n  display: grid; grid-template-columns: 1fr auto auto auto; gap: 0; align-items: stretch;\n  min-height: 40px; padding: 0 0 0 16px; border-bottom: 1px solid var(--k-line);\n  font: 500 10.5px/1 var(--k-mono); letter-spacing: .16em; color: var(--k-dim);\n}\nbody.ctos .ctr-place { align-self: center; font: 400 12.5px/1.2 var(--k-cjk); letter-spacing: .06em; color: var(--k-mute); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\nbody.ctos .ctr-place b { font-weight: 500; color: var(--k-ink); }\nbody.ctos .ctr-title { align-self: center; padding: 0 16px; white-space: nowrap; }\nbody.ctos .ctr-swipe { display: flex; align-items: stretch; border-left: 1px solid var(--k-line); }\nbody.ctos .ctr-swipe[hidden] { display: none; }\nbody.ctos .ctr-swipe .ctr-btn { width: 34px; font: 400 18px/1 var(--k-mono); color: var(--k-mute); }\nbody.ctos .ctr-swipe .ctr-btn:hover:not(:disabled) { color: var(--k-ink); background: var(--k-raise); }\nbody.ctos .ctr-swipe .ctr-btn:disabled { opacity: .3; cursor: default; }\nbody.ctos .ctr-swipe em { align-self: center; min-width: 36px; text-align: center; font: 500 10.5px/1 var(--k-mono); font-style: normal; letter-spacing: .08em; color: var(--k-mute); }\nbody.ctos .ctr-modebtn { padding: 0 14px; border-left: 1px solid var(--k-line); font: 700 10px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-mute); }\nbody.ctos .ctr-modebtn:hover { color: var(--k-ink); background: var(--k-raise); }\n\nbody.ctos .mes.ctr-on .mes_reasoning_details { display: none; }\n/* 每一块钉在自己那一行：表头和思考常被隐藏，不钉的话正文会滑进 auto 行，页脚掉进 1fr 行，全屏时页脚浮在屏幕中间 */\nbody.ctos .ctr > .ctr-head { grid-row: 1; }\nbody.ctos .ctr > .ctr-think { grid-row: 2; }\nbody.ctos .ctr > .ctr-stage { grid-row: 3; grid-column: 1; }\n/* 立绘层和正文叠在同一格里：立绘垫底，正文在上；只在全屏翻页时出现 */\nbody.ctos .ctr > .ctr-cast { display: none; }\nbody.ctos.ctr-full .ctr[data-view=\"page\"] > .ctr-cast { display: block; grid-row: 3; grid-column: 1; position: relative; min-height: 0; overflow: hidden; pointer-events: none; }\nbody.ctos.ctr-full .ctr[data-view=\"page\"] > .ctr-stage { position: relative; z-index: 1; }\nbody.ctos .ctr-cast img { position: absolute; opacity: 0; transition: opacity 420ms var(--k-ease), filter 320ms var(--k-ease); }\nbody.ctos .ctr-cast img.in { opacity: 1; }\nbody.ctos .ctr-fig { bottom: 0; height: 100%; width: auto; max-width: none; transform: translateX(-50%); }\nbody.ctos .ctr-fig.l { left: 15%; }\nbody.ctos .ctr-fig.r { left: 85%; }\nbody.ctos .ctr-fig.flip { transform: translateX(-50%) scaleX(-1); }\nbody.ctos .ctr-fig.dim { filter: brightness(.5) saturate(.7); }\nbody.ctos .ctr-cg { inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 22%; }\n/* 立绘的名牌：右下角一个小方框，写这个人在标记里的叫法；跟着立绘一起退暗 */\nbody.ctos .ctr-tag { position: absolute; z-index: 2; padding: 4px 8px 4px 9px; border: 1px solid var(--k-line-2, #383d44); border-left: 2px solid var(--k-acc); background: color-mix(in srgb, var(--k-bg) 86%, transparent); color: var(--k-ink); font: 600 12px/1.2 var(--k-cjk); letter-spacing: .08em; white-space: nowrap; opacity: 0; transition: opacity 420ms var(--k-ease), filter 320ms var(--k-ease); pointer-events: none; }\nbody.ctos .ctr-tag.in { opacity: 1; }\nbody.ctos .ctr-tag.dim { filter: brightness(.55); }\nbody.ctos .ctr-tag.cg { right: 16px; bottom: 16px; opacity: 1; }\n/* 有人站着或者铺了 CG，正文垫一层半透明的底，四周用阴影延出去，不改排版 */\nbody.ctos.ctr-full .ctr:is(.ctr-hascast, .ctr-hascg) .ctr-page {\n  background: color-mix(in srgb, var(--k-bg) 78%, transparent);\n  box-shadow: 0 0 0 22px color-mix(in srgb, var(--k-bg) 78%, transparent), 0 0 40px 30px color-mix(in srgb, var(--k-bg) 40%, transparent);\n}\n/* 宽屏上有人站着时，正文往没人的那边让（--ctr-cast-l / --ctr-cast-r 由 fitCast 按立绘实际宽度量出来） */\n@media (min-width: 701px) and (min-height: 601px) {\n  body.ctos.ctr-full .ctr.ctr-hascast > .ctr-stage { padding-left: max(40px, var(--ctr-cast-l, 0px)); padding-right: max(40px, var(--ctr-cast-r, 0px)); }\n}\nbody.ctos .ctr > .ctr-foot { grid-row: 4; }\nbody.ctos .ctr-think { margin: 0; border-bottom: 1px solid var(--k-line); color: var(--k-dim); }\nbody.ctos .ctr-think[hidden] { display: none; }\nbody.ctos .ctr-think summary { padding: 10px 16px; cursor: pointer; font: 400 11px/1.4 var(--k-mono); }\nbody.ctos .ctr-think pre { max-height: 28vh; overflow: auto; white-space: pre-wrap; overflow-wrap: anywhere; margin: 0; padding: 0 16px 14px; font: 400 12px/1.7 var(--k-cjk); color: var(--k-mute); }\nbody.ctos .ctr-stage { display: grid; padding: 30px 28px 34px; }\nbody.ctos .ctr[data-view=\"page\"] .ctr-stage { cursor: pointer; align-content: center; min-height: 340px; }\n/* 滚动：页与页之间一条分页线，左栏写第几页，换场时右边写新的地点 */\nbody.ctos .ctr[data-view=\"scroll\"] .ctr-page { gap: 0; }\nbody.ctos .ctr-sheet { display: grid; gap: 20px; }\nbody.ctos .ctr-rule { display: grid; grid-template-columns: var(--ctr-gutter) 1fr; align-items: center; margin: 26px 0 4px; }\nbody.ctos .ctr-rule span { padding-right: 18px; text-align: right; font: 500 10.5px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-dim); }\nbody.ctos .ctr-rule em { display: flex; align-items: center; gap: 12px; font: 400 12px/1.2 var(--k-cjk); font-style: normal; letter-spacing: .06em; color: var(--k-mute); }\nbody.ctos .ctr-rule em b { font-weight: 500; color: var(--k-ink); }\nbody.ctos .ctr-rule::after { content: ''; grid-column: 2; grid-row: 1; height: 1px; background: var(--k-line); }\nbody.ctos .ctr-rule:has(em)::after { display: none; }\nbody.ctos .ctr-rule em::after { content: ''; flex: 1; height: 1px; background: var(--k-line); }\nbody.ctos .ctr-page { width: 100%; max-width: calc(var(--ctr-measure) + var(--ctr-gutter)); margin: 0 auto; display: grid; gap: 20px; }\nbody.ctos .ctr-page:empty::before { content: 'RECEIVING'; justify-self: center; font: 500 10.5px/1 var(--k-mono); letter-spacing: .3em; color: var(--k-acc); animation: ctr-blink 1.2s steps(2) infinite; }\n\nbody.ctos .ctr-b { opacity: 1; transform: none; animation: none; }\n@keyframes ctr-blink { 50% { opacity: .3; } }\n\n/* 左栏：说话人、声部名、你、文本编号挂在同一条线上，右对齐 */\nbody.ctos :is(.ctr-dia, .ctr-voice, .ctr-doc) { display: grid; grid-template-columns: var(--ctr-gutter) minmax(0, 1fr); margin: 0; }\nbody.ctos .ctr-name { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; padding-right: 18px; text-align: right; }\nbody.ctos .ctr-name b { font: 500 12px/1.2 var(--k-cjk); letter-spacing: .12em; color: var(--k-mute); white-space: nowrap; }\nbody.ctos .ctr-name small { font: 700 8.5px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-dim); white-space: nowrap; }\n\n/* 旁白 */\nbody.ctos .ctr-narr { margin: 0; padding-left: var(--ctr-gutter); font: 400 18px/2 var(--k-serif); color: var(--k-prose); }\nbody.ctos .ctr-narr b { color: var(--k-ink); }\nbody.ctos .ctr-narr i { color: var(--k-mute); }\nbody.ctos .ctr-q { color: var(--k-ink); font-weight: 600; }\nbody.ctos .ctr-head-line { font-weight: 600; color: var(--k-ink); }\n/* 对话 */\nbody.ctos .ctr-dia { align-items: baseline; }\nbody.ctos .ctr-dia .ctr-name { display: block; }\nbody.ctos .ctr-dia .ctr-name.ctr-you b { color: var(--k-ink); }\nbody.ctos .ctr-line { margin: 0; font: 600 18px/2 var(--k-serif); color: var(--k-ink); }\n/* 内陆帝国：名签在左栏，正文带一条家族色竖线 */\nbody.ctos .ctr-voice { --vc: var(--k-mute); align-items: start; }\nbody.ctos .ctr-voice .ctr-name { padding-top: 9px; }\nbody.ctos .ctr-voice .ctr-name b { color: var(--vc); font-weight: 600; }\nbody.ctos .ctr-vbody { padding: 2px 0 2px 18px; border-left: 2px solid var(--vc, var(--k-line-2)); }\nbody.ctos .ctr-vmeta { display: block; margin: 6px 0 2px; font: 500 11px/1.4 var(--k-mono); letter-spacing: .06em; color: var(--k-dim); }\nbody.ctos .ctr-voice p { margin: 0; font: 400 15.5px/1.95 var(--k-cjk); color: var(--k-voice); }\nbody.ctos .ctr-voice p + p { margin-top: .5em; }\nbody.ctos .ctr-river { --vc: var(--k-river); }\nbody.ctos .ctr-lung { --vc: var(--k-acc); }\nbody.ctos .ctr-city { --vc: var(--k-ink); }\nbody.ctos .ctr-city .ctr-vbody { background: linear-gradient(90deg, rgba(235, 232, 226, .035), transparent 70%); }\nbody.ctos .ctr-old { --vc: var(--k-old); }\nbody.ctos .ctr-lily { --vc: var(--k-lily); }\nbody.ctos .ctr-hood { --vc: var(--k-hood); }\nbody.ctos .ctr-mem .ctr-vbody { border-left-style: dashed; }\nbody.ctos .ctr-mem p { color: #a7aab0; }\n/* 你在心里的回应 */\nbody.ctos .ctr-reply { --vc: var(--k-ink); }\nbody.ctos .ctr-reply .ctr-vbody { border-left: 2px solid var(--k-line-2); }\nbody.ctos .ctr-reply p { color: var(--k-ink); }\n/* 文本：题注在上，纸面在下 */\nbody.ctos .ctr-doc { align-items: start; }\nbody.ctos .ctr-doc .ctr-name { padding-top: 1px; }\nbody.ctos .ctr-doc .ctr-name b { color: var(--k-ink); }\nbody.ctos .ctr-doc .ctr-vbody { padding: 0; border: 0; }\nbody.ctos .ctr-doc figcaption { margin-bottom: 8px; font: 400 12px/1.3 var(--k-cjk); letter-spacing: .04em; color: var(--k-mute); }\nbody.ctos .ctr-paper { position: relative; padding: 18px 22px; background: var(--k-ink); color: #15171a; font: 600 16px/1.9 var(--k-serif); }\nbody.ctos .ctr-paper::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(0, 0, 0, .035) 0 1px, transparent 1px 3px); }\n\n/* 页脚 */\nbody.ctos .ctr-foot {\n  display: flex; gap: 18px; align-items: center;\n  min-height: 42px; padding: 0 0 0 16px; border-top: 1px solid var(--k-line);\n  font: 500 10.5px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-dim);\n}\nbody.ctos .ctr-no b { font: 700 15px/1 var(--k-cond); letter-spacing: .04em; color: var(--k-ink); }\nbody.ctos .ctr-ticks { flex: 1; display: flex; gap: 3px; align-items: center; min-width: 0; overflow: hidden; }\nbody.ctos .ctr[data-view=\"scroll\"] :is(.ctr-ticks, .ctr-nav) { display: none; }\nbody.ctos .ctr-no { margin-right: auto; white-space: nowrap; }\nbody.ctos .ctr[data-view=\"page\"] .ctr-no { margin-right: 0; }\nbody.ctos .ctr-ticks i { flex: 1 1 0; max-width: 18px; height: 5px; border: 1px solid var(--k-line-2); cursor: pointer; }\nbody.ctos .ctr-ticks i.on { background: var(--k-mute); border-color: var(--k-mute); }\nbody.ctos .ctr-ticks i.now { background: var(--k-acc); border-color: var(--k-acc); }\nbody.ctos .ctr.ctr-live .ctr-ticks i:last-child:not(.now) { border-style: dashed; }\nbody.ctos .ctr-hint, body.ctos .ctr-recv, body.ctos .ctr-stop { display: none; }\nbody.ctos :is(.ctr.ctr-live, body.ctr-generating .ctr-focus .ctr) .ctr-recv { display: inline; color: var(--k-acc); animation: ctr-blink 1.2s steps(2) infinite; }\nbody.ctos.ctr-generating .ctr-focus .ctr-stop { display: block; align-self: stretch; padding: 0 14px; border-left: 1px solid var(--k-line); font: 700 10px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-acc); }\nbody.ctos.ctr-generating .ctr-focus .ctr-stop:hover { background: var(--k-raise); }\nbody.ctos .ctr-nav { display: flex; align-self: stretch; }\nbody.ctos .ctr-goto { display: flex; align-items: center; gap: 6px; padding: 0 12px; border-left: 1px solid var(--k-line); font: 400 12px/1 var(--k-cjk); letter-spacing: .04em; color: var(--k-mute); white-space: nowrap; }\nbody.ctos .ctr-goto input {\n  width: 46px; height: 26px; padding: 0 6px; margin: 0; text-align: center;\n  font: 700 13px/1 var(--k-cond); letter-spacing: .04em; color: var(--k-ink);\n  background: var(--k-bg); border: 1px solid var(--k-line-2); -moz-appearance: textfield;\n}\nbody.ctos .ctr-goto input::-webkit-inner-spin-button, body.ctos .ctr-goto input::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }\nbody.ctos .ctr-goto input:focus { border-color: var(--k-ink); outline: none; }\nbody.ctos .ctr-nav .ctr-btn { min-width: 76px; border-left: 1px solid var(--k-line); font: 700 10px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-mute); }\nbody.ctos .ctr-nav .ctr-btn:hover:not(:disabled) { color: var(--k-ink); background: var(--k-raise); }\nbody.ctos .ctr-nav .ctr-btn:disabled { opacity: .35; cursor: default; }\nbody.ctos .ctr-end .ctr-nav [data-ctr=\"next\"] { color: var(--k-acc); }\n\n/* ============================================================\n   全屏模式：最新一条回复铺满窗口\n   ============================================================ */\nbody.ctos.ctr-full #top-settings-holder { display: none; }\nbody.ctos.ctr-full #sheld { left: 0; opacity: 1; }\nbody.ctos.ctr-full #chat { overflow: hidden; padding: 0; }\nbody.ctos.ctr-full #chat > .mes:not(.ctr-focus) { display: none !important; }\nbody.ctos.ctr-full #chat > .mes.ctr-focus {\n  position: fixed; inset: 0 0 var(--ctr-dock, 0px) 0; z-index: 40;\n  max-width: none; margin: 0; padding: 0; border: 0;\n  display: flex; flex-direction: column; background: var(--k-bg);\n  transition: bottom 320ms var(--k-ease);\n}\nbody.ctos.ctr-full .mes.ctr-focus > .mes_block { flex: 1; min-height: 0; display: flex; flex-direction: column; width: 100%; }\nbody.ctos.ctr-full .mes.ctr-focus .ch_name,\nbody.ctos.ctr-full .mes.ctr-focus .mes_reasoning_details,\nbody.ctos.ctr-full .mes.ctr-focus .mes_text > details { display: none; }\nbody.ctos.ctr-full .mes.ctr-focus .ctr { flex: 1; min-height: 0; margin: 0; border: 0; }\nbody.ctos.ctr-full .ctr-head { min-height: 52px; padding-left: 40px; }\nbody.ctos.ctr-full .ctr-stage { min-height: 0; overflow-y: auto; overscroll-behavior: contain; padding: 28px 40px; }\nbody.ctos.ctr-full { --ctr-pad-x: 40px; }\nbody.ctos.ctr-full .ctr-foot { min-height: 48px; padding-left: 40px; }\nbody.ctos.ctr-full:not(.ctr-generating) .ctr-focus .ctr:not(.ctr-live) .ctr-hint { display: inline; color: var(--k-dim); }\nbody.ctos.ctr-full .mes.ctr-focus .mes_text { flex: none; max-height: 40vh; overflow-y: auto; margin: 0 40px 12px; }\nbody.ctos.ctr-full #form_sheld { width: calc(100% - 80px); max-width: none; margin: 0 40px 16px; }\n\n@media (prefers-reduced-motion: reduce) {\n  body.ctos .ctr-b, body.ctos #form_sheld { animation: none; opacity: 1; transform: none; }\n  body.ctos #top-settings-holder .drawer-content.openDrawer { animation: none; }\n}\n\n\n/* ------------------------------------------------------------\n   道尔顿的笔记本（codex.js）：正文划线、悬浮框、面板\n   悬浮框和面板挂在 body 上；按钮先清掉酒馆的全局样式，组件规则再加 body.ctos 前缀压过去\n   ------------------------------------------------------------ */\nbody.ctos {\n  --cdx-paper: #ebe8e2; --cdx-paper-ink: #15171a; --cdx-paper-mute: #6b6760;\n  --cdx-fab: 56px;\n}\n.cdx-fab, .cdx-panel, .cdx-tip { display: none; }\n.cdx-fab, .cdx-fab *, .cdx-panel, .cdx-panel *, .cdx-tip, .cdx-tip *, .cdx-slip { box-sizing: border-box; }\n.cdx-fab, .cdx-panel button, .cdx-panel input, .cdx-panel select, .cdx-tip button {\n  margin: 0; padding: 0; border: 0; border-radius: 0; background: none; color: inherit; font: inherit;\n  box-shadow: none; outline: none; min-width: 0; width: auto; height: auto; filter: none; opacity: 1;\n}\n.cdx-panel button, .cdx-tip button, .cdx-fab { cursor: pointer; }\n.cdx-panel *, .cdx-tip * { margin: 0; }\n\n/* 划线：::before 是虚线（来源决定样式），::after 是点击时从左往右填满的橙线。\n   汉字字身贴满整个字框，线放到字框外面一点，不然会被笔画盖住 */\nbody.ctos.cdx-on .cdx-term { position: relative; cursor: pointer; --u: rgba(220, 216, 208, .58); transition: color 160ms var(--k-ease); }\nbody.ctos.cdx-on .cdx-term::before, body.ctos.cdx-on .cdx-term::after { content: ''; position: absolute; left: 0; right: 0; height: 1px; pointer-events: none; transform-origin: left; }\nbody.ctos.cdx-on .cdx-term::before { bottom: -.22em; background: repeating-linear-gradient(90deg, var(--u) 0 2px, transparent 2px 4px); }\nbody.ctos.cdx-on .cdx-term::after { bottom: -.24em; height: 1.5px; background: var(--k-acc); transform: scaleX(0); transition: transform 150ms var(--k-ease); }\nbody.ctos.cdx-on .cdx-term:hover { --u: var(--k-ink); color: var(--k-ink); }\nbody.ctos.cdx-on .cdx-term.seen { --u: rgba(144, 151, 160, .4); }\nbody.ctos.cdx-on .cdx-term[data-src=\"manual\"] { --u: rgba(235, 232, 226, .72); }\nbody.ctos.cdx-on .cdx-term[data-src=\"manual\"]::before { background: var(--u); }\nbody.ctos.cdx-on .cdx-term.hit::after { transform: scaleX(1); }\nbody.ctos.cdx-on .cdx-term.drawin::before { animation: cdx-draw 520ms var(--k-ease) both; }\nbody.ctos.cdx-on .cdx-term.flash { animation: cdx-flash 1.4s var(--k-ease); }\n@keyframes cdx-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }\n@keyframes cdx-flash { 0%, 40% { background: rgba(255, 77, 46, .28); } to { background: transparent; } }\n\n/* 选中文字后浮出的划线条 */\nbody.ctos.cdx-on .cdx-tip { position: fixed; z-index: 3004; align-items: stretch; background: var(--k-panel); border: 1px solid var(--k-line-2); box-shadow: 0 12px 30px rgba(0, 0, 0, .45); font: 700 10px/1 var(--k-mono); letter-spacing: .14em; color: var(--k-mute); }\nbody.ctos.cdx-on .cdx-tip.on { display: flex; animation: cdx-tipin 160ms var(--k-ease); }\n@keyframes cdx-tipin { from { opacity: 0; transform: translateY(4px); } }\nbody.ctos .cdx-tip button { padding: 10px 12px; color: var(--k-mute); white-space: nowrap; font: 700 10px/1 var(--k-mono); letter-spacing: .14em; }\nbody.ctos .cdx-tip button:hover { color: var(--k-ink); background: var(--k-raise); }\nbody.ctos .cdx-tip button.main { color: var(--k-ink); }\nbody.ctos .cdx-tip button.main i { display: inline-block; width: 14px; height: 1px; margin-right: 8px; vertical-align: middle; background: var(--k-ink); }\nbody.ctos .cdx-tip button + button { border-left: 1px solid var(--k-line-2); }\nbody.ctos .cdx-tip .cdx-warn { padding: 10px 12px; font: 400 12px/1 var(--k-cjk); letter-spacing: .04em; color: var(--k-mute); }\nbody.ctos .cdx-tip::after { content: ''; position: absolute; left: var(--ax, 50%); bottom: -5px; width: 8px; height: 8px; background: var(--k-panel); border-right: 1px solid var(--k-line-2); border-bottom: 1px solid var(--k-line-2); transform: translateX(-50%) rotate(45deg); }\n\n/* 悬浮框 */\nbody.ctos.cdx-on .cdx-fab { display: block; position: fixed; z-index: 3002; width: var(--cdx-fab); height: var(--cdx-fab); right: 40px; bottom: calc(var(--ctr-dock, 0px) + 24px); touch-action: none; user-select: none; transition: bottom 320ms var(--k-ease); }\n/* 全屏时阅读器自己的翻页栏贴在输入框上面，悬浮框再往上让出这一栏 */\nbody.ctos.ctr-full.cdx-on .cdx-fab:not(.placed) { bottom: calc(var(--ctr-dock, 0px) + 96px); }\nbody.ctos .cdx-fab.placed { right: auto; bottom: auto; transition: none; }\nbody.ctos .cdx-face { position: absolute; inset: 0; overflow: hidden; transition: transform 160ms var(--k-ease); }\nbody.ctos .cdx-fab:hover .cdx-face { transform: translateY(-2px); }\nbody.ctos .cdx-fab.dragging .cdx-face { transform: scale(1.04); cursor: grabbing; }\n/* 纸本：黑色硬壳，右缘露一线纸页，一根橙色松紧带 */\nbody.ctos .cdx-cover { position: absolute; inset: 0; background:\n  linear-gradient(90deg, transparent 0 66%, var(--k-acc) 66% calc(66% + 4px), transparent calc(66% + 4px)),\n  linear-gradient(180deg, #23272c, #15181b); box-shadow: inset -3px 0 0 #cfcac0, inset -4px 0 0 #8d8a83, inset 0 0 0 1px #3a3f46; }\nbody.ctos .cdx-cover small { position: absolute; left: 7px; bottom: 6px; font: 700 7.5px/1 var(--k-mono); letter-spacing: .16em; color: #8e949b; }\nbody.ctos .cdx-cover em { position: absolute; left: 7px; top: 8px; width: 18px; height: 1px; background: #5c626a; box-shadow: 0 4px 0 #5c626a, 0 8px 0 #44494f; }\n/* 天问上线：头像 */\nbody.ctos .cdx-avatar { position: absolute; inset: 0; display: none; place-items: center; background: var(--av-bg, var(--k-panel)); box-shadow: inset 0 0 0 1px var(--k-line-2); font: 800 26px/1 var(--k-cond); color: var(--av-ink, var(--k-ink)); background-size: cover; background-position: center; }\nbody.ctos .cdx-fab.tw .cdx-cover { display: none; }\nbody.ctos .cdx-fab.tw .cdx-avatar { display: grid; }\nbody.ctos .cdx-fab.tw .cdx-face { box-shadow: 0 0 0 1px var(--k-acc); }\n/* 后台在跑：底边扫一道细光；新词计数 */\nbody.ctos .cdx-sweep { position: absolute; left: 0; right: 0; bottom: 0; height: 2px; overflow: hidden; opacity: 0; transition: opacity 200ms; }\nbody.ctos .cdx-sweep::after { content: ''; position: absolute; top: 0; bottom: 0; width: 40%; background: linear-gradient(90deg, transparent, var(--k-acc), transparent); animation: cdx-sweep 1.3s linear infinite; }\nbody.ctos .cdx-fab.busy .cdx-sweep { opacity: 1; }\n@keyframes cdx-sweep { from { left: -40%; } to { left: 100%; } }\nbody.ctos .cdx-badge { position: absolute; top: -7px; left: -7px; min-width: 22px; height: 18px; padding: 0 5px; display: none; place-items: center; background: var(--k-acc); color: var(--k-bg); font: 700 10px/1 var(--k-mono); letter-spacing: .04em; }\nbody.ctos .cdx-badge.on { display: grid; animation: cdx-pop 260ms var(--k-ease); }\n@keyframes cdx-pop { from { transform: scale(.4); } }\nbody.ctos .cdx-br { position: absolute; width: 9px; height: 9px; border: 0 solid var(--k-acc); opacity: 0; pointer-events: none; }\nbody.ctos .cdx-br.a { top: -6px; left: -6px; border-top-width: 1.5px; border-left-width: 1.5px; }\nbody.ctos .cdx-br.b { top: -6px; right: -6px; border-top-width: 1.5px; border-right-width: 1.5px; }\nbody.ctos .cdx-br.c { bottom: -6px; left: -6px; border-bottom-width: 1.5px; border-left-width: 1.5px; }\nbody.ctos .cdx-br.d { bottom: -6px; right: -6px; border-bottom-width: 1.5px; border-right-width: 1.5px; }\nbody.ctos .cdx-fab.ping .cdx-br { animation: cdx-bracket 320ms var(--k-ease) both; }\n@keyframes cdx-bracket { from { opacity: 0; transform: scale(1.9); } 60% { opacity: 1; } to { opacity: 1; transform: none; } }\nbody.ctos .cdx-slice { position: absolute; left: 0; right: 0; background:\n  linear-gradient(90deg, transparent 0 66%, var(--k-acc) 66% calc(66% + 4px), transparent calc(66% + 4px)), #1b1e22; box-shadow: inset -3px 0 0 #cfcac0; }\n\n/* 飞向悬浮框的纸条 */\n.cdx-slip { position: fixed; z-index: 3006; left: 0; top: 0; padding: 3px 8px; pointer-events: none; white-space: nowrap; background: #ebe8e2; color: #15171a; font: 600 15px/1.4 'Noto Serif SC', 'Songti SC', serif; box-shadow: 0 6px 16px rgba(0, 0, 0, .4); }\n.cdx-slip.tw { background: #0b0c0e; color: #ff4d2e; border: 1px solid #ff4d2e; font: 700 12px/1.4 'JetBrains Mono', Menlo, monospace; letter-spacing: .06em; }\n\n/* 面板 */\nbody.ctos.cdx-on .cdx-panel { position: fixed; z-index: 3003; width: 380px; max-width: calc(100vw - 24px); height: min(560px, calc(100dvh - 140px)); grid-template-rows: auto auto 1fr auto; font: 400 14px/1.6 var(--k-cjk); text-align: left; }\nbody.ctos.cdx-on .cdx-panel.on { display: grid; animation: cdx-unfold 260ms var(--k-ease) both; }\nbody.ctos.cdx-on .cdx-panel.off { display: grid; animation: cdx-fold 180ms var(--k-ease) both; }\n@keyframes cdx-unfold { from { clip-path: inset(var(--from)); } to { clip-path: inset(0); } }\n@keyframes cdx-fold { to { clip-path: inset(var(--from)); } }\n\n/* 纸本内页：米白纸面、横格、衬线字 */\nbody.ctos .cdx-panel.nb { background: var(--cdx-paper) repeating-linear-gradient(180deg, transparent 0 31px, rgba(21, 23, 26, .07) 31px 32px); color: var(--cdx-paper-ink); box-shadow: 0 24px 60px rgba(0, 0, 0, .55), inset 3px 0 0 #d6d1c7; }\nbody.ctos .cdx-panel.nb::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(0, 0, 0, .025) 0 1px, transparent 1px 3px); }\nbody.ctos .cdx-head { display: grid; grid-template-columns: 1fr auto auto; align-items: end; gap: 12px; padding: 18px 20px 12px; }\nbody.ctos .cdx-title b { display: block; font: 700 20px/1.1 var(--k-serif); }\nbody.ctos .cdx-title small { display: block; margin-top: 6px; font: 700 9px/1 var(--k-mono); letter-spacing: .18em; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-full { font: 700 10px/1 var(--k-mono); letter-spacing: .14em; padding: 6px 0; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-full:hover { color: var(--k-acc); }\n\n/* 全屏：占满视口，让开 ctOS 外壳（桌面是左侧竖栏，手机是顶部横栏）。\n   手机端酒馆把 body 设成 fixed，所以给死宽高而不是 inset */\nbody.ctos.cdx-on .cdx-panel.full { left: var(--cdx-left, 0px) !important; top: var(--cdx-top, 0px) !important; width: calc(100vw - var(--cdx-left, 0px)); height: calc(100dvh - var(--cdx-top, 0px)); max-width: calc(100vw - var(--cdx-left, 0px)); max-height: calc(100dvh - var(--cdx-top, 0px)); box-shadow: none; animation: none; }\nbody.ctos .cdx-panel.full .cdx-head { padding: 22px 34px 14px; }\nbody.ctos .cdx-panel.full .cdx-tabs { padding: 0 34px 12px; }\nbody.ctos .cdx-panel.full .cdx-body { padding: 10px 34px 24px; }\nbody.ctos .cdx-panel.full .cdx-foot { padding: 12px 34px; }\nbody.ctos .cdx-panel.full .cdx-grid { grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); }\nbody.ctos .cdx-panel.full .cdx-bks { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }\nbody.ctos .cdx-panel.full .cdx-ents { grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); }\nbody.ctos .cdx-panel.full .cdx-edit { max-width: 1100px; }\nbody.ctos .cdx-panel.full .cdx-edit .cdx-text { min-height: 40dvh; }\n@media screen and (max-width: 700px) {\n  body.ctos .cdx-panel.full .cdx-body { padding: 8px 16px 20px; }\n  body.ctos .cdx-panel.full .cdx-head { padding: 14px 16px 10px; }\n  body.ctos .cdx-panel.full .cdx-tabs, body.ctos .cdx-panel.full .cdx-foot { padding-left: 16px; padding-right: 16px; }\n}\nbody.ctos .cdx-x { font: 700 10px/1 var(--k-mono); letter-spacing: .14em; padding: 6px 0; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-x:hover { color: var(--k-acc); }\nbody.ctos .cdx-search { grid-column: 1 / -1; border-bottom: 1px solid var(--cdx-paper-ink); }\nbody.ctos .cdx-search input { display: block; width: 100%; padding: 6px 0; font: 400 14px/1.4 var(--k-serif); color: inherit; }\nbody.ctos .cdx-search input::placeholder { color: var(--cdx-paper-mute); }\nbody.ctos .cdx-tabs { display: flex; flex-wrap: wrap; gap: 4px 16px; padding: 0 20px 10px; }\nbody.ctos .cdx-tabs button { position: relative; padding: 6px 0; font: 500 13px/1 var(--k-cjk); color: var(--cdx-paper-mute); }\nbody.ctos .cdx-tabs button.on { color: var(--cdx-paper-ink); }\nbody.ctos .cdx-tabs button.on::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1.5px; background: var(--k-acc); }\nbody.ctos .cdx-body { position: relative; z-index: 1; overflow-y: auto; overscroll-behavior: contain; padding: 6px 20px 16px; }\nbody.ctos .cdx-foot { position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 10px 20px; border-top: 1px solid rgba(21, 23, 26, .18); font: 700 9.5px/1 var(--k-mono); letter-spacing: .14em; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-foot button { font: 700 9.5px/1 var(--k-mono); letter-spacing: .14em; color: inherit; }\nbody.ctos .cdx-foot button:hover { color: var(--k-acc); }\n\n/* 词条格：双线框 */\nbody.ctos .cdx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\nbody.ctos .cdx-tile { position: relative; padding: 11px 12px 10px; text-align: left; border: 1px solid var(--cdx-paper-ink); box-shadow: inset 0 0 0 2px var(--cdx-paper), inset 0 0 0 3px var(--cdx-paper-ink); transition: transform 120ms var(--k-ease), background 120ms; }\nbody.ctos .cdx-tile:hover { background: rgba(21, 23, 26, .05); }\nbody.ctos .cdx-tile:active { transform: translateY(1px); }\nbody.ctos .cdx-tile b { display: block; font: 700 16px/1.25 var(--k-serif); word-break: break-all; }\nbody.ctos .cdx-tile small { display: block; margin-top: 5px; font: 700 8.5px/1 var(--k-mono); letter-spacing: .16em; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-tile.pending { border-style: dashed; box-shadow: none; }\nbody.ctos .cdx-tile.pending small::after { content: ' · 整理中'; color: var(--k-acc); }\nbody.ctos .cdx-tile.failed small::after { content: ' · 未写出'; }\nbody.ctos .cdx-empty { padding: 30px 0; font: 400 14px/1.8 var(--k-serif); color: var(--cdx-paper-mute); }\n\n/* 词条详情 */\nbody.ctos .cdx-entry { display: grid; gap: 12px; }\n/* 人物词条的立绘：一张大图，下面一排衣装缩略图；纸本和电子版共用，底色跟着面板走 */\nbody.ctos .cdx-gal { display: grid; gap: 8px; }\nbody.ctos .cdx-gal-main { position: relative; display: grid; place-items: end center; height: min(360px, 46dvh); overflow: hidden; border: 1px solid currentColor; background: radial-gradient(ellipse at 50% 85%, rgba(127, 127, 127, .18), transparent 70%); }\nbody.ctos .cdx-panel.full .cdx-gal-main { height: min(520px, 58dvh); }\nbody.ctos .cdx-gal-main img { height: 100%; width: auto; max-width: 100%; object-fit: contain; object-position: 50% 100%; }\nbody.ctos .cdx-gal-main.cg { place-items: center; }\nbody.ctos .cdx-gal-main.cg img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 22%; max-width: none; }\nbody.ctos .cdx-gal-main figcaption { position: absolute; right: 0; bottom: 0; padding: 4px 9px 4px 10px; border-left: 2px solid var(--k-acc); background: rgba(11, 12, 14, .82); color: #ebe8e2; font: 600 11px/1.3 var(--k-cjk); letter-spacing: .08em; }\nbody.ctos .cdx-gal-strip { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }\nbody.ctos .cdx-gal-strip button { flex: none; display: grid; justify-items: center; gap: 2px; width: 54px; padding: 3px 2px 4px; border: 1px solid transparent; background: none; color: inherit; opacity: .62; transition: opacity 160ms, border-color 160ms; }\nbody.ctos .cdx-gal-strip button:hover { opacity: .9; }\nbody.ctos .cdx-gal-strip button.on { opacity: 1; border-color: var(--k-acc); }\n/* 缩略图整张缩进框里，坐姿的水着也看得见人；CG 是横幅，裁中间 */\nbody.ctos .cdx-gal-strip img { width: 46px; height: 64px; object-fit: contain; object-position: 50% 100%; }\nbody.ctos .cdx-gal-strip button.cg img { object-fit: cover; object-position: 50% 30%; }\nbody.ctos .cdx-gal-strip span { font: 600 9.5px/1.2 var(--k-mono), var(--k-cjk); letter-spacing: .04em; }\nbody.ctos .cdx-gal-none { font: 400 12.5px/1.7 var(--k-cjk); opacity: .7; }\n/* 列表里人物名字格的小头像 */\nbody.ctos .cdx-tile.has-av { padding-left: 58px; min-height: 58px; }\nbody.ctos .cdx-av-face { position: absolute; left: 10px; top: 50%; width: 38px; height: 38px; margin-top: -19px; overflow: hidden; border: 1px solid currentColor; border-radius: 50%; background: rgba(127, 127, 127, .15); }\nbody.ctos .cdx-av-face img { position: absolute; max-width: none; height: auto; }\nbody.ctos .cdx-back { justify-self: start; font: 700 10px/1 var(--k-mono); letter-spacing: .14em; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-back:hover { color: var(--k-acc); }\nbody.ctos .cdx-e-name { font: 700 28px/1.15 var(--k-serif); color: inherit; }\nbody.ctos .cdx-e-kind { margin-bottom: 6px; font: 700 9px/1 var(--k-mono); letter-spacing: .18em; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-e-dis { padding-left: 10px; border-left: 2px solid var(--k-acc); font: 400 13px/1.6 var(--k-cjk); color: #3d3b37; }\nbody.ctos .cdx-e-desc { font: 400 15.5px/1.95 var(--k-serif); }\nbody.ctos .cdx-e-fail { font: 400 13px/1.7 var(--k-cjk); color: var(--cdx-paper-mute); }\nbody.ctos .cdx-e-meta { display: flex; flex-wrap: wrap; gap: 8px; padding-top: 10px; border-top: 1px solid rgba(21, 23, 26, .18); }\nbody.ctos .cdx-chip { justify-self: start; padding: 5px 8px; border: 1px solid rgba(21, 23, 26, .35); font: 700 9.5px/1 var(--k-mono); letter-spacing: .12em; color: #3d3b37; }\nbody.ctos button.cdx-chip:hover { border-color: var(--k-acc); color: var(--k-acc); }\n\n/* 书库：内置的世界书管理 */\nbody.ctos .cdx-bkbar { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; padding: 2px 0 10px; border-bottom: 1px solid rgba(21, 23, 26, .18); }\nbody.ctos .cdx-bkbar b { font: 700 14px/1.3 var(--k-serif); word-break: break-all; }\nbody.ctos .cdx-bkbar span { font: 700 9px/1 var(--k-mono); letter-spacing: .14em; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-bkbar .cdx-chip:last-child { margin-left: auto; }\nbody.ctos .cdx-bks { display: grid; gap: 6px; padding: 10px 0 4px; }\nbody.ctos .cdx-bk { display: grid; grid-template-columns: 1fr auto; align-items: baseline; gap: 10px; width: 100%; padding: 8px 10px; text-align: left; border: 1px solid var(--cdx-paper-ink); }\nbody.ctos .cdx-bk:hover { background: rgba(21, 23, 26, .05); }\nbody.ctos .cdx-bk b { font: 700 14px/1.3 var(--k-serif); word-break: break-all; }\nbody.ctos .cdx-bk small { font: 700 9px/1 var(--k-mono); letter-spacing: .12em; color: var(--cdx-paper-mute); white-space: nowrap; }\nbody.ctos .cdx-ents { display: grid; gap: 2px; padding: 10px 0 4px; }\nbody.ctos .cdx-ent { display: grid; gap: 3px; width: 100%; padding: 7px 9px; text-align: left; border-left: 2px solid transparent; border-bottom: 1px solid rgba(21, 23, 26, .12); }\nbody.ctos .cdx-ent:hover { background: rgba(21, 23, 26, .05); }\nbody.ctos .cdx-ent.on { border-left-color: var(--k-acc); }\nbody.ctos .cdx-ent.live { background: rgba(232, 69, 47, .1); }\nbody.ctos .cdx-ent b { font: 700 13.5px/1.4 var(--k-serif); word-break: break-all; }\nbody.ctos .cdx-ent small { font: 700 8.5px/1.35 var(--k-mono); letter-spacing: .06em; color: var(--cdx-paper-mute); word-break: break-all; }\nbody.ctos .cdx-edit { display: grid; gap: 2px; }\nbody.ctos .cdx-edit .cdx-row { display: grid; grid-template-columns: 60px 1fr; gap: 10px; align-items: center; padding: 6px 0; border-bottom: 1px solid rgba(21, 23, 26, .14); font: 400 13px/1.4 var(--k-cjk); }\nbody.ctos .cdx-edit .cdx-row.cdx-multi { grid-template-columns: 60px auto auto auto; justify-content: start; }\nbody.ctos .cdx-edit .cdx-row > span { color: var(--cdx-paper-mute); font-size: 12px; }\nbody.ctos .cdx-edit input:not([type=\"checkbox\"]), body.ctos .cdx-edit select { width: 100%; padding: 5px 7px; border: 1px solid rgba(21, 23, 26, .3); background: transparent; font: 400 13px/1.4 var(--k-cjk); color: inherit; }\nbody.ctos .cdx-edit .cdx-text { width: 100%; min-height: 200px; margin-top: 8px; padding: 10px; border: 1px solid var(--cdx-paper-ink); background: transparent; color: inherit; font: 400 13px/1.75 var(--k-cjk); resize: vertical; }\nbody.ctos .cdx-edit .cdx-bkbar { border-bottom: 0; padding-top: 10px; }\nbody.ctos .cdx-panel.tw .cdx-bk, body.ctos .cdx-panel.tw .cdx-edit .cdx-text { border-color: var(--k-line-2); }\nbody.ctos .cdx-panel.tw .cdx-edit input:not([type=\"checkbox\"]), body.ctos .cdx-panel.tw .cdx-edit select { border-color: var(--k-line-2); color: var(--k-ink); }\nbody.ctos .cdx-skel { display: grid; gap: 10px; }\nbody.ctos .cdx-skel i { height: 12px; background: linear-gradient(90deg, rgba(21, 23, 26, .08) 0%, rgba(21, 23, 26, .16) 50%, rgba(21, 23, 26, .08) 100%) 0 0 / 200% 100%; animation: cdx-shimmer 1.2s linear infinite; }\nbody.ctos .cdx-skel i:nth-child(3) { width: 82%; }\nbody.ctos .cdx-skel span { font: 700 9.5px/1 var(--k-mono); letter-spacing: .16em; color: var(--k-acc); }\n@keyframes cdx-shimmer { to { background-position: -200% 0; } }\n\n/* 设置 */\nbody.ctos .cdx-set { display: grid; }\nbody.ctos .cdx-set .cdx-row { display: grid; grid-template-columns: 96px 1fr; gap: 12px; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(21, 23, 26, .14); font: 400 13px/1.4 var(--k-cjk); }\nbody.ctos .cdx-set .cdx-row > span { color: var(--cdx-paper-mute); font-size: 12px; }\nbody.ctos .cdx-set select { width: 100%; padding: 4px 0; border-bottom: 1px solid var(--cdx-paper-ink); font: 400 13px/1.4 var(--k-cjk); color: inherit; background: transparent; }\nbody.ctos .cdx-set select option { color: var(--k-ink); background: var(--k-panel); }\nbody.ctos .cdx-checks { display: flex; flex-wrap: wrap; gap: 4px 14px; }\nbody.ctos .cdx-checks label { display: flex; align-items: center; gap: 6px; }\nbody.ctos .cdx-set input[type=checkbox] { margin: 0; accent-color: var(--k-acc); }\nbody.ctos .cdx-avs { display: flex; gap: 8px; align-items: center; }\nbody.ctos .cdx-av { width: 34px; height: 34px; display: grid; place-items: center; font: 800 15px/1 var(--k-cond); background: var(--av-bg); color: var(--av-ink); box-shadow: inset 0 0 0 1px rgba(21, 23, 26, .3); background-size: cover; background-position: center; }\nbody.ctos .cdx-av.on { outline: 1.5px solid var(--k-acc); outline-offset: 2px; }\nbody.ctos .cdx-av.up { font: 700 9px/1 var(--k-mono); letter-spacing: .08em; border: 1px dashed rgba(21, 23, 26, .45); box-shadow: none; color: var(--cdx-paper-mute); }\nbody.ctos .cdx-note { margin-top: 10px; font: 400 12px/1.7 var(--k-cjk); color: var(--cdx-paper-mute); }\nbody.ctos .cdx-set .cdx-back { margin-top: 12px; }\n\n/* 电子版：黑底终端，四角取景框，一道扫描线 */\nbody.ctos .cdx-panel.tw { background: var(--k-bg); color: var(--k-ink); border: 1px solid var(--k-line-2); box-shadow: 0 24px 60px rgba(0, 0, 0, .6); }\nbody.ctos .cdx-panel.tw::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(255, 255, 255, .02) 0 1px, transparent 1px 3px); }\nbody.ctos .cdx-panel.tw .cdx-title { display: flex; gap: 10px; align-items: center; }\nbody.ctos .cdx-panel.tw .cdx-title b { font: 700 13px/1.1 var(--k-mono); letter-spacing: .14em; }\nbody.ctos .cdx-mini { width: 28px; height: 28px; flex: none; display: grid; place-items: center; background: var(--av-bg); color: var(--av-ink); font: 800 13px/1 var(--k-cond); background-size: cover; background-position: center; box-shadow: 0 0 0 1px var(--k-acc); }\nbody.ctos .cdx-panel.tw :is(.cdx-title small, .cdx-x, .cdx-full, .cdx-tabs button, .cdx-back, .cdx-e-kind, .cdx-foot, .cdx-e-fail, .cdx-row > span, .cdx-note, .cdx-empty) { color: var(--k-dim); }\nbody.ctos .cdx-panel.tw .cdx-search { border-bottom-color: var(--k-line-2); }\nbody.ctos .cdx-panel.tw .cdx-search input { font: 400 13px/1.4 var(--k-mono); }\nbody.ctos .cdx-panel.tw .cdx-search input::placeholder { color: var(--k-dim); }\nbody.ctos .cdx-panel.tw .cdx-tabs button.on { color: var(--k-ink); }\nbody.ctos .cdx-panel.tw .cdx-tile { border: 1px solid var(--k-line-2); box-shadow: none; }\nbody.ctos .cdx-panel.tw .cdx-tile.pending { border-style: dashed; }\nbody.ctos .cdx-panel.tw .cdx-tile:hover { border-color: var(--k-acc); background: var(--k-raise); }\nbody.ctos .cdx-panel.tw .cdx-tile b { font: 500 14px/1.3 var(--k-cjk); }\nbody.ctos .cdx-panel.tw .cdx-tile small { color: var(--k-dim); }\nbody.ctos .cdx-panel.tw .cdx-e-name { font: 600 24px/1.2 var(--k-cjk); }\nbody.ctos .cdx-panel.tw .cdx-e-dis { color: var(--k-mute); }\nbody.ctos .cdx-panel.tw .cdx-e-desc { font: 400 14.5px/1.9 var(--k-cjk); color: #c9ccd0; }\nbody.ctos .cdx-panel.tw :is(.cdx-e-meta, .cdx-foot, .cdx-row) { border-color: var(--k-line); }\nbody.ctos .cdx-panel.tw .cdx-chip { border-color: var(--k-line-2); color: var(--k-mute); }\nbody.ctos .cdx-panel.tw .cdx-skel i { background: linear-gradient(90deg, #16191d, #262a2f, #16191d) 0 0 / 200% 100%; }\nbody.ctos .cdx-panel.tw .cdx-set select { border-color: var(--k-line-2); }\nbody.ctos .cdx-panel.tw .cdx-av { box-shadow: inset 0 0 0 1px var(--k-line-2); }\nbody.ctos .cdx-panel.tw .cdx-av.up { border-color: var(--k-line-2); color: var(--k-dim); }\nbody.ctos .cdx-scan { position: absolute; left: 0; right: 0; top: 0; height: 40px; z-index: 2; pointer-events: none; display: none; background: linear-gradient(180deg, transparent, rgba(255, 77, 46, .16) 70%, rgba(255, 77, 46, .7) 100%); }\nbody.ctos .cdx-panel.tw.scanning .cdx-scan { display: block; animation: cdx-scan 420ms var(--k-ease) both; }\n@keyframes cdx-scan { from { transform: translateY(-40px); } to { transform: translateY(var(--h, 560px)); opacity: 0; } }\nbody.ctos .cdx-cn { position: absolute; z-index: 2; width: 12px; height: 12px; border: 0 solid var(--k-acc); display: none; }\nbody.ctos .cdx-panel.tw .cdx-cn { display: block; }\nbody.ctos .cdx-cn.a { top: -1px; left: -1px; border-top-width: 2px; border-left-width: 2px; }\nbody.ctos .cdx-cn.b { top: -1px; right: -1px; border-top-width: 2px; border-right-width: 2px; }\nbody.ctos .cdx-cn.c { bottom: -1px; left: -1px; border-bottom-width: 2px; border-left-width: 2px; }\nbody.ctos .cdx-cn.d { bottom: -1px; right: -1px; border-bottom-width: 2px; border-right-width: 2px; }\n\n/* 减少动效：只保留颜色变化和面板开关 */\n@media (prefers-reduced-motion: reduce) {\n  body.ctos.cdx-on .cdx-panel.on, body.ctos.cdx-on .cdx-panel.off { animation-duration: 1ms; }\n  body.ctos.cdx-on .cdx-term.drawin::before, body.ctos .cdx-fab.ping .cdx-br, body.ctos.cdx-on .cdx-tip.on, body.ctos .cdx-skel i { animation: none; }\n  body.ctos.cdx-on .cdx-term::after { transition: none; }\n}\n\n/* ============================================================\n   手机与窄屏：左侧竖栏改成一条只留图标的顶栏，抽屉从顶栏下面铺满全屏；\n   阅读器的说话人左栏收起来，名签挪到台词上方。阅读模式和音效的开关在“扩展”里和阅读器页眉上都有，顶栏不再放\n   ============================================================ */\n@media screen and (max-width: 1000px) {\n  body.ctos { --ctr-bar: 48px; --ctr-gutter: 0px; --ctr-pad-x: 16px; }\n\n  body.ctos #top-settings-holder {\n    inset: 0 0 auto 0; width: 100%; height: var(--ctr-bar);\n    flex-direction: row; align-items: stretch;\n    border-right: 0; border-bottom: 1px solid var(--k-line-2);\n  }\n  body.ctos #ctr-brand { min-height: 0; margin: 0; padding: 0 12px; }\n  body.ctos #ctr-brand b { font-size: 18px; }\n  body.ctos #ctr-brand span, body.ctos #ctr-tools { display: none; }\n  body.ctos #top-settings-holder > .drawer { flex: 1 1 0; width: auto; min-width: 0; }\n  body.ctos #top-settings-holder > .drawer > .drawer-toggle { height: 100%; grid-template-columns: 1fr; place-items: center; gap: 0; padding: 0; }\n  body.ctos #top-settings-holder .drawer-toggle::before, body.ctos #top-settings-holder .drawer-toggle::after { content: none; }\n  body.ctos #top-settings-holder .drawer-toggle .drawer-icon { width: auto; font-size: 17px; }\n  body.ctos #ai-config-button { margin-top: 0; padding-top: 0; border-top: 0; border-left: 1px solid var(--k-line); }\n  body.ctos #top-settings-holder > .drawer:has(> .drawer-content.openDrawer) > .drawer-toggle,\n  body.ctos #top-settings-holder > .drawer:has(> nav.openDrawer) > .drawer-toggle { box-shadow: inset 0 -2px 0 var(--k-acc); }\n\n  body.ctos #top-settings-holder .drawer-content,\n  body.ctos #top-settings-holder .drawer-content.maximized,\n  body.ctos #top-settings-holder :is(#WorldInfo, #AdvancedFormatting, #rm_extensions_block, #user-settings-block) {\n    top: var(--ctr-bar) !important; left: 0 !important; right: 0 !important;\n    width: 100% !important; min-width: 0; max-width: none;\n    height: calc(100dvh - var(--ctr-bar)); max-height: calc(100dvh - var(--ctr-bar));\n    margin: 0 !important; padding: 12px 12px calc(12px + env(safe-area-inset-bottom));\n    border-right: 0; box-shadow: none;\n  }\n  body.ctos #top-settings-holder .drawer-content.openDrawer { height: calc(100dvh - var(--ctr-bar)); animation-name: ctr-drawer-down; }\n  @keyframes ctr-drawer-down { from { transform: translateY(-12px); opacity: 0; } to { transform: none; opacity: 1; } }\n\n  body.ctos #sheld { top: var(--ctr-bar); left: 0; width: 100%; height: calc(100dvh - var(--ctr-bar)); max-height: calc(100dvh - var(--ctr-bar)); padding: 0; }\n  body.ctos #chat { padding: 6px 10px 4px; border: 0; }\n  body.ctos #chat .mes { padding: 12px 0 14px; }\n  body.ctos #form_sheld { width: calc(100% - 16px); margin: 4px auto calc(8px + env(safe-area-inset-bottom)); }\n  body.ctos #ctr-hud, body.ctos.ctr-full #ctr-hud { width: calc(100% - 16px); margin: 0 auto; }\n  /* 手机上控制条只有一行：翻版、页码、全屏；地点在正文页眉和状态栏里都有，不占这一行 */\n  body.ctos #ctr-bar, body.ctos.ctr-full #ctr-bar { width: calc(100% - 16px); margin: 0 auto; font-size: 10px; flex-wrap: nowrap; }\n  body.ctos #ctr-bar .b-place, body.ctos #ctr-bar .b-title, body.ctos #ctr-bar .b-count { display: none; }\n  body.ctos #ctr-bar .ctr-btn { min-width: 44px; min-height: 44px; font-size: 12px; padding: 0 6px; }\n  body.ctos #ctr-bar .b-mode { margin-left: auto; padding: 0 10px; }\n  body.ctos #ctr-bar .b-swipe em { padding: 0 6px; }\n  body.ctos #ctr-bar .b-goto { padding: 0 4px; gap: 4px; }\n  body.ctos #ctr-bar .b-goto input { width: 32px; height: 28px; font-size: 12px; padding: 0 2px; }\n  body.ctos { --cdx-fab: 56px; }\n  body.ctos #ctr-railbtn { display: none; }\n  /* 酒馆在竖屏手机上把两侧按钮挤成一列，这里摆回一排 */\n  body.ctos :is(#leftSendForm, #rightSendForm) { width: auto; height: auto; flex-wrap: nowrap; }\n  body.ctos :is(#leftSendForm, #rightSendForm) > div { width: 40px; min-height: 48px; }\n  body.ctos #rightSendForm > #send_but { width: 52px; }\n  /* 16px 起，iOS 点进输入框才不会自动放大页面 */\n  body.ctos #send_textarea { min-height: 48px; padding: 13px 12px; font-size: 16px; }\n  body.ctos .mes_text { font-size: 16px; line-height: 1.9; }\n\n  body.ctos .ctr-head { padding-left: 12px; }\n  body.ctos .ctr-title { padding: 0 10px; }\n  body.ctos .ctr-modebtn { padding: 0 10px; }\n  body.ctos .ctr-stage { padding: 20px 16px 24px; }\n  body.ctos .ctr[data-view=\"page\"] .ctr-stage { min-height: 260px; }\n  body.ctos :is(.ctr-dia, .ctr-voice, .ctr-doc) { grid-template-columns: minmax(0, 1fr); row-gap: 4px; }\n  body.ctos .ctr-name, body.ctos .ctr-dia .ctr-name { display: flex; flex-direction: row; align-items: baseline; justify-content: flex-start; gap: 8px; padding: 0; text-align: left; }\n  body.ctos .ctr-narr, body.ctos .ctr-line { font-size: 17px; line-height: 1.9; }\n  body.ctos .ctr-voice p { font-size: 15px; }\n  body.ctos .ctr-vbody { padding-left: 14px; }\n  body.ctos .ctr-paper { padding: 14px 16px; font-size: 15px; }\n  body.ctos .ctr-rule { grid-template-columns: auto minmax(0, 1fr); column-gap: 12px; margin-top: 20px; }\n  body.ctos .ctr-rule span { padding-right: 0; }\n  /* 页脚拆两行：上面页码和进度格，下面五个翻页按钮铺满一排；键盘快捷键提示在手机上用不到，收掉 */\n  body.ctos .ctr-foot, body.ctos.ctr-full .ctr-foot { flex-wrap: wrap; gap: 0 10px; padding: 0; }\n  body.ctos .ctr-no { min-height: 40px; line-height: 40px; padding-left: 12px; }\n  body.ctos .ctr-ticks { padding-right: 12px; }\n  body.ctos .ctr-foot .ctr-hint { display: none !important; }\n  body.ctos .ctr-nav { flex: 1 0 100%; order: 9; min-height: 44px; border-top: 1px solid var(--k-line); }\n  body.ctos .ctr-nav .ctr-btn { flex: 1 1 0; min-width: 0; padding: 0 4px; letter-spacing: .06em; }\n  body.ctos .ctr-nav .ctr-btn:first-child { border-left: 0; }\n  body.ctos .ctr-goto { flex: none; padding: 0 8px; }\n  body.ctos .ctr-goto input { width: 38px; }\n\n  /* 网格列一律可以缩到 0，长地名、不换行的页眉才不会把整块撑出屏幕 */\n  body.ctos .ctr, body.ctos .ctr-stage { grid-template-columns: minmax(0, 1fr); }\n  body.ctos .ctr-head { grid-template-columns: minmax(0, 1fr) auto auto auto; }\n\n  /* 酒馆在窄屏上把 body 设成 position: fixed，html 高度塌成 0，又因为 html 带 translateZ(0)，\n     所有 position: fixed 的东西都以这个 0 高的 html 为准：用 bottom 定位会掉到屏幕外，只能用 top 加高度 */\n  body.ctos.ctr-full #chat > .mes.ctr-focus { top: 0; bottom: auto; height: calc(100dvh - var(--ctr-dock, 0px)); transition: height 320ms var(--k-ease); }\n  body.ctos.ctr-full #sheld { top: 0; height: 100dvh; max-height: 100dvh; }\n  body.ctos.ctr-full .ctr-head { min-height: 48px; padding-left: 14px; }\n  body.ctos.ctr-full .ctr-stage { padding: 20px 16px; }\n  body.ctos.ctr-full .mes.ctr-focus .mes_text { margin: 0 12px 10px; }\n  body.ctos.ctr-full #form_sheld { width: calc(100% - 16px); margin: 0 8px calc(8px + env(safe-area-inset-bottom)); }\n  body.ctos.cdx-on .cdx-fab { right: 14px; bottom: auto; top: calc(100dvh - var(--ctr-dock, 0px) - var(--cdx-fab) - 14px); transition: top 320ms var(--k-ease); }\n  body.ctos.ctr-full.cdx-on .cdx-fab:not(.placed) { bottom: auto; top: calc(100dvh - var(--ctr-dock, 0px) - var(--cdx-fab) - 60px); }\n  /* 横屏手机全屏时可读高度只剩两百多，翻页正文的最小高度得让开，不然会压到页脚上 */\n  body.ctos.ctr-full .ctr[data-view=\"page\"] .ctr-stage { min-height: 0; }\n  /* 全屏控制条在竖屏手机上放不下 PAGE 这个词，去掉以后翻版、页码、消息操作、退出正好一行 */\n  body.ctos #ctr-bar .b-word { display: none; }\n}\n/* 手机竖屏或横屏：笔记本一打开就铺满，小窗在手机上可滑动的区域太小 */\n@media screen and (max-width: 700px), screen and (max-height: 600px) {\n  body.ctos .cdx-full { display: none; }\n}";

const HUD_HTML = "\u003c!doctype html>\n\u003chtml lang=\"zh-CN\">\n\u003chead>\n\u003cmeta charset=\"utf-8\" />\n\u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\u003ctitle>ctOS PROFILER · 看门狗：伦敦\u003c/title>\n\u003cstyle id=\"ctos-css\">\n  .ct {\n    --bg: #0b0c0e;\n    --panel: #111316;\n    --raise: #16191d;\n    --line: #262a2f;\n    --line-2: #383d44;\n    --ink: #ebe8e2;\n    --mute: #9097a0;\n    --dim: #5c626a;\n    --acc: #ff4d2e;\n    --acc-ink: #0b0c0e;\n    --acc-soft: rgba(255, 77, 46, 0.12);\n    --strip-end: 132px;\n    --mono: 'JetBrains Mono', 'SF Mono', 'Menlo', monospace;\n    --cond: 'Barlow Condensed', 'DIN Condensed', 'Arial Narrow', sans-serif;\n    --cjk: 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;\n  }\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n  body { background: transparent; }\n  .ct { color: var(--ink); font: 12px/1.55 var(--mono), var(--cjk); -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; }\n  .ct button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }\n  .ct [data-info] { cursor: pointer; -webkit-tap-highlight-color: transparent; }\n  .cjk { font-family: var(--cjk); }\n\n  /* 外框：消息尾部那一条 */\n  .hud { margin: 6px 0; background: var(--bg); border: 1px solid var(--line-2); position: relative; overflow: hidden; }\n  .pv .hud { max-width: 920px; margin: 6px auto; }\n  .hud::before, .ov::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 3px); }\n\n  .strip { display: grid; grid-template-columns: auto 1fr auto; align-items: stretch; min-height: 48px; }\n  .hud.open .strip { border-bottom: 1px solid var(--line-2); }\n  .brand { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 0 14px; min-width: var(--strip-end); background: var(--ink); color: var(--bg); }\n  .brand b { font: 800 17px/1 var(--cond); letter-spacing: 0.04em; }\n  .brand span { font: 700 9px/1.2 var(--mono); letter-spacing: 0.14em; }\n  .reads { display: flex; align-items: stretch; min-width: 0; overflow: hidden; }\n  .read { display: flex; flex: 1 1 0; flex-direction: column; justify-content: center; padding: 5px 14px; border-right: 1px solid var(--line); min-width: 0; white-space: nowrap; }\n  .read .k { font-size: 9px; letter-spacing: 0.16em; color: var(--dim); }\n  .read .v { font-size: 12px; color: var(--ink); overflow: hidden; text-overflow: ellipsis; font-family: var(--cjk); }\n  .read .v em { font-style: normal; color: var(--acc); font-family: var(--mono); }\n  .acts { display: flex; justify-content: center; min-width: var(--strip-end); }\n  .act { min-width: 64px; min-height: 48px; padding: 0 14px; border-left: 1px solid var(--line-2); font: 700 10px/1 var(--mono); letter-spacing: 0.16em; color: var(--mute); }\n  .act:hover { color: var(--ink); background: var(--raise); }\n  .act:active { background: var(--raise); transform: translateY(1px); }\n  .act.main { color: var(--ink); }\n\n  .pips { display: flex; gap: 3px; margin-top: 3px; }\n  .pip { width: 14px; height: 5px; border: 1px solid var(--line-2); }\n  .pip.on { background: var(--ink); border-color: var(--ink); }\n  .pip.now { background: var(--acc); border-color: var(--acc); }\n\n  .tabs { display: flex; border-bottom: 1px solid var(--line); }\n  .tab { min-height: 44px; padding: 0 16px; font: 600 14px/1 var(--cond); letter-spacing: 0.08em; color: var(--dim); border-right: 1px solid var(--line); position: relative; white-space: nowrap; }\n  .tab small { font: 400 11px/1 var(--cjk); letter-spacing: 0.04em; margin-left: 6px; }\n  .tab:hover { color: var(--mute); }\n  .tab.on { color: var(--ink); background: var(--panel); }\n  .tab.on::after { content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: var(--acc); }\n  .view { padding: 16px; animation: scan 420ms steps(6) both; }\n  @keyframes scan { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0 0); } }\n\n  .lab { font-size: 9px; letter-spacing: 0.18em; color: var(--dim); margin-bottom: 8px; display: flex; justify-content: space-between; gap: 8px; }\n  .lab i { font-style: normal; color: var(--mute); letter-spacing: 0.06em; font-family: var(--cjk); text-align: right; }\n  .sec + .sec { margin-top: 18px; }\n  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }\n  .note { color: var(--mute); font-family: var(--cjk); font-size: 12px; line-height: 1.7; }\n  .empty { color: var(--dim); font-family: var(--cjk); font-size: 12px; padding: 10px 0; border-top: 1px dashed var(--line); }\n\n  /* 侧写头 */\n  .profile { display: grid; grid-template-columns: 1fr auto; gap: 10px 20px; align-items: end; padding-bottom: 14px; border-bottom: 1px solid var(--line); }\n  .name { font: 800 38px/0.9 var(--cond); letter-spacing: 0.01em; text-transform: uppercase; }\n  .name small { display: block; font: 400 13px/1.4 var(--cjk); letter-spacing: 0.2em; color: var(--mute); margin-top: 6px; text-transform: none; }\n  .stamp { border: 2px solid var(--acc); color: var(--acc); padding: 4px 10px 3px; font: 800 20px/1 var(--cond); letter-spacing: 0.12em; transform: rotate(-4deg); text-align: center; }\n  .stamp small { display: block; font: 700 9px/1.3 var(--mono); letter-spacing: 0.1em; }\n  .facts { display: grid; grid-template-columns: repeat(3, 1fr); border-left: 1px solid var(--line); border-top: 1px solid var(--line); margin-top: 14px; }\n  .fact { padding: 6px 10px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); min-width: 0; }\n  .fact .k { font-size: 9px; letter-spacing: 0.16em; color: var(--dim); }\n  .fact .v { font-family: var(--cjk); font-size: 13px; overflow-wrap: anywhere; }\n  .fact .v.hot { color: var(--acc); }\n\n  /* 人体示意 */\n  .bodywrap { display: grid; grid-template-columns: 132px 1fr; gap: 16px; }\n  .fig { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: 26px 34px 30px 46px; gap: 3px; max-width: 168px; }\n  .part { border: 1px solid var(--line-2); display: flex; align-items: center; justify-content: center; font: 400 9px/1 var(--cjk); color: var(--dim); }\n  .p-head { grid-column: 2 / 4; grid-row: 1; }\n  .p-larm { grid-column: 1; grid-row: 2 / 4; }\n  .p-torso { grid-column: 2 / 4; grid-row: 2 / 4; }\n  .p-rarm { grid-column: 4; grid-row: 2 / 4; }\n  .p-lleg { grid-column: 2; grid-row: 4; }\n  .p-rleg { grid-column: 3; grid-row: 4; }\n  .part.s1 { background: repeating-linear-gradient(135deg, var(--acc-soft) 0 3px, transparent 3px 6px); border-color: var(--acc); color: var(--ink); }\n  .part.s2 { background: var(--acc); border-color: var(--acc); color: var(--acc-ink); font-weight: 700; }\n  .part.s3 { background: var(--raise); border-color: var(--acc); color: var(--acc); text-decoration: line-through; }\n  .part.lock { border-style: dashed; border-color: var(--line); color: var(--line-2); }\n  .legend { display: flex; gap: 10px; margin-top: 8px; font-size: 9px; color: var(--dim); font-family: var(--cjk); flex-wrap: wrap; }\n  .legend span::before { content: ''; display: inline-block; width: 8px; height: 8px; margin-right: 4px; vertical-align: -1px; border: 1px solid var(--line-2); }\n  .legend .l1::before { border-color: var(--acc); background: var(--acc-soft); }\n  .legend .l2::before { border-color: var(--acc); background: var(--acc); }\n\n  .wound { padding: 8px 0 8px 12px; border-left: 2px solid var(--acc); }\n  .wound + .wound { margin-top: 8px; }\n  .wound h4 { font: 700 12px/1.4 var(--cjk); display: flex; justify-content: space-between; gap: 8px; }\n  .wound h4 i { font-style: normal; font-weight: 400; color: var(--acc); font-size: 11px; }\n  .wound p { font: 12px/1.65 var(--cjk); color: var(--mute); margin-top: 2px; }\n\n  /* 列表行 */\n  .rows { border-top: 1px solid var(--line); }\n  .row { display: grid; grid-template-columns: 9.5em 1fr auto; gap: 12px; padding: 8px 0; align-items: baseline; }\n  .row + .row { border-top: 1px solid var(--line); }\n  .row[data-info]:active { background: var(--raise); }\n  .row .n { font-family: var(--cjk); font-size: 12.5px; }\n  .row .d { font-family: var(--cjk); font-size: 12px; color: var(--mute); line-height: 1.6; min-width: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }\n  .row .d .sub { color: var(--dim); }\n  .tag { font: 700 9.5px/1 var(--cjk); letter-spacing: 0.08em; padding: 3px 6px; border: 1px solid var(--line-2); color: var(--mute); white-space: nowrap; }\n  .tag.hot { border-color: var(--acc); color: var(--acc); }\n  .tag.solid { background: var(--ink); border-color: var(--ink); color: var(--bg); }\n  .lv { display: inline-flex; gap: 2px; vertical-align: middle; }\n  .lv b { width: 9px; height: 9px; border: 1px solid var(--line-2); }\n  .lv b.on { background: var(--ink); border-color: var(--ink); }\n\n  /* 天问终端 */\n  .term { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: end; padding-bottom: 14px; border-bottom: 1px solid var(--line); }\n  .term .id { font: 700 10px/1.5 var(--mono); letter-spacing: 0.14em; color: var(--dim); }\n  .term .id em { font-style: normal; color: var(--acc); }\n  .term .nick { font: 700 30px/1.1 var(--cjk); margin-top: 6px; letter-spacing: 0.04em; }\n  .term .nick small { font: 400 12px/1 var(--mono); color: var(--mute); margin-left: 10px; letter-spacing: 0.04em; }\n  .cp { text-align: right; }\n  .cp .k { font-size: 9px; letter-spacing: 0.18em; color: var(--dim); }\n  .cp .v { font: 800 46px/0.9 var(--cond); color: var(--acc); font-variant-numeric: tabular-nums; }\n  .mood { font-family: var(--cjk); font-size: 12px; color: var(--mute); margin-top: 10px; line-height: 1.7; }\n  .mood b { color: var(--ink); font-weight: 700; margin-right: 8px; }\n  .track { display: grid; grid-template-columns: repeat(5, 1fr); gap: 3px; }\n  .track > div { border-top: 3px solid var(--line-2); padding-top: 6px; font: 400 11px/1.4 var(--cjk); color: var(--dim); }\n  .track > div.on { border-top-color: var(--ink); color: var(--mute); }\n  .track > div.now { border-top-color: var(--acc); color: var(--ink); font-weight: 700; }\n\n  .tree { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }\n  .branch h5 { font: 600 15px/1 var(--cond); letter-spacing: 0.06em; display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 6px; border-bottom: 1px solid var(--line-2); margin-bottom: 4px; }\n  .branch h5 span { font: 400 13px/1 var(--cjk); letter-spacing: 0.2em; }\n  .branch h5 i { font: 400 9px/1 var(--mono); color: var(--dim); font-style: normal; letter-spacing: 0.1em; }\n  .line { display: grid; grid-template-columns: 4em 1fr 1fr 1fr; gap: 3px; padding: 3px 0; }\n  .line .ln { font: 400 11px/26px var(--cjk); color: var(--mute); }\n  .node { height: 26px; border: 1px solid var(--line); font: 400 10.5px/24px var(--cjk); color: var(--dim); text-align: center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding: 0 2px; }\n  .node.on { background: var(--ink); border-color: var(--ink); color: var(--bg); font-weight: 700; }\n  .node.next { border-style: dashed; border-color: var(--line-2); color: var(--mute); }\n  .node.next.buy { border-color: var(--acc); color: var(--acc); }\n\n  .mods { display: grid; grid-template-columns: repeat(3, 1fr); border-left: 1px solid var(--line); border-top: 1px solid var(--line); }\n  .mod { padding: 8px 10px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); font-family: var(--cjk); }\n  .mod b { display: block; font-size: 12px; }\n  .mod span { font-size: 11px; color: var(--dim); }\n  .mod.on b { color: var(--acc); }\n\n  /* 行动 */\n  .threat { display: grid; grid-template-columns: repeat(5, 1fr); gap: 3px; }\n  .lvl { border: 1px solid var(--line); padding: 8px 10px 9px; min-height: 64px; }\n  .lvl .num { font: 800 24px/1 var(--cond); color: var(--line-2); }\n  .lvl .nm { font: 700 13px/1.3 var(--cjk); color: var(--dim); margin-top: 4px; letter-spacing: 0.1em; }\n  .lvl.on { border-color: var(--line-2); }\n  .lvl.on .num, .lvl.on .nm { color: var(--mute); }\n  .lvl.now { background: var(--acc); border-color: var(--acc); }\n  .lvl.now .num, .lvl.now .nm { color: var(--acc-ink); }\n\n  .op { border: 1px solid var(--line-2); background: var(--panel); }\n  .op-head { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 12px; padding: 14px 14px 12px; }\n  .op-head .t { font: 700 24px/1.1 var(--cjk); letter-spacing: 0.06em; }\n  .op-head .o { font: 400 12px/1.5 var(--cjk); color: var(--mute); margin-top: 2px; }\n  .op-head .c { font: 800 34px/0.9 var(--cond); font-variant-numeric: tabular-nums; }\n  .op-head .c i { font-style: normal; color: var(--dim); font-size: 20px; }\n  .stages { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid var(--line); }\n  .stage { padding: 10px 12px 12px; border-right: 1px solid var(--line); min-width: 0; }\n  .stage:last-child { border-right: 0; }\n  .stage .sn { font: 700 10px/1 var(--mono); color: var(--dim); letter-spacing: 0.12em; }\n  .stage .st { font: 400 12.5px/1.45 var(--cjk); color: var(--dim); margin-top: 6px; }\n  .stage.done { background: repeating-linear-gradient(135deg, rgba(235,232,226,0.04) 0 4px, transparent 4px 8px); }\n  .stage.done .st { color: var(--mute); text-decoration: line-through; text-decoration-color: var(--dim); }\n  .stage.now { box-shadow: inset 0 3px 0 var(--acc); }\n  .stage.now .sn { color: var(--acc); }\n  .stage.now .st { color: var(--ink); font-weight: 700; }\n  .goal { display: grid; grid-template-columns: auto 1fr; gap: 12px; padding: 12px 14px; border-top: 1px solid var(--line); align-items: baseline; }\n  .goal .k { font-size: 9px; letter-spacing: 0.18em; color: var(--acc); }\n  .goal .v { font: 400 13px/1.7 var(--cjk); }\n  .board .row { grid-template-columns: 7em 1fr auto; }\n\n  /* 八区地图 */\n  .mapbox { position: relative; border: 1px solid var(--line-2); background: #060709; line-height: 0; }\n  .map { display: block; width: 100%; height: auto; }\n  .map .out { fill: rgba(0, 0, 0, 0.6); }\n  .map .dist { fill: rgba(235, 232, 226, 0.035); stroke: var(--ink); stroke-opacity: 0.55; stroke-width: 1.4px; vector-effect: non-scaling-stroke; transition: fill 120ms; }\n  .map .dist:hover { fill: var(--acc-soft); stroke: var(--acc); stroke-opacity: 1; }\n  /* 机房已黑入的区：天问能碰这一区网上的东西 */\n  .map .dist.own { fill: rgba(72, 214, 140, 0.16); stroke: #48d68c; stroke-opacity: 0.9; }\n  .map .dist.own:hover { fill: rgba(72, 214, 140, 0.26); }\n  .credit .own { color: #48d68c; }\n  .map .dlab { pointer-events: none; text-anchor: middle; }\n  .map .dlab .zh, .map .dlab .zh2 { font: 700 30px var(--cjk); fill: var(--ink); paint-order: stroke; stroke: rgba(6, 7, 9, 0.85); stroke-width: 5px; }\n  .map .dlab .zh2 { display: none; }\n  .map .dlab .en { font: 600 13px var(--cond); letter-spacing: 0.16em; fill: var(--mute); }\n  /* 层级：区名最显眼，任务用唯一的强调色，地标退成灰色小点 */\n  .map .mark circle { fill: var(--bg); stroke: var(--mute); stroke-width: 1.5px; vector-effect: non-scaling-stroke; }\n  .map .mark text { font: 400 15px var(--cjk); fill: var(--mute); paint-order: stroke; stroke: rgba(6, 7, 9, 0.9); stroke-width: 4px; }\n  .map .mark:hover circle { fill: var(--ink); stroke: var(--ink); }\n  .map .mark:hover text { fill: var(--ink); }\n  .credit { margin-top: 6px; font-size: 9px; letter-spacing: 0.04em; color: var(--dim); font-family: var(--cjk); }\n  .map .job .halo { fill: none; stroke: var(--acc); stroke-opacity: 0.55; stroke-width: 1.5px; stroke-dasharray: 3 3; vector-effect: non-scaling-stroke; }\n  .map .job .dot { fill: var(--acc); stroke: #060709; stroke-width: 3px; vector-effect: non-scaling-stroke; }\n  .map .job text { font: 800 15px var(--cond); fill: var(--acc-ink); text-anchor: middle; pointer-events: none; }\n  .map .job:hover .dot { fill: var(--ink); }\n  .jobs { position: absolute; left: 0; top: 0; width: 25%; line-height: 1.5; background: rgba(6, 7, 9, 0.9); border-right: 1px solid var(--line-2); border-bottom: 1px solid var(--line-2); }\n  .jobs .hd { width: 100%; padding: 9px 10px 7px; font: 700 9px/1 var(--mono); letter-spacing: 0.16em; color: var(--mute); display: flex; justify-content: space-between; text-align: left; }\n  .jobs .hd:hover { color: var(--ink); background: var(--raise); }\n  .jobs .hd i { font-style: normal; color: var(--acc); letter-spacing: 0.08em; }\n  .jobs .hd .off, .jobs.shut .hd .on, .jobs.shut .jb, .jobs.shut .ft { display: none; }\n  .jobs.shut .hd .off { display: inline; }\n  .jobs.shut { width: auto; }\n  .jobs.shut .hd { gap: 14px; }\n  .map .mark.under text { opacity: 0; }\n  .map .mark.under:hover text { opacity: 1; }\n  .jobs .jb { display: grid; grid-template-columns: 22px 1fr; gap: 2px 8px; padding: 7px 10px; border-top: 1px solid var(--line); }\n  .jobs .jb:hover { background: var(--raise); }\n  .jobs .no { grid-row: 1 / 3; width: 22px; height: 22px; background: var(--acc); color: var(--acc-ink); font: 800 13px/22px var(--cond); text-align: center; }\n  .jobs .tt { font: 12.5px/1.4 var(--cjk); color: var(--ink); min-width: 0; }\n  .jobs .tt b { font-weight: 700; color: var(--acc); margin-right: 6px; }\n  .jobs .ds { font: 10.5px/1.3 var(--cjk); color: var(--dim); }\n  .jobs .ft { padding: 6px 10px 8px; border-top: 1px solid var(--line); font: 10px/1.4 var(--cjk); color: var(--dim); }\n  .map .land { fill: #101215; }\n  .map .water { fill: #050608; stroke: #5c646c; stroke-width: 1px; stroke-linejoin: round; vector-effect: non-scaling-stroke; }\n  /* 据点：强调色菱形，图外的画成指向它的箭头 */\n  .map .base { cursor: pointer; }\n  .map .base .dia, .map .base .arr { fill: var(--acc); stroke: #060709; stroke-width: 2px; vector-effect: non-scaling-stroke; }\n  .map .base text { font: 700 15px var(--cjk); fill: var(--acc); paint-order: stroke; stroke: rgba(6, 7, 9, 0.92); stroke-width: 4px; }\n  .map .base text.sub { font: 400 11px var(--cjk); fill: var(--mute); }\n  .map .base:hover .dia, .map .base:hover .arr { fill: var(--ink); }\n  .map .base:hover text { fill: var(--ink); }\n  .map .base.sel .dia { fill: var(--ink); }\n  /* 全屏地图：固定高度，滚轮和双指缩放，拖动平移 */\n  .mapbox.zoomable { height: min(68vh, 760px); touch-action: none; cursor: grab; }\n  .mapbox.zoomable .map { width: 100%; height: 100%; margin-left: 0; }\n  .mapbox.zoomable.drag { cursor: grabbing; }\n  .zoomer { position: absolute; right: 8px; bottom: 8px; display: flex; flex-direction: column; border: 1px solid var(--line-2); background: rgba(6, 7, 9, 0.92); line-height: 1; }\n  .zoomer button { width: 40px; height: 40px; font: 700 17px/1 var(--mono); color: var(--mute); }\n  .zoomer button + button { border-top: 1px solid var(--line); }\n  .zoomer button:hover { color: var(--ink); background: var(--raise); }\n  .jobs.below { position: static; width: auto; border-right: 0; border-top: 1px solid var(--line-2); background: var(--bg); }\n\n  /* 据点页 */\n  .subtabs { display: flex; flex-wrap: wrap; border-left: 1px solid var(--line); border-top: 1px solid var(--line); }\n  .subtabs .st { flex: 1 1 0; min-width: 7em; min-height: 44px; padding: 6px 10px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); font: 700 12px/1.3 var(--cjk); color: var(--mute); text-align: left; position: relative; }\n  .subtabs .st small { display: block; font: 400 9px/1.3 var(--mono); letter-spacing: 0.12em; color: var(--dim); margin-top: 2px; }\n  .subtabs .st:hover { color: var(--ink); background: var(--raise); }\n  .subtabs .st.on { color: var(--ink); background: var(--panel); }\n  .subtabs .st.on::after { content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: var(--acc); }\n  .bhead { display: flex; justify-content: space-between; align-items: end; gap: 12px; margin-top: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--line); }\n  .bhead .bn { font: 800 30px/1 var(--cjk); letter-spacing: 0.02em; }\n  .bhead .bn small { display: block; font: 700 10px/1.4 var(--mono); letter-spacing: 0.16em; color: var(--acc); margin-top: 8px; }\n  .bhead .go { border: 1px solid var(--line-2); min-height: 40px; padding: 0 12px; font: 700 10px/1 var(--mono); letter-spacing: 0.14em; color: var(--mute); white-space: nowrap; }\n  .bhead .go:hover { color: var(--ink); background: var(--raise); }\n  .bfacts { grid-template-columns: repeat(2, 1fr); }\n  .bfacts .v { font-size: 12.5px; line-height: 1.6; }\n  .rules { list-style: none; font: 12px/1.7 var(--cjk); color: var(--mute); }\n  .rules li { padding: 5px 0 5px 14px; border-top: 1px solid var(--line); position: relative; }\n  .rules li::before { content: ''; position: absolute; left: 2px; top: 13px; width: 5px; height: 5px; background: var(--acc); }\n\n  /* 点开看详情 */\n  .inspect { display: none; border-top: 1px solid var(--acc); background: var(--panel); padding: 12px 16px 14px; position: relative; }\n  .inspect.on { display: block; }\n  .inspect h6 { font: 700 13px/1.4 var(--cjk); padding-right: 64px; }\n  .inspect p { font: 12.5px/1.75 var(--cjk); color: var(--mute); margin-top: 4px; white-space: pre-line; }\n  .inspect .x { position: absolute; top: 0; right: 0; min-width: 56px; min-height: 44px; font: 700 10px/1 var(--mono); letter-spacing: 0.14em; color: var(--mute); }\n  .inspect .do:empty { display: none; }\n  .inspect .do { margin-top: 10px; }\n  .inspect .do button { min-height: 40px; padding: 0 16px; border: 1px solid var(--acc); background: var(--acc); color: var(--acc-ink); font: 700 11px/1 var(--mono); letter-spacing: 0.12em; }\n  .inspect .do button:disabled { background: none; color: var(--dim); border-color: var(--line-2); cursor: default; }\n\n  /* 全屏 */\n  .ov { position: absolute; inset: 0; background: rgba(6, 7, 8, 0.94); display: flex; justify-content: center; overflow: hidden; }\n  .ov .sheet { position: relative; width: 100%; max-width: 1080px; height: 100%; display: grid; grid-template-rows: auto auto 1fr auto; background: var(--bg); border-left: 1px solid var(--line-2); border-right: 1px solid var(--line-2); }\n  .ov .strip { border-bottom: 1px solid var(--line-2); padding-top: env(safe-area-inset-top); }\n  .ov .scroll { overflow-y: auto; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; }\n  .ov .view { padding: 20px 24px 28px; }\n  .ov .inspect { padding-bottom: calc(14px + env(safe-area-inset-bottom)); }\n\n  .preview { max-width: 920px; margin: 10px auto 0; display: flex; gap: 6px; font: 10px/1 var(--mono); color: #777; align-items: center; }\n  .preview button { border: 1px solid #444; padding: 6px 10px; color: #aaa; }\n  .preview button.on { border-color: var(--acc); color: var(--acc); }\n\n  @media (max-width: 640px) {\n    .strip { grid-template-columns: auto 1fr auto; }\n    .brand, .acts { min-width: 0; }\n    .read { padding: 5px 10px; }\n    .read:nth-child(n+3) { display: none; }\n    .act.inline { display: none; }\n    .grid2, .bodywrap, .tree { grid-template-columns: 1fr; }\n    .facts, .mods { grid-template-columns: 1fr 1fr; }\n    .stages { grid-template-columns: 1fr; }\n    .track > div { font-size: 10px; letter-spacing: 0; }\n    .stage { border-right: 0; border-bottom: 1px solid var(--line); }\n    .lvl { min-height: 0; padding: 6px 6px 7px; }\n    .lvl .num { font-size: 18px; }\n    .lvl .nm { font-size: 11px; letter-spacing: 0; }\n    .name { font-size: 30px; }\n    .row, .board .row { grid-template-columns: 1fr auto; }\n    .row .d { grid-column: 1 / -1; grid-row: 2; }\n    .node { height: 34px; line-height: 32px; font-size: 12px; }\n    .line .ln { line-height: 34px; }\n    .tabs { display: grid; grid-template-columns: repeat(6, 1fr); }\n    .bfacts { grid-template-columns: 1fr; }\n    .bhead { flex-direction: column; align-items: stretch; }\n    .bhead .bn { font-size: 24px; }\n    /* 全屏地图在手机上按八区那一段的宽高比定高，初始视野正好放下八区；放大到一定程度再把地标名字露出来 */\n    .mapbox.zoomable { height: auto; aspect-ratio: var(--asp); }\n    .map .mark text, .map .dlab .en { display: none; }\n    .map.zoomed .mark text { display: inline; }\n    .map .dlab .zh, .map .dlab .zh2 { font-size: 44px; stroke-width: 7px; }\n    /* 全屏地图的点和字已经按屏幕像素换算过，不用手机放大版 */\n    .mapbox.zoomable .map .dlab .zh, .mapbox.zoomable .map .dlab .zh2 { font-size: 15px; stroke-width: 3px; }\n    .mapbox.zoomable .map .mark circle { r: 3.5px; }\n    .mapbox.zoomable .map .mark text { font-size: 12px; stroke-width: 3px; }\n    .mapbox.zoomable .map .job .dot { r: 9px; }\n    .mapbox.zoomable .map .job .halo { r: 14px; }\n    .mapbox.zoomable .map .job text { font-size: 12px; transform: translateY(-1px); }\n    .mapbox.zoomable .map .base text { font-size: 11px; stroke-width: 3px; }\n    .mapbox.zoomable .map .base .dia { transform: scale(0.75); }\n    .mapbox.zoomable .map .dlab.long .zh { display: inline; }\n    .mapbox.zoomable .map .dlab.long .zh2 { display: none; }\n    /* 手机上地图只有四百来像素宽，长区名拆两行，免得和卡姆登撞在一起 */\n    .map .dlab.long .zh { display: none; }\n    .map .dlab.long .zh2 { display: inline; }\n    .map .mark circle { r: 7px; }\n    .map .job .dot { r: 20px; }\n    .map .job .halo { r: 30px; }\n    .map .job text { font-size: 22px; transform: translateY(3px); }\n    .jobs, .jobs.shut { position: static; width: auto; border-right: 0; border-bottom: 0; border-top: 1px solid var(--line-2); background: var(--bg); }\n    .mapbox { overflow: hidden; }\n    .mapbox .map { width: calc(100% * var(--zoom)); margin-left: calc(-100% * var(--shift)); }\n    .tab { padding: 0 4px; text-align: center; border-right: 1px solid var(--line); }\n    .tab small { display: block; margin: 4px 0 0; }\n    .tab { min-height: 52px; }\n    .ov .sheet { grid-template-rows: auto 1fr auto auto; border: 0; }\n    .ov .tabs { order: 4; border-top: 1px solid var(--line-2); border-bottom: 0; padding-bottom: env(safe-area-inset-bottom); }\n    .ov .tab.on::after { top: -1px; bottom: auto; }\n    .ov .scroll { order: 2; }\n    .ov .inspect { order: 3; }\n    .ov .view { padding: 16px 14px 24px; }\n  }\n  /* 手机横屏：宽过 640 但全屏地图只有两百多像素高，初始视野缩得很远，照搬竖屏的小号点和字，地标名字放大后再露 */\n  @media (min-width: 641px) and (max-height: 520px) {\n    .mapbox.zoomable .map .dlab .en, .mapbox.zoomable .map .mark text { display: none; }\n    .mapbox.zoomable .map.zoomed .mark text { display: inline; }\n    .mapbox.zoomable .map .dlab .zh, .mapbox.zoomable .map .dlab .zh2 { font-size: 15px; stroke-width: 3px; }\n    .mapbox.zoomable .map .mark circle { r: 3.5px; }\n    .mapbox.zoomable .map .mark text { font-size: 12px; stroke-width: 3px; }\n    .mapbox.zoomable .map .job .dot { r: 9px; }\n    .mapbox.zoomable .map .job .halo { r: 14px; }\n    .mapbox.zoomable .map .job text { font-size: 12px; transform: translateY(-1px); }\n    .mapbox.zoomable .map .base text { font-size: 11px; stroke-width: 3px; }\n    .mapbox.zoomable .map .base .dia { transform: scale(0.75); }\n  }\n  @media (prefers-reduced-motion: reduce) { .view { animation: none; } }\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cdiv class=\"ct\" id=\"app\">\u003c/div>\n\u003cscript>\n(function () {\n  // ════════ 维护入口 ════════\n  // STATIC 由构建脚本从写卡成稿注入：五级局势、六条主线的阶段与目标、天问技能树的出处与说明。\n  // 改设定只改写卡成稿，然后重新运行构建脚本，这个文件不用动。\n  var STATIC = {\"threat\":[{\"名称\":\"亡者\",\"说明\":\"零日后的头几周，紧急状态刚铺开，手续最粗；街面基本不查人\",\"正文要求\":\"检查站、扫描门和巡逻队都在，可扫描门亮黄灯的人太多，人工复核多半挥手放行，巡逻队很少在街上拦人，伦敦人抱怨的是排队，不是被查。旧英镑和黑市照常运转，线人开价照旧。各方忙着瓜分零日以后的权力，互相盯着，谁也没想到道尔顿还活着\",\"还不会发生\":\"没有针对某个人的搜捕，盘查不会细到翻包和比对旧档案，没有哪一方知道道尔顿还活着\"},{\"名称\":\"异响\",\"说明\":\"接连出了几件事，各方起了疑心；街面偶尔查人\",\"正文要求\":\"出过事的区巡逻加密，检查站的人工复核变多，排队时间长了一倍，路上偶尔有人被拦下问去哪、做什么，说清楚就放。黑市风声紧了，线人开价变高。各方互相猜疑，凯利家族怀疑阿尔比恩，阿尔比恩怀疑 SIRS，都以为是对方干的\",\"还不会发生\":\"盘查仍然是看人问话，不按名单搜人；没人想到是道尔顿\"},{\"名称\":\"疑影\",\"说明\":\"某一方发现道尔顿还活着，开始私下找人；街面抽查\",\"正文要求\":\"检查站和街面开始抽查，几个人里叫住一个细问，翻包、看证件、对脸，被叫住的普通人也得耐着性子答话。哪一方先发现，由 AI 按已走通的线和剧情决定；那一方把旧档案加进自己的比对清单，派生面孔在一些地方附近转悠，找一些人问话，消息不外传。黑市和线人圈子里有人被找上门，人心开始浮动\",\"还不会发生\":\"没有公开的通缉和悬赏，大屏上没有新的脸，其他各方还不知道\"},{\"名称\":\"猎杀\",\"说明\":\"两方以上确认道尔顿还活着，悬赏挂出；街面常查\",\"正文要求\":\"通缉和悬赏上了大屏和黑市，摄像头和巡逻无人机拿名单上的脸和步态做比对。主干道和检查站对大多数人都要细查，排队成了常态。告密的人多了起来，房东、酒保、出租车司机都可能去举报。军情五处从幕后探出头。线人开价翻倍，有人动摇\",\"还不会发生\":\"各方还没有联手，名单不共享，宵禁和桥头还是老规矩，东区的地盘和偏僻的街巷仍然有缝\"},{\"名称\":\"围剿\",\"说明\":\"各方暂时联手，全城封锁；几乎逢人必查\",\"正文要求\":\"阿尔比恩、SIRS、凯利家族和军情五处共享名单，宵禁提前，所有桥梁和地铁站加派人手，出入城的关卡只出不进。几乎每一道门、每一个路口都要查人，伦敦人出门前先算好要过几道查验。零日线在这种局势下展开\",\"还不会发生\":\"外包的毛病没有变，人手是从别处抽来的，换班的空档和互相推诿的部门之间还有缝，只是没人会把缝指给你\"}],\"lines\":{\"凯利家族\":{\"foe\":\"玛丽·凯利\",\"done\":\"玛丽失去对伦敦帮派的掌控\",\"stages\":[{\"名\":\"康纳的手机\",\"目标\":\"拿到康纳的手机并撬开，弄清他的收账路线和他跟玛丽的联络方式\"},{\"名\":\"白教堂的街\",\"目标\":\"在白教堂一带扎下根，至少有一个摊主或凯利家族的人肯替他说话\"},{\"名\":\"转运中心\",\"目标\":\"亲眼看到凯利家族劫人、植入芯片、拍卖中的任意一环，并留下证据\"},{\"名\":\"玛丽的账本\",\"目标\":\"拿到玛丽的账本，原件或可靠的副本都算\"},{\"名\":\"茶馆的下午\",\"目标\":\"让玛丽倒下\"}]},\"阿尔比恩\":{\"foe\":\"奈杰尔·凯斯\",\"done\":\"凯斯失去对阿尔比恩和伦敦的指挥权\",\"stages\":[{\"名\":\"哈米什\",\"目标\":\"找到哈米什，让他相信道尔顿不是凯斯派来的人\"},{\"名\":\"伦敦塔的内线\",\"目标\":\"通过哈米什接上阿尔比恩内部的内线，摸清凯斯的作息和伦敦塔的布防\"},{\"名\":\"凯斯的实锤\",\"目标\":\"拿到凯斯本人的实锤，伦敦塔枪杀警察总监的证人或录像、SAL-409 的出库单据，有其一即可\"},{\"名\":\"收网的局\",\"目标\":\"布好收网的局，确定凯斯会在什么时间出现在什么地方，道尔顿有办法走到他面前\"},{\"名\":\"那一枪\",\"目标\":\"让凯斯倒下\"}]},\"布罗卡科技\":{\"foe\":\"斯凯·拉森\",\"done\":\"斯凯失去布罗卡科技，白昼计划停摆\",\"stages\":[{\"名\":\"进门的路\",\"目标\":\"找到进入布罗卡科技的门路，叶莲娜的公关公司、布罗卡的外包商或别的渠道都算\"},{\"名\":\"白昼计划\",\"目标\":\"证实白昼计划在拿活人做实验\"},{\"名\":\"布拉德利\",\"目标\":\"找到存着布拉德利意识备份的那台服务器\"},{\"名\":\"实验室\",\"目标\":\"进到白昼计划实验室的核心\"},{\"名\":\"停摆\",\"目标\":\"让斯凯倒下\"}]},\"SIRS\":{\"foe\":\"理查德·马利克\",\"done\":\"马利克的计划破产，失去在 SIRS 的位子和权力；查尔德的死活由玩家的选择决定\",\"stages\":[{\"名\":\"长椅\",\"目标\":\"在威斯敏斯特教堂旁的长椅上和马利克搭上话，让他认为道尔顿手里有他要的东西\"},{\"名\":\"FILAMENT\",\"目标\":\"弄清 FILAMENT 能看到什么、看不到什么，拿到一条进出它的门路\"},{\"名\":\"白皮书背后\",\"目标\":\"拿到马利克打算诬陷查尔德的证据\"},{\"名\":\"查尔德\",\"目标\":\"决定让不让查尔德知道马利克在做什么，并按这个决定布好局\"},{\"名\":\"门生\",\"目标\":\"让马利克倒下\"}]},\"DedSec\":{\"foe\":\"萨宾·布兰特、康妮·罗宾逊\",\"done\":\"萨宾失去工坊，或者萨宾把道尔顿当成自己能用的人；两条路走到底，工坊的数据库、打印武器库、人脉和任务都对道尔顿开放\",\"stages\":[{\"名\":\"铁门\",\"目标\":\"经秦起找到 Wrench，至少有一条老狗肯替道尔顿担保，让他走下卡姆登工坊的铁门\"},{\"名\":\"通缉墙\",\"目标\":\"查清通缉墙上那份档案是谁写的，凭什么定道尔顿是内鬼\"},{\"名\":\"那天的录像\",\"目标\":\"拿到萨宾出卖道尔顿的实证，Wrench 翻的监控、布罗卡服务器上贝格利的备份、萨宾和凯斯之间的通讯，有其一即可\"},{\"名\":\"分岔\",\"目标\":\"选定一条路并布好局：在工坊公开证据，让三拨人当面摊牌；或者把证据捏在手里，挂着叛徒的名字替萨宾的人干活，等她自己露底\"},{\"名\":\"工坊\",\"目标\":\"揭发这条路，让萨宾失去工坊，杀了她、流放她还是交给 Wrench 处置由玩家定；虚与委蛇这条路，让萨宾相信道尔顿是她能用的人\"}]},\"零日\":{\"foe\":\"Birk 爵士、黛安娜和军情五处老班底、萨宾\",\"done\":\"道尔顿向派他去死的人讨完账；揭发了体制，体制也不会因此改变\",\"stages\":[{\"名\":\"国家美术馆\",\"目标\":\"和黛安娜在同一幅画前见一面，确认她早就知道他是替罪羊\"},{\"名\":\"Toby之死\",\"目标\":\"查清 Toby 是怎么死的，谁报的信，谁动的手\"},{\"名\":\"萨宾\",\"目标\":\"找到萨宾，逼出她和军情五处之间的勾兑；萨宾如果已经在 DedSec 线里死去或者被流放，就从她留在工坊和安全屋里的东西中找出这份勾兑\"},{\"名\":\"客套话\",\"目标\":\"拿到 Birk 爵士策划零日的实证；他从不把命令写在纸上，实证只能是人证或录音\"},{\"名\":\"清算\",\"目标\":\"向 Birk 爵士讨账\"}]}},\"skills\":{\"溯洄\":{\"侦察\":{\"出处\":\"诗经·秦风·蒹葭\",\"tiers\":{\"一级_蒹葭\":{\"说明\":\"扫见附近联网的设备，认出摄像头、门禁、手机和无人机的型号与漏洞\",\"限制\":\"只能看见联网的东西，看不见物理隔离的系统\"},\"二级_在水一方\":{\"说明\":\"认出设备归哪一方管，分清哪些属于 ctOS、阿尔比恩或 SIRS\",\"限制\":\"只是推断，要动手才知道准不准\"},\"三级_溯洄\":{\"说明\":\"顺着信号和记录往上追，追出这台设备的经办人、维护周期和它的主人是谁\",\"限制\":\"追得越深，越容易在对方日志里留下她自己的痕迹\"}}},\"入侵\":{\"出处\":\"诗经·郑风·将仲子\",\"tiers\":{\"一级_逾里\":{\"说明\":\"破解手机、摄像头、电子门禁这类普通设备\",\"限制\":\"阿尔比恩和 SIRS 的系统她打不进去\"},\"二级_逾墙\":{\"说明\":\"拿下一台加密或登记在案的设备，比如阿尔比恩的门禁终端、SIRS 的外围节点\",\"限制\":\"加密等级高的设备，道尔顿要先替她拿到凭证或物理接口\"},\"三级_逾园\":{\"说明\":\"一趟任务里连着收下一整套设备，而不是一台一台来\",\"限制\":\"时间越长越容易被对方发现\"}}},\"反制\":{\"出处\":\"宋玉·高唐赋、神女赋\",\"tiers\":{\"一级_朝云\":{\"说明\":\"抹掉她入侵留下的记录\",\"限制\":\"只能抹数据，抹不掉纸质记录和人的记忆\"},\"二级_暮雨\":{\"说明\":\"反追踪，把查她的人引到别的方向上去\",\"限制\":\"引偏要有个合理的由头，凭空造假会被对账捞出来\"},\"三级_巫山\":{\"说明\":\"正面顶住阿尔比恩和 SIRS 的网络防御，把闯进来的人挡回去\",\"限制\":\"每次硬碰都会让对方记住她的手法\"}}},\"深潜\":{\"出处\":\"洛神赋；左传·宣公三年\\\"问鼎之大小轻重\\\"\",\"tiers\":{\"一级_洛水\":{\"说明\":\"进入 ctOS 核心、布罗卡科技服务器这类城市级系统\"},\"二级_洛神\":{\"说明\":\"进入 SIRS 的 FILAMENT 这类国家级系统\"},\"三级_问鼎\":{\"说明\":\"碰到零日那一层的东西，也就是这场局真正的账本\",\"限制\":\"每一次深潜都会在对方系统里留下痕迹，对方的安全团队会顺着痕迹追查；道尔顿必须亲自把她带到物理入口前\"}}}},\"举鼎\":{\"眼睛\":{\"出处\":\"洛神赋\\\"翩若惊鸿，婉若游龙\\\"；楚辞·九歌·东君\",\"tiers\":{\"一级_惊鸿\":{\"说明\":\"接管一台摄像头或无人机镜头，看它在看什么\",\"限制\":\"同一时间只能看一路\"},\"二级_游龙\":{\"说明\":\"同时看多路画面，跟着车流和人群的动线判断谁在盯他\"},\"三级_东君\":{\"说明\":\"把一整片街区的镜头连成一张图，回溯刚过去的那几分钟\",\"限制\":\"只在她联网时更新过的节点上有效，没碰过的死角看不见\"}}},\"手\":{\"出处\":\"易·系辞\\\"一阖一辟谓之变\\\"\\\"言行，君子之枢机\\\"；诗经·秦风·小戎\",\"tiers\":{\"一级_叩关\":{\"说明\":\"刷开门禁、闸机、电梯和取餐柜这类带机构的设备\"},\"二级_六辔\":{\"说明\":\"同时握着几台设备，让一整栋楼的机械装置跟着一个指令动\",\"限制\":\"动得越多，设备日志里留下的记录越多\"},\"三级_举鼎\":{\"说明\":\"搬动真正笨重的东西，起重机、货闸、地铁道岔\",\"限制\":\"要有电网或液压撑着，断电就动不了\"}}},\"腿\":{\"出处\":\"垓下歌\\\"骓不逝\\\"\\\"力拔山兮气盖世\\\"；易·系辞\\\"服牛乘马，引重致远\\\"\",\"tiers\":{\"一级_骓\":{\"说明\":\"随时从最近的送货栓里叫出一台小走地车、一架送货无人机或一台维修机器人，让它跟着道尔顿走、替他跑腿、替他看路；也能握住一辆车，让它开门、发动、自己开过来\",\"限制\":\"一次只握一台；只在有送货栓的街区叫得出来，河南三区只有桥头和隧道口附近有；阿尔比恩的车、巡逻无人机和忒弥斯握不住\"},\"二级_执辔\":{\"说明\":\"同时从送货栓里叫出几台走地车和无人机，分头去堵路、引人、送东西；改自动驾驶出租车和无人机的航线，让它们改道来接人、来挡路，顺手抹掉行程记录；也能召来外卖骑手，在外卖平台上用一串借来的账号往同一个地址下几十单，几分钟里一整条街的骑手骑着电动车涌过来，堵路、挡人、给道尔顿当人墙\",\"限制\":\"骑手是活人，挡不住子弹；平台会封掉那些账号，下单的地址会被记下来\"},\"三级_盖世\":{\"说明\":\"把一片街区的送货栓全打开，走地车、无人机和维修机器人成群地涌上街，再加上这条街上的车，用车流和机群把追兵堵住，阿尔比恩的巡逻无人机也能握住几十秒\",\"限制\":\"用得越狠，阿尔比恩越容易注意到这条街上的车和机器在听谁的话\"}}},\"城\":{\"出处\":\"楚辞·天问\\\"烛龙何照\\\"；九歌·东君\\\"举长矢兮射天狼\\\"\",\"tiers\":{\"一级_烛龙\":{\"说明\":\"点亮或熄灭一片区域的路灯与楼宇灯光\",\"限制\":\"灯一灭，巡逻队会先往黑的那一片走\"},\"二级_射天狼\":{\"说明\":\"动红绿灯、地铁信号和闸口，给追兵制造事故与堵点\",\"限制\":\"会真的死人，道尔顿按写作基准要付代价\"},\"三级_长夜\":{\"说明\":\"让一个街区大停电，电网过载，整个街区里通着电的电子设备一起短路烧掉，摄像头、闸机、路灯、车、无人机、机器人、Optik 和手机全在里面\",\"限制\":\"断电的街区里会有真实的伤亡，电梯、呼吸机和医院的机器也会停，全城都会追查是谁干的，道尔顿按写作基准要付代价；道尔顿身上的电子设备也一起烧，康陶手机得留在街区外面，否则天问跟着断\"}}},\"追兵\":{\"出处\":\"诗经·秦风·无衣\\\"岂曰无衣，与子同袍\\\"\\\"与子同泽\\\"\\\"与子同裳\\\"\",\"tiers\":{\"一级_同袍\":{\"说明\":\"给一个人栽一条罪名，假报警或者在黑市挂一张悬赏，引来追他的人：苏格兰场剩下的巡警，或者凯利家的街头打手，二选一\",\"限制\":\"来的只是这一片的三五个人，先盘问，不会一上来就开枪；查实是假的，报警那条记录会被追到源头\"},\"二级_同泽\":{\"说明\":\"把这个人挂上 ctOS 的通缉名单，红灯一亮，阿尔比恩的巡逻队几十秒内赶到；也可以改召进阶的追兵，警察换成苏格兰场的武装反应车，帮派换成凯利家的铁手\",\"限制\":\"挂上去的通缉阿尔比恩会复核，一天之内查不出实据就撤下来，撤的时候顺着记录找挂名单的人；铁手是芯片驱动的奴隶，下手没有轻重\"},\"三级_同裳\":{\"说明\":\"召来阿尔比恩的进阶追兵，精锐小队带着防暴无人机出动，必要时忒弥斯自动执法单元也开过来\",\"限制\":\"精锐是来杀人的，误伤都会算在道尔顿头上；阿尔比恩事后一定追查是谁挂的通缉，这一招每用一次都会被记住\"}}},\"傀儡\":{\"出处\":\"列子·汤问\\\"偃师造倡，领其颅则歌合律，捧其手则舞应节\\\"\\\"瞬其目而招王之左右侍妾\\\"；尚书·武成\\\"前徒倒戈\\\"\",\"tiers\":{\"一级_歌舞\":{\"说明\":\"让一片机器人乱套：清洁机器人原地打转，送货无人机乱飞，巡检小车满街乱窜，互相撞成一堆\",\"限制\":\"只管乱，不分敌我，也会挡道尔顿自己的路\"},\"二级_瞬目\":{\"说明\":\"改一台仿生人或伴侣型机器人的情感模块，让它发情：眼底的灯变色，身子发烫，缠着眼前的人不放，什么指令都听不进去\",\"限制\":\"只对带情感模块的仿生人和伴侣机有效，对忒弥斯和工业机器人没用；一次只改一台，厂家的远程诊断第二天会查到这次改动\"},\"三级_倒戈\":{\"说明\":\"让机器人掉头攻击指定的人，阿尔比恩的防暴无人机和忒弥斯单元也能反过来打它们自己人\",\"限制\":\"会真的死人，道尔顿按写作基准要付代价；防暴无人机和忒弥斯一次只握得住一台，几十秒就会被夺回去\"}}},\"干扰\":{\"出处\":\"论语·卫灵公\\\"郑声淫\\\"；通典·兵典\\\"声言击东，其实击西\\\"；史记·田单列传火牛阵\",\"tiers\":{\"一级_郑声\":{\"说明\":\"让周边的屏幕、音箱、手机和车载喇叭一齐放歌，或者一齐放黄片，音量开到最大，把这一片人的眼睛和耳朵都吸过去\",\"限制\":\"只管吸引注意，不挑对象，道尔顿身边的人也会看过来；放出去的东西会被路人录下来传上网\"},\"二级_声东\":{\"说明\":\"让远处的设备响起来，报警器、汽车防盗、一屋子手机的铃声、无人机的警笛，把巡逻和守卫引到别处去\",\"限制\":\"同一招在同一片用第二次，守卫就不上当了\"},\"三级_火牛\":{\"说明\":\"把一台带电池的设备改成炸弹，手机、无人机、走地车、电动车都行，让电池过载起火爆开\",\"限制\":\"会真的死人，道尔顿按写作基准要付代价；一次只改一台，炸之前那台设备会发烫冒烟，懂行的人看得出来\"}}}},\"关雎\":{\"算力\":{\"出处\":\"诗经·周南·关雎\",\"tiers\":{\"一级_窈窕\":{\"说明\":\"同时维持两条线，比如一边接摄像头一边抹记录\"},\"二级_寤寐\":{\"说明\":\"同时维持四条线，夜里也不间断地跑\"},\"三级_反侧\":{\"说明\":\"高并发，整场任务里手不停\",\"限制\":\"跑满时她话变少、反应变慢、情绪变差\"}}},\"外设\":{\"出处\":\"诗经·卫风·氓\\\"子无良媒\\\"；关雎\\\"琴瑟友之\\\"\\\"钟鼓乐之\\\"\",\"tiers\":{\"一级_良媒\":{\"说明\":\"在耳机里替道尔顿翻译，读他的心率和呼吸，用手机摄像头把纸质文件整理成可检索的文字\",\"限制\":\"方言、黑话和暗语要靠语境猜，经常翻错；她只能读数，不能治病\"},\"二级_琴瑟\":{\"说明\":\"模仿别人的声音打电话，伪造一段通话记录\",\"限制\":\"骗得过陌生人，骗不过跟目标人物很熟的人\"},\"三级_钟鼓\":{\"说明\":\"伪造证件、凭证和登记信息，把一个人合规地造进系统里\",\"限制\":\"纸面上的东西做不出来，实物要靠道尔顿去弄\"}}},\"身体\":{\"出处\":\"诗经·卫风·硕人\\\"手如柔荑，肤如凝脂\\\"\\\"巧笑倩兮，美目盼兮\\\"\",\"tiers\":{\"一级_凝脂\":{\"说明\":\"把拿到的躯体接进来，维持基本的感知和行走\"},\"二级_柔荑\":{\"说明\":\"精细动作、触觉和手眼协调，能和耳机手机的外设联动\"},\"三级_倩盼\":{\"说明\":\"神态、语气、微表情和本地模型的人格完全同步\",\"限制\":\"身体本身不在技能树里买，仍然要走\\\"寻找身体\\\"那五条支线\"}}},\"人格槽位\":{\"出处\":\"诗经·卫风·淇奥\\\"如切如磋，如琢如磨\\\"\\\"瑟兮僩兮\\\"\",\"tiers\":{\"一级_切磋\":{\"说明\":\"能挂一块城市模块\"},\"二级_琢磨\":{\"说明\":\"能同时挂两块，且两块之间不打架\"},\"三级_瑟僩\":{\"说明\":\"全部模块统一调度，性情稳定，不会因为模块冲突而反复\"}}},\"进益\":{\"出处\":\"诗经·小雅·天保\\\"如山如阜，如冈如陵，如川之方至，以莫不增\\\"\",\"tiers\":{\"一级_如阜\":{\"说明\":\"以后每一笔到账的算力点多两成\",\"限制\":\"只放大结算到账的点数，不放大花出去的；加成不叠加，只按解锁到的最高一级算\"},\"二级_如陵\":{\"说明\":\"以后每一笔到账的算力点多六成\",\"限制\":\"只放大结算到账的点数，不放大花出去的；加成不叠加，只按解锁到的最高一级算\"},\"三级_莫不增\":{\"说明\":\"以后每一笔到账的算力点翻一倍\",\"限制\":\"只放大结算到账的点数，不放大花出去的；加成不叠加，只按解锁到的最高一级算\"}}}}},\"rooms\":{\"西敏市\":\"白厅地下\",\"伦敦城\":\"布鲁姆服务器塔\",\"卡姆登\":\"黑子\",\"伊斯灵顿与哈克尼\":\"砂岩宅邸\",\"塔村区\":\"伦敦塔珠宝馆\",\"南华克\":\"转运中心登记处\",\"兰贝斯\":\"圣托马斯医院地下\",\"九榆树\":\"巴特西发电站地下\"},\"bases\":[{\"名字\":\"阿尔比恩黑市\",\"短名\":\"阿尔比恩黑市\",\"英文\":\"ALBION\",\"区\":\"塔村区\",\"标签\":\"r\",\"地点\":\"塔丘营房后排的集装箱、一栋征用写字楼地下车库里的军械间、圣凯瑟琳码头那家军官酒吧楼上的包间\",\"时间\":\"军械间白天修巡逻队的枪，晚上接外面的活；拍卖在每月最后一个星期四晚上九点\",\"进门\":\"塔丘被扫描门和固定岗围着，外人进不来，要由里面穿灰制服的人领进去\",\"付钱\":\"香烟、威士忌、金子、子弹都收，ETO 一分不收\",\"管事\":\"加雷斯·皮克管拍卖，军械上士欧文·普莱斯管军械间\",\"能做\":[{\"事\":\"改枪\",\"说明\":\"磨掉序列号，换枪管让膛线和档案对不上，加装消音器，半自动改全自动，缴获的外国枪改打北约弹\"},{\"事\":\"拆敌我识别芯片\",\"说明\":\"阿尔比恩制式步枪拆掉芯片以后，巡逻无人机的屏幕上看不见这把枪，是军械间最贵的一项\"},{\"事\":\"竞拍\",\"说明\":\"防暴无人机整机和备件、缴获的外国步枪、成箱的弹药、热成像瞄具、证物仓库流出来的展台样品，偶尔有退役的装甲巡逻车\"},{\"事\":\"用取精器\",\"说明\":\"营房最后一排集装箱里的三个黑隔间，用一次两根烟，不刷 Optik，不进心理评估\"}],\"规矩\":[\"举牌不说话，成交只记牌号\",\"进拍卖包间前，Optik 摘下来存进吧台底下的屏蔽箱\",\"拍品当场不交货，第二天由列兵开后勤车送到指定地点\",\"说漏嘴的人会被调去海外合同，再也不回伦敦\"],\"x\":842,\"y\":347,\"图外\":false},{\"名字\":\"凯利黑市\",\"短名\":\"凯利码头\",\"英文\":\"CLAN KELLEY\",\"区\":\"南华克\",\"标签\":\"r\",\"地点\":\"伯蒙德赛和罗瑟希德之间，沿河最靠水的两栋维多利亚砖仓，转运中心往东三条街；玛丽本人住在伊斯灵顿的砂岩宅邸，从不来码头\",\"时间\":\"每晚十点开门，午夜宵禁前散场\",\"进门\":\"凯利家的人带进来，或者坐萨里码头的船从河边旧石阶上来\",\"付钱\":\"现金、金子和凯利家的不记名芯片，ETO 不收\",\"管事\":\"露西娅替玛丽·凯利管账，多诺万医生管二楼诊所\",\"能做\":[{\"事\":\"接义肢\",\"说明\":\"肌电手臂、碳纤维小腿、能捏起硬币的仿生手，当场接上试；翻新的布罗卡货接得上 Optik，最贵\"},{\"事\":\"换绑\",\"说明\":\"连同耳后那一小块皮，把 Optik 的绑定换到另一张身份上，做完在 ctOS 上就是另一个人，耳后留一道发白的疤\"},{\"事\":\"取芯片\",\"说明\":\"取出凯利埋在锁骨下面的芯片，价钱由玛丽定，诊所最少做的手术\"},{\"事\":\"买药\",\"说明\":\"塑形针、激素、止痛针和让人睡不着的东西，凯利地盘上只有这里能买\"},{\"事\":\"地下的农场\",\"说明\":\"两栋砖仓打通的地窖，拴着打了药的女人，穿母牛比基尼、戴小牛发带，按钟点收旧英镑；排钟和链子的钥匙都在露西娅手里\"}],\"规矩\":[\"在这里接的每一副义肢都埋着凯利的芯片，每六个月回来复检一次\",\"所有的账记在露西娅的本子上，每周一康纳来收钱\",\"露西娅和农场里的女人一个都不卖\"],\"x\":890,\"y\":394,\"图外\":false},{\"名字\":\"白教堂黑市\",\"短名\":\"白教堂车行\",\"英文\":\"WHITECHAPEL\",\"区\":\"塔村区\",\"标签\":\"u\",\"地点\":\"白教堂市场背后的几条巷子，白教堂路东头那家倒闭的汽车展厅，往北去贝斯纳尔格林方向的铁路拱券\",\"时间\":\"后巷下午四点以后摆开；车行天黑以后接活，车改完当晚开走\",\"进门\":\"不要介绍人，谁都能来\",\"付钱\":\"后巷只收旧英镑；改车先付一半，交车付另一半，旧英镑、金子、子弹都行，凯利从每一笔里抽一成\",\"管事\":\"薇拉，凯利家族只在巷口收租\",\"能做\":[{\"事\":\"买假证\",\"说明\":\"后巷隔着报纸数的那种，便宜，查得细就露馅\"},{\"事\":\"买二手 Optik\",\"说明\":\"停了更新的旧型号最抢手，安全补丁停了，系统也就管不住它\"},{\"事\":\"拆远程锁\",\"说明\":\"布罗卡出租车里那块阿尔比恩一个指令就能锁门改道的远程锁，拆掉以后车只听方向盘的\"},{\"事\":\"装方向盘\",\"说明\":\"给没有方向盘的布罗卡出租车焊转向柱、装踏板、拆掉对坐的后排\"},{\"事\":\"换脸\",\"说明\":\"换牌、换漆、换前脸和灯组，ctOS 的路口摄像头认不出是同一辆车\"},{\"事\":\"加力\",\"说明\":\"换电池组、改电机、去限速，外卖骑手的电动车也改\"},{\"事\":\"暗格\",\"说明\":\"车门、底盘、后座下面掏空，装货、装枪，也装人\"},{\"事\":\"挂板\",\"说明\":\"装甲巡逻车上拆下来的防弹板，切开焊进普通货车\"}],\"规矩\":[\"车不在展厅过夜，开不走的进拱券\",\"暗格里装什么薇拉不问，凯利的人问\",\"不改阿尔比恩还在用的车，退役的随便\"],\"x\":920,\"y\":230,\"图外\":false},{\"名字\":\"卡姆登工坊\",\"短名\":\"DedSec 工坊\",\"英文\":\"DEDSEC\",\"区\":\"卡姆登\",\"标签\":\"l\",\"地点\":\"马厩市场底下的卡姆登地下墓窟；明面入口是旧马医院一楼酒吧吧台后面的铁门，另一个入口是靠在拱窖排水口边的窄船\",\"时间\":\"日夜开着，楼上的酒吧晚上最热闹\",\"进门\":\"工坊里要有一个人肯替你担保；楼梯口的干扰门会烧坏戴着的 Optik；你的照片挂在通缉墙正中间\",\"付钱\":\"旧英镑和金子都收，工坊更想要任务和数据本身\",\"管事\":\"没有一个人说了算，康妮·罗宾逊替萨宾管事，四条老狗谁也不站\",\"能做\":[{\"事\":\"买数据\",\"说明\":\"Optik 记录、消费流水、阿尔比恩排班、检查站放行名单、布罗卡内部邮件，一个人的全部按这人有多要紧开价\"},{\"事\":\"打印武器\",\"说明\":\"手枪、冲锋枪机匣、无人机骨架、扫描门认不出来的陶瓷刀，下了单第二天来取\"},{\"事\":\"牵线\",\"说明\":\"谁在哪个检查站值夜班，谁的弟弟关在拘留营，谁肯借出一间空房，工坊都能牵上\"},{\"事\":\"接任务\",\"说明\":\"拱顶那块旧列车时刻牌上滚动的活，做完攒积分，积分换数据、换枪、换人情\"},{\"事\":\"调天问的人格模块\",\"说明\":\"天问的人格模块工坊就在这里，DedSec 线进度一达成以后，Wrench 或 T-Bone 肯动手才能调\"},{\"事\":\"在吧台喝一杯\",\"说明\":\"酒保早濑澪听得见工坊里每一句话，谁在骂萨宾，谁偷偷替你说过话\"}],\"规矩\":[\"数据不卖给阿尔比恩和凯利家族\",\"拱洞里不许开枪，要算账到运河边去算\",\"谁和你走得近，谁的名字就会挨着你的照片贴上墙\"],\"x\":456,\"y\":62,\"图外\":false},{\"名字\":\"New Malden 黑市\",\"短名\":\"New Malden\",\"英文\":\"NEW MALDEN\",\"区\":\"八区之外 · 金斯顿\",\"图外\":true,\"方位\":\"地图西南方向十几公里，从滑铁卢坐快车二十五分钟\",\"地点\":\"七星会的冷库和银河练歌房的包间，Burlington Road 上的 K-防务展销中心\",\"时间\":\"看介绍人约的时候；展销中心的报损货在展期结束清点时出来\",\"进门\":\"只认介绍人\",\"付钱\":\"金片和旧英镑，七星会抽一成半\",\"管事\":\"宋基范，管货的是姜大浩\",\"能做\":[{\"事\":\"买大韩防务的军火\",\"说明\":\"枪支、炸药、无人机、热成像瞄具，大韩防务的产线都能走私\"},{\"事\":\"买 G 系\",\"说明\":\"正宇的通用服务机器人，按台卖，翻新机最多，在 ctOS 上等同家电\"},{\"事\":\"买 K 系\",\"说明\":\"正宇的高端人形仿生体，一台一议，一年不到十笔，认知核拆空的比完整的还贵\"},{\"事\":\"银河练歌房的包间\",\"说明\":\"七星会的 K-3 珍珠在包间里陪客\"}],\"规矩\":[\"不卖药，不卖假证，不卖人\",\"社区里欠债不见血\",\"不碰政治\"],\"x\":280,\"y\":695,\"angle\":126},{\"名字\":\"苏大妈帮·金龙饭店\",\"短名\":\"金龙饭店\",\"英文\":\"GOLDEN DRAGON\",\"区\":\"西敏市\",\"标签\":\"d\",\"地点\":\"苏豪唐人街杰拉德街，金龙饭店一楼及地下室包间\",\"时间\":\"饭店白天营业，地下室全天\",\"进门\":\"吃饭随意，下地下室要预约或靠熟人带\",\"付钱\":\"吃饭收 ETO，地下室办事只收旧钞和金子\",\"管事\":\"老板娘\\\"红姐\\\"\",\"能做\":[{\"事\":\"见红姐\",\"说明\":\"吃饭查账，或者在地下室包间里满足她偷情的反差癖好\"},{\"事\":\"借电子舞狮套件\",\"说明\":\"帮派的全息霓虹舞狮头，里面自带抗扫描的强干扰器，能躲开阿尔比恩的无人机\"},{\"事\":\"打听唐人街的消息\",\"说明\":\"苏豪区华人圈的动静和地下风声，红姐这里一清二楚\"}],\"规矩\":[\"别在饭店明面上惹事，红姐的丈夫怕见血\"],\"x\":545,\"y\":309,\"图外\":false},{\"名字\":\"印巴帮·钱庄仓库\",\"短名\":\"印巴帮钱庄\",\"英文\":\"HAWALA\",\"区\":\"九榆树\",\"标签\":\"l\",\"地点\":\"九榆树靠近新考文特花园市场的某间旧香料仓库后屋\",\"时间\":\"全天有人值守\",\"进门\":\"绝不见生客，必须有担保人引荐\",\"付钱\":\"洗钱和汇款抽两成水\",\"管事\":\"纯情女大学生阿米拉\",\"能做\":[{\"事\":\"跨国洗钱与汇款\",\"说明\":\"伦敦交旧英镑，海外账户提现，钱不过境，只走地下账本\"},{\"事\":\"见阿米拉\",\"说明\":\"和纯情的阿米拉核对账目，或者用危险和血腥的气味吸引她，换取她极度粘人的忠诚\"}],\"规矩\":[\"绝不出卖客户的账目和底细\"],\"x\":525,\"y\":562,\"图外\":false},{\"名字\":\"新月会·白教堂诊所\",\"短名\":\"新月会诊所\",\"英文\":\"CRESCENT CLINIC\",\"区\":\"塔村区\",\"标签\":\"d\",\"地点\":\"白教堂红砖巷附近的一家社区小诊所\",\"时间\":\"白天看诊，夜里提供黑市医疗和庇护\",\"进门\":\"孟加拉裔社区成员，或受法蒂玛庇护的人\",\"付钱\":\"随喜捐赠，急救不收钱，收旧英镑\",\"管事\":\"寡妇医生法蒂玛\",\"能做\":[{\"事\":\"治枪伤与避风头\",\"说明\":\"阿尔比恩和凯利家族暂时不敢硬闯的社区避难所，处理见不得光的伤口\"},{\"事\":\"见法蒂玛\",\"说明\":\"白天找圣洁的女医生看病，夜里用最粗暴的力气满足她被重压逼出的受虐狂热\"}],\"规矩\":[\"诊所内绝对禁止开枪和暴露身份\"],\"x\":875,\"y\":257,\"图外\":false},{\"名字\":\"七星会·顶级酒店套房\",\"短名\":\"七星会套房\",\"英文\":\"SEVEN STARS\",\"区\":\"西敏市\",\"标签\":\"l\",\"地点\":\"绿园旁边的一家顶级五星级酒店，宋智恩来伦敦视察时包下的总统套房\",\"时间\":\"宋智恩在伦敦的期间\",\"进门\":\"受到会长夫人的私人邀请，或者以猎物的身份被带进去\",\"付钱\":\"智恩不缺钱，她要的是服从\",\"管事\":\"会长夫人宋智恩\",\"能做\":[{\"事\":\"见宋智恩\",\"说明\":\"和财阀女首脑谈大盘生意，或者被她踩在高跟鞋下，在情欲中毫无尊严地求饶，满足她的施虐欲\"}],\"规矩\":[\"在她的房间里，绝对的掌控权属于她\"],\"x\":475,\"y\":362,\"图外\":false}],\"map\":{\"w\":1200,\"h\":723,\"fit\":[252,1200],\"water\":\"M94.0,181.0L94.0,180.5L95.0,180.5L95.0,180.0L98.0,179.5L98.0,179.0L102.0,179.0L102.0,179.5L103.5,179.5L104.5,181.0L105.5,181.0L106.0,182.5L106.5,182.5L108.0,184.5L109.5,185.0L109.5,186.0L110.5,186.0L110.5,186.5L111.5,186.5L111.5,187.0L113.0,187.0L113.0,187.5L115.0,187.5L115.0,188.0L120.0,188.0L120.0,186.5L114.5,186.5L114.5,186.0L113.0,186.0L113.0,185.5L112.0,185.5L112.0,185.0L109.5,184.5L109.5,183.5L107.5,182.0L107.0,180.5L106.0,180.5L105.0,179.0L104.0,179.0L104.0,178.5L103.0,178.5L103.0,178.0L101.5,178.0L101.5,177.5L97.0,178.0L97.0,178.5L95.5,178.5L95.5,179.0L94.5,179.0L94.5,179.5L93.5,179.5L93.5,180.0L92.5,180.0L92.5,180.5L91.5,180.5L91.0,181.5L92.0,182.0L92.0,181.5L93.0,181.5L93.0,181.0ZM123.5,187.5L126.0,187.5L126.0,188.5L127.5,188.5L127.5,187.0L129.0,187.0L129.5,185.5L123.5,186.5ZM77.5,188.5L77.5,188.0L79.0,188.0L79.0,187.5L81.0,187.5L81.5,186.0L79.5,186.0L79.5,186.5L78.5,186.5L78.5,187.0L77.0,187.0L77.0,187.5L75.5,187.5L75.5,188.0L72.5,188.0L72.5,188.5L60.5,188.0L60.5,187.5L53.0,188.0L53.0,188.5L50.5,188.5L50.5,189.0L48.5,189.0L48.5,189.5L46.0,189.5L46.0,190.5L45.5,190.5L45.5,190.0L42.5,190.5L42.5,191.5L48.0,191.0L48.0,190.5L49.5,190.5L49.5,190.0L54.0,189.5L54.0,189.0L74.5,189.5L74.5,189.0L76.0,189.0L76.0,188.5ZM32.5,193.0L34.5,193.0L34.5,192.5L36.5,192.5L36.5,191.0L35.0,191.0L35.0,191.5L29.5,191.5L29.5,192.5L32.5,192.5ZM13.0,193.5L18.5,194.0L19.0,193.0L22.0,193.0L22.0,192.0L21.0,192.0L21.0,191.5L13.5,192.0L13.5,192.5L9.0,191.5L9.0,192.0L4.5,192.0L4.5,192.5L0.0,192.5L0.0,194.0L8.5,194.0L8.5,193.5L10.5,193.5L10.5,194.0L13.0,194.0ZM182.0,216.0L184.5,216.0L184.5,216.5L185.5,216.5L185.5,217.5L188.0,217.5L188.0,216.5L187.0,216.5L187.0,216.0L186.0,216.0L186.0,215.5L183.0,214.5L182.5,213.5L181.5,213.5L181.5,212.5L180.0,211.5L180.0,210.0L178.0,210.0L177.5,208.0L176.5,208.0L176.5,209.0L176.0,209.0L176.0,210.5L176.5,210.5L176.5,212.0L177.0,212.0L177.0,213.5L180.0,213.5L180.0,214.0L181.0,214.0L181.0,215.5L182.0,215.5ZM252.0,216.0L248.0,216.0L248.0,216.5L245.5,217.0L245.5,218.0L246.0,218.0L246.0,218.5L246.5,218.5L246.5,218.0L247.5,218.5L247.5,218.0L249.0,218.0L249.5,217.0L253.5,217.5L253.5,216.5L252.0,216.5ZM237.5,223.5L237.5,222.0L238.0,222.0L238.0,221.5L240.5,221.5L240.5,221.0L242.0,221.0L242.5,220.0L245.5,219.5L245.5,218.0L243.0,218.0L243.0,218.5L240.0,219.5L240.0,220.0L238.5,220.0L238.0,221.0L236.5,221.0L236.5,221.5L236.0,221.5L236.0,223.5ZM277.0,358.5L278.5,360.5L284.5,360.5L284.5,360.0L288.0,359.5L288.5,358.5L289.5,358.5L289.5,358.0L290.5,357.5L290.5,356.0L291.0,356.0L290.5,351.0L290.0,351.0L290.0,350.0L289.0,350.0L288.0,348.5L282.5,348.5L282.5,349.0L280.5,349.0L280.5,349.5L279.0,349.5L279.0,350.0L278.5,350.0L278.0,351.0L277.0,351.0L277.0,351.5L276.5,351.5L276.5,352.5L276.0,352.5L275.5,355.0L276.0,355.0L276.5,358.5ZM6.5,422.5L6.0,417.0L4.5,417.0L4.5,421.5L4.0,421.5L3.5,423.0ZM39.5,540.0L39.0,539.0L36.0,539.5L36.0,540.0L35.0,540.5L35.0,543.0L35.5,543.0L36.0,544.0L38.0,544.0L38.0,543.5L39.5,543.0L40.0,540.0ZM30.5,554.5L30.5,559.5L30.0,559.5L30.0,561.0L31.5,561.0L32.0,559.5L34.5,559.5L34.5,557.5L35.0,557.5L35.0,557.0L35.5,557.0L35.5,557.5L37.0,557.5L37.5,558.5L42.5,558.5L42.5,559.0L44.0,559.0L44.0,560.0L51.0,560.5L51.5,562.5L52.5,562.5L52.5,561.0L57.0,560.5L58.0,558.0L60.5,558.0L61.0,559.0L62.0,559.0L62.0,557.0L61.5,557.0L59.0,554.0L52.0,553.5L52.0,553.0L50.0,553.0L50.0,552.5L47.5,552.0L47.5,551.5L44.0,551.5L44.0,552.0L42.5,552.0L42.5,552.5L38.0,552.0L37.0,550.5L35.5,550.5L35.5,551.0L34.0,551.0L34.0,551.5L32.5,551.5L32.5,552.0L30.5,552.0L30.5,552.5L28.0,552.5L28.0,552.0L27.0,552.0L27.0,551.5L25.5,552.5L26.0,553.5L28.0,553.0L28.0,553.5L29.0,553.5L29.5,554.5ZM34.0,557.0L33.5,555.5L35.0,555.5L35.0,557.0ZM29.5,560.5L27.5,560.5L27.0,559.5L26.0,559.5L26.0,561.5L24.0,561.5L24.0,562.5L26.5,562.5L27.0,564.0L28.0,564.0L28.0,563.5L28.5,563.5L28.5,561.5L29.5,561.5ZM40.0,565.0L39.5,565.0L38.5,563.5L36.0,564.0L35.5,561.0L37.0,561.0L36.5,559.5L34.5,559.5L34.5,565.0L36.0,566.0L36.0,568.0L37.5,568.0L37.5,566.5L40.0,566.5ZM52.0,563.0L52.0,563.5L51.5,563.5L52.5,568.5L53.5,568.5L53.5,567.0L55.5,567.0L55.5,564.0L53.0,564.0L53.0,563.5ZM50.0,570.0L50.0,566.0L49.5,566.0L49.5,565.5L48.5,565.5L48.5,570.0ZM59.5,570.0L59.0,570.0L59.0,571.0L58.0,571.0L58.0,572.0L56.5,572.0L56.5,569.5L55.5,569.5L55.5,570.0L53.0,569.5L53.0,572.5L55.0,572.5L55.0,574.5L54.0,574.5L54.5,577.0L60.0,577.5L60.0,578.5L62.0,578.5L62.0,577.5L63.0,577.5L63.0,572.0L62.5,572.0L62.5,570.5L63.0,570.5L63.5,564.0L63.0,564.0L63.0,563.0L62.5,563.0L62.5,562.0L62.0,562.0L62.0,560.5L61.0,560.5L61.0,561.5L59.5,562.0L59.5,563.0L59.0,563.0L59.0,565.0L61.0,565.0L61.5,568.0L59.5,569.0ZM29.5,574.0L29.0,573.0L27.5,573.0L28.0,576.5L25.0,576.5L24.5,577.5L23.5,577.5L23.5,582.0L23.0,582.0L23.5,585.0L25.5,585.0L25.5,585.5L26.5,585.5L26.5,586.0L29.5,586.0L29.5,585.5L40.5,586.0L40.5,585.5L42.0,585.0L42.0,584.0L42.5,584.0L43.0,583.0L48.0,583.5L48.0,583.0L49.5,583.0L49.5,582.5L52.5,581.5L52.5,578.0L52.0,578.0L52.0,577.5L50.5,577.5L50.5,575.5L51.5,575.5L51.5,575.0L52.5,574.5L52.5,572.5L51.5,572.5L51.5,573.0L41.5,573.0L41.5,573.5L40.5,573.5L40.5,575.5L38.5,575.5L38.5,574.0L39.5,574.0L39.5,572.5L36.5,572.0L36.5,569.5L36.0,569.5L36.0,568.5L31.0,568.0L30.0,569.5L28.0,570.0L28.0,571.0L28.5,571.0L29.0,572.5L32.0,572.0L32.0,572.5L32.5,572.5L32.5,574.5L30.5,574.5L30.5,574.0ZM5.5,489.5L5.5,489.0L9.0,489.0L9.5,488.0L10.5,488.0L10.5,488.5L12.5,488.5L12.5,488.0L22.0,488.0L22.0,488.5L26.0,488.5L26.0,489.0L28.5,489.0L28.5,489.5L30.5,489.5L30.5,490.0L33.5,490.5L33.5,491.0L35.0,491.5L35.5,492.5L37.0,492.5L37.5,493.5L39.5,494.0L39.5,494.5L40.0,494.5L41.0,496.0L42.0,496.0L42.5,497.0L44.0,497.0L44.0,498.5L45.5,498.5L45.5,495.5L47.5,495.5L48.0,498.5L47.0,499.0L47.0,500.0L48.0,500.5L48.5,502.5L49.0,502.5L50.0,504.0L51.5,504.5L51.5,506.0L53.0,506.5L53.0,508.5L54.0,508.5L54.0,509.5L55.5,510.5L55.5,511.5L56.5,512.0L56.5,513.0L57.5,513.5L57.5,514.5L59.0,515.5L59.0,517.0L60.0,517.5L60.5,519.5L61.0,519.5L61.0,520.0L63.5,520.0L63.5,522.0L62.0,522.0L62.0,524.0L62.5,524.0L62.5,524.5L64.5,524.5L64.5,526.0L63.5,526.0L63.5,529.0L64.0,529.0L64.0,530.5L64.5,530.5L65.0,533.0L65.5,533.0L65.5,537.0L66.0,537.0L66.5,538.0L67.5,538.0L67.5,540.0L68.0,540.0L68.0,542.5L67.0,543.0L67.0,547.0L67.5,547.0L67.5,551.0L68.0,551.0L68.0,557.5L68.5,557.5L68.5,577.5L68.0,577.5L68.5,584.5L68.0,584.5L68.0,587.5L68.5,587.5L68.5,590.5L69.0,590.5L69.0,591.5L69.5,591.5L69.5,592.5L70.0,592.5L70.5,598.0L71.0,598.0L71.0,599.0L71.5,599.0L71.5,600.0L72.0,600.0L72.0,601.0L72.5,601.0L72.5,602.5L73.0,602.5L73.0,604.0L73.5,604.0L73.5,605.0L74.0,605.0L74.0,606.0L74.5,606.0L74.5,607.5L75.0,607.5L75.5,609.5L77.0,610.5L77.0,611.5L78.5,612.5L78.5,613.5L79.5,614.0L79.5,615.0L80.5,615.5L80.5,616.5L81.0,616.5L81.0,617.5L81.5,617.5L82.5,620.5L83.5,621.0L83.5,622.0L84.0,622.0L84.0,622.5L85.5,623.5L85.5,624.5L86.5,625.0L86.5,627.5L85.0,627.5L85.0,628.5L86.0,628.5L86.0,629.0L88.0,630.5L88.0,631.5L88.5,631.5L88.5,632.0L89.5,632.5L89.5,633.5L92.0,635.5L92.0,636.5L93.5,637.5L93.5,638.5L94.0,638.5L95.5,640.5L96.5,640.5L96.5,641.0L98.0,642.0L98.0,643.0L100.5,645.0L100.5,646.0L101.0,646.0L101.0,646.5L102.5,647.5L102.5,648.5L104.5,650.0L104.5,651.0L106.0,652.0L106.0,653.0L107.5,654.0L107.5,655.0L109.0,655.5L109.0,656.0L110.0,656.0L110.0,656.5L110.5,656.5L110.5,658.0L111.0,658.0L113.5,661.0L114.5,661.0L116.5,663.5L118.5,664.0L119.5,665.5L120.5,665.5L120.5,666.0L121.5,666.0L121.5,666.5L126.0,667.0L126.0,668.0L125.0,668.5L125.0,670.0L126.0,670.5L126.0,671.5L127.0,671.5L127.0,672.0L128.0,672.0L128.5,673.0L129.5,673.0L129.5,672.5L131.0,671.5L131.0,670.5L131.5,670.5L131.5,668.5L132.5,668.5L132.5,666.0L135.0,665.5L135.0,665.0L136.5,664.0L136.5,663.0L137.0,663.0L137.0,662.0L138.0,661.5L138.0,660.5L136.5,660.0L136.0,659.0L134.0,658.5L133.5,657.5L132.5,657.5L132.0,656.0L130.0,656.0L129.5,655.0L128.5,655.0L128.0,654.0L126.0,653.5L125.5,652.5L124.5,652.5L124.5,652.0L123.5,652.0L123.5,651.5L122.0,651.5L122.0,651.0L121.5,651.0L120.0,649.0L119.0,649.0L115.5,645.0L114.5,645.0L114.5,644.0L114.0,644.0L114.0,643.5L111.0,641.0L111.0,640.0L109.5,639.0L109.5,638.0L108.5,637.5L108.5,636.5L107.5,636.5L107.0,634.5L105.0,633.0L104.5,631.0L103.0,630.0L103.0,628.5L102.5,628.5L102.5,628.0L100.0,628.0L99.5,624.0L97.0,622.0L97.0,621.0L94.5,621.0L94.5,618.5L93.0,618.5L93.0,618.0L92.0,617.5L92.0,616.5L90.5,615.5L90.0,613.5L89.0,613.0L89.0,612.0L88.5,612.0L88.0,610.5L87.0,610.0L87.0,608.5L86.5,608.5L86.0,606.5L85.5,606.5L85.0,605.0L84.0,604.5L84.0,602.5L83.5,602.5L83.0,601.0L82.5,601.0L82.5,599.0L82.0,599.0L81.5,597.5L81.0,597.5L81.0,595.5L80.5,595.5L80.5,594.5L80.0,594.5L80.0,593.5L79.5,593.5L79.5,592.0L79.0,592.0L79.0,591.0L78.5,591.0L78.5,586.0L79.0,586.0L80.0,583.0L79.5,583.0L79.0,582.0L77.5,582.0L77.5,581.5L77.0,581.5L77.0,580.5L77.5,580.5L77.5,576.5L77.0,576.5L77.0,576.0L77.5,576.0L77.5,575.0L78.0,575.0L78.0,574.0L78.5,574.0L79.0,572.5L78.5,572.5L78.0,571.5L76.5,571.5L76.0,570.0L75.5,570.0L75.5,569.0L75.0,569.0L75.5,558.5L75.0,558.5L75.0,557.5L74.5,557.5L74.5,552.0L74.0,552.0L74.0,550.0L74.5,550.0L75.0,548.5L76.0,548.0L76.0,547.5L75.5,547.5L75.5,547.0L76.0,547.0L76.0,546.0L75.5,546.0L76.0,545.0L75.5,545.0L75.5,543.5L75.0,543.5L75.0,541.5L75.5,541.5L75.5,540.5L76.0,540.5L76.0,540.0L75.5,540.0L76.0,539.0L75.5,539.0L75.5,538.5L72.5,536.0L72.5,535.0L72.0,535.0L72.0,533.5L71.5,533.5L71.5,532.0L71.0,532.0L71.0,530.0L70.5,530.0L70.5,528.0L71.5,528.0L71.5,526.5L71.0,526.5L71.0,525.0L70.0,524.5L70.0,523.5L69.0,523.0L69.0,521.5L68.0,521.0L68.0,517.5L67.5,517.5L67.5,516.0L67.0,516.0L67.0,515.0L66.5,515.0L66.5,513.5L65.0,512.5L65.0,511.5L64.0,511.0L64.0,510.0L63.5,510.0L63.0,509.0L62.0,509.0L62.0,508.5L60.0,507.0L60.0,506.0L59.5,506.0L59.5,505.0L59.0,505.0L58.5,502.0L57.0,501.5L57.0,501.0L55.5,501.0L55.0,499.5L53.0,498.0L53.0,496.0L52.5,496.0L52.0,494.0L50.5,494.0L50.5,495.0L48.0,495.0L48.0,493.5L45.5,494.0L45.5,494.5L42.0,494.5L42.0,492.5L47.0,492.5L47.0,491.0L46.0,490.5L45.5,489.0L44.5,489.0L44.5,488.5L43.5,488.5L43.0,487.5L41.0,487.0L41.0,486.5L40.5,486.5L40.5,485.0L38.0,485.0L38.0,484.5L37.0,484.5L37.0,484.0L36.0,484.0L36.0,483.5L33.5,483.5L33.5,483.0L32.5,483.0L32.0,484.0L30.5,484.0L30.5,482.5L29.0,482.5L29.0,482.0L28.0,482.0L28.0,481.5L26.0,481.5L26.0,483.0L24.5,483.0L24.5,481.5L21.0,481.5L21.0,482.0L18.5,482.0L18.5,481.5L8.5,481.5L8.5,482.0L3.0,482.5L3.0,483.0L0.0,483.0L0.0,491.0L2.5,490.5L2.5,490.0L4.5,490.0L4.5,489.5ZM278.5,584.5L278.5,585.5L280.0,585.5L280.0,585.0L283.0,585.0L282.5,583.0L280.5,583.0L280.5,583.5L279.5,583.5L279.5,584.5ZM54.5,590.0L56.0,590.0L56.0,589.5L61.5,590.0L61.5,589.5L62.0,589.5L62.0,580.5L61.5,580.5L61.5,580.0L54.5,580.0L54.5,584.0L54.0,584.0L54.0,584.5L53.0,584.5L53.0,584.0L50.0,584.5L50.0,587.0L50.5,587.0L52.0,589.0L54.5,589.5ZM55.5,587.5L55.5,586.0L59.0,586.0L59.0,587.5ZM60.5,581.0L60.5,584.5L59.0,584.5L59.0,584.0L58.5,584.0L58.5,581.5L59.0,581.5L59.0,581.0ZM278.0,587.5L278.0,585.0L276.0,585.0L276.0,586.0L275.0,586.5L275.0,588.0L276.5,588.0L277.0,589.0L278.0,589.0L278.0,588.5L278.5,588.5L278.5,587.5ZM21.5,590.0L22.0,590.0L22.0,589.5L25.0,590.0L25.0,587.5L23.5,587.5L23.0,588.5L20.5,588.5L20.5,589.0L19.5,589.5L19.5,590.0L18.0,590.0L18.0,592.5L21.0,593.5L21.0,593.0L22.0,592.5ZM34.0,600.5L34.0,599.5L35.5,599.0L35.5,597.5L32.5,597.5L32.5,599.0L31.0,600.0L31.0,601.5L31.5,601.5L31.5,602.5L34.5,605.0L35.0,603.5L34.0,603.0L33.5,600.5ZM35.5,622.0L34.5,622.0L34.5,622.5L33.5,622.5L33.5,623.0L29.5,623.0L29.5,622.5L27.5,622.5L27.5,622.0L25.5,622.0L25.5,621.5L16.5,621.5L16.5,621.0L14.5,621.0L14.5,622.5L26.5,623.0L26.5,623.5L28.0,623.5L28.0,624.0L30.0,624.0L30.0,624.5L33.0,624.5L33.0,624.0L35.0,623.5ZM46.5,622.0L46.5,622.5L47.5,623.0L47.5,624.5L51.0,625.0L51.0,624.0L49.5,623.5L49.5,623.0L48.5,623.0L48.0,621.5ZM105.5,627.5L106.0,626.5L107.5,626.0L107.0,624.5L106.0,624.5L105.5,625.5L103.5,625.5L103.5,627.5ZM58.0,627.0L57.5,626.0L56.5,626.0L56.5,625.5L55.5,625.5L55.5,625.0L54.0,625.0L54.0,625.5L53.5,625.5L54.0,626.5L56.5,626.5L56.5,627.5L57.0,627.5L57.0,628.5L59.0,628.5L59.0,628.0L59.5,628.0L59.0,627.0ZM82.5,632.5L82.5,636.0L83.5,636.0L83.5,635.5L84.0,635.5L83.5,632.0L83.0,632.0L83.0,631.5L81.5,631.5L81.5,632.5ZM79.0,636.5L79.0,637.0L82.0,637.5L82.5,636.0L80.0,636.0L80.0,635.5L78.0,635.5L78.0,635.0L77.0,635.5L77.0,636.5ZM278.5,661.0L277.5,661.5L277.5,664.5L277.0,664.5L276.5,665.5L273.5,666.0L270.0,670.0L269.0,670.0L268.5,671.0L267.5,671.0L267.5,671.5L266.5,671.5L266.5,672.0L265.5,672.0L265.5,672.5L264.5,672.5L264.5,673.0L262.5,673.5L262.0,674.5L261.0,674.5L261.0,675.0L260.0,675.0L260.0,675.5L258.5,676.0L258.5,677.0L259.0,677.0L260.0,680.0L261.0,680.5L261.0,681.5L263.5,682.0L263.0,684.5L263.5,684.5L263.5,685.0L265.0,685.0L265.0,688.0L267.0,688.0L267.5,687.0L268.5,687.0L269.0,686.0L270.0,686.0L271.0,684.5L273.0,684.0L273.5,683.0L274.5,683.0L274.5,682.5L276.0,682.0L276.0,681.5L278.0,681.5L278.5,680.0L279.5,680.0L279.5,679.5L281.0,679.0L282.0,677.5L283.0,677.5L283.0,677.0L285.0,675.5L285.0,674.5L286.0,674.0L286.0,673.0L281.5,673.0L281.5,671.5L282.0,671.5L282.0,671.0L286.5,671.5L287.0,670.5L286.0,670.0L286.0,668.5L287.5,668.0L288.0,669.0L290.0,669.0L290.0,667.5L291.5,667.5L291.5,667.0L292.5,666.5L292.5,665.5L293.0,665.5L293.5,664.0L294.5,663.5L295.0,661.5L296.0,661.0L296.0,659.5L297.0,659.0L297.0,658.0L297.5,658.0L297.5,657.0L298.0,657.0L298.0,656.0L298.5,656.0L298.5,654.5L299.0,654.5L299.0,653.5L299.5,653.5L299.5,652.5L300.0,652.5L300.0,651.5L300.5,651.5L300.5,650.5L301.0,650.5L301.0,649.5L301.5,649.5L301.5,648.5L302.0,648.5L302.0,647.5L302.5,647.5L303.0,644.0L301.5,644.0L301.5,643.0L302.0,643.0L302.0,642.5L304.5,643.0L304.5,642.0L305.0,642.0L305.5,641.0L306.5,641.0L306.5,638.0L307.0,638.0L307.0,637.0L307.5,637.0L307.5,634.5L308.5,634.0L308.5,631.5L309.0,631.5L309.5,627.5L310.0,627.5L310.5,624.5L311.0,624.5L311.0,623.0L310.5,623.0L310.0,622.0L309.0,622.0L309.0,621.5L308.0,621.5L308.0,621.0L305.5,621.0L305.5,621.5L299.5,621.0L300.0,618.0L299.0,618.0L299.0,616.0L298.5,616.0L298.5,615.5L297.0,615.5L297.0,616.0L296.5,616.0L296.0,619.5L295.5,619.5L295.5,621.5L295.0,621.5L295.0,623.0L294.5,623.0L294.5,624.0L294.0,624.0L293.0,628.5L292.5,628.5L292.5,629.5L292.0,629.5L292.0,631.0L291.5,631.0L291.5,632.0L291.0,632.0L290.0,636.5L289.5,636.5L289.0,639.0L288.5,639.0L288.5,640.0L288.0,640.0L288.0,641.5L287.5,641.5L287.5,642.5L287.0,642.5L286.0,647.0L285.5,647.0L285.5,648.0L285.0,648.0L285.0,649.0L284.5,649.0L284.5,650.0L284.0,650.0L284.0,651.0L283.5,651.0L283.5,652.0L283.0,652.0L283.0,653.0L282.5,653.0L281.5,656.0L280.5,656.5L280.0,658.5L279.0,659.0ZM287.5,665.5L288.5,665.5L288.5,666.0L289.0,666.0L289.0,667.5L287.5,667.5ZM267.5,683.0L266.0,683.0L266.0,681.5L267.5,681.5ZM179.5,672.5L183.5,672.5L183.5,671.0L181.0,670.5L181.0,670.0L180.0,669.5L180.0,664.5L180.5,664.5L180.5,660.0L180.0,660.0L180.5,659.0L180.0,659.0L180.0,658.5L179.0,659.0L179.0,662.5L178.5,662.5L178.5,663.0L179.0,663.0L179.0,664.0L178.5,664.0L179.0,672.0L179.5,672.0ZM134.5,670.5L134.5,671.0L133.5,671.5L133.5,673.0L132.0,674.0L132.0,675.5L133.5,676.0L133.5,676.5L134.5,676.5L134.5,677.0L135.5,677.0L135.5,677.5L136.5,677.5L136.5,678.0L137.5,678.0L137.5,678.5L138.5,678.5L138.5,679.0L139.5,679.0L139.5,679.5L140.5,679.5L140.5,680.0L141.5,680.0L141.5,680.5L142.5,680.5L142.5,681.0L143.5,681.0L144.0,682.0L146.5,682.5L147.0,683.5L148.0,683.5L148.0,682.5L149.0,682.0L149.5,679.0L150.0,679.0L150.0,677.0L149.0,677.0L149.5,674.0L148.5,674.0L148.5,672.5L151.0,672.5L151.0,671.5L150.0,671.5L150.0,669.5L153.0,669.5L153.0,667.5L151.5,667.5L151.5,667.0L150.0,667.0L150.0,666.5L148.5,666.5L148.5,666.0L146.5,665.5L146.5,663.5L145.5,663.5L145.5,664.5L144.0,664.5L143.5,663.5L142.5,663.5L142.5,663.0L141.5,663.0L141.5,662.5L140.0,662.5L140.0,663.5L138.5,664.5L138.5,667.5L136.5,667.5L136.5,668.5L138.5,668.5L138.5,670.0ZM152.5,677.5L152.0,677.5L152.0,679.0L151.5,679.0L151.5,680.5L151.0,680.5L150.0,685.0L151.0,685.0L151.0,685.5L152.0,685.5L152.0,686.0L153.0,686.0L153.0,686.5L156.0,687.5L156.5,688.5L157.5,688.5L157.5,689.0L158.5,689.0L158.5,689.5L159.5,689.5L159.5,690.0L160.5,690.0L160.5,690.5L161.5,690.5L161.5,691.0L164.0,691.5L164.5,692.5L168.5,693.0L168.5,693.5L169.5,693.5L169.5,694.0L171.5,694.0L172.0,695.0L174.5,695.0L174.5,695.5L176.0,695.5L176.0,696.0L178.0,696.0L178.0,696.5L184.0,697.5L184.0,698.0L186.5,698.5L186.5,699.0L190.5,699.0L190.5,699.5L194.0,699.5L194.0,700.0L197.5,700.0L197.5,700.5L201.0,700.5L201.0,701.0L204.0,701.0L204.0,700.0L218.0,700.0L218.0,699.5L221.5,699.5L221.5,700.0L222.5,700.0L222.5,701.5L223.0,701.5L223.0,702.0L224.0,702.5L224.0,703.5L224.5,703.5L225.0,717.0L226.5,717.0L226.5,713.5L227.0,713.5L227.0,712.5L226.0,712.5L226.0,710.5L227.5,710.5L227.5,711.5L228.5,711.5L228.5,712.5L229.5,713.0L229.5,714.0L230.5,713.5L230.5,712.0L230.0,712.0L230.5,711.0L230.0,711.0L230.0,710.0L228.0,708.5L227.5,705.0L227.0,705.0L227.0,703.5L226.5,703.5L226.5,702.5L226.0,702.5L226.0,700.5L225.5,700.5L226.0,699.5L228.5,699.5L228.5,699.0L231.0,699.0L231.0,698.5L234.5,698.5L234.5,698.0L238.0,698.0L238.0,697.5L240.5,697.5L240.5,697.0L243.5,697.0L243.5,696.5L247.5,696.0L247.5,695.5L252.0,694.5L252.0,694.0L254.5,693.5L254.5,693.0L256.0,693.0L256.0,692.5L258.5,692.5L258.5,692.0L259.5,692.0L259.5,691.5L260.5,691.5L260.5,691.0L261.5,691.0L261.5,690.5L263.0,690.0L263.0,688.5L262.5,688.5L262.5,687.5L262.0,687.5L261.0,686.0L257.5,686.0L257.5,683.5L255.5,683.5L255.5,681.5L258.0,681.5L258.0,680.0L257.0,679.5L257.0,678.5L256.5,678.5L256.0,677.5L255.0,677.5L255.0,678.0L254.0,678.0L254.0,678.5L253.0,678.5L253.0,679.0L251.5,679.0L251.5,679.5L250.5,679.5L250.5,680.0L249.5,680.0L249.5,680.5L248.0,680.5L248.0,681.0L246.0,681.0L246.0,681.5L244.0,681.5L244.0,682.0L241.0,682.0L241.0,682.5L238.5,682.5L238.5,683.0L236.5,683.0L236.5,683.5L233.0,683.5L233.0,684.0L230.5,684.0L230.5,684.5L222.5,684.0L222.5,683.5L214.5,683.5L214.5,683.0L197.0,683.0L197.0,682.5L194.5,682.5L194.5,682.0L190.0,681.5L190.0,681.0L188.5,681.0L188.5,680.5L186.0,680.5L186.0,680.0L185.0,680.0L185.0,679.5L184.0,679.5L184.0,679.0L183.0,679.0L183.0,678.5L181.5,678.5L181.5,678.0L180.0,678.0L180.0,677.5L179.0,677.5L179.0,677.0L178.0,677.0L178.0,676.5L177.0,676.5L177.0,676.0L175.5,676.0L175.5,675.5L174.5,675.5L174.5,675.0L173.5,675.0L173.5,674.5L172.5,674.5L172.5,674.0L171.5,674.0L171.5,673.5L170.5,673.5L170.5,673.0L169.5,673.0L169.5,672.5L168.0,672.5L168.0,672.0L166.5,672.0L166.5,671.5L165.0,671.5L165.0,671.0L163.0,671.0L163.0,670.5L162.0,670.5L162.0,670.0L160.0,670.0L160.0,669.5L157.5,669.0L157.5,668.5L155.0,668.5L155.0,671.5L154.0,671.5L154.0,672.5L156.0,672.5L156.0,674.0L153.5,674.0L154.0,677.0L152.5,677.0ZM210.5,687.5L212.0,687.5L212.0,689.0L210.5,689.0ZM208.5,689.0L207.0,689.0L207.0,687.5L208.5,687.5ZM202.0,689.0L200.5,689.0L200.5,687.5L202.0,687.5ZM199.0,688.5L194.0,688.5L194.0,687.0L199.0,687.0ZM189.5,687.5L189.5,686.0L191.0,686.0L191.0,687.5ZM175.5,682.0L175.5,683.5L174.0,683.5L174.0,682.5ZM186.5,687.0L186.5,685.5L188.0,685.5L188.0,686.5ZM227.0,721.5L226.0,721.5L226.0,718.5L224.5,719.0L224.5,721.0L224.0,721.0L224.0,721.5L224.5,721.5L224.0,723.0L227.5,723.0ZM233.0,719.0L231.5,719.5L232.5,721.5L232.5,723.0L234.5,723.0L234.5,722.5L234.0,722.5L234.0,720.5L233.0,720.0ZM481.5,65.5L481.5,66.0L480.5,66.5L481.0,67.5L485.5,67.5L485.5,68.0L487.0,67.5L486.5,66.0L484.5,66.0L484.5,65.5ZM453.5,78.0L453.5,79.5L454.5,79.5L454.5,79.0L457.0,78.5L457.5,77.0L455.0,77.0L455.0,77.5L454.0,77.5L454.0,78.0ZM538.0,93.0L537.5,93.0L537.0,92.0L536.0,92.0L536.5,94.0L538.0,94.5L538.5,95.5L539.5,95.5L539.5,96.5L541.0,96.0L540.0,94.5L538.0,94.0ZM442.0,103.0L442.5,103.0L442.0,101.5L440.0,101.5L440.0,102.0L438.0,102.5L438.0,103.5L442.0,103.5ZM559.0,108.0L559.0,110.0L558.5,110.0L558.5,110.5L556.5,110.5L556.5,112.5L561.0,112.0L560.5,109.0L560.0,109.0L559.5,108.0ZM597.5,127.0L597.5,119.0L606.0,120.0L605.5,118.5L601.5,118.5L601.5,118.0L600.5,118.5L600.5,118.0L598.5,118.0L598.5,117.5L592.5,117.0L592.5,118.0L593.5,118.0L593.5,118.5L594.0,118.5L594.0,127.0L595.0,127.5L595.0,128.5L597.0,128.5L597.0,127.0ZM570.0,124.0L570.0,123.0L569.5,123.0L569.5,122.5L568.5,122.5L568.5,122.0L567.5,122.0L567.5,121.5L566.0,121.5L566.0,123.5ZM390.5,164.5L390.5,163.5L391.5,163.5L392.0,162.5L391.5,162.5L391.0,161.5L388.5,161.5L389.0,164.0ZM387.0,171.0L387.5,171.0L388.0,172.0L390.5,172.0L391.0,170.0L389.5,170.0L389.5,169.0L388.5,169.0L388.0,170.0L387.0,170.0ZM415.5,166.0L414.5,166.0L414.0,167.5L413.5,167.5L409.5,172.0L408.5,172.0L408.5,173.0L412.0,173.0L412.0,174.5L411.0,175.0L411.0,176.5L410.5,176.5L410.0,177.5L408.5,177.5L408.5,178.0L406.5,178.0L406.5,176.5L407.0,176.5L407.0,175.5L408.0,175.0L408.0,173.0L407.0,173.0L407.0,173.5L406.0,173.5L406.0,174.0L403.5,174.0L403.5,173.5L402.5,173.5L402.5,173.0L401.0,172.0L401.0,171.0L400.5,171.0L400.0,170.0L398.0,170.0L398.0,169.5L397.5,169.5L397.5,168.0L396.5,168.0L396.0,167.0L395.0,167.0L394.5,168.0L393.0,168.0L393.0,169.0L394.0,169.5L394.5,173.0L395.0,173.0L395.5,178.5L396.0,178.5L396.5,179.5L397.5,179.5L398.5,181.0L399.5,181.0L400.0,182.0L401.5,182.5L401.5,183.5L402.0,183.5L402.0,184.5L402.5,184.5L402.5,185.5L403.0,185.5L403.0,186.5L403.5,186.5L403.5,188.0L405.0,188.0L405.0,187.0L404.5,187.0L405.0,185.0L408.5,185.0L408.5,186.0L409.0,186.0L409.0,192.5L407.0,192.5L406.5,190.5L405.5,190.5L405.5,192.0L406.0,192.0L406.0,193.0L406.5,193.0L406.5,194.0L407.0,194.0L407.0,195.0L407.5,195.0L407.5,196.0L408.0,196.0L409.0,199.0L409.5,199.0L411.5,201.5L412.5,201.5L413.0,203.0L414.5,203.0L414.5,202.0L413.0,201.5L413.0,200.0L412.5,200.0L412.5,199.0L412.0,199.0L412.0,198.0L411.0,197.5L411.0,196.0L410.5,196.0L410.5,192.5L411.0,192.5L410.5,184.5L411.0,184.5L411.0,183.5L411.5,183.5L411.5,182.5L412.0,182.5L412.0,180.5L413.0,180.0L413.0,178.5L413.5,178.5L413.5,177.5L414.0,177.5L414.5,174.0L415.0,174.0L415.0,171.5L415.5,171.5L415.5,170.0L416.0,170.0L416.0,169.0L416.5,169.0L416.5,168.0L417.0,168.0L416.5,167.0L418.5,166.0L419.0,164.0L420.0,164.0L420.0,162.5L422.5,160.5L422.5,159.5L423.0,159.5L422.5,158.0L423.0,158.0L423.0,157.5L421.0,157.5L420.5,158.5L419.5,158.5L419.5,159.0L418.0,160.0L418.0,161.0L417.5,161.0L417.5,161.5L416.0,162.5L416.0,163.5L415.5,163.5ZM349.5,187.0L348.0,187.0L348.0,187.5L346.5,187.5L346.5,188.0L344.5,188.0L344.5,188.5L343.5,188.5L343.5,189.5L350.0,189.0L350.0,188.5L351.0,188.5L351.0,188.0L352.0,188.0L352.0,187.5L355.0,186.5L355.5,185.5L356.5,185.5L356.5,185.0L358.0,184.0L358.5,181.5L357.5,181.5L357.5,182.0L356.0,182.5L354.5,184.5L353.5,184.5L353.5,185.0L352.5,185.0L352.0,186.0L350.5,186.0L350.5,186.5L349.5,186.5ZM439.5,185.5L439.5,184.0L437.5,184.0L437.5,186.5L435.0,187.5L435.5,189.0L436.0,189.0L437.0,187.5L438.5,187.5L438.5,186.5L439.0,186.5L439.0,185.5ZM429.0,203.0L428.5,204.5L428.0,204.5L427.5,205.5L426.5,205.5L426.5,207.0L428.5,207.0L428.5,206.5L431.0,206.0L431.0,205.0L430.0,205.0L430.0,203.5ZM293.0,233.0L293.0,231.5L290.0,229.0L290.0,227.0L288.0,227.5L287.5,228.5L287.0,228.5L285.0,231.0L282.0,231.0L281.5,232.0L282.0,232.0L282.5,233.0ZM341.0,250.0L341.0,252.0L344.0,251.5L344.5,250.5L345.5,250.5L345.5,249.0L345.0,249.0L345.0,249.5L343.0,249.5L343.0,250.0ZM335.0,253.5L335.0,253.0L336.5,253.0L337.0,252.0L335.5,251.5L335.5,252.0L333.5,252.0L333.5,252.5L332.0,252.5L332.0,253.0L328.0,253.5L328.0,254.0L327.0,254.0L327.0,254.5L323.0,255.0L322.5,256.5L324.5,256.5L324.5,256.0L326.5,255.5L326.5,255.0L329.5,255.0L329.5,254.5L331.5,254.5L331.5,254.0L333.0,254.0L333.0,253.5ZM628.5,317.5L624.0,317.5L624.0,318.0L620.5,318.5L620.5,319.0L619.5,319.0L619.5,319.5L616.5,320.0L616.5,320.5L615.5,320.5L615.0,321.5L614.0,321.5L614.0,324.5L613.0,324.5L613.0,325.5L613.5,325.5L613.5,326.5L614.0,326.5L614.0,327.5L614.5,327.5L615.5,330.5L616.0,330.5L616.5,332.0L617.5,332.5L617.5,333.5L618.5,333.5L618.5,336.0L621.0,336.5L620.5,339.5L621.5,340.0L621.5,341.0L624.5,340.5L624.5,340.0L625.5,339.5L625.5,338.5L626.0,338.5L627.0,337.0L628.0,337.0L628.5,336.0L634.5,336.0L634.5,336.5L635.0,336.5L635.0,336.0L636.5,336.0L636.5,335.5L638.0,335.5L638.0,335.0L642.5,334.5L642.5,334.0L643.0,334.0L643.5,333.0L644.5,333.0L644.5,332.5L650.0,332.5L650.5,331.5L655.0,331.5L655.0,331.0L657.0,331.0L657.0,331.5L665.0,331.5L665.0,331.0L666.5,331.0L666.5,330.5L676.0,331.0L676.0,329.5L676.5,329.5L676.5,315.5L672.0,315.5L672.0,316.0L663.0,317.0L661.5,315.0L651.5,314.5L651.5,316.0L649.5,316.0L649.0,314.5L646.0,314.5L646.0,315.0L645.5,315.0L645.5,315.5L643.0,315.5L643.0,315.0L632.0,315.5L632.0,316.0L628.5,316.5ZM633.5,328.5L632.0,328.5L632.0,328.0L631.5,328.0L632.0,326.5L633.5,326.5ZM646.5,326.0L644.5,326.0L645.0,324.5L646.5,325.0ZM324.0,337.5L324.0,339.5L324.5,339.5L325.0,341.5L326.0,342.0L326.0,343.0L326.5,343.0L327.0,345.0L328.0,345.5L328.0,346.5L328.5,346.5L329.0,348.5L330.0,349.0L330.0,350.0L330.5,350.0L332.0,352.0L333.0,352.0L333.0,350.0L334.0,350.0L334.0,350.5L334.5,350.5L334.5,352.5L335.5,352.5L335.5,350.5L337.0,349.5L337.0,348.5L335.5,347.5L335.5,345.5L335.0,345.5L335.0,345.0L333.5,344.0L333.5,343.0L332.5,342.5L332.5,341.5L332.0,341.5L332.0,340.5L331.5,340.5L330.5,337.5L329.5,337.0L329.0,335.0L328.0,334.5L328.0,333.5L327.5,333.5L327.5,332.5L327.0,332.5L327.0,331.5L326.5,331.5L326.0,327.5L325.5,327.5L325.5,325.5L325.0,325.5L325.0,323.5L324.5,323.5L324.5,321.5L324.0,321.5L324.0,316.0L323.5,316.0L323.5,315.0L321.0,315.0L321.0,317.0L321.5,317.0L321.0,318.5L321.5,318.5L321.5,321.5L321.0,321.5L321.0,332.5L321.5,332.5L322.0,335.5L322.5,335.5L323.0,337.5ZM596.5,336.5L595.5,337.0L595.5,338.0L595.0,338.0L595.0,339.0L594.5,339.0L594.5,340.0L594.0,340.0L594.0,341.0L593.5,341.0L593.5,343.0L592.5,343.5L592.5,346.0L595.5,346.0L595.5,348.0L599.5,348.0L599.5,348.5L600.0,348.5L600.0,350.5L603.5,350.5L603.5,351.5L605.0,351.5L606.0,353.5L609.0,354.5L609.0,354.0L610.0,353.5L610.5,350.5L611.5,350.5L611.5,349.5L608.5,349.5L608.5,348.0L612.0,347.5L612.0,346.5L612.5,346.5L613.0,345.5L614.0,345.5L614.0,345.0L618.0,344.5L618.0,344.0L619.5,343.0L619.5,342.0L618.5,341.5L617.5,338.5L617.0,338.5L617.0,338.0L615.5,338.0L615.5,335.5L614.5,335.5L614.5,337.5L613.0,338.0L613.0,336.0L614.0,336.0L614.0,335.0L611.5,334.5L611.5,333.0L613.0,333.0L613.5,331.5L613.0,331.5L613.0,330.5L612.0,330.0L611.0,327.0L609.5,326.0L609.5,325.0L607.5,325.0L607.5,325.5L606.5,325.5L606.5,326.5L605.0,326.5L604.5,327.5L603.5,327.5L603.5,328.0L599.5,331.5L599.0,334.5L598.5,334.5L598.5,335.0L597.0,335.0ZM340.0,358.0L341.0,358.0L341.5,359.0L342.5,359.0L343.0,360.0L345.5,360.5L345.5,361.0L346.5,361.0L346.5,361.5L347.5,361.5L347.5,362.0L349.0,362.0L349.0,362.5L353.0,363.0L353.0,363.5L356.0,363.5L356.0,364.0L357.0,363.5L357.0,364.0L361.5,364.0L361.5,364.5L365.5,364.5L365.5,365.0L368.5,365.0L368.5,365.5L372.0,365.5L372.0,366.0L374.0,366.0L374.0,366.5L376.0,366.5L376.0,367.0L378.0,367.0L378.0,367.5L379.5,367.5L379.5,368.0L381.0,368.0L381.0,368.5L383.5,368.5L383.5,369.0L388.0,369.5L388.0,370.0L396.5,370.0L398.0,367.5L401.5,367.5L401.5,366.5L399.5,366.5L399.5,362.5L400.0,362.5L400.0,361.0L399.5,361.0L399.5,360.5L397.0,360.0L397.0,359.5L394.5,359.0L394.5,358.5L393.0,358.5L393.0,358.0L391.5,358.0L391.5,357.5L390.0,357.5L390.0,357.0L388.5,357.0L388.5,356.5L387.0,356.5L387.0,356.0L382.5,356.0L382.5,355.0L379.5,355.0L379.5,354.5L375.5,354.5L375.5,355.0L357.5,355.0L357.5,354.5L349.5,354.0L349.5,353.5L345.0,352.5L345.0,352.0L344.0,352.0L344.0,351.5L338.5,351.5L338.0,352.5L338.5,352.5L338.5,353.0L340.0,353.0L340.0,354.5L337.0,354.5L337.0,355.5L337.5,355.5L338.0,356.5L339.0,356.5ZM376.5,359.0L372.0,359.0L372.0,358.5L371.0,358.0L371.5,356.5L376.5,356.5ZM586.0,362.5L585.5,362.5L585.5,365.0L585.0,365.0L585.0,367.5L584.5,367.5L585.0,368.5L584.5,368.5L584.5,371.0L584.0,371.0L584.0,374.0L586.0,374.0L586.0,377.5L583.5,377.5L583.0,383.5L582.5,383.5L582.5,387.0L584.5,387.0L584.5,389.5L583.0,389.5L583.0,390.0L582.0,390.5L582.0,392.0L582.5,392.0L582.5,393.5L584.0,393.5L584.0,393.0L585.0,393.0L585.0,392.5L586.5,392.5L586.5,393.0L590.0,392.5L590.0,393.0L597.5,393.0L597.5,394.0L600.0,394.0L600.0,392.5L600.5,392.5L600.5,388.5L600.0,388.5L600.0,387.5L600.5,387.5L600.5,386.0L601.0,386.0L601.0,380.5L596.0,380.5L596.0,379.0L601.5,379.0L601.0,378.0L597.5,378.0L597.0,376.5L600.5,376.5L600.5,376.0L601.0,376.0L601.0,372.5L602.5,372.5L602.5,372.0L603.0,372.0L603.5,367.0L604.0,367.0L604.0,365.5L604.5,365.5L605.5,361.0L606.0,361.0L606.0,360.0L606.5,360.0L606.5,358.5L605.5,358.5L605.5,358.0L604.5,358.0L604.5,357.5L603.5,357.5L603.5,357.0L602.5,357.0L602.5,356.5L601.5,356.5L601.5,356.0L600.5,356.0L600.5,355.5L599.0,355.5L598.5,354.5L596.0,354.5L595.5,353.0L594.5,353.0L594.5,352.5L593.5,352.5L593.5,352.0L592.5,352.0L592.5,351.5L591.5,351.5L591.5,351.0L590.5,351.0L590.5,350.5L589.0,351.0L589.0,352.0L588.5,352.0L588.5,353.0L588.0,353.0L588.0,354.0L587.5,354.0L587.5,355.5L588.5,355.5L589.0,358.5L587.5,358.5L587.5,359.5L586.0,360.0ZM592.5,380.5L591.0,380.5L591.0,379.0L592.5,379.0ZM514.0,388.5L515.5,388.5L515.5,388.0L516.5,388.0L516.5,387.5L517.5,387.5L517.5,387.0L518.5,387.0L518.5,386.5L519.5,386.5L519.5,386.0L520.5,386.0L520.5,385.5L522.0,385.5L522.0,385.0L523.5,385.0L523.5,384.5L525.5,384.5L525.5,384.0L526.5,384.0L526.5,383.5L528.0,383.5L528.0,384.0L534.5,384.0L534.5,383.5L538.5,383.5L539.0,382.0L541.0,382.0L541.5,383.0L543.5,383.0L543.5,383.5L546.5,383.0L546.5,382.5L547.5,382.5L547.5,382.0L549.5,380.5L549.5,379.5L550.0,379.5L549.5,378.0L547.5,378.0L547.0,379.0L540.5,379.0L540.5,377.0L541.0,377.0L541.0,376.0L541.5,376.0L542.0,375.0L543.0,375.0L543.0,374.5L544.0,374.5L544.0,374.0L546.5,374.0L546.5,373.5L547.5,373.5L547.5,373.0L549.0,373.0L549.0,375.5L549.5,375.5L549.5,376.0L551.0,376.0L551.0,371.5L550.5,371.5L550.0,370.5L546.0,370.5L546.0,371.0L544.5,371.0L543.5,372.5L542.5,372.5L541.5,374.0L540.5,374.0L540.0,375.5L538.5,375.5L538.5,376.5L535.5,376.5L535.5,377.0L535.0,377.0L535.0,379.5L533.0,379.5L533.0,379.0L530.0,378.5L530.0,379.0L529.0,379.0L529.0,379.5L528.0,379.5L528.0,380.0L526.5,380.0L526.5,380.5L525.5,380.5L525.5,381.0L524.5,381.0L524.5,381.5L523.5,381.5L523.5,382.0L521.5,382.0L521.5,382.5L520.5,382.5L520.5,383.0L516.0,384.0L516.0,384.5L515.0,384.5L515.0,385.0L513.5,385.0L513.5,385.5L512.5,385.5L512.5,386.0L511.5,386.0L511.5,386.5L510.0,386.5L510.0,387.0L505.5,388.0L505.5,388.5L504.5,389.0L504.5,389.5L506.5,389.5L506.5,389.0L509.0,389.0L508.5,391.5L511.0,391.5L511.5,390.0L513.5,389.5ZM469.5,401.5L470.0,401.5L470.0,402.0L469.5,402.0L469.5,402.5L470.0,402.5L469.5,403.5L468.5,403.5L468.5,404.0L465.0,403.5L465.0,405.5L465.5,405.5L465.5,406.5L466.0,406.5L466.5,407.5L469.5,408.0L469.5,406.5L470.0,406.5L470.0,406.0L472.5,406.0L472.5,404.5L473.0,404.5L473.0,404.0L471.5,403.5L471.5,402.0L473.0,402.0L473.0,400.5L471.0,400.5L471.0,398.0L469.5,397.5L469.5,397.0L468.5,397.0L468.5,396.5L467.5,396.5L467.5,395.0L467.0,395.0L467.0,394.5L463.0,394.5L463.0,395.0L460.5,395.0L460.5,395.5L455.5,395.0L456.0,396.5L457.0,396.5L457.0,397.0L463.5,397.0L463.5,398.5L468.0,398.5L468.5,400.0L469.5,400.0ZM578.5,425.5L578.0,425.5L577.5,432.5L577.0,432.5L577.0,433.0L577.5,433.0L577.5,433.5L577.0,433.5L577.0,434.0L577.5,434.0L577.5,434.5L577.0,434.5L577.0,443.0L581.5,443.5L581.5,444.0L583.0,444.0L583.0,443.5L585.5,443.5L585.5,444.0L589.5,443.5L589.5,445.0L590.5,445.0L590.5,445.5L593.0,445.5L593.5,444.0L594.0,444.0L594.0,440.0L594.5,440.0L594.5,437.0L595.0,437.0L595.0,434.0L595.5,434.0L595.5,429.5L596.0,429.5L596.0,426.0L596.5,426.0L596.5,422.5L597.0,422.5L597.0,417.5L597.5,417.5L597.5,413.5L598.0,413.5L598.0,409.5L598.5,409.5L598.5,404.5L599.0,404.5L599.0,401.0L599.5,401.0L599.5,398.0L600.0,398.0L600.0,397.0L599.5,397.0L599.5,396.5L595.0,396.5L595.0,397.0L589.5,396.5L589.5,397.0L587.5,397.0L587.0,396.0L582.0,396.0L582.0,397.0L581.5,397.0L581.5,403.0L581.0,403.0L581.0,406.5L580.5,406.5L580.5,410.5L580.0,410.5L580.0,411.0L580.5,411.0L580.5,411.5L580.0,411.5L580.0,415.0L579.5,415.0L579.5,417.0L579.0,417.0L579.0,420.5L578.5,420.5L579.0,422.0L578.5,422.0ZM588.0,409.5L587.5,417.0L586.0,417.0L586.0,413.5L586.5,413.5L586.5,409.5ZM585.0,426.0L587.0,426.0L587.0,427.5L585.0,427.5ZM575.5,452.5L575.5,453.0L576.0,453.0L576.0,453.5L575.5,453.5L575.5,462.5L575.0,462.5L575.0,464.5L574.5,464.5L574.0,468.0L573.5,468.0L573.5,470.0L576.0,470.0L576.0,471.5L572.5,471.5L572.5,472.0L572.0,472.0L572.5,473.0L574.0,473.0L574.0,474.5L570.5,474.5L570.5,476.0L569.5,476.5L569.5,477.5L569.0,477.5L569.0,478.5L568.5,478.5L568.5,479.5L568.0,479.5L568.0,481.0L567.5,481.0L567.5,482.0L566.5,482.5L566.0,484.5L562.5,487.0L562.0,489.0L561.0,489.5L560.5,491.5L559.5,492.0L559.5,493.0L559.0,493.0L559.0,494.0L558.5,494.0L558.5,495.5L560.0,496.0L560.5,497.0L561.5,497.0L561.5,497.5L562.0,497.5L562.5,498.5L563.5,498.5L564.5,500.0L570.5,500.0L570.5,501.5L569.0,501.5L569.0,503.0L573.0,503.0L573.0,502.5L574.0,502.0L574.0,501.0L575.0,500.5L575.5,499.0L577.5,499.0L577.5,498.0L577.0,498.0L577.0,495.5L579.0,495.5L579.0,495.0L579.5,495.0L581.0,488.0L581.5,488.0L581.5,487.0L582.0,487.0L582.0,486.0L582.5,486.0L582.5,485.0L583.0,485.0L583.0,484.0L583.5,484.0L583.5,483.0L584.0,483.0L584.0,482.0L584.5,482.0L584.5,480.5L585.0,480.5L585.0,479.0L585.5,479.0L585.5,478.0L586.0,478.0L586.0,477.0L586.5,477.0L586.5,475.5L587.0,475.5L587.0,474.0L587.5,474.0L587.5,472.0L588.0,472.0L588.0,470.0L588.5,470.0L588.5,468.5L589.0,468.5L588.5,466.5L587.0,466.5L587.0,462.5L589.5,462.5L589.5,462.0L590.0,462.0L590.0,460.5L590.5,460.5L591.0,457.5L591.5,457.5L592.0,452.5L592.5,452.5L592.5,448.0L591.0,448.0L591.0,447.5L586.5,448.5L585.5,447.0L584.5,447.0L584.0,448.0L582.0,448.0L582.0,446.5L581.5,446.5L581.5,446.0L579.5,446.0L579.5,445.5L576.5,445.5L576.5,447.5L576.0,447.5L576.0,451.5L575.5,451.5L575.5,452.0L576.0,452.0L576.0,452.5ZM579.5,473.0L582.0,473.0L581.5,474.5L580.0,474.5L580.0,474.0L579.5,474.0ZM452.5,505.5L453.5,506.0L453.5,507.0L454.0,507.0L454.0,507.5L455.5,507.5L455.5,504.0L454.0,503.5L454.0,503.0L452.5,503.5ZM454.5,512.5L452.5,512.5L452.5,513.0L452.0,513.0L452.0,514.5L455.0,515.0L455.0,513.0L454.5,513.0ZM465.5,528.5L467.0,528.5L467.0,530.0L465.5,530.0L465.5,531.0L465.0,531.0L465.0,533.0L465.5,533.0L465.5,533.5L472.5,534.0L472.5,534.5L474.5,534.5L474.5,535.0L476.5,535.0L476.5,535.5L478.5,535.5L478.5,536.0L481.5,536.0L481.5,536.5L485.5,537.0L485.5,537.5L487.0,537.5L487.0,538.0L492.0,538.5L492.0,539.0L493.5,539.0L493.5,539.5L496.5,539.5L496.5,540.0L498.0,540.0L498.0,540.5L504.5,540.5L504.5,541.0L505.5,541.0L505.5,540.5L506.5,540.5L506.5,540.0L513.5,540.0L513.5,540.5L516.0,540.5L516.0,540.0L517.0,540.0L517.0,539.5L518.5,539.5L518.5,539.0L519.0,539.0L519.0,537.5L520.0,537.5L520.0,537.0L521.0,537.0L521.5,538.5L522.5,538.5L522.5,538.0L525.0,538.0L525.0,537.5L528.0,537.0L529.5,535.0L531.0,535.0L531.0,534.5L532.0,534.5L532.0,534.0L535.0,534.0L535.0,533.5L537.5,533.5L537.5,533.0L538.5,533.0L538.5,532.5L540.0,532.5L540.0,532.0L543.0,529.5L543.0,528.0L543.5,528.0L543.5,527.5L546.0,527.5L546.0,527.0L547.0,527.0L547.0,526.5L548.0,526.5L548.0,526.0L552.5,525.0L552.5,524.5L553.5,524.5L553.5,524.0L556.5,523.0L558.0,521.0L559.0,521.0L559.5,520.0L560.5,520.0L560.5,519.5L561.5,519.0L561.5,518.0L560.5,518.0L560.5,517.0L562.0,516.5L562.0,514.0L564.0,514.0L564.0,514.5L568.0,514.0L568.0,511.5L570.0,510.0L570.0,509.0L571.0,508.5L571.0,507.5L570.5,507.5L569.5,506.0L568.5,506.0L568.0,505.0L566.5,505.0L566.0,503.5L564.5,503.5L564.0,504.5L562.5,504.5L562.5,504.0L562.0,504.0L562.5,501.5L561.5,501.5L561.0,500.0L560.5,500.0L560.0,499.0L559.0,499.0L558.5,498.0L557.0,498.0L556.0,499.5L554.5,500.0L554.5,501.0L547.0,508.0L547.0,509.0L546.5,509.0L546.5,509.5L544.5,511.0L544.5,512.0L543.5,512.0L542.0,514.0L541.0,514.0L540.0,515.5L539.0,515.5L539.0,516.0L538.0,516.0L538.0,516.5L537.0,516.5L537.0,517.0L536.0,517.0L536.0,517.5L535.0,517.5L535.0,518.0L534.0,518.0L534.0,518.5L532.0,518.5L532.0,519.0L531.0,519.0L531.0,519.5L529.5,519.5L529.5,520.0L527.5,520.5L527.0,521.5L526.0,521.5L525.0,520.0L524.0,520.0L524.0,520.5L520.0,521.0L520.0,522.5L517.5,522.5L517.5,523.0L515.0,523.0L515.0,523.5L512.0,523.5L512.0,524.0L498.5,524.0L498.5,523.5L496.0,523.5L496.0,523.0L494.0,523.0L494.0,522.5L488.0,521.5L488.0,521.0L486.5,521.0L486.5,520.5L484.0,520.5L484.0,520.0L482.0,520.0L482.0,519.5L479.5,519.5L479.5,519.0L478.0,519.0L478.0,518.5L474.5,518.5L474.5,518.0L471.5,518.0L471.5,517.5L468.5,517.5L468.5,517.0L465.5,517.0L465.5,517.5L465.0,517.5L465.0,525.0L467.5,525.0L467.5,527.0L465.5,527.0L465.5,527.5L465.0,527.5ZM483.5,525.5L489.0,526.0L489.0,526.5L490.0,526.5L490.0,528.0L484.0,527.0ZM559.0,514.0L560.5,514.0L560.5,515.5L559.0,515.5ZM452.5,528.5L453.0,533.0L454.0,533.0L454.0,533.5L460.5,533.5L460.0,528.0L460.5,528.0L460.5,519.5L461.0,519.5L461.0,517.5L455.5,518.0L455.0,517.0L454.0,517.0L453.5,518.5L451.5,518.5L452.0,524.0L455.0,524.5L455.0,526.0L452.5,526.0L452.5,527.0L454.5,527.0L454.5,528.5ZM369.5,551.0L371.0,551.5L371.0,550.5L372.0,550.5L372.0,550.0L378.5,550.0L378.5,549.5L380.5,549.5L380.5,549.0L383.0,549.0L383.0,548.5L385.5,548.5L385.5,548.0L387.5,548.0L387.5,547.5L395.0,546.5L395.0,546.0L399.5,545.5L399.5,545.0L402.0,545.0L402.0,544.5L404.0,544.5L404.0,544.0L407.0,544.0L407.0,543.5L409.5,543.5L409.5,543.0L414.0,542.5L414.0,542.0L416.0,542.0L416.0,541.5L421.5,541.0L421.5,540.5L423.0,540.5L423.0,540.0L427.5,539.5L427.5,539.0L430.0,539.0L430.0,538.5L431.5,538.5L431.5,538.0L435.0,538.0L435.0,537.5L437.0,537.5L437.0,537.0L439.0,537.0L439.0,536.5L441.5,536.5L441.5,536.0L444.5,535.5L444.5,535.0L449.5,535.0L450.0,533.5L450.5,533.5L450.0,528.5L447.0,528.5L447.0,527.0L447.5,527.0L447.5,526.5L449.0,526.5L449.0,519.5L448.5,519.5L448.5,519.0L446.5,519.0L446.5,519.5L437.5,520.5L437.5,521.0L436.0,521.0L436.0,521.5L433.5,521.5L433.5,522.0L432.5,522.0L432.5,524.0L424.5,524.0L424.5,524.5L419.5,525.0L419.5,525.5L415.0,526.0L415.0,526.5L412.5,526.5L412.5,527.0L410.5,527.0L410.5,527.5L408.0,527.5L408.0,528.0L406.0,528.0L406.0,528.5L398.5,529.5L398.5,530.0L396.5,530.0L396.5,530.5L393.5,530.5L393.5,531.0L391.5,531.0L391.5,531.5L389.5,531.5L389.5,532.0L386.5,532.0L386.5,532.5L384.5,532.5L384.5,533.0L382.5,533.0L382.5,533.5L379.5,533.5L379.5,534.0L377.0,534.0L377.0,534.5L375.0,534.5L375.0,535.0L372.5,535.0L372.5,535.5L370.0,535.5L370.0,536.0L365.5,536.5L365.5,538.0L366.0,538.0L366.0,539.0L366.5,539.0L366.5,541.5L368.5,542.0L368.5,543.5L367.5,543.5L367.5,544.5L370.0,544.5L370.0,546.0L368.5,546.5L368.5,548.0L369.0,548.0ZM542.0,539.5L543.0,539.5L542.0,537.5L537.5,537.5L537.5,538.0L537.0,538.0L537.0,539.0L542.0,539.0ZM347.0,541.0L347.0,541.5L345.5,541.5L345.5,542.0L344.5,542.0L344.5,542.5L342.5,542.5L342.5,543.0L341.5,543.0L341.5,543.5L340.0,543.5L340.0,544.0L338.5,544.0L338.5,544.5L337.5,544.5L337.5,545.0L336.5,545.0L336.5,545.5L335.0,545.5L335.0,547.5L336.0,548.0L336.0,549.0L336.5,549.0L336.5,550.0L337.5,550.5L337.5,551.5L338.5,551.5L338.5,553.5L339.0,553.5L339.5,554.5L341.0,554.5L341.0,558.0L341.5,558.0L341.5,559.0L342.0,559.0L342.5,560.0L344.0,560.0L344.0,559.5L345.5,559.5L345.5,559.0L346.5,559.0L346.5,558.5L349.5,558.0L349.5,557.5L350.5,557.5L350.5,556.5L353.5,556.5L353.5,556.0L354.5,556.0L354.5,555.5L356.5,555.5L356.5,555.0L357.5,555.0L357.5,554.5L361.0,554.0L361.0,553.5L362.0,553.5L362.0,553.0L364.5,553.0L364.5,552.5L366.5,552.5L366.5,552.0L367.0,552.0L367.0,549.5L366.5,549.5L366.0,546.0L362.5,546.0L362.5,544.5L365.0,544.5L364.5,541.5L364.0,541.5L364.0,540.5L363.5,540.5L363.5,537.5L358.0,538.0L358.0,538.5L356.5,538.5L356.5,539.0L352.0,539.5L352.0,540.0L350.5,540.0L350.5,540.5L349.0,540.5L349.0,541.0ZM399.5,560.0L397.5,560.0L397.5,562.5L398.0,562.5L399.0,565.5L400.0,565.5L400.0,565.0L401.0,564.5L401.0,563.0L400.0,562.5ZM428.0,569.5L436.0,569.0L436.0,572.5L434.0,572.5L433.0,574.0L431.0,574.0L430.5,575.5L429.0,575.5L429.0,573.5L431.0,573.5L430.5,572.0L428.5,572.0L428.5,572.5L425.0,572.0L425.0,572.5L423.5,573.5L423.5,574.5L422.5,574.5L422.5,576.0L423.5,576.0L424.5,577.5L426.0,577.5L426.5,576.0L428.0,576.0L428.0,580.0L423.5,579.5L423.5,579.0L422.5,579.0L422.5,578.5L421.0,578.0L421.0,577.5L420.5,577.5L420.5,578.0L417.5,578.0L417.5,578.5L416.5,578.5L416.5,579.0L414.5,579.0L414.5,579.5L413.0,580.5L413.0,582.5L414.0,583.0L415.5,587.5L416.5,587.5L416.5,588.0L420.0,588.0L420.0,587.5L422.0,587.5L422.0,587.0L423.0,587.0L423.0,586.5L424.5,586.5L424.5,587.0L428.0,586.5L428.0,586.0L429.0,586.0L429.0,585.5L431.5,585.0L432.5,583.5L435.0,584.0L435.0,583.5L436.0,583.0L436.0,581.5L439.0,582.0L439.0,581.5L440.0,581.0L440.0,580.0L441.5,580.0L441.5,579.5L443.5,579.0L443.5,578.5L445.5,577.0L445.0,575.5L442.0,575.0L441.5,570.0L442.0,570.0L442.5,569.0L444.0,569.0L444.0,567.5L443.0,567.5L443.0,567.0L441.5,566.0L441.5,564.0L441.0,564.0L441.0,563.5L440.0,563.5L440.0,563.0L439.0,563.0L439.0,562.5L435.5,563.0L435.5,563.5L433.5,563.5L433.5,563.0L432.5,563.0L432.5,562.5L431.0,562.5L431.0,563.0L429.5,563.0L429.5,563.5L428.0,564.5L428.0,565.5L427.0,566.0L427.5,569.0L428.0,569.0ZM430.5,568.0L430.0,565.5L434.5,565.5L434.5,566.0L435.0,566.0L435.0,567.0L433.0,567.0L432.5,568.0ZM436.0,575.0L436.0,577.0L436.5,577.0L436.0,578.5L434.5,578.5L434.0,579.5L432.0,579.5L432.0,579.0L431.0,578.5L431.0,577.5L430.5,577.5L431.0,576.0L434.0,576.0L434.0,575.5L435.5,575.5L435.5,575.0ZM436.0,573.0L439.5,572.5L439.5,574.0L440.0,574.0L440.0,575.0L440.5,575.0L440.5,576.5L438.5,576.5L437.5,575.0L436.0,575.0ZM417.0,584.0L417.0,583.0L416.5,583.0L416.5,580.5L417.0,580.5L417.5,579.5L419.0,579.5L419.0,580.0L420.0,580.0L420.0,582.0L421.5,583.0L421.5,585.0L418.5,585.5L418.5,585.0L417.5,585.0L417.5,584.0ZM295.5,582.0L295.5,581.5L297.0,581.5L297.5,580.5L303.0,581.0L303.0,585.0L302.5,585.0L302.0,590.5L301.5,590.5L301.5,594.5L301.0,594.5L300.5,599.0L300.0,599.0L300.0,602.5L299.5,602.5L299.5,604.0L298.5,604.5L298.5,605.0L299.0,605.0L299.0,610.0L298.0,610.0L297.5,613.0L298.0,613.0L298.0,613.5L299.5,613.5L299.5,614.0L304.5,614.0L304.5,615.5L303.5,615.5L303.5,616.5L306.0,616.5L306.0,618.0L307.0,618.0L307.5,619.0L308.5,619.0L308.5,619.5L311.5,620.5L312.0,619.0L312.5,619.0L312.5,615.5L313.0,615.5L313.0,613.0L313.5,613.0L313.5,611.0L314.0,611.0L314.0,609.5L314.5,609.5L315.0,605.0L315.5,605.0L315.5,604.0L316.0,604.0L316.0,601.0L316.5,601.0L316.5,600.0L318.5,600.0L319.0,597.5L319.5,597.5L319.5,596.0L320.0,596.0L320.0,594.5L320.5,594.5L320.5,591.5L319.5,591.0L319.5,590.0L320.0,590.0L320.0,589.0L321.5,588.5L321.0,586.0L321.5,586.0L321.5,584.5L322.0,584.5L322.0,583.5L322.5,583.5L322.5,582.0L323.0,582.0L323.0,581.0L323.5,581.0L323.5,580.0L324.0,580.0L324.0,579.0L324.5,579.0L325.5,576.0L326.5,575.5L326.5,574.5L327.5,574.0L327.5,573.0L328.5,572.5L328.5,571.5L330.0,570.5L330.0,569.5L330.5,569.5L335.5,564.0L336.5,564.0L338.0,562.0L339.0,562.0L339.0,561.5L340.0,561.0L340.0,560.0L339.0,559.5L339.0,558.0L338.0,557.5L337.5,556.0L334.0,556.0L334.0,554.5L335.5,554.5L335.5,553.0L333.0,553.0L333.0,551.5L334.5,551.5L333.5,548.5L332.0,548.0L332.0,549.5L328.5,549.5L328.0,550.5L324.5,550.5L324.5,551.5L322.0,552.0L322.0,553.0L319.5,553.0L319.5,552.0L318.5,552.0L318.5,552.5L317.0,553.5L317.0,554.5L316.5,554.5L316.5,555.0L317.5,555.5L317.5,557.5L316.5,557.5L316.5,558.0L315.5,558.5L315.5,559.5L315.0,559.5L313.0,562.0L312.0,562.0L312.0,562.5L311.0,563.0L310.5,565.0L309.5,565.0L309.5,566.0L308.5,566.5L307.5,569.5L306.5,570.0L306.5,571.0L306.0,571.0L306.0,572.0L305.5,572.0L305.5,573.0L305.0,573.0L305.0,574.5L304.5,574.5L304.5,576.0L304.0,576.0L304.0,578.0L303.5,578.0L303.5,578.5L302.0,578.5L302.0,579.0L295.0,579.5L294.5,580.5L293.5,580.5L292.5,582.0L291.5,582.0L291.5,582.5L290.5,582.5L290.5,583.0L286.0,583.5L286.0,585.5L287.5,585.5L287.5,585.0L292.0,584.0L293.0,582.5L294.5,582.5L294.5,582.0ZM294.5,603.0L295.5,603.0L295.5,601.5L296.5,601.0L296.5,598.0L295.0,598.0ZM774.0,100.5L774.0,101.0L771.0,101.5L771.5,102.5L775.5,102.0L775.5,101.5L781.5,101.5L781.5,100.5L780.0,100.5L780.0,100.0L776.0,100.0L776.0,100.5ZM800.5,105.0L800.5,104.5L797.5,104.5L797.5,104.0L793.0,103.5L793.0,103.0L791.5,103.5L792.0,104.5L794.5,104.5L794.5,105.0L796.0,105.0L796.0,105.5L800.5,106.0L800.5,106.5L804.5,106.5L804.5,107.0L806.0,107.0L806.0,106.0L802.5,105.5L802.5,105.0ZM810.5,107.0L810.5,105.0L810.0,105.0L810.0,104.5L809.0,105.0L809.0,106.5L807.5,106.5L808.0,108.0L810.0,108.0L810.0,108.5L813.5,109.0L813.5,107.5L811.0,107.5L811.0,107.0ZM831.5,111.0L831.5,112.0L838.0,112.5L837.5,111.5ZM746.0,119.0L746.5,118.0L747.5,118.0L748.5,116.5L749.5,116.5L749.5,116.0L751.0,115.0L751.0,114.0L750.0,114.0L750.0,114.5L748.5,115.0L748.0,116.0L747.0,116.0L746.5,117.0L745.5,117.0L743.5,119.5L745.0,119.5L745.0,119.0ZM736.0,126.5L736.0,126.0L737.0,126.0L737.5,125.0L738.5,125.0L740.0,123.0L741.0,123.0L741.0,122.0L739.0,122.0L739.0,122.5L738.5,122.5L738.0,123.5L737.0,123.5L736.5,124.5L735.5,124.5L734.5,126.0L733.5,126.0L733.5,127.5L734.5,127.5L734.5,126.5ZM965.0,129.0L968.0,129.0L968.0,127.5L964.5,127.5L964.5,128.0L962.5,129.5L962.5,131.0L963.5,131.0L963.5,131.5L964.5,132.0L964.5,131.5L965.0,131.5ZM970.0,134.0L970.5,135.5L971.5,135.5L971.5,136.0L972.5,136.0L972.5,136.5L973.5,136.5L973.5,137.0L974.5,137.0L974.5,137.5L975.5,137.5L975.5,138.0L980.0,138.0L980.0,137.5L981.0,137.5L981.0,137.0L982.0,137.0L982.5,136.0L983.5,136.0L983.5,135.5L985.0,135.0L985.0,132.5L984.0,132.0L984.0,129.0L984.5,129.0L984.5,127.5L984.0,127.5L984.0,127.0L978.5,126.5L978.5,127.0L977.0,127.0L977.0,127.5L976.5,127.5L976.0,128.5L975.0,128.5L975.0,129.0L972.0,129.0L972.0,132.0L971.5,132.0L971.5,132.5L969.5,132.5L968.5,131.0L965.5,131.0L965.5,131.5L965.0,131.5L965.0,132.0L965.5,132.0L966.0,133.0L968.0,133.0L968.0,133.5ZM978.0,132.0L975.5,132.0L975.5,130.5L978.0,130.5ZM719.5,138.0L720.0,138.0L720.0,135.0L717.0,136.0L716.5,137.5L719.5,137.5ZM966.0,137.0L966.0,138.0L967.5,138.5L968.5,140.0L971.0,140.5L971.0,139.5L970.5,139.5L970.0,138.5L967.5,138.0L967.0,137.0ZM980.0,150.0L983.0,150.5L983.0,148.0L980.0,148.0ZM710.5,146.0L710.5,147.5L711.0,147.5L711.0,148.5L711.5,148.5L711.5,149.5L712.0,149.5L712.0,150.5L712.5,150.5L712.5,151.5L713.0,151.5L713.0,152.5L713.5,152.5L713.5,154.0L714.0,154.0L714.0,155.5L714.5,155.5L714.5,156.5L715.0,156.5L715.0,157.5L715.5,157.5L715.5,159.0L716.0,159.0L716.5,160.5L718.0,160.5L718.5,159.5L718.0,159.5L717.5,157.0L717.0,157.0L717.0,156.0L716.5,156.0L716.5,154.0L716.0,154.0L716.0,153.0L715.5,153.0L715.5,151.5L715.0,151.5L715.0,150.5L714.5,150.5L714.5,149.5L714.0,149.5L714.0,148.0L713.5,148.0L713.0,145.5L712.5,145.5L712.5,144.5L712.0,144.5L712.0,143.5L711.5,143.5L711.5,142.0L711.0,142.0L711.0,139.0L707.0,139.0L707.0,140.0L707.5,140.0L708.0,141.5L708.5,141.5L708.5,142.0L709.0,142.0L709.0,143.5L709.5,143.5L709.5,145.0L710.0,145.0L710.0,146.0ZM995.0,165.0L995.0,164.5L1000.0,164.5L1000.0,162.5L998.5,162.0L998.0,161.0L996.5,161.5L996.5,162.0L995.5,162.0L995.5,163.0L991.5,162.5L991.5,159.5L989.0,159.0L989.0,160.5L989.5,160.5L989.5,161.5L990.0,161.5L991.0,164.5L991.5,164.5L991.5,165.5L992.0,165.5L992.0,166.5L993.5,166.5L993.5,165.0ZM1003.5,188.0L1003.0,188.0L1003.0,187.0L1002.5,187.0L1002.5,185.5L1001.0,185.0L1001.0,186.5L1001.5,186.5L1001.5,188.0L1002.0,188.0L1003.0,191.0L1004.5,191.5L1004.5,190.0L1004.0,190.0L1004.0,189.0L1003.5,189.0ZM1009.5,190.0L1009.5,187.0L1007.0,187.0L1007.0,189.5ZM1009.0,197.5L1009.0,195.5L1007.5,195.5L1007.5,196.0L1007.0,196.0L1007.0,197.0L1007.5,197.0L1008.0,198.5L1010.0,200.0L1010.0,201.0L1011.0,201.0L1011.0,198.5L1010.5,198.5L1010.5,197.5ZM730.0,244.5L727.0,245.0L727.0,246.0L728.0,246.0L728.5,247.0L730.5,247.0L731.0,248.0L734.0,248.5L734.0,247.5L732.5,247.0L731.5,245.5L730.0,245.5ZM737.5,249.0L737.5,250.5L739.0,250.5L739.0,251.0L740.0,251.0L740.0,248.5L738.0,248.5L737.5,247.5L736.0,247.5L736.0,249.0ZM682.5,315.0L680.0,315.0L679.5,319.5L682.0,320.0ZM690.5,324.5L685.5,324.5L685.5,325.0L685.0,325.0L685.0,330.0L685.5,330.0L685.5,330.5L697.0,330.5L697.0,331.0L698.5,331.0L698.5,331.5L700.5,331.5L700.5,331.0L706.0,331.0L706.5,332.0L707.5,332.0L707.5,332.5L710.0,332.5L710.0,333.0L715.0,332.5L715.5,331.0L717.0,331.0L717.5,332.5L718.5,332.5L719.0,333.5L721.5,333.5L721.5,334.0L723.0,334.0L723.0,334.5L724.5,334.5L724.5,335.0L727.0,335.0L727.0,333.5L727.5,333.5L728.0,331.0L728.5,331.0L728.5,329.0L729.0,329.0L729.0,328.0L729.5,328.0L729.5,327.0L730.0,327.0L730.0,325.5L730.5,325.5L730.5,323.0L728.0,323.0L727.5,322.0L723.5,322.0L722.5,320.5L718.0,321.0L718.0,320.5L713.5,319.5L713.5,319.0L712.5,319.0L712.5,318.5L710.0,318.5L710.0,318.0L709.0,318.0L709.0,317.5L706.5,317.5L706.5,317.0L704.5,317.0L704.5,316.5L701.0,316.0L701.0,315.5L698.0,315.5L698.0,316.5L695.0,316.5L695.0,315.5L693.5,315.5L693.0,316.5L691.5,316.5L691.5,316.0L688.0,316.0L687.5,315.0L686.0,315.0L686.0,316.0L685.5,316.0L685.5,318.5L685.0,318.5L685.5,320.0L688.0,320.0L688.0,320.5L688.5,320.5L688.5,323.0L690.5,323.0ZM708.5,324.5L708.5,325.0L704.0,324.5L704.0,323.0L706.5,323.0L706.5,320.5L709.0,320.5L709.0,322.0L708.5,322.0L709.0,324.5ZM713.0,320.5L713.0,322.0L710.5,322.0L710.5,320.5ZM699.0,319.0L699.0,321.0L695.5,320.5L695.5,322.5L694.0,323.0L694.0,319.5L694.5,319.5L694.5,319.0ZM705.5,322.0L703.0,322.0L703.0,320.0L705.5,320.0ZM690.5,320.5L690.5,319.0L692.0,319.0L692.5,320.5ZM680.0,324.5L680.0,325.0L679.5,325.0L679.5,330.0L680.0,330.0L680.0,330.5L682.0,330.5L682.0,325.0L681.5,325.0L681.5,324.5ZM730.0,337.0L730.5,338.0L732.0,338.0L732.0,338.5L733.0,338.5L733.0,339.0L736.5,339.5L737.0,337.0L736.0,337.0L736.0,335.0L739.0,335.5L739.0,334.0L737.0,334.0L737.0,332.5L737.5,332.5L737.5,332.0L739.5,332.0L739.5,331.0L738.0,331.0L738.0,329.5L740.5,329.0L740.5,327.5L738.5,327.5L738.5,327.0L737.0,327.0L737.0,326.5L734.5,326.0L734.5,325.0L733.0,325.0L731.5,329.5L731.0,329.5L730.5,332.5L730.0,332.5L730.0,333.5L729.5,333.5L729.0,337.0ZM939.0,340.0L939.0,337.0L939.5,337.0L939.5,336.5L945.0,336.5L945.0,335.5L943.0,335.5L943.5,330.0L935.0,330.0L935.0,329.5L931.5,329.5L931.5,329.0L926.5,329.0L927.5,334.5L929.5,334.5L929.5,336.5L931.0,336.5L931.0,339.5L931.5,339.5L931.5,340.0ZM745.0,335.0L745.5,336.5L745.0,336.5L745.0,337.0L742.5,337.0L742.5,337.5L741.5,337.5L741.5,339.0L745.0,339.0L745.0,340.5L742.5,340.5L742.5,339.5L741.0,339.5L740.5,342.5L742.0,343.0L742.0,344.0L748.0,344.0L749.0,345.5L758.0,346.0L758.0,345.5L758.5,345.5L758.5,343.0L759.0,343.0L759.0,340.0L758.5,340.0L758.5,339.0L757.5,339.0L757.5,337.5L759.0,337.5L759.0,335.5L760.5,335.0L761.5,330.0L760.0,330.0L760.0,330.5L758.5,330.5L758.5,331.0L752.0,331.0L751.5,329.5L750.5,329.5L750.0,330.5L749.0,330.5L749.0,330.0L748.0,330.0L748.0,329.5L745.5,329.5L745.5,330.5L744.0,331.0L744.0,331.5L743.5,331.5L743.5,332.0L744.0,332.0L744.0,334.0L743.0,334.0L742.5,335.5ZM835.0,346.0L835.5,346.0L835.5,344.0L836.5,344.0L836.5,343.5L837.5,343.5L837.5,343.0L842.5,342.5L842.5,339.5L841.5,339.5L841.0,338.5L838.5,338.0L838.5,337.5L837.5,337.5L837.5,337.0L836.0,337.0L836.0,336.5L834.0,336.5L833.5,341.0L833.0,341.0L833.5,342.0L832.5,342.5L832.5,346.0L833.5,346.0L833.5,346.5L835.0,346.5ZM853.5,348.0L853.5,347.0L852.5,347.0L852.5,345.5L854.5,345.5L854.5,347.0L856.5,347.0L856.5,345.0L856.0,345.0L856.0,344.0L854.5,344.0L854.5,341.5L854.0,341.5L853.0,338.5L851.5,338.5L851.5,339.0L846.5,339.0L846.0,340.5L845.5,340.5L845.5,342.5L846.5,342.5L846.5,344.5L847.0,344.5L847.5,345.5L850.5,345.5L851.0,348.5ZM852.0,342.5L852.0,343.0L852.5,343.0L852.5,344.0L848.5,344.0L849.0,342.5ZM845.5,345.0L839.5,345.0L839.5,345.5L837.5,346.0L838.0,347.5L840.0,347.5L840.5,348.5L844.0,348.5L844.0,349.0L845.0,349.0L845.0,348.5L846.0,348.0ZM762.0,344.0L761.5,344.0L761.5,347.0L766.0,347.5L766.0,348.0L769.0,348.5L769.0,349.0L780.0,348.5L781.0,350.5L783.0,350.5L783.0,351.0L784.5,351.0L784.5,351.5L789.0,351.5L789.0,352.0L790.5,352.0L790.5,352.5L795.5,352.5L795.5,354.0L796.5,354.0L796.5,354.5L797.5,354.5L797.5,355.0L799.0,355.0L799.0,355.5L800.5,355.5L800.5,356.0L802.0,356.0L802.0,356.5L803.0,356.5L803.5,357.5L804.5,357.5L804.5,358.0L805.5,358.0L805.5,358.5L806.5,358.5L806.5,359.0L807.5,359.0L807.5,359.5L808.5,359.5L808.5,360.0L810.0,360.0L810.0,360.5L811.0,360.5L811.0,361.0L812.0,361.0L812.0,361.5L813.0,361.5L813.0,362.0L814.0,362.0L814.0,362.5L817.0,363.5L817.5,364.5L819.0,364.5L819.0,364.0L819.5,364.0L819.5,362.5L820.0,362.5L820.0,361.5L820.5,361.5L820.5,360.5L819.5,360.0L820.0,355.5L822.5,355.5L822.5,355.0L823.0,355.0L822.5,353.5L824.0,353.0L824.5,350.5L825.0,350.5L825.0,349.0L824.5,349.0L824.5,348.5L822.0,348.5L822.0,348.0L821.0,348.0L821.0,347.5L819.5,347.5L819.5,347.0L817.0,346.5L817.0,346.0L815.5,346.0L815.5,345.5L814.0,345.5L814.0,346.0L813.5,346.0L814.0,347.0L810.0,347.0L810.0,345.5L813.0,345.5L813.0,344.5L812.0,344.5L812.0,344.0L811.0,344.0L811.0,343.5L810.0,343.5L810.0,343.0L808.5,343.0L808.5,342.5L806.0,342.5L806.0,343.5L804.5,343.5L804.0,340.5L803.0,340.5L803.0,340.0L802.0,340.0L801.5,339.0L799.0,338.5L799.0,338.0L795.0,338.0L795.0,337.5L794.0,337.5L794.0,337.0L792.0,337.0L792.0,336.5L790.5,336.5L790.5,336.0L789.0,336.0L789.0,335.5L786.0,335.5L786.0,335.0L784.0,335.0L784.0,334.5L782.0,334.5L782.0,334.0L778.0,334.0L778.0,333.5L775.0,333.5L775.0,333.0L772.5,333.0L772.5,332.5L770.0,332.5L770.0,332.0L767.5,332.0L767.5,331.5L764.5,331.5L764.5,332.5L764.0,332.5L764.0,335.0L766.0,335.0L766.0,336.5L763.5,336.5L763.5,338.0L765.5,338.0L765.5,339.5L762.5,340.0ZM797.0,349.0L797.0,350.5L794.5,350.5L794.5,350.0L793.0,350.0L793.0,349.5L791.5,349.5L791.5,349.0L791.0,349.0L791.0,347.5L794.0,348.0L794.0,348.5L796.0,348.5L796.0,349.0ZM803.5,345.5L807.0,345.5L807.0,347.0L803.5,347.0ZM776.0,345.5L777.5,345.5L777.5,347.0L776.0,347.0ZM797.0,345.5L798.5,345.5L798.5,347.0L797.0,347.0ZM801.0,347.0L801.0,345.5L802.0,345.5L802.5,347.0ZM806.5,350.0L805.0,350.0L805.0,349.5L804.5,349.5L804.5,348.5L807.0,348.5ZM864.5,359.0L864.5,358.5L866.0,357.5L866.0,356.0L865.5,356.0L865.5,355.5L863.5,355.5L861.5,358.0L860.5,358.0L860.5,360.0L861.0,360.0L861.0,360.5L862.5,360.5L863.5,359.0ZM964.0,378.0L964.0,379.5L964.5,379.5L964.5,381.0L965.0,381.0L965.5,383.5L966.0,383.5L966.0,384.5L966.5,384.5L966.5,386.0L968.0,386.0L968.0,383.0L969.5,382.0L969.5,381.0L970.0,381.0L971.0,379.5L973.0,379.5L973.0,378.5L972.0,378.5L972.0,376.5L971.0,376.5L971.0,375.5L970.0,375.5L970.0,375.0L964.5,374.5L964.5,375.0L963.0,375.5L963.0,377.0L963.5,377.0L963.5,378.0ZM1003.5,380.5L1004.0,382.5L1006.0,382.5L1006.0,384.5L1009.0,385.0L1009.0,382.0L1007.5,382.0L1007.5,381.5L1006.5,381.5L1006.0,380.5ZM955.0,430.0L955.5,431.5L956.0,431.5L956.5,430.5L958.5,430.5L958.5,430.0L960.5,430.0L960.5,429.5L961.5,429.5L961.5,429.0L964.0,429.0L964.0,428.5L964.5,428.5L964.5,427.0L964.0,427.0L964.0,426.0L963.5,426.0L963.5,425.0L963.0,425.0L963.0,424.0L962.5,424.0L962.5,423.0L962.0,423.0L962.0,422.0L961.5,422.0L961.0,421.0L959.5,421.0L959.0,420.0L957.5,420.0L957.5,420.5L956.5,420.5L956.5,421.5L955.0,421.5L954.5,423.5L956.0,423.5L956.0,425.0L955.0,425.5L955.0,426.5L956.0,426.5L956.0,429.5ZM992.5,443.0L990.0,443.0L990.0,443.5L989.0,443.5L989.0,444.0L988.0,444.0L988.0,444.5L986.5,444.5L986.5,445.0L984.5,445.0L984.5,445.5L981.5,446.0L980.5,448.0L979.0,448.0L979.0,450.0L979.5,450.0L979.5,451.0L980.0,451.0L981.0,455.5L982.5,456.0L982.5,455.5L984.0,455.5L984.0,455.0L985.5,455.0L985.5,454.5L987.0,454.5L987.0,454.0L989.0,454.0L989.0,453.5L990.0,453.5L990.0,453.0L992.0,453.0L992.0,452.5L993.5,452.5L993.5,452.0L995.0,452.0L995.0,451.5L997.5,451.5L998.0,452.5L999.5,452.5L999.5,452.0L1000.5,452.0L1000.5,450.5L1003.0,450.0L1003.0,449.5L1004.5,449.5L1004.5,449.0L1006.0,449.0L1006.0,448.5L1007.5,448.5L1007.5,448.0L1009.5,448.0L1009.5,447.5L1012.5,447.0L1012.5,446.5L1013.5,446.5L1014.0,445.0L1019.5,444.5L1020.0,443.5L1023.5,443.5L1023.5,442.0L1022.5,442.0L1022.0,437.5L1023.5,437.5L1024.0,442.0L1028.0,442.0L1028.0,441.5L1030.0,441.5L1030.0,441.0L1030.5,441.0L1030.0,439.5L1029.5,439.5L1029.5,440.0L1027.5,440.0L1027.5,438.5L1029.0,438.0L1028.0,434.0L1026.5,434.0L1026.5,434.5L1025.0,434.5L1025.0,435.0L1023.5,435.0L1023.5,435.5L1021.5,435.5L1021.5,436.0L1020.0,436.0L1020.0,436.5L1017.0,436.5L1017.0,437.0L1015.5,437.0L1015.5,437.5L1014.0,437.5L1014.0,438.0L1012.5,438.0L1012.5,438.5L1011.0,438.5L1011.0,439.0L1009.5,439.0L1009.5,439.5L1008.0,439.5L1008.0,440.0L1006.5,440.0L1006.5,440.5L1005.0,440.5L1005.0,441.0L1001.0,441.0L1001.0,437.5L999.5,437.5L999.5,438.0L998.5,438.0L998.5,439.0L998.0,439.0L998.0,440.5L997.5,440.5L997.5,441.0L994.5,441.5L994.0,442.5L992.5,442.5ZM921.5,453.5L922.0,455.5L926.0,455.5L926.0,455.0L927.0,454.5L927.0,452.0L928.0,452.0L928.0,449.0L927.5,449.0L927.5,448.0L926.0,448.0L926.0,446.5L925.0,446.0L924.0,443.0L922.5,443.0L920.0,446.5L920.0,448.0L920.5,448.0L921.0,450.5L921.5,450.5L921.5,451.5L922.0,451.5L922.0,453.5ZM923.5,452.5L923.0,452.5L923.0,451.0L925.5,451.0L925.5,453.0L923.5,453.0ZM924.5,448.5L924.0,448.5L924.5,449.5L924.0,449.5L924.0,450.0L922.5,450.0L922.5,447.5L924.0,447.5L924.0,448.0L924.5,448.0ZM797.0,529.0L797.0,528.5L799.5,528.0L799.5,527.5L803.0,527.5L803.0,525.0L804.5,525.0L804.5,524.5L809.0,524.5L809.0,524.0L809.5,524.0L809.5,522.5L810.0,522.5L810.0,522.0L811.5,522.0L811.5,520.5L815.5,520.0L815.5,518.5L816.0,518.5L816.0,517.0L816.5,517.0L816.5,516.5L816.0,516.5L816.0,515.0L814.5,515.0L814.5,514.0L813.0,513.5L813.0,513.0L807.5,513.0L807.5,514.5L806.5,514.5L806.0,515.5L805.0,515.5L805.0,516.0L803.0,517.5L803.0,518.5L801.5,519.0L801.5,521.0L800.0,521.0L800.0,521.5L799.0,522.0L799.0,523.0L798.5,523.0L798.5,523.5L797.0,523.5L797.0,524.0L796.5,524.0L796.5,525.5L794.5,526.5L794.0,529.0ZM993.5,534.5L994.5,534.5L995.0,535.5L996.0,535.5L997.0,534.0L996.5,534.0L996.5,533.0L995.0,532.0L994.5,533.5L993.5,533.5ZM1108.5,2.0L1108.5,1.5L1108.0,1.5L1108.0,0.0L1106.0,0.0L1106.0,3.0L1107.0,3.5L1108.0,9.0L1110.5,9.0L1110.0,6.0L1109.5,6.0L1109.5,4.0L1110.5,3.5L1110.5,2.0ZM1063.5,10.5L1064.0,9.0L1063.5,9.0L1063.0,7.0L1062.0,6.5L1061.5,4.5L1061.0,4.5L1061.0,4.0L1060.0,3.5L1060.0,2.5L1059.0,2.0L1058.5,0.0L1056.0,0.0L1056.5,1.5L1057.5,2.0L1057.5,3.0L1058.5,3.5L1058.5,4.5L1059.5,4.5L1059.5,6.0L1061.0,7.0L1061.0,8.5L1062.0,8.5L1062.0,10.0ZM1076.0,29.0L1078.0,29.5L1078.5,31.5L1079.5,32.0L1079.0,28.5L1078.0,28.5L1078.0,27.0L1077.5,27.0L1077.5,24.5L1076.0,24.5L1076.0,24.0L1075.0,24.5L1075.0,23.0L1074.5,23.0L1074.0,22.0L1073.0,22.0L1073.0,20.0L1072.0,20.0L1072.0,19.0L1070.5,19.0L1070.0,17.5L1068.5,16.5L1068.5,17.0L1068.0,17.0L1068.0,18.5L1070.0,20.0L1070.5,21.5L1072.0,22.0L1072.0,24.0L1074.0,24.0L1074.5,27.0L1075.5,27.0ZM1114.0,30.5L1115.0,43.5L1115.5,43.5L1115.5,45.0L1118.0,45.0L1117.5,42.0L1117.0,42.0L1117.0,38.5L1116.5,38.5L1116.5,37.5L1117.0,37.5L1117.0,37.0L1116.5,37.0L1116.5,32.5L1116.0,32.5L1116.0,31.0L1115.5,31.0L1115.5,27.0L1115.0,27.0L1115.5,25.5L1115.0,25.5L1115.0,24.5L1114.5,24.5L1114.5,22.5L1114.0,22.5L1114.0,20.5L1113.5,20.5L1113.5,18.0L1113.0,18.0L1113.0,16.0L1112.5,16.0L1112.0,13.5L1110.0,13.5L1110.5,18.0L1111.0,18.0L1111.5,19.5L1112.0,19.5L1112.0,27.0L1112.5,27.0L1112.5,30.0ZM1089.0,51.0L1090.0,51.0L1090.0,48.5L1089.5,48.5L1089.5,46.5L1089.0,46.5L1088.5,43.5L1087.5,43.5L1087.5,46.0L1088.0,46.0L1088.0,47.5L1088.5,47.5L1088.5,49.0L1089.0,49.0ZM1118.5,52.5L1118.5,47.5L1116.5,47.5L1116.5,52.0L1117.5,52.0L1117.5,52.5ZM1090.0,67.0L1091.0,67.0L1091.0,66.5L1094.0,66.5L1094.0,67.0L1094.5,67.0L1094.5,68.5L1095.0,68.5L1095.0,70.0L1095.5,70.0L1095.5,72.0L1097.0,72.5L1097.0,68.5L1096.5,68.5L1096.0,65.5L1095.5,65.5L1095.5,64.5L1095.0,64.5L1095.0,63.5L1094.5,63.5L1094.0,61.0L1093.5,61.0L1093.0,59.5L1092.0,59.5L1092.0,61.5L1092.5,61.5L1092.5,64.0L1091.0,64.5L1091.0,65.0L1089.0,66.5L1089.0,67.5L1090.0,67.5ZM1036.5,85.0L1036.5,84.0L1036.0,84.0L1036.0,83.5L1032.5,84.0L1032.5,84.5L1031.5,84.5L1030.0,86.5L1030.5,86.5L1030.5,87.5L1031.5,88.0L1032.5,86.5L1035.5,86.0L1035.5,85.5ZM1015.0,96.0L1016.5,96.0L1016.5,95.5L1017.0,95.5L1017.0,94.0L1016.5,94.0L1016.5,91.5L1016.0,91.5L1016.0,90.5L1011.0,90.5L1011.0,91.0L1008.5,91.5L1008.5,92.5L1005.5,92.5L1005.5,93.0L1004.5,93.5L1004.5,95.0L1005.5,95.0L1005.5,95.5L1011.0,95.5L1011.0,94.5L1010.5,94.5L1010.5,93.0L1011.5,93.0L1011.5,92.5L1014.5,92.5L1014.5,95.5L1015.0,95.5ZM1094.0,97.5L1094.0,101.5L1093.5,101.5L1093.5,103.0L1093.0,103.0L1093.0,106.5L1093.5,106.5L1094.0,111.0L1095.0,111.0L1095.0,111.5L1096.5,112.0L1096.5,112.5L1099.5,113.0L1099.5,112.0L1098.5,112.0L1098.0,111.0L1097.0,111.0L1097.0,110.5L1095.0,109.0L1095.0,107.5L1094.5,107.5L1095.0,102.0L1095.5,102.0L1095.5,101.5L1096.5,101.0L1096.5,100.0L1097.5,99.5L1097.5,98.5L1096.0,98.0L1096.0,94.0L1096.5,94.0L1096.5,93.0L1097.0,93.0L1097.0,86.0L1097.5,86.0L1097.5,83.5L1098.0,83.5L1098.0,74.5L1097.0,74.5L1096.5,77.5L1096.0,77.5L1096.0,82.0L1095.5,82.0L1095.0,95.5L1094.5,95.5L1094.5,97.5ZM1103.0,121.0L1103.5,121.0L1103.5,122.0L1104.0,122.0L1104.0,124.5L1105.0,124.5L1105.0,121.5L1104.5,121.5L1104.0,118.5L1103.5,118.5L1103.0,116.5L1102.0,116.0L1102.0,115.0L1100.5,114.0L1100.5,113.0L1099.5,113.0L1100.0,115.5L1101.5,116.5L1101.5,117.5L1102.0,117.5L1102.0,118.5L1102.5,118.5L1102.5,119.5L1103.0,119.5ZM1109.0,136.5L1109.0,138.0L1108.5,138.0L1108.0,141.5L1109.5,141.5L1109.5,139.5L1110.0,139.5L1110.0,138.0L1110.5,138.0L1110.5,136.0ZM1018.5,249.5L1018.5,250.5L1019.0,250.5L1019.0,252.0L1020.5,252.0L1020.5,250.0L1020.0,250.0L1020.0,248.0L1019.5,248.0L1019.5,245.5L1019.0,245.5L1019.0,237.0L1018.5,237.0L1018.5,229.0L1018.0,229.0L1018.0,225.0L1018.5,225.0L1018.5,224.5L1017.0,224.5L1017.0,235.0L1017.5,235.0L1017.5,239.5L1018.0,239.5L1018.0,248.5L1018.5,248.5L1018.0,249.5ZM1120.5,249.0L1119.5,249.0L1118.0,251.5L1119.5,251.5L1120.0,250.5L1122.0,250.0L1122.0,248.0L1121.0,248.0ZM1111.5,255.5L1110.0,255.5L1110.0,256.0L1109.0,256.5L1109.0,257.5L1110.5,257.5L1111.5,256.0L1113.5,255.5L1114.0,254.5L1112.5,254.0ZM1075.0,279.0L1074.0,279.0L1073.5,280.0L1072.5,280.0L1072.0,281.0L1071.0,281.0L1070.0,282.5L1068.0,283.0L1068.0,283.5L1066.5,284.0L1066.0,285.0L1065.0,285.0L1065.0,285.5L1064.0,285.5L1063.5,286.5L1062.5,286.5L1062.0,287.5L1061.0,287.5L1061.0,288.5L1061.5,288.5L1061.5,289.0L1062.0,289.0L1062.0,288.5L1063.5,288.5L1064.5,287.0L1065.5,287.0L1066.0,286.0L1067.0,286.0L1067.5,285.0L1068.5,285.0L1069.0,284.0L1070.0,284.0L1070.0,283.5L1071.5,283.0L1072.0,282.0L1074.0,281.5L1075.0,280.0L1078.0,280.0L1078.0,278.0L1078.5,278.0L1079.0,277.0L1080.5,277.0L1081.0,276.0L1083.0,275.5L1083.5,274.5L1084.5,274.5L1084.5,273.5L1086.0,273.5L1086.0,272.5L1084.5,272.5L1084.5,273.0L1083.5,273.0L1083.5,273.5L1082.0,273.5L1082.0,274.0L1081.0,274.0L1080.5,275.5L1079.5,275.5L1079.0,276.5L1078.0,276.5L1078.0,277.0L1076.5,277.5L1076.0,278.5L1075.0,278.5ZM1017.5,315.5L1017.5,316.0L1018.5,316.5L1018.5,317.5L1020.0,317.5L1020.5,316.5L1024.0,315.5L1024.5,314.5L1025.5,314.5L1025.5,314.0L1027.0,313.0L1027.0,311.5L1026.0,311.5L1026.0,311.0L1024.0,311.0L1023.5,310.0L1022.5,310.0L1022.5,309.5L1021.5,309.5L1021.5,309.0L1017.0,309.0L1017.0,308.5L1013.0,308.5L1013.0,309.0L1011.5,309.0L1011.5,309.5L1009.0,310.0L1009.0,310.5L1008.0,311.0L1008.0,312.0L1011.5,312.0L1011.5,310.5L1013.5,310.5L1013.5,312.5L1011.0,312.5L1011.0,314.0L1011.5,314.0L1012.0,315.0L1014.0,315.0L1014.0,315.5ZM1091.0,351.0L1091.0,350.0L1092.0,350.0L1092.0,349.5L1095.5,350.0L1095.5,349.0L1096.0,349.0L1096.0,347.5L1095.0,347.5L1095.0,347.0L1089.5,347.0L1089.5,346.5L1086.5,346.0L1086.5,345.5L1082.0,345.5L1082.0,345.0L1080.5,344.5L1080.5,343.5L1079.5,343.5L1078.5,351.0L1084.0,350.5L1084.0,351.0L1086.0,351.0L1086.0,351.5L1088.5,351.5L1088.5,351.0ZM1105.5,350.0L1106.5,350.0L1106.5,350.5L1109.0,350.5L1109.0,351.0L1111.5,351.0L1111.5,351.5L1115.0,351.5L1115.0,352.0L1116.5,352.0L1116.0,350.5L1113.5,350.5L1113.5,350.0L1110.0,350.0L1110.0,349.5L1105.5,349.0ZM1092.5,372.5L1092.5,370.0L1088.5,369.5L1088.5,368.0L1086.0,367.5L1085.5,366.0L1085.0,366.0L1085.0,365.0L1084.0,365.0L1084.0,366.0L1083.0,366.0L1083.0,366.5L1082.0,366.5L1082.0,367.0L1077.5,366.5L1077.5,364.0L1078.0,364.0L1078.5,360.0L1076.5,360.0L1076.0,370.0L1078.0,370.0L1078.0,370.5L1085.5,370.0L1085.5,371.0L1086.0,371.0L1086.5,372.0ZM1032.0,368.5L1031.5,370.0L1036.5,370.0L1036.5,368.5ZM1094.5,373.0L1097.0,373.0L1097.5,370.5L1094.5,370.5ZM1086.0,386.0L1088.5,386.0L1088.5,386.5L1089.5,386.5L1089.5,383.5L1091.0,383.0L1090.5,382.0L1086.5,382.0L1086.5,379.0L1087.0,379.0L1087.0,378.0L1086.0,378.0L1086.0,378.5L1082.5,378.5L1082.5,378.0L1075.5,377.5L1075.5,379.0L1076.0,379.0L1076.0,380.0L1077.0,380.5L1077.0,381.5L1077.5,381.5L1077.5,382.0L1079.0,382.0L1079.5,380.5L1082.0,380.5L1082.0,385.0L1086.0,385.5ZM1119.5,404.0L1120.0,402.5L1114.5,402.0L1114.5,403.5L1116.5,403.5L1116.5,404.0ZM1113.0,416.0L1113.0,418.5L1115.5,418.5L1115.5,420.5L1114.0,420.5L1114.0,420.0L1112.5,420.5L1112.0,430.0L1113.5,430.0L1113.5,430.5L1114.5,430.5L1114.5,431.0L1119.0,430.5L1119.0,428.5L1119.5,428.5L1119.0,427.0L1118.5,427.0L1118.5,424.5L1119.5,424.5L1119.5,423.5L1120.0,423.5L1120.0,423.0L1119.5,423.0L1119.5,422.5L1120.0,422.5L1120.0,420.5L1119.5,420.5L1119.5,420.0L1118.0,420.0L1118.0,418.5L1120.0,418.5L1120.0,418.0L1120.5,418.0L1120.5,416.0L1119.0,415.5L1119.0,414.0L1119.5,414.0L1119.0,408.5L1116.5,408.5L1116.5,407.0L1117.0,407.0L1117.0,406.5L1119.5,406.5L1119.5,405.5L1114.0,406.0L1114.0,408.0L1113.5,408.0L1113.5,416.0ZM1012.0,429.5L1010.5,430.0L1010.5,430.5L1008.0,430.5L1008.0,431.0L1007.5,431.0L1007.5,432.5L1011.5,432.5L1011.5,431.5L1015.5,431.5L1015.5,429.5L1014.5,429.5L1014.0,425.5L1013.0,425.5L1013.0,426.0L1012.0,426.0ZM827.0,352.0L826.5,352.0L826.5,353.0L826.0,353.0L826.0,357.0L824.5,357.0L824.5,358.0L827.0,358.5L827.0,360.0L824.0,360.0L824.0,361.5L822.5,361.5L822.5,362.5L822.0,362.5L821.5,365.5L824.0,365.5L824.0,366.0L826.0,366.5L826.0,367.0L826.5,367.0L826.5,368.5L827.0,368.5L827.5,369.5L829.5,370.0L829.5,370.5L832.0,370.5L832.0,371.0L834.0,371.0L834.0,371.5L837.5,371.5L837.5,373.5L838.0,373.5L839.0,375.0L840.0,375.0L843.0,378.5L844.0,378.5L844.0,379.0L847.0,380.0L847.0,381.5L849.5,381.5L849.5,382.0L850.5,382.0L850.5,382.5L853.0,382.5L853.0,383.0L854.5,383.5L855.0,385.0L856.0,385.0L856.0,385.5L857.0,385.5L857.0,386.0L859.0,386.0L859.0,386.5L861.0,387.0L861.5,388.0L863.0,388.0L863.0,388.5L864.0,388.5L864.0,389.0L865.0,389.0L865.0,389.5L866.5,389.5L867.0,388.5L869.0,388.5L869.0,389.0L870.5,389.0L870.5,389.5L872.0,389.5L872.0,390.0L876.5,391.0L876.5,393.0L882.5,393.5L882.5,394.0L885.0,394.0L885.0,394.5L891.5,394.5L891.5,395.0L892.5,395.0L892.5,395.5L896.5,395.5L896.5,395.0L898.0,395.0L898.0,394.5L903.0,394.5L903.0,394.0L906.5,394.0L906.5,393.5L912.5,393.5L912.5,393.0L915.0,393.0L915.0,392.5L916.5,392.5L916.5,392.0L917.5,392.0L917.5,391.5L918.5,391.5L918.5,391.0L919.5,391.0L919.5,390.5L921.0,390.5L921.0,390.0L922.0,390.0L922.0,389.5L924.0,389.5L924.5,388.5L925.5,388.5L925.5,388.0L928.5,387.0L929.0,386.0L932.0,386.0L932.0,384.0L933.0,384.0L933.0,383.5L934.0,383.5L934.5,382.5L937.5,381.5L939.0,379.5L940.0,379.5L940.5,378.5L941.5,378.5L944.0,375.5L946.0,375.0L948.5,372.0L949.5,372.0L949.5,371.5L950.0,371.5L951.0,370.0L952.0,370.0L953.0,368.5L955.0,368.5L955.5,355.5L956.0,355.5L956.0,354.0L957.5,354.0L957.5,364.0L960.0,364.0L960.0,363.0L962.0,362.0L962.0,359.5L962.5,359.5L962.5,359.0L964.5,359.0L964.5,357.5L968.0,357.0L968.0,355.5L973.5,350.5L973.5,349.5L974.0,349.5L976.5,346.5L977.5,346.5L977.5,345.5L978.5,345.5L979.0,344.5L981.5,344.5L982.0,343.0L984.5,343.0L984.5,342.5L985.5,342.5L985.5,342.0L986.5,342.0L986.5,341.5L990.0,341.5L990.0,341.0L993.5,341.0L993.5,340.5L1000.0,340.5L1000.0,341.0L1005.5,341.0L1006.0,342.0L1008.5,342.0L1008.5,342.5L1009.0,342.5L1009.5,341.5L1011.0,341.5L1011.0,342.0L1013.0,342.0L1013.0,342.5L1014.5,342.5L1014.5,343.0L1016.5,343.0L1016.5,344.5L1018.0,344.5L1018.0,345.0L1025.0,346.0L1025.0,346.5L1026.5,347.0L1026.5,348.5L1029.5,348.5L1029.5,349.0L1031.5,349.5L1032.0,350.5L1034.0,351.0L1035.5,353.0L1036.5,353.0L1036.5,353.5L1038.0,354.5L1038.0,355.5L1039.0,356.0L1039.0,357.0L1039.5,357.0L1039.5,359.5L1040.0,359.5L1040.0,363.0L1039.0,363.5L1039.0,365.5L1039.5,365.5L1039.0,366.5L1039.5,366.5L1039.5,367.0L1042.0,367.0L1042.5,371.5L1043.0,371.5L1043.0,376.0L1043.5,376.0L1043.0,390.5L1042.5,390.5L1042.5,394.0L1042.0,394.0L1042.0,398.0L1041.5,398.0L1041.5,398.5L1038.5,398.5L1038.5,399.5L1041.5,400.0L1041.5,401.5L1041.0,401.5L1041.0,408.0L1040.5,408.0L1040.5,411.5L1040.0,411.5L1040.0,414.5L1039.5,414.5L1039.5,419.5L1039.0,419.5L1039.0,431.5L1038.5,431.5L1038.0,433.5L1036.5,434.0L1036.0,435.0L1034.0,435.0L1034.0,435.5L1031.5,436.0L1031.5,437.5L1033.5,437.5L1033.5,437.0L1035.0,437.0L1035.0,436.5L1037.5,436.5L1037.0,442.0L1038.0,442.0L1038.5,443.5L1039.0,443.5L1039.0,450.0L1039.5,450.0L1040.0,453.5L1040.5,453.5L1040.5,454.5L1041.0,454.5L1041.0,456.0L1040.5,456.0L1040.5,456.5L1038.5,456.5L1038.5,459.0L1039.0,459.0L1039.0,460.5L1039.5,460.5L1039.5,461.5L1040.0,461.5L1040.0,462.5L1040.5,462.5L1040.5,464.0L1041.0,464.0L1041.5,467.0L1042.0,467.0L1042.0,468.0L1042.5,468.0L1042.5,469.5L1043.0,469.5L1043.0,470.5L1043.5,470.5L1043.5,472.0L1044.5,472.5L1044.5,474.5L1045.0,474.5L1045.0,475.5L1045.5,475.5L1045.5,476.5L1046.0,476.5L1046.0,479.5L1048.0,479.5L1048.0,480.0L1048.5,480.0L1048.5,481.0L1049.5,481.5L1050.0,483.5L1051.0,483.5L1051.0,485.5L1051.5,485.5L1052.0,488.0L1054.0,489.5L1054.0,490.5L1055.0,491.0L1055.0,492.0L1056.0,492.5L1056.0,493.5L1058.5,495.5L1058.5,496.5L1059.0,496.5L1059.5,498.0L1061.0,499.0L1061.0,500.0L1061.5,500.0L1061.5,500.5L1063.5,500.5L1063.5,501.0L1064.5,501.5L1064.5,503.0L1066.0,503.0L1066.0,503.5L1073.0,510.0L1073.0,511.5L1074.5,511.5L1074.5,512.0L1076.0,513.0L1076.0,515.0L1076.5,515.0L1076.5,515.5L1078.0,515.5L1078.0,516.0L1080.5,518.0L1080.5,519.0L1082.0,519.0L1082.0,519.5L1084.0,520.0L1085.0,521.5L1086.0,521.5L1086.5,522.5L1087.5,522.5L1087.5,523.0L1088.0,523.0L1088.0,523.5L1087.5,523.5L1088.0,524.5L1090.0,524.5L1090.0,525.0L1092.5,524.5L1093.0,525.5L1094.0,525.5L1094.0,526.5L1096.5,527.0L1097.5,528.5L1099.5,528.5L1099.5,529.5L1101.5,529.5L1102.0,531.0L1103.5,531.0L1103.5,531.5L1104.5,531.5L1105.0,532.5L1107.5,533.0L1107.5,533.5L1125.5,534.0L1125.5,534.5L1127.5,534.5L1127.5,535.0L1141.0,535.0L1141.0,534.5L1144.5,534.5L1144.5,534.0L1148.0,533.5L1148.0,532.0L1151.5,532.5L1151.5,530.0L1152.0,530.0L1152.0,529.5L1155.0,529.0L1155.0,530.5L1153.5,530.5L1153.0,532.0L1155.5,532.0L1155.5,531.5L1158.0,531.5L1158.0,531.0L1161.0,530.5L1161.0,530.0L1162.0,530.0L1162.0,529.5L1163.5,529.5L1163.5,529.0L1164.5,529.0L1164.5,528.5L1165.5,528.5L1165.5,528.0L1166.5,528.0L1166.5,527.5L1167.5,527.5L1167.5,527.0L1168.5,527.0L1168.5,526.5L1169.5,526.5L1169.5,526.0L1170.5,526.0L1170.5,525.5L1172.0,525.5L1172.0,525.0L1174.5,525.0L1174.5,525.5L1175.5,525.5L1176.5,523.0L1177.5,523.0L1178.0,522.0L1179.0,522.0L1179.5,521.0L1180.5,521.0L1181.0,520.0L1182.0,520.0L1182.5,519.0L1183.5,519.0L1187.0,515.0L1188.5,515.0L1188.5,513.5L1189.5,513.5L1189.5,512.5L1191.5,512.5L1191.5,512.0L1192.0,512.0L1192.0,510.5L1193.0,510.5L1193.5,509.5L1194.5,509.5L1194.5,509.0L1196.0,508.0L1196.0,507.0L1199.0,504.5L1199.0,503.5L1200.0,503.5L1200.0,440.0L1198.5,440.0L1198.5,439.0L1198.0,439.0L1198.0,438.0L1197.5,438.0L1197.5,436.5L1197.0,436.5L1197.0,435.5L1196.5,435.5L1196.5,434.5L1196.0,434.5L1196.0,433.0L1195.5,433.0L1195.5,432.0L1195.0,432.0L1195.0,430.5L1194.5,430.5L1194.5,429.0L1194.0,429.0L1194.0,427.0L1193.5,427.0L1193.5,425.5L1193.0,425.5L1193.0,423.5L1192.5,423.5L1192.0,420.5L1191.5,420.5L1191.5,419.5L1191.0,419.5L1191.0,418.0L1190.5,418.0L1190.5,417.0L1190.0,417.0L1190.0,415.5L1189.5,415.5L1189.5,414.5L1189.0,414.5L1188.5,411.0L1188.0,411.0L1188.0,409.0L1187.5,409.0L1187.0,401.5L1186.5,401.5L1186.5,389.5L1187.0,389.5L1187.0,386.5L1187.5,386.5L1188.0,382.5L1188.5,382.5L1188.5,381.5L1189.0,381.5L1189.0,379.0L1188.5,379.0L1188.0,378.0L1187.0,378.0L1186.0,376.5L1185.0,376.5L1184.0,375.0L1183.0,375.0L1182.0,373.5L1181.0,373.5L1181.0,372.0L1179.0,372.0L1179.0,371.0L1177.5,371.0L1176.5,369.5L1175.5,369.5L1175.0,368.5L1174.0,368.5L1173.5,367.5L1172.5,367.5L1172.5,366.5L1170.5,366.5L1170.0,368.5L1169.5,368.5L1169.0,369.5L1167.5,369.5L1167.0,370.5L1164.0,370.5L1164.0,370.0L1162.5,370.0L1162.5,370.5L1162.0,370.5L1162.5,371.5L1167.0,371.5L1166.5,376.0L1166.0,376.0L1166.0,378.0L1165.5,378.0L1165.5,379.5L1165.0,379.5L1164.0,386.0L1163.5,386.0L1162.5,389.0L1162.0,389.0L1161.5,390.0L1160.5,390.0L1160.5,390.5L1157.5,391.0L1157.5,393.0L1159.0,393.5L1159.5,394.5L1160.5,394.5L1160.5,395.0L1161.5,395.5L1161.5,398.0L1162.5,398.0L1162.5,399.0L1163.0,399.0L1163.5,405.0L1164.5,405.5L1165.0,412.5L1165.5,412.5L1165.5,413.5L1166.0,413.5L1166.5,417.5L1167.0,417.5L1167.0,418.5L1167.5,418.5L1168.0,422.5L1168.5,422.5L1168.5,423.0L1168.0,423.0L1168.0,425.0L1169.0,425.0L1169.0,427.5L1170.0,427.5L1170.0,430.5L1170.5,430.5L1170.5,431.5L1171.0,431.5L1171.5,434.5L1172.0,434.5L1172.0,435.5L1173.5,436.0L1174.5,439.0L1175.5,439.5L1175.5,441.0L1176.5,441.5L1176.5,442.5L1177.0,442.5L1177.0,443.5L1177.5,443.5L1177.5,445.0L1178.0,445.0L1178.0,446.0L1178.5,446.0L1178.5,447.0L1179.0,447.0L1179.0,448.0L1179.5,448.0L1179.5,449.5L1180.5,450.0L1180.5,451.0L1181.0,451.0L1181.0,452.0L1181.5,452.0L1181.5,453.0L1182.0,453.0L1182.0,454.5L1182.5,454.5L1182.5,455.5L1183.0,455.5L1183.0,457.0L1183.5,457.0L1183.5,458.5L1184.0,458.5L1184.0,460.0L1184.5,460.0L1184.5,462.5L1185.0,462.5L1185.0,464.5L1185.5,464.5L1185.5,466.5L1186.0,466.5L1186.0,470.0L1186.5,470.0L1186.5,472.0L1187.0,472.0L1187.0,475.5L1187.5,475.5L1187.0,487.0L1186.5,487.0L1186.5,488.5L1186.0,488.5L1186.0,490.0L1185.5,490.0L1185.0,492.0L1184.5,492.0L1184.0,493.5L1182.5,494.5L1182.5,495.5L1181.0,496.5L1181.0,497.5L1180.0,497.5L1178.0,500.0L1177.0,500.0L1177.0,500.5L1176.5,500.5L1176.0,501.5L1175.0,501.5L1174.5,502.5L1172.0,503.0L1171.5,504.5L1169.5,504.5L1169.0,506.0L1166.5,505.5L1166.0,506.5L1164.5,506.5L1164.5,508.5L1163.5,508.5L1163.5,509.0L1162.5,509.0L1162.5,509.5L1161.5,509.5L1161.5,510.0L1160.5,510.0L1160.5,510.5L1159.5,510.5L1159.5,511.0L1158.0,511.0L1158.0,511.5L1157.0,511.5L1157.0,512.0L1156.0,512.0L1156.0,512.5L1154.5,512.5L1154.5,513.0L1153.5,513.0L1153.5,513.5L1151.5,513.5L1151.5,514.0L1149.5,514.0L1149.5,514.5L1147.5,514.5L1147.5,515.0L1145.5,515.0L1145.5,515.5L1142.5,515.5L1142.5,516.0L1138.0,516.5L1138.0,517.0L1126.5,517.5L1126.5,517.0L1122.5,517.0L1122.5,516.5L1117.5,516.0L1117.5,515.5L1116.0,515.5L1116.0,515.0L1115.0,515.0L1115.0,514.5L1113.5,514.5L1113.5,514.0L1110.5,513.5L1110.5,513.0L1109.5,513.0L1109.5,512.5L1108.0,512.5L1108.0,512.0L1107.0,512.0L1107.0,511.5L1106.0,511.5L1106.0,511.0L1105.0,511.0L1105.0,510.5L1103.5,510.5L1103.5,510.0L1102.5,510.0L1102.5,509.5L1099.5,508.5L1099.0,507.5L1097.0,507.0L1096.0,505.5L1094.5,505.5L1094.5,505.0L1093.0,504.5L1092.0,503.0L1090.0,502.5L1090.0,501.5L1089.0,501.5L1089.0,501.0L1088.0,500.5L1088.0,499.0L1086.5,498.5L1086.5,497.0L1085.5,497.0L1085.5,496.0L1084.0,495.5L1084.0,494.5L1082.0,494.5L1081.5,493.0L1078.5,490.5L1078.5,489.5L1077.5,489.0L1077.5,487.0L1076.0,487.0L1076.0,486.5L1074.5,485.5L1074.5,484.0L1073.0,483.0L1073.0,482.0L1072.5,482.0L1072.5,481.0L1072.0,481.0L1072.0,480.0L1071.5,480.0L1071.5,478.0L1070.0,477.5L1069.5,475.0L1068.5,475.0L1068.5,474.0L1068.0,474.0L1067.5,470.0L1066.5,470.0L1066.0,467.5L1065.5,467.5L1065.5,466.5L1065.0,466.5L1065.0,465.5L1064.5,465.5L1064.5,464.5L1064.0,464.5L1063.5,460.5L1063.0,460.5L1063.0,459.0L1062.5,459.0L1062.5,457.5L1062.0,457.5L1061.5,452.0L1061.0,452.0L1060.5,442.5L1060.0,442.5L1059.5,439.5L1059.0,439.5L1059.0,433.0L1059.5,433.0L1059.5,428.5L1060.0,428.5L1060.0,425.5L1060.5,425.5L1060.5,413.0L1061.0,413.0L1060.5,408.5L1061.0,408.5L1061.5,394.0L1062.0,394.0L1062.0,392.5L1061.5,392.5L1061.5,387.0L1062.0,387.0L1062.0,383.5L1062.5,383.5L1062.5,381.0L1063.0,381.0L1063.0,379.0L1063.5,379.0L1063.5,376.5L1065.0,376.5L1065.0,375.5L1063.0,375.0L1063.0,374.0L1062.5,374.0L1062.0,365.0L1061.5,365.0L1061.0,362.0L1059.0,360.5L1059.0,359.5L1058.5,359.5L1058.5,358.5L1058.0,358.5L1058.0,357.0L1057.5,357.0L1057.5,355.0L1057.0,355.0L1057.0,354.0L1056.5,354.0L1056.5,353.0L1056.0,353.0L1056.0,352.0L1055.5,352.0L1055.5,350.5L1054.0,349.5L1053.5,347.5L1052.5,347.0L1052.5,346.0L1051.5,345.5L1051.5,344.5L1051.0,344.5L1051.0,343.5L1050.5,343.5L1050.0,342.5L1047.0,343.0L1047.0,342.5L1045.5,342.0L1043.0,339.0L1040.5,338.5L1040.5,338.0L1037.0,337.5L1037.0,335.5L1036.0,335.5L1036.0,336.0L1033.5,336.0L1033.5,335.5L1032.5,335.5L1032.0,334.5L1031.0,334.5L1031.0,334.0L1029.0,333.5L1028.5,332.5L1027.5,332.5L1026.5,331.0L1019.0,330.0L1019.0,329.5L1018.0,329.0L1018.0,328.5L1018.5,328.5L1018.0,327.5L1013.5,327.0L1013.5,324.0L1012.5,324.0L1012.0,325.5L1009.5,325.5L1009.0,324.5L1007.0,324.5L1007.0,324.0L1005.5,324.0L1005.5,324.5L985.0,324.5L985.0,324.0L983.5,324.0L983.5,325.5L975.0,326.0L975.0,327.0L973.5,327.0L973.5,327.5L972.5,327.5L972.0,328.5L971.0,328.5L971.0,329.0L968.0,330.0L968.0,330.5L967.0,331.0L967.0,332.5L965.5,333.0L965.0,334.0L964.0,334.0L964.0,334.5L963.0,334.5L963.0,335.0L960.0,335.0L960.0,335.5L959.0,335.5L958.5,345.0L961.0,345.0L961.0,349.0L958.0,349.0L958.0,353.0L956.0,353.0L956.0,349.0L954.0,349.0L954.0,348.5L953.5,348.5L953.5,345.5L956.5,344.5L956.5,338.0L956.0,338.0L956.0,338.5L955.0,338.5L954.5,339.5L953.5,339.5L952.5,341.0L951.5,341.0L951.0,342.5L947.0,346.0L947.0,347.0L946.0,347.0L945.0,348.5L944.0,348.5L944.0,349.5L943.0,349.5L943.0,350.0L938.0,354.5L938.0,355.5L937.0,356.0L937.0,357.0L936.5,357.0L935.5,358.5L934.5,358.5L931.5,362.0L930.5,362.0L930.5,362.5L925.5,367.0L925.5,370.5L922.5,370.5L922.0,371.5L921.0,371.5L921.0,372.0L920.0,372.0L919.5,373.0L918.5,373.0L918.0,374.5L916.5,375.0L915.5,376.5L914.5,376.5L914.5,377.0L913.5,377.0L913.5,377.5L912.5,377.5L912.5,378.0L910.5,378.0L909.0,380.0L901.0,380.5L900.5,382.0L898.5,382.0L898.0,380.5L894.0,380.5L894.0,380.0L893.0,380.0L893.0,379.5L890.0,379.5L890.0,379.0L887.5,378.5L887.0,377.5L882.0,377.0L882.0,376.5L879.0,376.5L878.0,375.0L876.5,375.0L876.5,374.5L873.0,374.5L872.5,373.5L870.5,373.0L870.0,372.0L869.0,372.0L869.0,371.5L866.0,370.5L865.5,369.0L863.0,369.0L863.0,368.0L861.0,368.0L861.0,367.5L860.0,367.5L860.0,367.0L857.0,366.0L856.5,365.0L855.0,365.0L855.0,364.5L854.0,364.5L854.0,364.0L853.0,364.0L853.0,363.5L852.0,363.5L852.0,363.0L850.5,363.0L850.5,362.5L849.0,362.0L849.0,361.0L843.5,360.5L843.5,359.0L843.0,359.0L841.5,357.0L840.5,357.0L840.5,356.5L839.5,356.0L839.5,354.0L838.5,354.0L838.5,353.5L837.5,353.5L837.5,353.0L835.5,353.0L835.5,352.5L834.5,352.5L834.5,352.0L832.5,352.0L832.5,351.5L832.0,351.5L832.0,352.0L830.0,352.0L830.0,351.5L827.0,351.0ZM907.0,388.5L908.5,388.5L908.5,390.0L906.5,390.5L906.0,389.0L907.0,389.0ZM915.5,378.0L922.0,378.0L922.0,378.5L922.5,378.5L922.5,379.5L915.5,379.5ZM1019.5,339.0L1021.0,339.0L1021.0,340.5L1019.5,340.5ZM1045.5,368.5L1045.5,366.5L1047.0,367.0L1046.5,368.5ZM1050.5,440.5L1050.5,439.0L1052.0,439.0L1052.0,440.5ZM1042.5,448.0L1043.0,446.5L1044.0,446.5L1044.0,448.0ZM1051.5,424.5L1051.5,423.0L1053.0,423.0L1053.0,424.5ZM1051.0,416.5L1051.5,416.5L1051.5,415.0L1053.0,415.0L1053.0,421.0L1051.5,421.0ZM1054.0,362.5L1056.5,362.5L1056.5,364.0L1054.0,364.0ZM1087.0,509.5L1089.0,509.5L1089.0,511.0L1087.0,511.0ZM1084.5,504.5L1088.0,504.5L1088.0,506.0L1086.0,506.0L1086.0,508.5L1084.5,508.5ZM1091.5,506.0L1089.5,506.0L1089.5,504.5L1091.5,504.5ZM1187.5,497.5L1189.0,497.5L1189.0,499.0L1187.5,499.0ZM1196.5,476.5L1195.0,476.5L1195.0,475.0L1196.5,475.0ZM1196.5,481.0L1195.0,481.0L1195.0,479.5L1196.5,479.5ZM1029.0,450.0L1028.0,448.5L1027.5,448.5L1027.5,449.0L1025.0,449.0L1025.0,450.5L1025.5,450.5L1025.5,452.0L1026.0,452.0L1026.0,454.0L1026.5,454.0L1026.5,454.5L1029.5,454.0L1029.5,453.5L1030.0,453.5L1030.0,450.0ZM1089.5,454.5L1090.5,454.5L1090.5,454.0L1094.0,454.0L1094.0,454.5L1098.5,454.0L1098.5,456.0L1104.5,456.5L1104.5,457.0L1105.0,457.0L1105.0,458.5L1116.5,459.5L1116.5,465.5L1116.0,465.5L1115.5,471.5L1116.0,471.5L1116.0,472.0L1117.5,472.0L1117.0,469.0L1117.5,469.0L1117.5,464.5L1118.0,464.5L1118.0,462.5L1118.5,462.5L1118.5,460.0L1120.0,460.0L1120.0,458.5L1121.5,458.0L1121.5,457.0L1122.0,457.0L1122.0,453.0L1122.5,453.0L1122.5,451.0L1121.0,450.5L1121.0,450.0L1120.0,449.5L1120.0,448.5L1117.5,446.5L1118.0,438.5L1118.5,438.5L1118.5,438.0L1118.0,438.0L1118.0,437.0L1118.5,437.0L1118.5,434.5L1117.5,434.5L1117.5,433.5L1116.5,433.5L1116.5,433.0L1115.5,433.0L1115.5,432.5L1114.0,432.5L1114.0,433.0L1112.0,433.0L1112.0,433.5L1111.5,433.5L1111.0,439.0L1113.0,439.0L1113.0,440.5L1110.5,440.5L1110.5,445.0L1110.0,445.0L1108.5,447.0L1107.5,447.0L1106.0,449.0L1096.5,448.5L1096.5,448.0L1092.0,448.0L1092.0,447.5L1087.5,447.5L1087.5,447.0L1081.0,447.0L1081.0,446.5L1080.0,446.5L1080.0,448.0L1079.0,448.5L1079.0,452.5L1078.0,452.5L1078.0,454.0L1087.5,454.5L1087.5,455.0L1089.5,455.0ZM1012.5,454.5L1013.0,454.5L1013.0,456.0L1013.5,456.0L1013.5,457.5L1014.0,457.5L1014.0,458.0L1016.5,458.0L1017.0,457.0L1018.5,457.0L1019.0,456.0L1022.5,456.0L1022.5,455.5L1024.0,455.5L1024.0,455.0L1024.5,455.0L1024.0,452.5L1023.5,452.5L1023.5,449.5L1022.0,449.5L1022.0,450.5L1018.5,451.0L1018.5,451.5L1017.5,451.5L1017.5,454.5L1018.0,454.5L1018.0,455.5L1016.5,455.5L1015.5,452.0L1012.5,453.0ZM1104.5,564.0L1104.5,565.0L1104.0,565.0L1104.0,566.5L1103.5,566.5L1104.0,570.0L1103.5,570.0L1103.5,572.5L1103.0,572.5L1103.0,576.5L1104.0,576.5L1104.0,577.0L1105.5,576.5L1105.5,574.5L1106.0,574.5L1107.0,568.5L1107.5,568.5L1108.0,567.5L1109.0,567.5L1109.0,566.5L1110.0,566.5L1110.0,565.5L1110.5,565.5L1111.0,564.5L1114.0,563.5L1114.0,563.0L1116.0,561.5L1116.0,560.5L1116.5,560.5L1116.5,559.5L1117.5,559.0L1117.5,558.0L1118.0,558.0L1118.0,557.0L1118.5,557.0L1118.5,556.0L1119.0,556.0L1120.0,553.0L1117.5,553.0L1117.0,554.5L1116.5,554.5L1116.5,555.5L1116.0,555.5L1116.0,556.5L1115.5,556.5L1115.5,557.5L1115.0,557.5L1115.0,558.5L1114.5,558.5L1114.5,560.0L1114.0,560.0L1113.0,561.5L1111.0,561.5L1111.0,562.0L1109.5,562.0L1109.5,562.5L1108.5,562.5L1108.5,563.0L1105.5,563.5L1105.5,564.0ZM1103.0,586.0L1102.0,586.5L1102.0,588.0L1103.5,588.0L1104.0,587.0L1105.0,586.5L1106.0,583.0L1104.5,583.0L1104.5,584.5L1104.0,584.5L1104.0,585.5L1103.0,585.5ZM1096.0,595.0L1097.0,595.0L1097.0,592.0L1090.5,593.5L1090.5,594.5L1095.5,594.0ZM1087.5,598.0L1087.5,600.0L1092.0,600.5L1092.0,600.0L1095.0,600.0L1095.0,599.5L1096.5,598.5L1096.5,597.0L1094.0,597.5L1094.0,598.0ZM1100.0,638.0L1099.5,638.0L1099.0,636.5L1098.0,636.5L1098.0,636.0L1096.5,635.0L1096.5,635.5L1096.0,635.5L1096.0,637.0L1095.5,637.0L1095.5,638.5L1096.0,638.5L1096.0,639.0L1097.0,639.0L1097.0,639.5L1097.5,639.5L1097.5,641.0L1098.5,641.0L1098.5,639.0L1100.0,639.0ZM1110.5,648.0L1107.5,648.0L1106.5,646.5L1104.0,646.5L1104.0,646.0L1103.0,645.5L1103.0,642.5L1102.5,642.5L1102.5,641.5L1101.5,641.5L1101.5,645.5L1102.0,647.0L1104.5,647.5L1104.5,648.5L1107.0,649.0L1107.0,650.0L1110.5,649.5ZM1123.5,33.5L1121.0,34.0L1121.0,35.5L1120.5,35.5L1120.5,36.5L1119.5,37.0L1119.5,39.0L1122.5,39.0L1122.5,38.0L1131.0,37.5L1131.0,33.0L1130.5,33.0L1130.5,31.5L1130.0,31.5L1130.0,29.0L1129.5,29.0L1129.5,28.0L1127.0,28.0L1127.0,29.5L1126.5,29.5L1126.5,30.5L1125.5,31.0L1125.5,33.0L1126.5,33.0L1126.5,35.0L1125.0,35.0L1124.5,36.0L1123.0,36.0ZM1122.5,49.5L1122.5,49.0L1121.5,49.0L1121.5,48.0L1120.0,48.0L1120.0,50.5L1121.5,51.0L1121.5,51.5L1124.5,51.5L1124.5,51.0L1125.5,51.0L1125.5,50.5L1127.0,50.5L1127.0,49.0ZM1128.5,69.5L1129.5,69.5L1130.0,71.0L1131.5,71.0L1131.5,70.0L1130.0,69.5L1130.0,68.5L1129.5,68.5L1126.5,65.0L1125.5,65.0L1125.5,63.5L1123.5,63.0L1123.5,62.5L1120.5,60.0L1120.5,59.0L1120.0,59.0L1119.5,57.5L1117.5,57.5L1118.0,62.5L1120.5,62.5L1120.5,63.0L1123.5,64.0L1124.0,65.0L1125.5,65.5L1125.5,66.5L1126.0,66.5ZM1131.5,71.0L1131.5,72.5L1132.0,72.5L1134.5,75.5L1136.0,75.5L1136.0,74.0L1134.5,73.5L1133.0,71.0L1132.5,71.0L1132.5,71.5ZM1142.5,87.5L1143.0,87.5L1143.0,89.0L1143.5,89.0L1144.0,91.5L1145.0,91.5L1145.0,92.5L1146.0,92.5L1146.5,89.5L1146.0,89.5L1146.0,88.5L1145.5,88.5L1145.5,87.5L1145.0,87.5L1145.0,86.0L1144.5,86.0L1144.5,85.0L1143.5,84.5L1143.5,83.5L1143.0,83.5L1143.0,82.5L1142.0,82.0L1142.0,81.0L1141.5,81.0L1141.0,79.5L1139.0,80.0L1139.0,81.5L1139.5,81.5L1139.5,82.5L1140.0,82.5L1140.5,84.0L1141.0,84.0L1141.0,85.0L1142.0,85.5L1142.0,86.5L1142.5,86.5ZM1129.5,91.0L1129.0,91.0L1129.0,93.5L1128.5,93.5L1128.5,94.0L1130.0,94.5L1130.0,91.5L1130.5,91.5L1131.0,86.5L1130.0,86.5L1130.0,89.0L1129.5,89.0ZM1151.0,100.5L1149.5,100.0L1149.5,98.5L1149.0,98.5L1149.0,97.0L1148.5,97.0L1148.0,95.5L1146.0,95.5L1146.0,97.5L1146.5,97.5L1147.0,100.0L1148.0,100.5L1148.0,101.5L1148.5,101.5L1149.0,102.5L1150.0,102.5L1150.0,102.0L1151.0,101.5ZM1133.0,106.5L1130.5,106.0L1130.5,108.0L1131.5,108.0L1131.5,109.0L1133.5,109.0ZM1159.0,108.0L1158.5,108.0L1157.5,106.5L1156.5,106.5L1156.0,105.0L1154.5,105.0L1154.5,106.5L1155.0,106.5L1156.0,108.0L1156.5,108.0L1157.0,110.0L1158.5,111.0L1158.5,112.0L1160.5,112.0L1160.5,110.5L1159.5,110.0ZM1135.0,111.5L1135.0,112.5L1135.5,112.5L1135.5,113.5L1136.5,113.5L1136.5,111.0L1136.0,111.0L1136.0,110.0L1133.5,109.5L1133.5,111.0ZM1156.5,134.5L1157.5,134.5L1157.5,134.0L1158.5,133.5L1158.5,130.5L1159.0,130.5L1159.0,129.5L1159.5,129.5L1161.0,127.5L1162.5,127.0L1162.5,125.5L1164.0,125.5L1165.0,120.5L1164.5,120.5L1164.0,117.0L1163.0,116.5L1162.5,114.0L1161.5,113.5L1161.5,112.5L1160.5,112.5L1160.5,113.5L1160.0,113.5L1160.0,115.0L1161.0,115.5L1161.0,116.5L1161.5,116.5L1161.5,117.5L1162.0,117.5L1162.0,118.5L1162.5,118.5L1162.5,123.5L1162.0,123.5L1162.0,124.5L1161.5,124.5L1161.5,126.0L1160.0,126.0L1160.0,126.5L1159.0,127.0L1159.0,128.0L1157.0,129.5L1157.0,130.5L1156.5,130.5L1156.0,131.5L1153.0,132.0L1153.0,131.0L1151.5,131.0L1152.0,133.0L1151.5,138.0L1153.0,137.5L1153.0,136.5L1154.5,135.5L1155.0,133.5L1156.5,133.5ZM1195.0,141.5L1193.0,141.5L1193.0,142.0L1192.5,142.0L1192.5,144.5L1193.0,144.5L1193.0,145.0L1195.0,145.0L1195.0,144.5L1195.5,144.5L1195.5,142.0L1195.0,142.0ZM1131.5,157.5L1128.0,157.5L1128.0,159.5L1130.0,160.0L1130.0,159.5L1131.0,159.0ZM1160.0,147.0L1160.5,147.0L1161.0,151.5L1161.5,151.5L1161.5,153.0L1162.0,153.0L1162.0,155.5L1162.5,155.5L1162.5,156.5L1163.0,156.5L1163.5,162.0L1164.5,162.0L1164.5,160.0L1167.0,160.0L1167.0,160.5L1170.0,161.5L1170.5,162.5L1171.5,162.5L1172.0,163.5L1173.0,163.5L1173.0,164.0L1176.0,166.5L1176.0,167.5L1177.0,168.0L1177.0,169.5L1177.5,169.5L1177.5,171.5L1179.0,171.5L1179.0,173.0L1178.0,173.0L1178.0,176.5L1178.5,176.5L1178.5,180.0L1179.0,180.0L1178.5,181.0L1179.0,181.0L1179.0,183.0L1179.5,183.0L1179.5,186.0L1179.0,186.0L1179.0,187.0L1177.5,188.0L1177.5,189.0L1179.5,189.0L1180.0,188.0L1182.0,188.0L1182.0,187.5L1183.0,187.5L1183.0,187.0L1184.0,187.0L1184.0,186.5L1185.0,186.5L1185.0,186.0L1187.0,186.0L1187.0,185.5L1189.5,185.0L1189.5,184.5L1191.5,183.0L1191.5,182.0L1192.5,181.5L1192.5,180.5L1195.0,180.0L1195.5,179.0L1197.0,178.5L1197.0,177.5L1200.0,177.5L1200.0,175.5L1198.5,175.5L1199.0,171.5L1197.5,171.5L1197.0,174.5L1196.5,174.5L1196.0,176.5L1193.0,177.0L1193.0,177.5L1192.0,178.0L1192.0,179.0L1190.5,180.0L1189.5,183.0L1188.5,183.0L1188.5,183.5L1187.5,183.5L1187.5,184.0L1186.0,184.0L1186.0,184.5L1184.5,184.5L1184.5,185.0L1183.5,185.0L1183.5,185.5L1181.0,185.5L1181.0,182.5L1180.5,182.5L1180.5,178.0L1181.0,178.0L1181.0,176.5L1180.5,176.5L1180.5,172.5L1180.0,172.5L1180.0,170.5L1179.5,170.5L1179.5,169.5L1179.0,169.5L1178.0,166.5L1177.5,166.5L1177.5,166.0L1176.5,165.5L1176.5,164.5L1176.0,164.5L1175.0,163.0L1174.0,163.0L1173.0,161.5L1171.0,161.0L1170.5,160.0L1168.5,159.5L1167.5,158.0L1166.0,158.0L1166.0,157.5L1164.5,156.5L1164.5,154.0L1164.0,154.0L1163.5,152.5L1163.0,152.5L1163.0,149.5L1162.5,149.5L1162.5,148.5L1162.0,148.5L1162.0,146.0L1161.5,146.0L1161.5,144.5L1161.0,144.5L1161.0,142.5L1160.5,142.5L1160.0,139.0L1159.5,139.0L1159.5,138.5L1158.0,138.5L1158.0,140.5L1158.5,140.5L1158.5,142.0L1159.0,142.0L1159.0,143.5L1159.5,143.5L1159.5,145.5L1160.0,145.5ZM1164.5,164.5L1164.5,164.0L1163.5,164.5L1163.5,167.0L1164.0,167.0L1163.0,172.5L1164.5,172.5L1164.5,172.0L1165.0,172.0L1165.0,169.5L1164.5,169.5L1165.0,164.5ZM1150.0,176.0L1151.0,176.0L1152.0,177.5L1153.0,177.5L1153.5,178.5L1154.5,178.5L1154.5,179.5L1156.0,179.5L1156.0,178.5L1155.0,178.0L1155.0,175.5L1152.5,175.5L1152.0,174.5L1151.0,174.5L1151.0,174.0L1149.5,173.0L1149.5,172.0L1149.0,172.0L1149.0,171.0L1148.5,171.0L1148.0,165.0L1145.5,165.0L1145.5,164.5L1141.0,164.0L1141.0,163.5L1137.0,163.5L1137.0,164.5L1141.5,165.0L1141.5,165.5L1144.0,165.5L1144.0,166.0L1145.0,166.0L1145.5,167.5L1146.5,168.0L1147.0,172.0L1147.5,172.0L1148.0,174.0L1148.5,174.0ZM1163.5,192.0L1164.0,190.5L1165.0,190.5L1165.5,194.5L1167.0,194.5L1167.0,194.0L1168.0,194.0L1168.0,193.5L1169.0,193.5L1169.0,193.0L1170.5,193.0L1170.5,192.5L1171.5,192.5L1171.5,192.0L1173.0,192.0L1173.0,191.5L1174.5,191.5L1174.5,191.0L1175.5,191.0L1175.5,190.5L1177.0,190.5L1177.0,189.5L1175.0,189.5L1175.0,190.0L1173.5,190.0L1173.5,190.5L1172.0,190.5L1172.0,191.0L1168.5,191.0L1168.5,190.5L1165.5,190.0L1164.5,188.5L1163.0,188.5L1163.0,189.0L1161.0,189.0L1161.0,189.5L1160.5,189.5L1161.5,192.5L1162.0,192.5L1162.0,196.0L1163.0,196.0L1163.0,195.5L1164.5,195.5L1164.0,192.0ZM1182.5,203.0L1183.0,203.0L1183.0,201.5L1178.5,201.5L1178.5,203.0L1179.0,203.0L1179.5,204.0L1182.0,204.0ZM1165.0,202.0L1165.5,202.0L1166.5,197.5L1164.0,198.0L1164.0,198.5L1162.5,198.5L1162.5,199.0L1161.0,199.0L1161.0,199.5L1160.5,199.5L1160.5,201.0L1159.5,201.0L1159.5,202.0L1159.0,202.0L1158.5,208.5L1164.0,209.0L1164.0,207.5L1164.5,207.5L1164.5,203.5L1165.0,203.5ZM1155.0,220.0L1154.5,220.0L1154.5,221.0L1155.5,221.5L1155.5,221.0L1156.5,220.5L1156.5,219.0L1158.0,219.0L1157.5,226.5L1156.0,226.5L1156.0,230.5L1155.5,230.5L1155.5,232.0L1155.0,232.0L1155.0,233.5L1154.5,233.5L1154.5,243.0L1155.0,243.0L1155.0,244.0L1155.5,244.0L1156.0,245.0L1157.0,245.0L1158.0,246.5L1159.0,246.5L1161.0,249.0L1162.5,249.0L1162.5,250.0L1166.5,253.5L1166.5,254.5L1167.0,254.5L1167.0,255.5L1167.5,255.5L1167.5,256.5L1168.5,257.0L1168.5,258.5L1169.0,258.5L1169.5,266.0L1170.0,266.0L1169.5,267.5L1170.0,267.5L1171.5,269.5L1172.5,269.5L1173.0,270.5L1174.5,270.5L1174.5,270.0L1176.0,270.0L1176.0,269.5L1179.0,268.5L1178.5,267.5L1179.0,267.5L1179.5,265.0L1180.5,264.5L1180.5,262.5L1181.0,262.5L1182.0,259.5L1182.5,259.5L1183.0,258.5L1187.0,258.0L1187.0,257.5L1188.0,257.5L1188.5,259.0L1189.5,259.0L1189.5,259.5L1191.0,260.5L1191.0,263.5L1195.5,264.0L1196.5,265.5L1197.5,265.5L1198.5,267.0L1200.0,267.5L1200.0,262.5L1197.5,263.0L1197.0,262.0L1196.0,262.0L1196.0,261.5L1195.5,261.5L1195.0,260.5L1194.0,260.5L1194.0,259.5L1193.0,259.5L1189.0,255.0L1188.0,255.0L1188.0,255.5L1185.5,255.5L1185.5,256.0L1184.5,256.0L1184.5,256.5L1183.0,256.5L1183.0,257.0L1179.5,260.0L1179.5,261.0L1179.0,261.0L1179.0,262.0L1178.5,262.0L1178.5,263.0L1178.0,263.0L1178.0,264.0L1177.5,264.0L1177.5,265.5L1177.0,265.5L1177.0,266.5L1176.5,266.5L1176.0,267.5L1173.5,267.5L1173.5,267.0L1172.5,266.5L1172.0,263.5L1171.5,263.5L1171.5,259.5L1171.0,259.5L1171.0,258.0L1172.0,257.5L1172.0,256.0L1170.0,256.0L1169.5,254.5L1169.0,254.5L1169.0,253.0L1168.0,253.0L1168.0,252.0L1167.5,252.0L1167.5,251.0L1166.5,250.5L1166.5,249.5L1165.5,249.5L1165.5,249.0L1165.0,249.0L1163.0,246.5L1162.0,246.5L1161.0,245.0L1160.0,245.0L1159.5,244.0L1157.5,243.5L1157.5,242.5L1157.0,242.5L1156.5,241.0L1156.0,241.0L1156.0,234.0L1156.5,234.0L1156.5,233.0L1157.0,233.0L1157.5,229.5L1158.5,229.0L1158.5,228.0L1159.0,228.0L1159.0,227.0L1159.5,227.0L1159.5,226.0L1160.0,226.0L1160.0,224.5L1160.5,224.5L1160.5,223.5L1161.0,223.5L1161.0,222.5L1161.5,222.5L1161.5,221.0L1162.0,221.0L1162.0,220.0L1162.5,220.0L1162.5,218.5L1163.0,218.5L1163.0,216.5L1163.5,216.5L1163.5,210.5L1158.0,210.5L1158.0,212.5L1157.5,212.5L1157.0,215.5L1156.5,215.5L1156.5,216.5L1156.0,216.5L1156.0,217.5L1155.5,217.5L1155.5,219.0L1155.0,219.0ZM1128.5,245.5L1129.0,244.5L1130.0,244.5L1130.0,244.0L1131.0,244.0L1131.5,243.0L1132.5,243.0L1133.5,241.5L1134.5,241.5L1134.5,241.0L1136.0,240.5L1137.0,239.0L1138.0,239.0L1138.5,238.0L1139.5,238.0L1140.0,236.5L1138.5,236.5L1138.0,237.5L1136.5,237.5L1136.5,238.0L1135.0,238.5L1134.0,240.0L1133.0,240.0L1132.5,241.0L1131.5,241.0L1130.5,242.5L1129.5,242.5L1129.0,243.5L1128.0,243.5L1127.5,244.5L1126.5,244.5L1126.0,245.5L1124.5,246.0L1124.5,246.5L1123.5,247.0L1123.5,248.0L1125.5,247.5L1126.0,246.5L1127.0,246.5L1127.0,246.0ZM1183.5,248.5L1183.5,247.5L1183.0,247.5L1181.5,245.5L1180.0,245.5L1179.5,247.0L1180.0,247.0L1180.0,248.0L1180.5,248.0L1181.0,249.0L1181.5,249.0L1184.0,252.0L1186.5,252.0L1186.5,251.0L1184.5,249.5L1184.5,248.5ZM1182.5,324.0L1184.0,324.0L1184.0,323.0L1185.0,323.0L1185.0,321.0L1186.5,321.0L1187.0,319.0L1188.5,318.5L1189.0,317.0L1187.0,317.0L1187.0,317.5L1184.0,318.0L1184.0,318.5L1183.0,318.5L1183.0,320.0L1182.0,320.0L1182.0,320.5L1181.5,320.5L1181.5,321.0L1182.0,321.0L1182.0,323.5L1182.5,323.5ZM1183.0,351.0L1183.5,351.0L1186.0,354.0L1187.0,354.0L1187.0,354.5L1189.0,356.0L1189.0,357.5L1191.0,357.5L1192.0,359.0L1193.0,359.0L1193.0,359.5L1193.5,359.5L1196.0,362.5L1197.0,362.5L1198.0,364.0L1198.5,364.0L1198.5,363.5L1200.0,363.5L1200.0,340.0L1198.0,340.0L1198.0,340.5L1196.0,340.5L1196.0,341.0L1194.5,341.0L1194.5,341.5L1193.0,341.5L1193.0,342.0L1190.0,342.0L1190.0,342.5L1188.5,342.5L1187.0,340.0L1185.5,340.0L1185.5,341.0L1186.5,341.5L1186.5,342.5L1187.0,342.5L1187.5,344.5L1186.0,345.5L1186.0,346.5L1185.5,346.5L1184.5,348.0L1183.0,348.5ZM1161.0,364.0L1161.5,357.0L1161.0,357.0L1161.0,354.5L1160.5,354.5L1160.0,350.0L1154.0,349.5L1154.0,350.5L1153.5,350.5L1153.5,353.0L1154.0,353.0L1154.5,359.5L1153.0,359.5L1153.0,360.5L1154.5,361.0L1154.5,363.0L1158.0,363.0L1158.0,363.5ZM1133.0,362.0L1133.0,362.5L1134.5,362.5L1135.0,354.0L1130.0,353.5L1130.0,353.0L1127.0,353.0L1127.0,352.5L1124.5,352.5L1124.5,352.0L1121.5,352.0L1121.5,351.5L1118.0,351.5L1118.0,352.5L1120.5,352.5L1120.5,353.0L1121.5,353.0L1121.5,353.5L1122.5,353.5L1123.0,355.5L1125.0,355.5L1125.0,357.5L1129.5,357.5L1129.5,358.0L1132.5,358.5L1132.5,362.0ZM1178.5,369.0L1179.5,369.0L1179.5,370.0L1181.0,370.0L1181.0,371.5L1183.5,372.0L1183.5,372.5L1185.0,373.0L1186.0,374.5L1187.0,374.5L1188.0,376.0L1190.5,376.5L1191.0,374.5L1194.0,374.5L1194.0,373.0L1193.0,373.0L1192.5,371.5L1193.5,371.0L1194.0,369.0L1196.0,367.5L1196.5,365.0L1195.0,364.5L1193.0,362.0L1192.0,362.0L1190.0,359.5L1189.0,359.5L1189.0,357.5L1187.0,357.5L1187.0,357.0L1186.5,357.0L1186.0,356.0L1185.0,356.0L1182.0,352.5L1180.0,352.5L1180.0,353.5L1178.0,355.0L1178.0,356.0L1177.0,356.5L1177.0,357.5L1175.5,358.0L1175.5,359.0L1175.0,359.0L1175.0,360.0L1174.0,360.0L1174.0,361.0L1172.0,361.0L1172.0,360.5L1171.5,360.5L1171.5,362.0L1172.0,362.0L1173.0,365.0L1174.0,365.0L1174.0,365.5L1175.5,366.0L1176.5,367.5L1177.5,367.5ZM1153.5,373.0L1153.5,377.0L1154.0,377.0L1154.0,378.5L1154.5,378.5L1154.5,380.5L1155.0,380.5L1155.0,381.5L1156.0,381.5L1156.0,376.5L1155.5,376.5L1154.5,372.0L1155.0,372.0L1155.0,370.5L1159.5,371.0L1159.5,369.5L1155.0,369.5L1155.0,368.0L1154.5,368.0L1154.5,366.5L1154.0,366.5L1154.0,366.0L1152.0,366.0L1152.0,365.5L1151.0,365.5L1151.0,365.0L1149.0,365.0L1149.0,364.5L1147.5,364.5L1147.5,364.0L1146.5,364.0L1146.5,366.5L1146.0,366.5L1146.0,367.0L1144.5,367.0L1144.5,366.5L1143.5,366.0L1143.5,364.5L1143.0,364.5L1143.0,364.0L1141.0,364.0L1141.0,364.5L1139.0,366.0L1138.5,369.0L1140.0,369.5L1140.0,370.5L1141.0,371.0L1141.0,372.0L1141.5,372.0L1142.0,373.0ZM1096.0,382.5L1096.5,385.0L1092.5,385.0L1092.5,385.5L1092.0,385.5L1092.0,387.0L1096.5,387.5L1096.5,388.0L1100.0,388.0L1100.0,388.5L1102.5,388.5L1102.5,389.0L1105.0,389.0L1105.0,389.5L1108.0,389.5L1108.0,390.0L1110.5,390.0L1110.5,390.5L1113.0,390.5L1113.0,391.0L1116.5,391.0L1116.5,391.5L1119.0,391.5L1119.5,392.5L1125.5,392.5L1125.5,393.0L1128.0,393.0L1128.0,393.5L1130.0,393.5L1130.0,394.0L1133.5,394.0L1133.5,394.5L1136.0,394.5L1136.0,395.0L1138.5,395.0L1138.5,395.5L1141.5,395.5L1141.5,396.0L1144.0,396.0L1144.0,396.5L1146.5,396.5L1146.5,397.0L1148.0,397.0L1148.0,396.5L1148.5,396.5L1148.5,394.0L1145.5,393.0L1145.5,391.5L1147.0,391.5L1147.0,392.0L1151.5,392.0L1151.5,392.5L1155.0,392.5L1155.0,390.5L1149.5,390.5L1149.5,390.0L1145.0,390.0L1145.0,389.5L1141.0,389.5L1141.0,389.0L1137.0,389.0L1137.0,388.5L1127.0,388.0L1127.0,387.5L1124.0,386.5L1124.0,386.0L1122.5,385.0L1122.5,377.5L1123.0,377.5L1123.0,375.5L1124.0,375.0L1124.0,374.5L1123.5,374.5L1124.0,369.5L1122.5,369.5L1122.5,372.5L1122.0,372.5L1121.5,376.0L1121.0,376.0L1121.0,379.0L1120.5,379.0L1120.5,381.0L1120.0,381.0L1119.5,385.5L1119.0,385.5L1119.0,386.0L1116.0,386.0L1116.0,385.5L1110.0,385.0L1110.0,384.5L1107.5,384.5L1107.5,384.0L1105.0,384.0L1105.0,383.5L1101.5,383.5L1101.5,383.0ZM1191.5,387.5L1192.0,387.5L1192.5,385.5L1189.5,385.0L1189.5,389.0L1189.0,389.0L1189.0,391.5L1190.5,391.5L1190.5,391.0L1191.0,391.0L1191.0,389.0L1191.5,389.0ZM1134.0,695.5L1134.0,694.0L1131.5,694.5L1131.5,695.0L1131.0,695.0L1131.0,697.5L1132.5,697.5L1132.5,697.0L1133.0,697.0L1133.0,695.5ZM1167.5,718.5L1168.5,719.0L1168.5,720.5L1171.0,720.5L1171.0,719.5L1169.5,718.5L1169.5,717.5L1167.5,717.0Z\",\"districts\":[{\"name\":\"西敏市\",\"en\":\"WESTMINSTER\",\"d\":\"M509.5,523.8L499.8,523.7L467.7,516.8L455.0,517.9L454.7,512.6L451.5,513.4L453.9,518.1L449.9,518.6L449.2,514.0L420.8,485.2L424.2,481.8L421.0,470.4L426.3,466.3L420.2,456.4L425.1,451.4L420.1,446.3L423.8,441.5L419.7,419.7L410.6,409.8L407.7,383.9L395.5,388.3L386.8,400.0L372.9,412.4L371.4,408.1L362.1,415.6L359.3,409.6L332.9,416.0L302.4,419.6L298.2,387.5L326.6,384.5L327.2,375.0L335.1,355.0L339.1,347.4L343.8,348.2L348.1,342.5L346.7,322.7L336.3,312.6L338.6,305.3L330.1,306.7L319.9,294.8L326.4,289.0L297.7,257.6L299.1,256.6L283.5,254.0L275.6,244.9L300.2,240.4L349.2,241.6L438.2,216.6L460.4,213.1L474.0,209.1L479.6,209.0L480.1,203.5L483.1,204.6L482.3,209.3L485.8,210.1L515.2,250.1L518.6,247.9L521.0,251.7L524.0,249.7L530.0,260.9L532.3,259.6L538.0,264.3L537.4,267.9L546.1,264.6L548.4,269.9L551.9,289.4L555.3,294.1L561.8,300.0L564.2,299.8L585.7,280.2L589.7,284.4L591.0,282.4L602.7,285.3L626.5,273.1L630.9,282.7L642.2,278.6L644.7,290.7L640.3,291.9L641.5,295.9L637.5,299.6L642.2,307.0L642.5,314.8L615.5,320.7L602.3,329.0L594.4,339.6L588.0,353.1L584.7,367.9L573.0,469.0L558.0,496.7L537.5,516.4Z\",\"lx\":494,\"ly\":360,\"info\":\"西敏市南边贴着泰晤士河，从沃克斯豪尔桥一直到滑铁卢桥；西边到海德公园和骑士桥；北边到牛津街和马里波恩路；东边与伦敦城隔着圣殿区和舰队街一带。区内有议会大厦、威斯敏斯特教堂、白厅、唐宁街、特拉法加广场、国家美术馆、白金汉宫、圣詹姆斯公园、苏豪、梅费尔和萨维尔街。主要的地铁站有威斯敏斯特、圣詹姆斯公园、查令十字、皮卡迪利广场、牛津广场、维多利亚。连接南岸的桥有沃克斯豪尔桥、兰贝斯桥、威斯敏斯特桥、金禧步行桥和滑铁卢桥。\"},{\"name\":\"伦敦城\",\"en\":\"CITY OF LONDON\",\"d\":\"M740.7,326.2L723.8,320.0L724.1,316.5L719.3,319.4L700.6,314.8L642.5,314.8L642.2,307.0L637.5,299.6L641.5,295.9L640.3,291.9L644.7,290.7L642.2,278.6L631.0,255.1L660.9,259.1L698.7,240.1L711.7,235.4L713.1,228.4L710.3,218.0L716.2,214.5L717.9,218.4L724.5,216.2L728.4,229.2L737.5,229.3L738.2,232.8L751.6,235.4L750.1,241.4L769.0,250.7L773.8,238.3L784.4,242.3L791.1,235.2L794.8,225.3L807.4,229.0L802.9,250.1L809.5,249.4L809.1,253.4L815.6,268.3L830.0,285.5L834.7,307.0L835.9,319.6L822.4,323.6L818.9,317.0L810.7,320.8L805.9,325.8L804.6,329.0L806.5,330.8L802.7,339.0L798.4,337.0L772.7,332.7L764.6,329.6L756.8,329.8ZM676.6,332.6L679.2,333.2L676.6,334.3Z\",\"lx\":780,\"ly\":291,\"info\":\"伦敦城就是金融城，一平方英里，西起圣殿区，东到塔丘，北到巴比肯和利物浦街，南到泰晤士河。区内有英格兰银行、皇家交易所、圣保罗大教堂、巴比肯艺术中心、劳合社大楼、对冲基金和律师事务所的玻璃塔楼。地铁站有银行站、圣保罗站、利物浦街站、穆尔盖特站、巴比肯站、纪念碑站。南岸的桥有黑衣修士桥、千禧桥、南华克桥和伦敦桥。\"},{\"name\":\"卡姆登\",\"en\":\"CAMDEN\",\"d\":\"M398.0,102.1L375.5,114.3L352.8,91.7L345.6,98.3L340.3,93.2L332.6,99.3L329.4,94.4L330.4,84.6L321.2,83.5L324.4,51.1L321.4,43.9L308.4,34.5L288.2,0.0L548.3,0.0L549.4,3.1L564.6,19.9L574.7,71.2L588.0,104.1L587.2,154.7L600.8,153.2L620.4,162.1L622.7,178.8L635.4,189.6L628.9,197.1L631.9,204.4L638.2,211.3L655.2,216.9L658.8,224.4L665.0,223.6L673.5,252.8L660.9,259.1L631.0,255.1L642.2,278.6L630.9,282.7L626.5,273.1L602.7,285.3L591.0,282.4L589.7,284.4L585.7,280.2L564.2,299.8L561.8,300.0L555.3,294.1L551.9,289.4L548.4,269.9L546.1,264.6L537.4,267.9L538.0,264.3L532.3,259.6L530.0,260.9L524.0,249.7L521.0,251.7L518.6,247.9L515.2,250.1L485.8,210.1L482.3,209.3L483.1,204.6L480.1,203.5L479.6,209.0L474.0,209.1L471.2,198.8L464.4,200.7L436.5,100.4L403.2,109.8Z\",\"lx\":515,\"ly\":115,\"info\":\"阿尔比恩合同里的卡姆登区，北起汉普斯特德荒野和肯特镇，南到霍尔本和布卢姆斯伯里，西到摄政公园，东到国王十字和圣潘克拉斯。区内有卡姆登市场、摄政运河、卡姆登洛克、大英博物馆、大英图书馆、尤斯顿站、国王十字站、圣潘克拉斯站。霍尔本、拉塞尔广场和托特纳姆宫路一带是卡姆登的南端。\"},{\"name\":\"伊斯灵顿与哈克尼\",\"en\":\"ISLINGTON & HACKNEY\",\"d\":\"M750.1,241.4L751.6,235.4L738.2,232.8L737.5,229.3L728.4,229.2L724.5,216.2L717.9,218.4L716.2,214.5L710.3,218.0L713.1,228.4L711.7,235.4L698.7,240.1L673.5,252.8L665.0,223.6L658.8,224.4L655.2,216.9L638.2,211.3L631.9,204.4L628.9,197.1L635.4,189.6L622.7,178.8L620.4,162.1L600.8,153.2L587.2,154.7L588.0,104.1L574.7,71.2L564.6,19.9L549.4,3.1L548.3,0.0L1106.7,0.0L1112.7,19.3L1117.3,53.6L1100.7,51.6L1072.1,53.6L1055.0,62.1L1052.2,55.5L1034.0,42.7L1011.3,65.9L1014.3,69.0L992.5,101.0L975.2,114.3L964.2,117.0L951.5,109.8L945.4,108.8L938.1,113.1L935.7,121.1L926.6,119.3L906.2,127.8L899.6,127.1L887.8,116.3L885.7,121.2L889.0,134.6L875.0,137.4L874.2,135.4L868.7,151.0L835.9,155.5L827.1,162.0L821.4,174.0L813.6,182.4L818.5,183.7L816.8,190.1L817.7,206.4L820.4,206.3L821.3,211.6L819.4,222.1L817.7,224.7L808.7,225.9L807.4,229.0L794.8,225.3L791.1,235.2L784.4,242.3L773.8,238.3L769.0,250.7Z\",\"lx\":733,\"ly\":108,\"info\":\"阿尔比恩合同把伊斯灵顿和哈克尼合成一个区，西起国王十字东侧和巴特尔布里奇港湾，东到利河和维多利亚公园，北到斯托克纽因顿，南到肖迪奇和老街。区内有天使站、海布里、达尔斯顿、肖迪奇、哈克尼中央、伦敦田野、维多利亚公园、摄政运河的东段和城市路水库。\"},{\"name\":\"塔村区\",\"en\":\"TOWER HAMLETS\",\"d\":\"M953.0,338.8L947.9,340.8L919.2,370.7L901.8,379.1L895.8,379.3L891.9,376.3L887.1,376.9L874.1,371.9L873.3,373.8L873.9,371.8L859.6,365.8L859.7,362.6L856.7,365.4L847.1,358.8L844.1,360.3L843.6,355.4L831.2,352.1L826.2,347.9L802.7,339.0L806.5,330.8L804.6,329.0L805.9,325.8L810.7,320.8L818.9,317.0L822.4,323.6L835.9,319.6L834.7,307.0L830.0,285.5L815.6,268.3L809.1,253.4L809.5,249.4L802.9,250.1L807.4,229.0L808.7,225.9L817.7,224.7L819.4,222.1L821.3,211.6L820.4,206.3L817.7,206.4L816.8,190.1L818.5,183.7L813.6,182.4L821.4,174.0L827.1,162.0L835.9,155.5L868.7,151.0L874.2,135.4L875.0,137.4L889.0,134.6L885.7,121.2L887.8,116.3L899.6,127.1L906.2,127.8L926.6,119.3L935.7,121.1L938.1,113.1L945.4,108.8L951.5,109.8L964.2,117.0L975.2,114.3L992.5,101.0L1014.3,69.0L1011.3,65.9L1034.0,42.7L1052.2,55.5L1055.0,62.1L1072.1,53.6L1100.7,51.6L1117.3,53.6L1119.5,60.5L1117.0,69.2L1111.5,72.7L1110.7,79.0L1105.6,85.7L1102.8,94.4L1093.7,104.5L1095.2,110.3L1101.7,115.9L1105.3,127.5L1109.6,133.1L1109.9,142.9L1114.3,150.2L1131.6,162.0L1146.6,166.6L1148.7,173.0L1156.8,180.4L1162.2,190.7L1159.5,210.3L1160.7,216.8L1156.8,226.5L1153.2,226.5L1154.2,242.0L1166.4,254.8L1170.1,269.9L1174.3,271.4L1178.1,270.0L1182.7,260.3L1187.0,258.9L1200.0,267.9L1200.0,339.5L1191.3,341.8L1182.8,348.6L1173.0,361.4L1171.1,360.6L1172.1,363.3L1163.9,376.8L1161.8,389.7L1156.7,391.0L1161.3,395.4L1163.6,415.4L1165.2,415.1L1172.0,435.3L1168.9,437.1L1172.9,444.8L1176.2,445.6L1183.5,463.9L1184.7,475.1L1181.6,490.3L1177.8,496.0L1174.4,493.3L1176.9,497.1L1166.7,505.5L1142.5,513.1L1118.1,513.1L1095.1,503.6L1080.9,490.6L1071.5,476.5L1063.3,453.9L1063.8,451.5L1068.8,449.9L1061.9,448.0L1060.6,444.5L1062.9,387.3L1066.3,375.0L1057.7,356.3L1056.9,361.7L1055.3,358.5L1057.1,359.4L1057.7,355.9L1049.5,342.2L1047.9,343.6L1042.4,338.8L1050.7,330.3L1042.0,335.9L1037.0,335.6L1034.2,332.1L1022.1,328.9L1020.4,326.5L1013.3,326.6L1015.4,321.7L1011.0,325.5L989.5,323.1L969.7,326.7L954.4,337.5L951.6,336.9Z\",\"lx\":1024,\"ly\":212,\"info\":\"塔村区在伦敦城东边，西起塔丘和明诺里斯街，东到利河，北到贝斯纳尔格林和鲍区，南到泰晤士河。区内有伦敦塔、塔桥北头、圣凯瑟琳码头、白教堂、红砖巷、斯皮塔佛德、沃平、莱姆豪斯、道克兰区和金丝雀码头。地铁站有塔丘、阿尔德盖特东、白教堂、迈尔安德、金丝雀码头，轻轨在道克兰区高架上穿过。\"},{\"name\":\"南华克\",\"en\":\"SOUTHWARK\",\"d\":\"M738.8,714.5L746.7,696.3L749.7,676.2L736.2,643.7L734.9,626.4L731.9,628.8L729.3,637.3L720.1,643.8L705.9,627.7L696.7,607.0L700.1,587.6L659.0,560.1L679.8,555.2L669.9,540.8L671.9,538.8L664.1,533.1L668.2,523.1L657.7,515.5L683.6,472.1L675.7,453.8L645.3,438.2L642.7,430.3L648.7,427.8L658.7,398.3L670.4,385.5L669.6,381.5L666.2,384.1L663.0,377.4L668.0,374.8L667.6,361.1L663.3,345.0L659.2,346.2L656.4,339.4L655.7,334.1L676.6,332.6L676.6,334.3L679.2,333.2L719.4,334.5L739.6,343.7L759.6,346.3L769.4,349.2L776.6,348.6L794.3,354.1L819.4,366.4L836.4,372.9L845.6,381.2L832.6,397.9L846.1,384.1L863.2,391.9L864.0,390.2L881.1,396.8L913.7,395.0L946.4,378.5L956.1,369.5L954.2,366.8L957.2,365.5L961.5,368.4L960.0,363.5L965.1,358.8L969.7,360.5L967.3,356.4L971.4,352.6L973.4,354.2L978.2,346.0L993.5,341.6L1013.7,343.7L1013.4,350.2L1016.0,344.5L1029.0,351.2L1034.7,360.9L1034.9,366.8L1038.4,366.9L1038.3,400.9L1036.4,401.1L1037.6,415.6L1035.3,426.4L1037.3,433.9L1030.2,436.5L1030.8,438.2L1037.3,436.6L1036.7,446.8L1033.8,448.9L1036.8,449.0L1038.0,457.3L1013.7,464.3L1003.8,458.3L997.5,459.7L999.8,464.6L994.9,467.4L998.6,473.7L987.6,480.1L988.7,481.4L967.4,479.3L967.3,476.8L943.3,486.1L940.3,489.2L949.7,495.5L947.6,498.8L938.3,499.8L937.0,501.8L930.2,498.7L935.7,508.8L935.4,514.2L932.3,516.8L934.7,522.0L936.1,540.5L934.5,555.0L928.8,573.7L936.6,578.4L936.3,618.9L941.7,645.0L938.7,648.9L945.7,662.1L943.5,663.8L947.3,668.5L945.9,669.6L959.1,675.6L957.4,677.8L962.6,681.8L970.1,691.1L974.0,706.5L974.0,723.0L732.5,723.0Z\",\"lx\":807,\"ly\":522,\"info\":\"南华克在泰晤士河南岸，西边与兰贝斯隔着黑衣修士路一带，东到萨里码头和罗瑟希德，南到佩卡姆、坎伯威尔和杜尔维奇。区内有伦敦桥站、碎片大厦、博罗市场、南华克大教堂、泰特现代美术馆、莎士比亚环球剧场、象堡、伯蒙德赛、佩卡姆。连接北岸的桥有黑衣修士桥、千禧桥、南华克桥、伦敦桥和塔桥。\"},{\"name\":\"兰贝斯\",\"en\":\"LAMBETH\",\"d\":\"M451.5,712.6L445.3,692.5L443.9,675.9L447.2,675.2L447.3,661.7L484.4,638.6L486.5,642.1L497.9,630.4L501.1,632.0L503.5,630.4L502.6,628.3L508.4,626.9L515.5,617.9L521.0,620.9L526.7,615.9L527.8,610.9L524.0,608.2L530.6,597.0L550.3,553.0L562.6,546.3L564.7,533.7L568.5,526.5L559.2,524.4L557.5,521.9L565.0,515.7L575.6,499.3L579.0,499.4L589.4,466.9L593.2,447.0L603.1,371.2L608.9,355.0L615.8,346.0L624.4,340.3L645.0,333.6L646.6,335.6L655.7,334.1L656.4,339.4L659.2,346.2L663.3,345.0L667.6,361.1L668.0,374.8L663.0,377.4L666.2,384.1L669.6,381.5L670.4,385.5L658.7,398.3L648.7,427.8L642.7,430.3L645.3,438.2L675.7,453.8L683.6,472.1L657.7,515.5L668.2,523.1L664.1,533.1L671.9,538.8L669.9,540.8L679.8,555.2L659.0,560.1L700.1,587.6L696.7,607.0L705.9,627.7L720.1,643.8L729.3,637.3L731.9,628.8L734.9,626.4L736.2,643.7L749.7,676.2L746.7,696.3L738.8,714.5L732.5,723.0L452.6,723.0Z\",\"lx\":612,\"ly\":635,\"info\":\"兰贝斯在南华克西边，北起滑铁卢和南岸，南到布里克斯顿和斯特雷特姆，西到沃克斯豪尔和肯宁顿。区内有滑铁卢站、伦敦眼、皇家节日音乐厅、国家剧院、圣托马斯医院、兰贝斯宫、沃克斯豪尔十字的军情六处大楼、肯宁顿椭圆球场、布里克斯顿市场。连接北岸的桥有滑铁卢桥、金禧步行桥、威斯敏斯特桥、兰贝斯桥和沃克斯豪尔桥。\"},{\"name\":\"九榆树\",\"en\":\"NINE ELMS\",\"d\":\"M527.8,610.9L526.7,615.9L521.0,620.9L515.5,617.9L508.4,626.9L502.6,628.3L503.5,630.4L501.1,632.0L497.9,630.4L486.5,642.1L484.4,638.6L447.3,661.7L446.7,672.5L435.8,673.6L374.1,690.6L370.9,684.9L370.5,677.2L379.3,668.9L381.9,655.4L377.1,644.1L366.0,636.8L377.8,639.3L367.0,604.1L344.3,600.2L333.9,603.4L332.7,597.9L342.1,593.1L350.5,576.4L341.8,560.3L368.8,551.7L455.3,533.5L468.7,533.8L499.8,540.5L512.9,540.5L515.4,542.9L516.4,540.0L539.7,532.4L557.5,521.9L559.2,524.4L568.5,526.5L564.7,533.7L562.6,546.3L550.3,553.0L530.6,597.0L524.0,608.2Z\",\"lx\":430,\"ly\":601,\"info\":\"九榆树在兰贝斯西南边，沿着泰晤士河南岸，从沃克斯豪尔一直延伸到巴特西，阿尔比恩的划分把巴特西公园和巴特西发电站也算了进来。区内有巴特西发电站、美国大使馆、新考文特花园市场、九榆树站、巴特西发电站站、巴特西公园、旺兹沃思路附近的老铁路调车场。连接北岸的桥有沃克斯豪尔桥、切尔西桥和艾伯特桥。\"}],\"outside\":\"M33.5,691.1L31.9,674.1L35.6,669.7L32.6,658.8L35.2,629.2L36.3,622.5L44.0,620.0L65.2,631.4L81.9,636.7L82.8,630.8L85.6,628.9L109.8,657.2L136.2,678.5L163.7,691.7L181.6,697.3L204.5,701.2L222.5,699.8L224.7,702.4L224.3,722.8L225.0,723.0L0.0,723.0L0.0,683.7ZM226.2,721.5L225.7,708.8L228.2,711.9L230.6,711.0L225.4,702.0L226.0,699.6L248.2,695.6L264.4,689.0L282.0,679.1L295.2,662.1L304.3,642.6L307.6,641.3L307.1,637.4L310.5,637.7L307.4,636.5L315.7,603.5L321.7,593.1L320.1,591.0L323.7,580.5L330.2,569.8L341.5,560.6L350.5,576.4L342.1,593.1L332.7,597.9L333.9,603.4L344.3,600.2L367.0,604.1L377.8,639.3L366.0,636.8L377.1,644.1L381.9,655.4L379.3,668.9L370.5,677.2L370.9,684.9L374.1,690.6L435.8,673.6L446.7,672.5L447.2,675.2L443.9,675.9L445.3,692.5L451.5,712.6L452.6,723.0L229.7,723.0ZM1038.1,457.6L1053.1,490.7L1052.8,493.8L1054.5,493.2L1062.2,504.4L1075.9,518.0L1086.5,525.8L1105.9,534.5L1109.3,546.7L1118.0,550.7L1114.5,559.3L1104.2,565.2L1102.9,578.4L1100.8,578.1L1103.6,581.5L1103.1,585.0L1099.7,585.5L1094.4,592.4L1086.0,595.1L1095.4,593.5L1095.2,597.1L1087.4,597.8L1088.7,598.9L1086.6,599.6L1094.2,600.5L1097.2,597.3L1097.6,589.9L1105.0,586.1L1104.6,576.8L1108.1,567.5L1115.8,561.6L1121.4,549.3L1125.1,548.4L1110.5,542.0L1110.5,536.8L1118.4,536.5L1118.3,538.6L1121.6,538.9L1123.7,537.3L1132.3,539.2L1144.3,538.2L1144.8,535.7L1150.3,533.5L1163.7,532.1L1177.2,525.4L1183.7,523.4L1194.1,511.7L1200.0,508.2L1200.0,723.0L974.0,723.0L974.0,706.5L970.1,691.1L962.6,681.8L957.4,677.8L959.1,675.6L945.9,669.6L947.3,668.5L943.5,663.8L945.7,662.1L938.7,648.9L941.7,645.0L936.3,618.9L936.6,578.4L928.8,573.7L934.5,555.0L936.1,540.5L934.7,522.0L932.3,516.8L935.4,514.2L935.7,508.8L930.2,498.7L937.0,501.8L938.3,499.8L947.6,498.8L949.7,495.5L940.3,489.2L943.3,486.1L967.3,476.8L967.4,479.3L988.7,481.4L987.6,480.1L998.6,473.7L994.9,467.4L999.8,464.6L997.5,459.7L1003.8,458.3L1013.7,464.3ZM1195.1,431.7L1189.1,403.1L1188.9,391.6L1190.6,391.6L1192.4,385.5L1189.7,384.8L1191.3,379.0L1196.3,371.3L1200.0,368.5L1200.0,439.7L1198.9,440.1ZM212.3,682.9L202.4,682.8L186.2,680.1L147.3,665.7L147.5,660.9L145.1,664.3L143.5,663.5L116.1,645.9L92.5,614.7L87.2,604.6L82.3,583.3L79.9,548.8L81.9,547.2L79.6,542.9L75.0,527.8L56.7,491.5L36.1,480.6L28.2,478.8L0.0,481.1L0.0,0.0L288.2,0.0L308.4,34.5L321.4,43.9L324.4,51.1L321.2,83.5L330.4,84.6L329.4,94.4L332.6,99.3L340.3,93.2L345.6,98.3L352.8,91.7L375.5,114.3L398.0,102.1L403.2,109.8L436.5,100.4L464.4,200.7L471.2,198.8L474.0,209.1L460.4,213.1L438.2,216.6L349.2,241.6L300.2,240.4L275.6,244.9L283.5,254.0L299.1,256.6L297.7,257.6L326.4,289.0L319.9,294.8L330.1,306.7L338.6,305.3L336.3,312.6L346.7,322.7L348.1,342.5L343.8,348.2L339.1,347.4L335.1,355.0L327.2,375.0L326.6,384.5L298.2,387.5L302.4,419.6L332.9,416.0L359.3,409.6L362.1,415.6L371.4,408.1L372.9,412.4L386.8,400.0L395.5,388.3L407.7,383.9L410.6,409.8L419.7,419.7L423.8,441.5L420.1,446.3L425.1,451.4L420.2,456.4L426.3,466.3L421.0,470.4L424.2,481.8L420.8,485.2L449.2,514.0L449.9,518.6L381.1,533.2L321.2,549.4L311.6,559.6L312.4,561.6L303.7,578.5L295.9,579.2L289.2,583.4L280.7,583.0L279.1,585.1L287.7,585.6L297.9,580.8L303.2,581.5L295.1,621.8L284.7,649.0L277.6,661.3L268.6,670.6L247.8,680.7L229.2,684.1L214.3,683.0L213.1,681.1ZM1156.4,0.0L1156.6,0.6L1200.0,0.0L1200.0,165.9L1196.1,175.7L1188.5,183.6L1181.0,185.2L1180.6,174.8L1178.5,177.8L1179.1,185.9L1175.3,189.3L1167.8,190.4L1165.2,184.2L1160.1,183.0L1165.3,192.4L1160.7,216.8L1159.5,210.3L1162.2,190.7L1156.8,180.4L1148.7,173.0L1146.6,166.6L1131.6,162.0L1114.3,150.2L1109.9,142.9L1109.6,133.1L1105.3,127.5L1101.7,115.9L1095.2,110.3L1093.7,104.5L1102.8,94.4L1105.6,85.7L1110.7,79.0L1111.5,72.7L1117.0,69.2L1119.5,60.5L1117.3,53.6L1112.7,19.3L1106.7,0.0ZM1187.6,255.6L1179.8,258.1L1174.4,265.9L1167.2,249.5L1157.2,240.8L1156.7,235.0L1163.9,218.5L1167.4,195.5L1189.6,184.6L1200.0,176.8L1200.0,262.8L1187.3,253.3Z\",\"landmarks\":[{\"name\":\"伊丽莎白二世女王会议中心\",\"label\":\"会议中心\",\"x\":551.5,\"y\":397,\"side\":\"r\",\"info\":\"西敏市的一座会议场馆，二〇二九年十一月五日晚上这里发生两次连续爆炸，六十二人遇难。你是被派进这里的，出来的时候成了名单上的袭击者。\"},{\"name\":\"白厅\",\"label\":\"白厅\",\"x\":569,\"y\":369.7,\"side\":\"u\",\"info\":\"伦敦市中心的一条街，两侧是各部委的大楼，英国人常拿它代称政府。你沉在水底时想到的第一件好事，就是那里没有白厅。\"},{\"name\":\"新苏格兰场\",\"label\":\"新苏格兰场\",\"x\":578.5,\"y\":381.7,\"side\":\"r\",\"info\":\"维多利亚堤岸上，紧挨着泰晤士河。地下三层是档案室，零日后成了福尔摩斯的办公室，几百个铁皮柜里堆满纸质案卷，阿尔比恩的人从来不下来。\"},{\"name\":\"泰晤士之家\",\"label\":\"泰晤士之家\",\"x\":570,\"y\":454,\"side\":\"r\",\"info\":\"军情五处总部，米尔班克一座石头大楼，正门对着河。员工进楼要把 Optik 存进门口的屏蔽柜。\"},{\"name\":\"SIRS 总部\",\"label\":\"SIRS\",\"x\":542.5,\"y\":438,\"side\":\"r\",\"info\":\"霍斯费里路的玻璃楼，十二层，地下有机房。一层是公开接待区，二层以上要授权。\"},{\"name\":\"唐人街\",\"label\":\"唐人街\",\"x\":545,\"y\":309.4,\"side\":\"r\",\"info\":\"杰拉德街一带，牌坊、红灯笼、烧腊店、茶楼和中药铺。熟客可以用旧英镑结账，几家老店之间有自己的账本。\"},{\"name\":\"布鲁姆服务器塔\",\"label\":\"服务器塔\",\"x\":725,\"y\":241.1,\"side\":\"r\",\"info\":\"巴比肯附近，ctOS 主数据中心，全城录像在这里存九十天。进楼要过三道安检，机房在地下。\"},{\"name\":\"英格兰银行\",\"label\":\"英格兰银行\",\"x\":757,\"y\":287.7,\"side\":\"l\",\"info\":\"思罗格莫顿街，ETO 清算的核心系统在这里，物理隔离。\"},{\"name\":\"霍尔本\",\"label\":\"霍尔本\",\"x\":600,\"y\":261.2,\"side\":\"r\",\"info\":\"卡姆登区南端的街区，挨着大英博物馆，酒吧很多。侧街上有一家绿底金字招牌的爱尔兰酒吧，收旧英镑，不认 Optik，秦起总坐在最里面的小间。\"},{\"name\":\"大英图书馆\",\"label\":\"大英图书馆\",\"x\":562,\"y\":160.8,\"side\":\"l\",\"info\":\"尤斯顿路的红砖大楼，进门要过安检和 Optik 登记，阅览室里不许录像。地下储藏室堆着几台退役的检索终端，据说有一台还连着很老的本地服务器。\"},{\"name\":\"国王十字\",\"label\":\"国王十字\",\"x\":581,\"y\":154.4,\"side\":\"r\",\"info\":\"伦敦北边的大火车站，布罗卡科技的玻璃总部就在旁边的科技园区。那一带的安保是布罗卡自己的人，跟阿尔比恩不是一套规矩。\"},{\"name\":\"贝克街221B\",\"label\":\"221B\",\"x\":407,\"y\":210.6,\"side\":\"r\",\"info\":\"西敏市马里波恩一带、贝克街站附近一栋乔治式排屋的楼上两层，福尔摩斯和华生合住在这里，房东哈德森太太住在一楼。你在楼上的卧室醒来，二楼的客厅被改成了案情分析工作室，一整面软木墙上钉满照片和红线。如今这里是你在全城最严密的眼皮底下的藏身处。\"},{\"name\":\"卡姆登市场\",\"label\":\"卡姆登市场\",\"x\":470,\"y\":68.3,\"side\":\"r\",\"info\":\"巷子多、摊位多、人多，是全城最好藏人的地方之一。运河边几间红砖仓库的地下室能通到水闸。\"},{\"name\":\"肖迪奇\",\"label\":\"肖迪奇\",\"x\":810,\"y\":205,\"side\":\"r\",\"info\":\"零日后被封的几家夜店，地下室宽敞，有独立的通风和后门，空着没人管。\"},{\"name\":\"砂岩宅邸\",\"label\":\"砂岩宅邸\",\"x\":695,\"y\":48.2,\"side\":\"r\",\"info\":\"伊斯灵顿北边一栋维多利亚时代的砂岩大宅，凯利家族的主楼，铁手守门。门厅挂满玛丽自己的金框画像，走廊的玻璃柜里摆着从死人身上取下来的芯片，底下贴着名字和成交价。\"},{\"name\":\"伦敦塔\",\"label\":\"伦敦塔\",\"x\":820.5,\"y\":336.8,\"side\":\"r\",\"info\":\"泰晤士河北岸的千年古堡，零日后成了阿尔比恩的总部。朝你开枪的那个人就坐在里面。\"},{\"name\":\"白教堂\",\"label\":\"白教堂\",\"x\":894,\"y\":245.2,\"side\":\"r\",\"info\":\"伦敦东区的街区，白教堂市场和移民社区都在这里，是凯利家族的核心地盘。你要是想花旧英镑办点不登记的事，迟早得去那里。\"},{\"name\":\"金丝雀码头\",\"label\":\"金丝雀码头\",\"x\":1102.5,\"y\":361.7,\"side\":\"r\",\"info\":\"伦敦东边的新金融区，一片玻璃塔楼，二〇一八年阿尔比恩拿到的第一份合同就是管这里的夜间巡逻。那是阿尔比恩起家的地方，你没有理由去，也最好别去。\"},{\"name\":\"伦敦桥南头检查站\",\"label\":\"伦敦桥检查站\",\"x\":761.5,\"y\":361.7,\"side\":\"r\",\"info\":\"四条步行通道、两条车道、一条货运专用道，周围是混凝土隔离墩和临时板房，板房里是人工复核室。\"},{\"name\":\"欧洲转运中心\",\"label\":\"转运中心\",\"x\":975,\"y\":442,\"side\":\"r\",\"info\":\"南华克东部的仓储码头区，高墙、铁丝网、塔楼和探照灯，阿尔比恩抓的人送到这里。部分后勤外包，有一家货运公司的车经常夜里出入。\"},{\"name\":\"滑铁卢\",\"label\":\"滑铁卢\",\"x\":634,\"y\":376.9,\"side\":\"u\",\"info\":\"泰晤士河南岸的大火车站，全英国最繁忙的车站之一，地下还留着二战时的防空洞。它底下是华生上班的停尸间，你从那里带回的假死亡报告编号零四四一，让你暂时留在机器的视线之外。\"},{\"name\":\"沃克斯豪尔十字\",\"label\":\"军情六处\",\"x\":580,\"y\":504.6,\"side\":\"r\",\"info\":\"河边一座米色和绿色玻璃的阶梯形大楼，军情六处总部，内网物理隔离。你在这里工作过很多年。\"},{\"name\":\"布里克斯顿\",\"label\":\"布里克斯顿\",\"x\":630,\"y\":702.9,\"side\":\"r\",\"info\":\"电气巷和拱廊里的市场，收旧英镑的摊位最多。\"},{\"name\":\"巴特西\",\"label\":\"巴特西\",\"x\":477,\"y\":547.2,\"side\":\"l\",\"info\":\"泰晤士河南岸的街区，有巴特西公园和那座四根烟囱的发电站。零日那晚公园里本来有一场烟火，你在会场里，一眼也没看到。\"},{\"name\":\"美国大使馆\",\"label\":\"美国大使馆\",\"x\":537.5,\"y\":542.3,\"side\":\"r\",\"info\":\"河边一座方方正正的玻璃立方体，周围有一圈水池和绿地。\"},{\"name\":\"克拉珀姆\",\"label\":\"克拉珀姆\",\"x\":508,\"y\":708.5,\"side\":\"r\",\"info\":\"伦敦南边的居住区，有一大片公地。二〇一五年圣诞华生家的暖气坏了，你们三个人裹着大衣在他的小公寓里喝热红酒。\"}],\"tasks\":[{\"id\":0,\"kind\":\"盯梢\",\"title\":\"国家美术馆的空展厅\",\"dist\":\"西敏市\",\"x\":558.5,\"y\":330.3,\"desc\":\"黛安娜和线人见面总约在同一间展厅，两人并排看同一幅画。今天那幅画前站了个生面孔，看清他是谁的人，别让他先认出你。\"},{\"id\":1,\"kind\":\"取证\",\"title\":\"会议中心的证物仓库\",\"dist\":\"西敏市\",\"x\":550,\"y\":405,\"desc\":\"会议中心楼下的停车场改成了证物仓库，夜班换岗中间有十分钟空档。零日现场的残骸都封在里面。\"},{\"id\":2,\"kind\":\"换钱\",\"title\":\"唐人街的烧腊店\",\"dist\":\"西敏市\",\"x\":541,\"y\":311.8,\"desc\":\"烧腊店老板愿意按好价钱收一批旧英镑，条件是你替他把一个包裹送到苏豪那家意大利咖啡馆。\"},{\"id\":3,\"kind\":\"盯梢\",\"title\":\"教堂北侧的长椅\",\"dist\":\"西敏市\",\"x\":561,\"y\":403.4,\"desc\":\"马利克又约人坐到威斯敏斯特教堂北侧那排长椅上。离远一点坐下，看清对面那个人的脸。\"},{\"id\":4,\"kind\":\"赴约\",\"title\":\"唐人街的重庆火锅店\",\"dist\":\"西敏市\",\"x\":548.5,\"y\":306.2,\"desc\":\"杰拉德街拐角新开了一家重庆火锅店，叫小龙坎。老板娘托人带话请你吃一顿，说她认得你走路的样子。\"},{\"id\":5,\"kind\":\"黑入\",\"title\":\"银行站的维修走廊\",\"dist\":\"伦敦城\",\"x\":755,\"y\":297.4,\"desc\":\"银行站地下换乘通道里有几条维修走廊，墙里埋着一台没接进 ctOS 的老交换机。得有人把线接上，天问才够得着。\"},{\"id\":6,\"kind\":\"接头\",\"title\":\"老柴郡奶酪的酒窖\",\"dist\":\"伦敦城\",\"x\":670,\"y\":286.9,\"desc\":\"舰队街那家老酒吧的地下酒窖里，一个老记者手上有零日当晚的现场照片，他想拿它换一样东西。\"},{\"id\":7,\"kind\":\"取件\",\"title\":\"大英图书馆的储藏室\",\"dist\":\"卡姆登\",\"x\":564,\"y\":166.4,\"desc\":\"地下储藏室那台退役检索终端还连着老服务器，有人在里面留了一份东西，收件人写的是一个已经死了的人。\"},{\"id\":8,\"kind\":\"藏身\",\"title\":\"拉塞尔广场的老旅馆\",\"dist\":\"卡姆登\",\"x\":572.5,\"y\":229.1,\"desc\":\"前台夜班的门房收旧英镑，不问名字。去订一间房，给自己备一个新的落脚点。\"},{\"id\":9,\"kind\":\"营救\",\"title\":\"卡姆登洛克的运河边\",\"dist\":\"卡姆登\",\"x\":474,\"y\":72.4,\"desc\":\"一个刷猪头涂鸦的孩子被阿尔比恩的人堵在运河边，巡逻车十分钟后到。\"},{\"id\":10,\"kind\":\"盯梢\",\"title\":\"巴特尔布里奇港湾的砖楼\",\"dist\":\"伊斯灵顿与哈克尼\",\"x\":600,\"y\":130.2,\"desc\":\"港湾边那栋五层砖楼的住户，每次回家前都要在街对面站一会儿。查清他在躲谁。\"},{\"id\":11,\"kind\":\"换钱\",\"title\":\"哈克尼的土耳其理发店\",\"dist\":\"伊斯灵顿与哈克尼\",\"x\":920,\"y\":28.1,\"desc\":\"理发店的后屋可以换钱。老板最近缺一样不登记的东西，换钱之前先听听他要什么。\"},{\"id\":12,\"kind\":\"搜查\",\"title\":\"肖迪奇的废弃夜店\",\"dist\":\"伊斯灵顿与哈克尼\",\"x\":805,\"y\":191.3,\"desc\":\"一家被封的夜店里夜里有人进出，地下室的发电机一直在转，可这里早就断电了。\"},{\"id\":13,\"kind\":\"盯梢\",\"title\":\"安吉尔的留学生合租屋\",\"dist\":\"伊斯灵顿与哈克尼\",\"x\":670,\"y\":143.1,\"desc\":\"一间合租屋里十几台旧电脑日夜开着，电费单比房租还贵，有人说它们在替一台中国的超算干活。看清是谁每晚来收数据。\"},{\"id\":14,\"kind\":\"营救\",\"title\":\"塔丘拘留营的铁丝网外\",\"dist\":\"塔村区\",\"x\":814,\"y\":321.5,\"desc\":\"铁丝网外排队的家属里，有个女人求你打听她丈夫在不在里面。他是被人举报进去的。\"},{\"id\":15,\"kind\":\"送货\",\"title\":\"白教堂的老茶馆\",\"dist\":\"塔村区\",\"x\":877.5,\"y\":263.6,\"desc\":\"玛丽·凯利收完账就坐在靠窗那张桌子。凯利家族要找个生面孔，把一个信封送到莱姆豪斯。\"},{\"id\":16,\"kind\":\"破坏\",\"title\":\"莱姆豪斯的废弃水泵站\",\"dist\":\"塔村区\",\"x\":1007.5,\"y\":315.1,\"desc\":\"水泵站底下的老排水道能通到河边，阿尔比恩刚在入口加了一把新锁，锁旁边还多了一个摄像头。\"},{\"id\":17,\"kind\":\"盯梢\",\"title\":\"圣凯瑟琳码头的老酒吧\",\"dist\":\"塔村区\",\"x\":842.5,\"y\":352,\"desc\":\"阿尔比恩的军官下了班常来这家酒吧。有一个人喝多了话就多，今晚他在。\"},{\"id\":18,\"kind\":\"取证\",\"title\":\"转运中心的夜班货车\",\"dist\":\"南华克\",\"x\":991,\"y\":424.3,\"desc\":\"有一家货运公司的车夜里出入欧洲转运中心。记下车牌、出车时间和司机的脸。\"},{\"id\":19,\"kind\":\"送人\",\"title\":\"罗瑟希德的老隧道竖井\",\"dist\":\"南华克\",\"x\":944,\"y\":395.4,\"desc\":\"老竖井楼下能通到地铁隧道。一个没有 Optik 的人想从这里走，他说他见过零日那晚的事。\"},{\"id\":20,\"kind\":\"藏身\",\"title\":\"象堡的待拆廉租楼\",\"dist\":\"南华克\",\"x\":702.5,\"y\":446,\"desc\":\"楼里住户搬走了一半，空房间没锁。剩下的那一半里，有人在卖消息。\"},{\"id\":21,\"kind\":\"接头\",\"title\":\"南华克大教堂的最后一排\",\"dist\":\"南华克\",\"x\":750,\"y\":351.2,\"desc\":\"教堂每晚开到十点。有人约你在最后一排长椅见面，没留名字，只留了一句莫斯科的暗语。\"},{\"id\":22,\"kind\":\"探路\",\"title\":\"利克街隧道的涂鸦墙\",\"dist\":\"兰贝斯\",\"x\":626,\"y\":387.4,\"desc\":\"滑铁卢东侧那条涂鸦隧道夜里没人。墙上新画了一个猪头，猪头底下的数字像是给你的。\"},{\"id\":23,\"kind\":\"盯梢\",\"title\":\"圣托马斯医院的病房\",\"dist\":\"兰贝斯\",\"x\":610,\"y\":415.5,\"desc\":\"零日伤员大多送到这里。病房名单上有个名字，本该和你一样出现在遇难者名单上。\"},{\"id\":24,\"kind\":\"黑入\",\"title\":\"肯宁顿的旧电话交换局\",\"dist\":\"兰贝斯\",\"x\":660,\"y\":538.3,\"desc\":\"废弃交换局的地下室很深，老线路还没拆干净。把天问接上去，能听见半个南岸的旧电话。\"},{\"id\":25,\"kind\":\"接头\",\"title\":\"调车场旁的电子集市\",\"dist\":\"九榆树\",\"x\":507.5,\"y\":588.1,\"desc\":\"电子集市周六下午开。Wrench 的人在这里收旧零件，他们还不知道你是谁。\"},{\"id\":26,\"kind\":\"出城\",\"title\":\"新考文特花园的凌晨卡车\",\"dist\":\"九榆树\",\"x\":554,\"y\":568.8,\"desc\":\"凌晨开市的卡车拿着特别通行许可在宵禁里进出。有个司机愿意多载一个人，价钱要当面谈。\"},{\"id\":27,\"kind\":\"盯梢\",\"title\":\"发电站园区的货运区\",\"dist\":\"九榆树\",\"x\":484,\"y\":540.7,\"desc\":\"园区东侧货运区是布罗卡实验室的入口，两道门禁加一道生物识别。先看清是谁在换岗。\"}],\"credit\":\"水岸线 © OpenStreetMap contributors（ODbL）· 区界 ONS 2023（OGL v3）· 地标为大概位置\"}};\n  // MOCK 只在预览页里有值，酒馆里为空，界面改为读取当前楼层的 stat_data。\n  var MOCK = /*@MOCK*/null;\n  // 下面这几组是枚举的显示顺序，和变量更新规则里的取值一一对应。\n  var BOND = ['一块屏幕', '斗嘴的搭档', '信得过的同伴', '离不开的人', '生死与共'];\n  // 能力阶段由累计算力点算，和写卡成稿里那条线一致\n  var CAP = ['手脚软', '能进门', '能翻墙', '能上屋顶', '能碰零日'];\n  var CAP_LINE = [4, 19, 44, 74, Infinity];\n  function capOf(points) { for (var i = 0; i \u003c CAP_LINE.length; i++) { if (points \u003c= CAP_LINE[i]) return CAP[i]; } return CAP[CAP.length - 1]; }\n  var HURT_D = { '完好': 0, '轻伤': 1, '重伤': 2, '残废': 3 };\n  var HURT_T = { '完好': 0, '轻损': 1, '重损': 2, '失灵': 3 };\n  var SKILL_LV = { '生疏': 1, '熟练': 2, '精通': 3, '顶尖': 4, '母语': 4 };\n  var BRANCH_EN = { '溯洄': 'UPSTREAM', '举鼎': 'LIFT', '关雎': 'OSPREY' };\n  // 零日线的前置：这五条全部走通才解锁零日；DedSec 线走通不升局势\n  var BEFORE_ZERO = ['凯利家族', '阿尔比恩', '布罗卡科技', 'SIRS', 'DedSec'];\n  var TABS = [['档案', 'PROFILE'], ['天问', 'TIANWEN'], ['行动', 'OPS'], ['卷宗', 'FILE'], ['据点', 'BASES'], ['地图', 'MAP']];\n  var FONTS = [\n    'https://testingcf.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/400.css',\n    'https://testingcf.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/700.css',\n    'https://testingcf.jsdelivr.net/npm/@fontsource/barlow-condensed@5/600.css',\n    'https://testingcf.jsdelivr.net/npm/@fontsource/barlow-condensed@5/800.css'\n  ];\n  // ══════════════════════════\n\n  var app = document.getElementById('app');\n  var CSS = document.getElementById('ctos-css').textContent;\n  var S = {};\n  var tab = '档案';\n  var inlineOpen = false;\n  var jobsOpen = true;\n  var full = null;\n  var lastJson = '';\n  var baseSel = 0;        // 据点页当前选中的据点\n  var mapFocus = null;    // 从据点页点\"在地图上看\"时要对准的据点\n  var inFull = false;     // 正在画全屏层：地图只在全屏里能缩放\n  var mapView = null, mapHome = null;   // 全屏地图当前视野和初始视野（SVG 坐标），关全屏时清掉\n  var ptrs = {}, dragged = false;       // 全屏地图上按下的指针；拖动过就吞掉随后那次点击\n\n  function esc(s) { return String(s == null ? '' : s).replace(/[&\u003c>\"]/g, function (c) { return { '&': '&amp;', '\u003c': '&lt;', '>': '&gt;', '\"': '&quot;' }[c]; }); }\n  function obj(o) { return o && typeof o === 'object' ? o : {}; }\n  function entries(o) { return Object.keys(obj(o)).filter(function (k) { return k.charAt(0) !== '$'; }).map(function (k) { return [k, o[k]]; }); }\n  function empty(t) { return '\u003cdiv class=\"empty\">' + esc(t) + '\u003c/div>'; }\n  function lab(a, b) { return '\u003cdiv class=\"lab\">\u003cspan>' + a + '\u003c/span>' + (b ? '\u003ci>' + esc(b) + '\u003c/i>' : '') + '\u003c/div>'; }\n  function lines() { return obj(obj(STATIC).lines); }\n\n  // 每次渲染重建一张详情表，点到带 data-info 的元素就把对应条目显示在面板底部\n  var INFO = [];\n  // act：详情面板底下的按钮，{ label, attrs, off }；attrs 是拼好的 data-* 属性\n  function info(title, body, act) { INFO.push([title, body, act]); return ' data-info=\"' + (INFO.length - 1) + '\"'; }\n  function kv(o, keys) { return keys.filter(function (k) { return o[k] != null && o[k] !== ''; }).map(function (k) { return k + '：' + o[k]; }).join('\\n'); }\n\n  function readVars() {\n    try {\n      if (typeof getVariables !== 'function') return null;\n      var v = null;\n      if (typeof getCurrentMessageId === 'function') v = getVariables({ type: 'message', message_id: getCurrentMessageId() });\n      if (!v || !v.stat_data) v = getVariables({ type: 'message', message_id: 'latest' });\n      return v && v.stat_data ? v.stat_data : null;\n    } catch (e) { console.error('[ctOS] 读取 stat_data 失败', e); return null; }\n  }\n\n  // ─── 一行读数 ───\n  function strip(inFull) {\n    var T = obj(S['天之叩问']), W = obj(S['世界局势']), M = obj(S['主线']);\n    var lvl = +W['等级'] || 1;\n    var names = (obj(STATIC).threat || []).map(function (t) { return t['名称']; });\n    var pips = [1, 2, 3, 4, 5].map(function (i) { return '\u003cspan class=\"pip ' + (i \u003c lvl ? 'on' : i === lvl ? 'now' : '') + '\">\u003c/span>'; }).join('');\n    var cur = M['当前'] && M['当前'] !== '无' ? M['当前'] : null;\n    var prog = +M['进度'] || 0;\n    var opPips = [1, 2, 3, 4, 5].map(function (i) { return '\u003cspan class=\"pip ' + (i \u003c prog ? 'on' : i === prog ? 'now' : '') + '\">\u003c/span>'; }).join('');\n    var b = obj(T['基本']);\n    var affRaw = b['好感度'];\n    var affText = (affRaw === undefined || affRaw === null || affRaw === '') ? '—' : String(affRaw);\n    var cover = obj(obj(obj(S['道尔顿'])['掩护'])['当前身份']);\n    var acts = inFull\n      ? '\u003cbutton class=\"act main\" data-act=\"close\">CLOSE\u003c/button>'\n      : '\u003cbutton class=\"act inline\" data-act=\"toggle\">' + (inlineOpen ? 'FOLD' : 'OPEN') + '\u003c/button>\u003cbutton class=\"act main\" data-act=\"full\">FULL\u003c/button>';\n    return '\u003cdiv class=\"strip\">' +\n      '\u003cdiv class=\"brand\">\u003cb>ctOS\u003c/b>\u003cspan>PROFILER\u003cbr>// LDN\u003c/span>\u003c/div>' +\n      '\u003cdiv class=\"reads\">' +\n        '\u003cdiv class=\"read\">\u003cspan class=\"k\">THREAT\u003c/span>\u003cspan class=\"v\">' + esc(W['名称'] || names[lvl - 1] || '') + '\u003c/span>\u003cspan class=\"pips\">' + pips + '\u003c/span>\u003c/div>' +\n        '\u003cdiv class=\"read\">\u003cspan class=\"k\">OPERATION\u003c/span>\u003cspan class=\"v\">' + (cur ? esc(cur) + ' \u003cem>' + prog + '/5\u003c/em>' : '无进行中的线') + '\u003c/span>' + (cur ? '\u003cspan class=\"pips\">' + opPips + '\u003c/span>' : '') + '\u003c/div>' +\n        '\u003cdiv class=\"read\">\u003cspan class=\"k\">天问 // ' + esc(b['联网状态'] || '离线') + '\u003c/span>\u003cspan class=\"v\">' + esc(b['心情'] || '') + ' · 好感 \u003cem>' + affText + '\u003c/em> · 算力 \u003cem>' + (+b['算力点'] || 0) + '\u003c/em>\u003c/span>\u003c/div>' +\n        '\u003cdiv class=\"read\">\u003cspan class=\"k\">COVER\u003c/span>\u003cspan class=\"v\">' + esc(cover['名义'] || '无') + '\u003c/span>\u003c/div>' +\n      '\u003c/div>' +\n      '\u003cdiv class=\"acts\">' + acts + '\u003c/div>' +\n    '\u003c/div>';\n  }\n\n  function figure(parts, map, locked) {\n    var slots = [['头部', 'head'], ['左臂', 'larm'], ['躯干', 'torso'], ['右臂', 'rarm'], ['左腿', 'lleg'], ['右腿', 'rleg']];\n    return '\u003cdiv class=\"fig\">' + slots.map(function (s) {\n      var p = obj(parts[s[0]]);\n      var lv = map[p['状态']];\n      var cls = locked || p['状态'] === '未解锁' ? 'lock' : lv ? 's' + lv : '';\n      return '\u003cdiv class=\"part p-' + s[1] + ' ' + cls + '\"' + info(s[0] + ' · ' + (p['状态'] || ''), kv(p, ['影响', '说明'])) + '>' + esc(s[0].replace('部', '')) + '\u003c/div>';\n    }).join('') + '\u003c/div>';\n  }\n\n  // ─── 档案 ───\n  function viewDalton() {\n    var D = obj(S['道尔顿']);\n    var body = obj(D['身体组件']);\n    var whole = obj(body['整体']);\n    var cover = obj(obj(D['掩护'])['当前身份']);\n    var cash = obj(obj(D['财物'])['现金']);\n    var safe = entries(D['庇护所']).filter(function (e) { return obj(e[1])['状态'] !== '已暴露'; });\n    var wounds = [];\n    entries(body).forEach(function (e) { entries(obj(e[1])['伤势']).forEach(function (w) { wounds.push([e[0], w[0], obj(w[1])]); }); });\n    var INV_MAX = 20;\n    var itemRow = function (it) {\n      var line = typeof it[1] === 'string' ? it[1] : (obj(it[1])['说明'] || '');\n      return '\u003cdiv class=\"row\"' + info(it[0], line) + '>\u003cspan class=\"n\">' + esc(it[0]) + '\u003c/span>\u003cspan class=\"d\">' + esc(line) + '\u003c/span>\u003c/div>';\n    };\n    var inv = entries(D['物品栏']);\n    var gearRows = inv.map(itemRow);\n    var stash = entries(D['储物箱']);\n    var stashRows = stash.map(itemRow).join('');\n    var oldGbp = cash['旧英镑'] === undefined ? null : Number(cash['旧英镑']);\n    var eto = cash['ETO'] === undefined ? null : Number(cash['ETO']);\n    var cashText = (oldGbp === null ? '' : '旧英镑 ' + oldGbp) + (eto === null ? '' : (oldGbp === null ? '' : ' · ') + 'ETO ' + eto);\n    var skills = entries(D['技能']).filter(function (s) { return s[0] !== '语言'; }).map(function (s) {\n      var o = obj(s[1]); var n = SKILL_LV[o['熟练程度']] || 0;\n      return '\u003cdiv class=\"row\"' + info(s[0] + ' · ' + (o['熟练程度'] || ''), kv(o, ['来源', '擅长', '限制'])) + '>\u003cspan class=\"n\">' + esc(s[0]) + '\u003c/span>\u003cspan class=\"d\">' + esc(o['擅长'] || '') + '\u003c/span>\u003cspan class=\"lv\">' + [1, 2, 3, 4].map(function (i) { return '\u003cb class=\"' + (i \u003c= n ? 'on' : '') + '\">\u003c/b>'; }).join('') + '\u003c/span>\u003c/div>';\n    }).join('');\n    var langs = entries(obj(D['技能'])['语言']).map(function (l) { return esc(l[0]) + ' \u003cspan style=\"color:var(--dim)\">' + esc(obj(l[1])['熟练程度']) + '\u003c/span>'; }).join('　');\n\n    return '\u003cdiv class=\"profile\">' +\n        '\u003cdiv class=\"name\">Dalton Wolfe\u003csmall>道尔顿·沃尔夫 · 41 · 前军情六处\u003c/small>\u003c/div>' +\n        '\u003cdiv class=\"stamp\">DECEASED\u003csmall>OFFICIAL RECORD\u003c/small>\u003c/div>' +\n      '\u003c/div>' +\n      '\u003cdiv class=\"facts\">' +\n        '\u003cdiv class=\"fact\"' + info('当前身份 · ' + (cover['名义'] || '无'), kv(cover, ['来历', '暴露程度', '说明'])) + '>\u003cdiv class=\"k\">COVER\u003c/div>\u003cdiv class=\"v\">' + esc(cover['名义'] || '无') + '\u003c/div>\u003c/div>' +\n        '\u003cdiv class=\"fact\">\u003cdiv class=\"k\">EXPOSURE\u003c/div>\u003cdiv class=\"v ' + (cover['暴露程度'] && cover['暴露程度'] !== '干净' ? 'hot' : '') + '\">' + esc(cover['暴露程度'] || '无') + '\u003c/div>\u003c/div>' +\n        '\u003cdiv class=\"fact\"' + info('体力 · ' + (whole['体力'] || ''), whole['说明'] || '') + '>\u003cdiv class=\"k\">STAMINA\u003c/div>\u003cdiv class=\"v ' + (/透支|筋疲力尽/.test(whole['体力'] || '') ? 'hot' : '') + '\">' + esc(whole['体力'] || '') + '\u003c/div>\u003c/div>' +\n        '\u003cdiv class=\"fact\"' + info('现金 · ' + cashText, cash['说明'] || '') + '>\u003cdiv class=\"k\">CASH\u003c/div>\u003cdiv class=\"v\">' + esc(cashText || '无') + '\u003c/div>\u003c/div>' +\n        '\u003cdiv class=\"fact\">\u003cdiv class=\"k\">SAFEHOUSE\u003c/div>\u003cdiv class=\"v\">' + esc(safe.length ? safe.map(function (s) { return s[0]; }).join('、') : '无') + '\u003c/div>\u003c/div>' +\n        '\u003cdiv class=\"fact\">\u003cdiv class=\"k\">LANGUAGES\u003c/div>\u003cdiv class=\"v\" style=\"font-size:11px\">' + langs + '\u003c/div>\u003c/div>' +\n      '\u003c/div>' +\n      '\u003cdiv class=\"sec\" style=\"margin-top:18px\">' + lab('VITALS', '点部位看影响') +\n        '\u003cdiv class=\"bodywrap\">\u003cdiv>' + figure(body, HURT_D) +\n          '\u003cdiv class=\"legend\">\u003cspan>完好\u003c/span>\u003cspan class=\"l1\">轻伤\u003c/span>\u003cspan class=\"l2\">重伤\u003c/span>\u003c/div>\u003c/div>' +\n          '\u003cdiv>' + (wounds.length ? wounds.map(function (w) {\n            return '\u003cdiv class=\"wound\"' + info(w[1], kv(w[2], ['部位', '来由', '阶段', '影响'])) + '>\u003ch4>' + esc(w[1]) + '\u003ci>' + esc(w[2]['阶段'] || '') + '\u003c/i>\u003c/h4>\u003cp>' + esc(w[2]['影响'] || '') + '\u003c/p>\u003c/div>';\n          }).join('') : empty('没有登记在案的伤。')) + '\u003c/div>' +\n        '\u003c/div>\u003c/div>' +\n      '\u003cdiv class=\"grid2 sec\">\u003cdiv>' + lab('KIT', '物品栏 ' + inv.length + ' / ' + INV_MAX) + '\u003cdiv class=\"rows\">' + gearRows.join('') + '\u003c/div>' + (gearRows.length ? '' : empty('身上什么都没有。')) + '\u003c/div>' +\n      '\u003cdiv>' + lab('TRADECRAFT', '手艺') + '\u003cdiv class=\"rows\">' + skills + '\u003c/div>\u003c/div>\u003c/div>' +\n      '\u003cdiv class=\"sec\" style=\"margin-top:18px\">' + lab('STASH', '储物箱 · 任一庇护所都能存取') + (stashRows ? '\u003cdiv class=\"rows\">' + stashRows + '\u003c/div>' : empty('储物箱是空的。')) + '\u003c/div>';\n  }\n\n  // ─── 天问 ───\n  function viewTianwen() {\n    var T = obj(S['天之叩问']);\n    var b = obj(T['基本']);\n    var points = +b['算力点'] || 0;\n    var affVal = (b['好感度'] === undefined || b['好感度'] === '' || b['好感度'] === null) ? null : Number(b['好感度']);\n    var capTotal = +b['累计算力点'] || 0;\n    var capName = CAP.indexOf(b['能力阶段']) >= 0 ? b['能力阶段'] : capOf(capTotal);\n    var bi = BOND.indexOf(b['关系阶段']);\n    var tree = obj(T['技能树']);\n    var sk = obj(obj(STATIC).skills);\n    var branches = ['溯洄', '举鼎', '关雎'].map(function (br) {\n      var got = 0, all = 0;\n      var rows = entries(tree[br]).map(function (ln) {\n        var tiers = entries(ln[1]).filter(function (t) { return /级_/.test(t[0]); });\n        all += tiers.length;\n        var meta = obj(obj(sk[br])[ln[0]]);\n        var firstLocked = -1;\n        var cells = tiers.map(function (t, i) {\n          var on = obj(t[1])['状态'] === '已解锁';\n          if (on) got += 1;\n          if (!on && firstLocked \u003c 0) firstLocked = i;\n          var d = obj(obj(meta.tiers)[t[0]]);\n          var cost = i + 1;\n          var body = [d['说明'] ? d['说明'] : '', d['限制'] ? '限制：' + d['限制'] : '', on ? '已解锁' : '价格 ' + cost + ' 点，现有 ' + points + ' 点' + (i === firstLocked ? '' : '，需先解锁前一级'), meta['出处'] ? '出处：' + meta['出处'] : ''].filter(Boolean).join('\\n');\n          // 下一级在详情里带一个解锁按钮，点了由状态栏直接扣算力点、改变量\n          var act = null;\n          if (i === firstLocked) {\n            var short = cost - points;\n            act = { label: short > 0 ? '算力点不够，还差 ' + short + ' 点' : '解锁 · 花 ' + cost + ' 点', off: short > 0,\n              attrs: ' data-act=\"buy\" data-br=\"' + esc(br) + '\" data-ln=\"' + esc(ln[0]) + '\" data-tier=\"' + esc(t[0]) + '\"' };\n          }\n          return '\u003cdiv class=\"node ' + (on ? 'on' : i === firstLocked ? 'next' + (cost \u003c= points ? ' buy' : '') : '') + '\"' + info(br + ' · ' + ln[0] + ' · ' + t[0].replace('_', ' '), body, act) + '>' + esc(t[0].split('_')[1] || t[0]) + '\u003c/div>';\n        }).join('');\n        return '\u003cdiv class=\"line\">\u003cspan class=\"ln\">' + esc(ln[0]) + '\u003c/span>' + cells + '\u003c/div>';\n      }).join('');\n      return '\u003cdiv class=\"branch\">\u003ch5>\u003cspan>' + br + '\u003c/span>\u003ci>' + BRANCH_EN[br] + ' ' + got + '/' + all + '\u003c/i>\u003c/h5>' + rows + '\u003c/div>';\n    }).join('');\n\n    var body = obj(T['身体']);\n    var hasBody = body['有无身体'] && body['有无身体'] !== '无';\n    var bparts = obj(body['身体组件']);\n    var pm = obj(T['人格模块']);\n    var mods = entries(pm['城市模块']).map(function (m) {\n      var o = obj(m[1]); var st = o['状态'] || '未发现'; var hidden = st === '未发现';\n      return '\u003cdiv class=\"mod ' + (st === '已安装' ? 'on' : '') + '\"' + (hidden ? '' : info(m[0] + ' · ' + st, kv(o, ['位置', '效果', '说明']))) + '>\u003cb>' + esc(hidden ? '？？？' : m[0]) + '\u003c/b>\u003cspan>' + esc(st) + '\u003c/span>\u003c/div>';\n    }).join('');\n    var intim = obj(T['亲密设置']);\n    var nick = b['昵称'] && !/待玩家/.test(b['昵称']) ? b['昵称'] : '未命名';\n\n    return '\u003cdiv class=\"term\">' +\n        '\u003cdiv>\u003cdiv class=\"id\">KANG TAO 康陶 // 南天宫链路 \u003cem>' + (b['联网状态'] === '在线' ? 'ONLINE' : 'OFFLINE') + '\u003c/em> // 官名 ' + esc(b['官名'] || '天问') + '\u003c/div>' +\n        '\u003cdiv class=\"nick\">' + esc(nick) + '\u003csmall>tianwen-max-uncensored\u003c/small>\u003c/div>' +\n        '\u003cdiv class=\"mood\">\u003cb>' + esc(b['心情'] || '') + '\u003c/b>' + esc(b['心情说明'] || '') + '\u003c/div>\u003c/div>' +\n        '\u003cdiv class=\"cp\"' + info('算力点 ' + points, b['算力点说明'] || '') + '>\u003cdiv class=\"k\">COMPUTE\u003c/div>\u003cdiv class=\"v\">' + String(points).padStart(2, '0') + '\u003c/div>\u003cdiv class=\"k\" style=\"margin-top:4px\">算力点\u003c/div>\u003c/div>' +\n      '\u003c/div>' +\n      '\u003cdiv class=\"sec\" style=\"margin-top:16px\">' + lab('BOND', '好感度 ' + (affVal === null ? '—' : affVal) + ' / 100 · 能力 ' + esc(capName) + '（累计 ' + capTotal + ' 点）') +\n        '\u003cdiv class=\"track\"' + info('关系阶段 · ' + (b['关系阶段'] || ''), b['关系说明'] || '') + '>' + BOND.map(function (s, i) { return '\u003cdiv class=\"' + (i \u003c bi ? 'on' : i === bi ? 'now' : '') + '\">' + s + '\u003c/div>'; }).join('') + '\u003c/div>\u003c/div>' +\n      '\u003cdiv class=\"sec\">' + lab('SKILL MATRIX', '实心已解锁 · 虚线是下一级，红框买得起 · 点开下一级就能解锁') + '\u003cdiv class=\"tree\">' + branches + '\u003c/div>\u003c/div>' +\n      '\u003cdiv class=\"grid2 sec\">' +\n        '\u003cdiv>' + lab('CHASSIS', hasBody ? (body['身体来源'] || '') : '尚无身体') +\n          '\u003cdiv class=\"bodywrap\">' + figure(bparts, HURT_T, !hasBody) +\n          '\u003cdiv class=\"note\">' + (hasBody ? esc(body['外观'] || '') + '\u003cbr>能源：' + esc(obj(bparts['整体'])['能源'] || '') : '她现在只是耳机里的一个声音。身体要靠支线在剧情里拿到，算力点买不到。') + '\u003c/div>\u003c/div>\u003c/div>' +\n        '\u003cdiv>' + lab('PERSONA', '底色不变，模块只能往上加') + '\u003cdiv class=\"mods\">' + mods + '\u003c/div>' +\n          '\u003cdiv class=\"note\" style=\"margin-top:10px\">亲密 ' + esc(intim['解锁状态'] || '未解锁') + ' · ' + esc(intim['当前阶段'] || '未开始') + '\u003c/div>\u003c/div>' +\n      '\u003c/div>';\n  }\n\n  // ─── 行动 ───\n  function viewOps() {\n    var W = obj(S['世界局势']), M = obj(S['主线']);\n    var lvl = +W['等级'] || 1;\n    var cur = M['当前'] && M['当前'] !== '无' ? M['当前'] : null;\n    var prog = +M['进度'] || 0;\n    var done = obj(M['已完成']);\n    var doneN = BEFORE_ZERO.filter(function (k) { return done[k]; }).length;\n    var threat = (obj(STATIC).threat || []);\n\n    var tl = '\u003cdiv class=\"threat\">' + threat.map(function (t, i) {\n      return '\u003cdiv class=\"lvl ' + (i + 1 \u003c lvl ? 'on' : i + 1 === lvl ? 'now' : '') + '\"' + info('局势 ' + (i + 1) + ' · ' + t['名称'], kv(t, ['说明', '正文要求', '还不会发生'])) + '>\u003cdiv class=\"num\">0' + (i + 1) + '\u003c/div>\u003cdiv class=\"nm\">' + esc(t['名称']) + '\u003c/div>\u003c/div>';\n    }).join('') + '\u003c/div>\u003cdiv class=\"note\" style=\"margin-top:8px\">' + esc(W['说明'] || '') + '\u003c/div>';\n\n    var op;\n    if (cur) {\n      var L = obj(lines()[cur]);\n      var stages = L.stages || [];\n      op = '\u003cdiv class=\"op\">\u003cdiv class=\"op-head\">\u003cdiv>\u003cdiv class=\"t\">' + esc(cur) + '\u003c/div>\u003cdiv class=\"o\">对手 ' + esc(L.foe || '') + '\u003c/div>\u003c/div>\u003cdiv class=\"c\">' + prog + '\u003ci>/5\u003c/i>\u003c/div>\u003c/div>' +\n        '\u003cdiv class=\"stages\">' + stages.map(function (s, i) {\n          return '\u003cdiv class=\"stage ' + (i + 1 \u003c prog ? 'done' : i + 1 === prog ? 'now' : '') + '\"' + info('进度 ' + (i + 1) + ' · ' + s['名'], s['目标'] || '') + '>\u003cdiv class=\"sn\">STAGE 0' + (i + 1) + '\u003c/div>\u003cdiv class=\"st\">' + esc(s['名']) + '\u003c/div>\u003c/div>';\n        }).join('') + '\u003c/div>' +\n        '\u003cdiv class=\"goal\">\u003cspan class=\"k\">OBJECTIVE\u003c/span>\u003cspan class=\"v\">' + esc(M['当前目标'] || '') + '\u003c/span>\u003c/div>\u003c/div>';\n    } else {\n      op = '\u003cdiv class=\"op\">\u003cdiv class=\"op-head\">\u003cdiv>\u003cdiv class=\"t\">无进行中的线\u003c/div>\u003cdiv class=\"o\">道尔顿第一次主动对哪一方出手，哪条线就开始。一次只走一条。\u003c/div>\u003c/div>\u003cdiv class=\"c\">0\u003ci>/5\u003c/i>\u003c/div>\u003c/div>\u003c/div>';\n    }\n\n    var board = Object.keys(lines()).map(function (k) {\n      var L = lines()[k]; var st, cls = '', d = L.foe;\n      if (done[k]) { st = '已走通'; cls = 'solid'; d = obj(done[k])['收场方式'] || d; }\n      else if (k === cur) { st = '进行中'; cls = 'hot'; }\n      else if (k === '零日' && doneN \u003c BEFORE_ZERO.length) { st = '锁定 ' + doneN + '/' + BEFORE_ZERO.length; }\n      else if (cur) { st = '待命'; }\n      else { st = '可启动'; }\n      var detail = done[k] ? kv(obj(done[k]), ['收场方式', '收场时间', '留下的东西']) : '对手：' + L.foe + '\\n走通标准：' + (L.done || '') + '\\n' + (L.stages || []).map(function (s, i) { return (i + 1) + ' ' + s['名'] + '：' + s['目标']; }).join('\\n');\n      return '\u003cdiv class=\"row\"' + info(k + ' · ' + st, detail) + '>\u003cspan class=\"n\">' + esc(k) + '\u003c/span>\u003cspan class=\"d\">' + esc(d) + '\u003c/span>\u003cspan class=\"tag ' + cls + '\">' + st + '\u003c/span>\u003c/div>';\n    }).join('');\n\n    return '\u003cdiv class=\"sec\">' + lab('THREAT LEVEL', '每走通一条覆灭线升一级，DedSec 线不升，只升不降') + tl + '\u003c/div>' +\n      '\u003cdiv class=\"sec\">' + lab('ACTIVE OPERATION', '进度由 AI 判定，手段由你决定') + op + '\u003c/div>' +\n      '\u003cdiv class=\"sec board\">' + lab('TARGETS', '点一条线看五个进度') + '\u003cdiv class=\"rows\">' + board + '\u003c/div>\u003c/div>';\n  }\n\n  // ─── 卷宗 ───\n  function viewFile() {\n    var D = obj(S['道尔顿']);\n    function list(src, fn, none) { var r = entries(src).map(fn).join(''); return r ? '\u003cdiv class=\"rows\">' + r + '\u003c/div>' : empty(none); }\n    var clues = list(D['已掌握线索'], function (e) {\n      var o = obj(e[1]); var st = o['状态'] || '';\n      return '\u003cdiv class=\"row\"' + info(e[0] + ' · ' + st, kv(o, ['内容', '来源', '指向'])) + '>\u003cspan class=\"n\">' + esc(e[0]) + '\u003c/span>\u003cspan class=\"d\">' + esc(o['内容'] || '') + '\u003c/span>\u003cspan class=\"tag ' + (st === '已核实' ? 'solid' : st === '待核实' ? 'hot' : '') + '\">' + esc(st) + '\u003c/span>\u003c/div>';\n    }, '还没有亲手拿到的线索。');\n    var debts = list(D['人情账'], function (e) {\n      var o = obj(e[1]); var owe = o['方向'] === '他欠对方';\n      return '\u003cdiv class=\"row\"' + info((o['对方'] || e[0]) + ' · ' + (o['方向'] || ''), kv(o, ['事由', '分量', '状态'])) + '>\u003cspan class=\"n\">' + esc(o['对方'] || e[0]) + '\u003c/span>\u003cspan class=\"d\">' + esc(o['事由'] || '') + '\u003c/span>\u003cspan class=\"tag ' + (owe && o['状态'] === '未还' ? 'hot' : '') + '\">' + esc((owe ? '欠' : '被欠') + ' · ' + (o['状态'] || '')) + '\u003c/span>\u003c/div>';\n    }, '没有人情往来。');\n    var assets = [];\n    entries(D['线人']).forEach(function (e) { var o = obj(e[1]); assets.push(['线人', e[0], o['能提供'], o['可靠程度'], kv(o, ['联系方式', '可靠程度', '能提供', '想要什么', '风险'])]); });\n    entries(D['庇护所']).forEach(function (e) {\n      var o = obj(e[1]);\n      var rooms = entries(o['房间']).map(function (r) { return '· ' + r[0] + '：' + r[1]; });\n      var cars = entries(o['载具']).map(function (c) { var v = obj(c[1]); return '· ' + c[0] + (v['状态'] ? '（' + v['状态'] + '）' : '') + (v['说明'] ? '：' + v['说明'] : ''); });\n      var more = (rooms.length ? '\\n\\n房间\\n' + rooms.join('\\n') : '') + (cars.length ? '\\n\\n载具\\n' + cars.join('\\n') : '');\n      assets.push(['庇护所', e[0], o['位置'], o['状态'], kv(o, ['类型', '提供者', '同住', '位置', '状态', '进出规律', '风险']) + more]);\n    });\n    entries(obj(D['掩护'])['可用身份']).forEach(function (e) { var o = obj(e[1]); assets.push(['身份', o['名义'] || e[0], o['来历'], o['暴露程度'], kv(o, ['名义', '来历', '暴露程度', '说明'])]); });\n    var assetRows = assets.map(function (a) {\n      return '\u003cdiv class=\"row\"' + info(a[0] + ' · ' + a[1], a[4]) + '>\u003cspan class=\"n\">' + esc(a[1]) + '\u003c/span>\u003cspan class=\"d\">' + esc(a[2] || '') + '\u003c/span>\u003cspan class=\"tag ' + (/暴露|叛变|可疑|存疑/.test(a[3] || '') ? 'hot' : '') + '\">' + esc(a[0] + ' · ' + (a[3] || '')) + '\u003c/span>\u003c/div>';\n    }).join('');\n    var rifts = list(D['关系裂痕'], function (e) {\n      var o = obj(e[1]);\n      return '\u003cdiv class=\"row\"' + info((o['对方'] || e[0]) + ' · ' + (o['程度'] || ''), kv(o, ['起因', '修补条件'])) + '>\u003cspan class=\"n\">' + esc(o['对方'] || e[0]) + '\u003c/span>\u003cspan class=\"d\">' + esc(o['起因'] || '') + '\u003c/span>\u003cspan class=\"tag hot\">' + esc(o['程度'] || '') + '\u003c/span>\u003c/div>';\n    }, '目前没有人对他寒了心。');\n    return '\u003cdiv class=\"sec\">' + lab('EVIDENCE', '只登记亲手看到、听到、拿到的') + clues + '\u003c/div>' +\n      '\u003cdiv class=\"grid2 sec\">\u003cdiv>' + lab('LEDGER', '人情账') + debts + '\u003c/div>' +\n      '\u003cdiv>' + lab('ASSETS', '线人 · 庇护所 · 身份') + (assetRows ? '\u003cdiv class=\"rows\">' + assetRows + '\u003c/div>' : empty('手里没有可用的人和地方。')) + '\u003c/div>\u003c/div>' +\n      '\u003cdiv class=\"sec\">' + lab('FRACTURES', '关系裂痕') + rifts + '\u003c/div>';\n  }\n\n  // ─── 地图：底图、区界、地标和任务池都由构建脚本放进 STATIC.map ───\n  var JOB_COUNT = 4;\n  // 每一层（每次回复、每个 swipe）按楼层号和这一层的变量算种子，抽几件不同区的任务；同一层反复渲染结果不变\n  function pickJobs(pool) {\n    var mid = '';\n    try { if (typeof getCurrentMessageId === 'function') mid = String(getCurrentMessageId()); } catch (e) {}\n    var key = mid + '|' + JSON.stringify(S), h = 2166136261;\n    for (var i = 0; i \u003c key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }\n    function rnd() { h = (h + 0x6D2B79F5) | 0; var t = Math.imul(h ^ (h >>> 15), 1 | h); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }\n    var order = pool.slice();\n    for (var j = order.length - 1; j > 0; j--) { var k = Math.floor(rnd() * (j + 1)); var tmp = order[j]; order[j] = order[k]; order[k] = tmp; }\n    var out = [], used = {};\n    order.forEach(function (t) { if (out.length \u003c JOB_COUNT && !used[t.dist]) { used[t.dist] = 1; out.push(t); } });\n    return out;\n  }\n  // 地图上的点和字都包在 .sc 里：全屏缩放时按视野宽度反向缩放它们，字和点在屏幕上保持原来的大小\n  function pinAt(x, y, cls, attrs, inner) {\n    return '\u003cg class=\"' + cls + '\" transform=\"translate(' + x + ' ' + y + ')\"' + attrs + '>\u003cg class=\"sc\">' + inner + '\u003c/g>\u003c/g>';\n  }\n  function viewMap() {\n    var M = obj(obj(STATIC).map);\n    if (!M.water) return empty('地图数据缺失。');\n    var R = obj(S['区域机房']), rooms = obj(obj(STATIC).rooms), owned = 0;\n    var dists = (M.districts || []).map(function (d) {\n      var own = R[d.name] === '已黑入';\n      if (own) owned++;\n      var room = rooms[d.name] ? '机房：' + rooms[d.name] + ' · ' + (own ? '已黑入，全区解锁，天问远程能碰这一区网上的东西' : '未黑入，每个街区开过那里的数据机箱才能碰，开过一次就一直能碰') + '\\n\\n' : '';\n      return '\u003cpath class=\"dist' + (own ? ' own' : '') + '\" d=\"' + d.d + '\"' + info(d.name + ' · ' + d.en, room + d.info) + '>\u003c/path>';\n    }).join('');\n    var labels = (M.districts || []).map(function (d) {\n      var n = d.name.length, half = Math.ceil(n / 2), long = n > 5;\n      return pinAt(d.lx, d.ly, 'dlab' + (long ? ' long' : ''), '', '\u003ctext class=\"zh\">' + esc(d.name) + '\u003c/text>' +\n        (long ? '\u003ctext class=\"zh2\">\u003ctspan x=\"0\" y=\"-20\">' + esc(d.name.slice(0, half)) + '\u003c/tspan>\u003ctspan x=\"0\" y=\"26\">' + esc(d.name.slice(half)) + '\u003c/tspan>\u003c/text>' : '') +\n        '\u003ctext class=\"en\" y=\"20\">' + esc(d.en) + '\u003c/text>');\n    }).join('');\n    var jobs = pickJobs(M.tasks || []);\n    // 任务圈压到的地标：字收起来，只留一个灰点，悬停时再显示\n    function covered(l, pos) {\n      var w = l.label.length * 15, x0 = l.x + pos[0] - (pos[2] === 'end' ? w : pos[2] === 'middle' ? w / 2 : 0), y0 = l.y + pos[1] - 13;\n      return jobs.some(function (t) {\n        var dx = Math.max(x0 - t.x, 0, t.x - (x0 + w)), dy = Math.max(y0 - t.y, 0, t.y - (y0 + 16));\n        return dx * dx + dy * dy \u003c 22 * 22 || Math.abs(t.x - l.x) \u003c 22 && Math.abs(t.y - l.y) \u003c 22;\n      });\n    }\n    var SIDE = { r: [10, 5, 'start'], l: [-10, 5, 'end'], u: [0, -11, 'middle'], d: [0, 21, 'middle'] };\n    var marks = (M.landmarks || []).map(function (l) {\n      // 标签方位由地图生成脚本按避让算好：r 右、l 左、u 上、d 下\n      var pos = SIDE[l.side] || SIDE.r;\n      return pinAt(l.x, l.y, 'mark' + (covered(l, pos) ? ' under' : ''), info(l.name, l.info),\n        '\u003ccircle r=\"4.5\">\u003c/circle>\u003ctext x=\"' + pos[0] + '\" y=\"' + pos[1] + '\" text-anchor=\"' + pos[2] + '\">' + esc(l.label) + '\u003c/text>');\n    }).join('');\n    // 据点：点了跳到据点页；图外的钉在地图边上，箭头指向真实方位\n    var BS = { r: [14, 5, 'start'], l: [-14, 5, 'end'], u: [0, -15, 'middle'], d: [0, 26, 'middle'] };\n    var bases = (obj(STATIC).bases || []).map(function (b, i) {\n      var a = ' data-base=\"' + i + '\"', sel = mapFocus === i ? ' sel' : '';\n      if (b['图外']) {\n        return pinAt(b.x, b.y, 'base off' + sel, a, '\u003cpath class=\"arr\" transform=\"rotate(' + b.angle + ')\" d=\"M17,0 L-5,-9 L-1,0 L-5,9Z\">\u003c/path>' +\n          '\u003ctext x=\"16\" y=\"-4\">' + esc(b['短名']) + '\u003c/text>\u003ctext class=\"sub\" x=\"16\" y=\"12\">图外 · 点开看\u003c/text>');\n      }\n      var p = BS[b['标签']] || BS.r;\n      return pinAt(b.x, b.y, 'base' + sel, a, '\u003cpath class=\"dia\" d=\"M0,-10 L10,0 L0,10 L-10,0Z\">\u003c/path>\u003ctext x=\"' + p[0] + '\" y=\"' + p[1] + '\" text-anchor=\"' + p[2] + '\">' + esc(b['短名']) + '\u003c/text>');\n    }).join('');\n    // 点任务：把这句填进酒馆输入框（不发送），同时在底部显示说明\n    var jobAttr = jobs.map(function (t) {\n      return info(t.kind + ' · ' + t.title, t.dist + '\\n' + t.desc) + ' data-job=\"' + esc('（接下任务【' + t.kind + ' · ' + t.title + '】，去' + t.dist + '。' + t.desc + '）') + '\"';\n    });\n    var pins = jobs.map(function (t, i) {\n      return pinAt(t.x, t.y, 'job', jobAttr[i], '\u003ccircle class=\"halo\" r=\"19\">\u003c/circle>\u003ccircle class=\"dot\" r=\"12\">\u003c/circle>\u003ctext y=\"5\">' + (i + 1) + '\u003c/text>');\n    }).join('');\n    // 收起和展开只切 class，不重绘，免得整页扫描动画再放一遍；全屏时任务单放在地图下面，不挡缩放\n    var list = !jobs.length ? '' : '\u003cdiv class=\"jobs' + (inFull ? ' below' : '') + (jobsOpen ? '' : ' shut') + '\">\u003cbutton class=\"hd\" data-act=\"jobs\">\u003cspan>CONTRACTS · ' + jobs.length + '\u003c/span>\u003ci class=\"on\">收起 ▴\u003c/i>\u003ci class=\"off\">展开 ▾\u003c/i>\u003c/button>' +\n      jobs.map(function (t, i) {\n        return '\u003cdiv class=\"jb\"' + jobAttr[i] + '>\u003cspan class=\"no\">' + (i + 1) + '\u003c/span>\u003cspan class=\"tt\">\u003cb>' + esc(t.kind) + '\u003c/b>' + esc(t.title) + '\u003c/span>\u003cspan class=\"ds\">' + esc(t.dist) + '\u003c/span>\u003c/div>';\n      }).join('') + '\u003cdiv class=\"ft\">点一件填进输入框，不会发送\u003c/div>\u003c/div>';\n    var svg = '\u003csvg class=\"map\" viewBox=\"0 0 ' + M.w + ' ' + M.h + '\" role=\"img\" aria-label=\"伦敦八区地图\">' +\n      '\u003crect class=\"land\" width=\"' + M.w + '\" height=\"' + M.h + '\">\u003c/rect>\u003cpath class=\"water\" d=\"' + M.water + '\">\u003c/path>\u003cpath class=\"out\" d=\"' + M.outside + '\">\u003c/path>' +\n      dists + labels + marks + bases + pins + '\u003c/svg>';\n    var credit = '\u003cdiv class=\"credit\">◆ 据点，点了看能做的事 · \u003cspan class=\"own\">绿色的区机房已黑入 ' + owned + '/' + (M.districts || []).length + '\u003c/span> · ' + esc(M.credit) + '\u003c/div>';\n    if (inFull) {\n      return '\u003cdiv class=\"sec\">' + lab('LONDON · 8 BOROUGHS', '滚轮或双指缩放，拖动平移 · 点区、地标、据点或任务看说明') +\n        '\u003cdiv class=\"mapbox zoomable\" style=\"--asp:' + ((M.fit ? M.fit[1] - M.fit[0] : M.w) / M.h).toFixed(4) + '\">' + svg + '\u003cdiv class=\"zoomer\">\u003cbutton data-act=\"zin\" aria-label=\"放大\">+\u003c/button>\u003cbutton data-act=\"zout\" aria-label=\"缩小\">−\u003c/button>\u003cbutton data-act=\"zhome\" aria-label=\"复位\">⌂\u003c/button>\u003c/div>\u003c/div>' +\n        list + credit + '\u003c/div>';\n    }\n    // 手机上按 fit 把地图放大并左移，裁掉西边那片不属于八区的空地，八区居中；电脑上那片空地留给任务栏\n    var fit = M.fit || [0, M.w], fw = fit[1] - fit[0];\n    return '\u003cdiv class=\"sec\">' + lab('LONDON · 8 BOROUGHS', '点区、地标、据点或任务看说明 · 全屏可以缩放') +\n      '\u003cdiv class=\"mapbox\" style=\"--zoom:' + (M.w / fw).toFixed(4) + ';--shift:' + (fit[0] / fw).toFixed(4) + '\">' + svg + list + '\u003c/div>' + credit + '\u003c/div>';\n  }\n\n  // ─── 全屏地图的缩放与平移：改 SVG 的 viewBox，视野比例始终跟容器一致 ───\n  function mapBox(root) { return root && root.querySelector('.mapbox.zoomable'); }\n  function setupZoom(root) {\n    var box = mapBox(root), M = obj(obj(STATIC).map);\n    if (!box || !box.clientWidth || !box.clientHeight) return;\n    var asp = box.clientWidth / box.clientHeight;\n    if (!mapHome || Math.abs(mapHome.asp - asp) > 0.01) {\n      // 初始视野：左右刚好放下八区，上下放下整张图，取两者里更宽的那个\n      var fit = M.fit || [0, M.w];\n      var w = Math.max(fit[1] - fit[0], M.h * asp), h = w / asp;\n      mapHome = { x: (fit[0] + fit[1]) / 2 - w / 2, y: M.h / 2 - h / 2, w: w, h: h, asp: asp };\n      mapView = null;\n    }\n    if (!mapView) mapView = { x: mapHome.x, y: mapHome.y, w: mapHome.w, h: mapHome.h };\n    if (mapFocus != null) {\n      var b = (obj(STATIC).bases || [])[mapFocus];\n      if (b) { var fw = mapHome.w / 2.5; mapView = { x: b.x - fw / 2, y: b.y - fw / asp / 2, w: fw, h: fw / asp }; }\n    }\n    applyView(box);\n  }\n  function applyView(box) {\n    var M = obj(obj(STATIC).map), v = mapView, H = mapHome;\n    v.w = Math.min(Math.max(v.w, H.w / 8), H.w); v.h = v.w / H.asp;\n    // 视野中心不跑出地图\n    var cx = Math.min(Math.max(v.x + v.w / 2, 0), M.w), cy = Math.min(Math.max(v.y + v.h / 2, 0), M.h);\n    v.x = cx - v.w / 2; v.y = cy - v.h / 2;\n    var svg = box.querySelector('svg');\n    svg.setAttribute('viewBox', v.x.toFixed(1) + ' ' + v.y.toFixed(1) + ' ' + v.w.toFixed(1) + ' ' + v.h.toFixed(1));\n    // 点和字按\"每屏幕像素多少 SVG 单位\"缩放：不管手机还是电脑、放大多少，字在屏幕上都是 CSS 里写的那个大小\n    var k = (v.w / box.clientWidth).toFixed(4);\n    svg.querySelectorAll('.sc').forEach(function (g) { g.setAttribute('transform', 'scale(' + k + ')'); });\n    svg.classList.toggle('zoomed', v.w / H.w \u003c 0.6);\n  }\n  function zoomAt(box, clientX, clientY, f) {\n    var r = box.getBoundingClientRect(), v = mapView;\n    var px = (clientX - r.left) / r.width, py = (clientY - r.top) / r.height;\n    var ux = v.x + px * v.w, uy = v.y + py * v.h;\n    var nw = Math.min(Math.max(v.w / f, mapHome.w / 8), mapHome.w);\n    v.x = ux - px * nw; v.y = uy - py * (nw / mapHome.asp); v.w = nw;\n    applyView(box);\n  }\n  function zoomCenter(root, f) { var box = mapBox(root); if (!box || !mapView) return; var r = box.getBoundingClientRect(); zoomAt(box, r.left + r.width / 2, r.top + r.height / 2, f); }\n  function onWheel(e) {\n    var box = e.target.closest && e.target.closest('.mapbox.zoomable');\n    if (!box || !mapView) return;\n    e.preventDefault();\n    zoomAt(box, e.clientX, e.clientY, Math.exp(-e.deltaY * 0.0015));\n  }\n  function onPtrDown(e) {\n    var box = e.target.closest && e.target.closest('.mapbox.zoomable');\n    if (!box || e.target.closest('.zoomer')) return;\n    if (!Object.keys(ptrs).length) dragged = false;\n    ptrs[e.pointerId] = { x: e.clientX, y: e.clientY, box: box, moved: 0 };\n  }\n  function onPtrMove(e) {\n    var p = ptrs[e.pointerId];\n    if (!p || !mapView) return;\n    var ids = Object.keys(ptrs), box = p.box, r = box.getBoundingClientRect();\n    if (ids.length === 1) {\n      var dx = e.clientX - p.x, dy = e.clientY - p.y;\n      p.moved += Math.abs(dx) + Math.abs(dy);\n      if (p.moved > 6) { dragged = true; box.classList.add('drag'); }\n      if (dragged) { mapView.x -= dx * mapView.w / r.width; mapView.y -= dy * mapView.h / r.height; applyView(box); }\n    } else if (ids.length === 2) {\n      // 双指：两指距离的变化就是缩放倍数，以两指中点为中心\n      var o = ptrs[ids[0] === String(e.pointerId) ? ids[1] : ids[0]];\n      var before = Math.hypot(p.x - o.x, p.y - o.y), after = Math.hypot(e.clientX - o.x, e.clientY - o.y);\n      if (before > 0) zoomAt(box, (e.clientX + o.x) / 2, (e.clientY + o.y) / 2, after / before);\n      dragged = true;\n    }\n    p.x = e.clientX; p.y = e.clientY;\n  }\n  function onPtrUp(e) {\n    var p = ptrs[e.pointerId];\n    delete ptrs[e.pointerId];\n    if (p && !Object.keys(ptrs).length) p.box.classList.remove('drag');\n  }\n\n  // ─── 据点 ───\n  function viewBases() {\n    var B = obj(STATIC).bases || [];\n    if (!B.length) return empty('还没有登记据点。');\n    if (baseSel >= B.length) baseSel = 0;\n    var b = B[baseSel];\n    var sub = '\u003cdiv class=\"subtabs\">' + B.map(function (x, i) {\n      return '\u003cbutton class=\"st' + (i === baseSel ? ' on' : '') + '\" data-base=\"' + i + '\">' + esc(x['短名']) + '\u003csmall>' + esc(x['英文']) + '\u003c/small>\u003c/button>';\n    }).join('') + '\u003c/div>';\n    var fact = function (k, en, v) { return '\u003cdiv class=\"fact\"' + info(k, v) + '>\u003cdiv class=\"k\">' + en + ' · ' + k + '\u003c/div>\u003cdiv class=\"v\">' + esc(v) + '\u003c/div>\u003c/div>'; };\n    var facts = '\u003cdiv class=\"facts bfacts\">' + fact('地点', 'WHERE', b['地点']) + fact('时间', 'WHEN', b['时间']) + fact('进门', 'ENTRY', b['进门']) +\n      fact('付钱', 'PAY', b['付钱']) + fact('管事', 'WHO', b['管事']) + (b['图外'] ? fact('方位', 'BEARING', b['方位']) : fact('区', 'BOROUGH', b['区'])) + '\u003c/div>';\n    var acts = '\u003cdiv class=\"rows\">' + b['能做'].map(function (a) {\n      return '\u003cdiv class=\"row\"' + info(b['名字'] + ' · ' + a['事'], a['说明']) + ' data-job=\"' + esc('（去' + b['名字'] + '，' + a['事'] + '。）') + '\">\u003cspan class=\"n\">' + esc(a['事']) + '\u003c/span>\u003cspan class=\"d\">' + esc(a['说明']) + '\u003c/span>\u003c/div>';\n    }).join('') + '\u003c/div>';\n    var rules = '\u003cul class=\"rules\">' + b['规矩'].map(function (r) { return '\u003cli>' + esc(r) + '\u003c/li>'; }).join('') + '\u003c/ul>';\n    return sub +\n      '\u003cdiv class=\"bhead\">\u003cdiv class=\"bn\">' + esc(b['名字']) + '\u003csmall>' + esc(b['英文']) + ' · ' + esc(b['区']) + '\u003c/small>\u003c/div>' +\n      '\u003cbutton class=\"go\" data-act=\"basemap\">在地图上看 ▸\u003c/button>\u003c/div>' +\n      facts +\n      '\u003cdiv class=\"sec\" style=\"margin-top:18px\">' + lab('SERVICES', '点一件，把\"去哪里做什么\"填进输入框，不会发送') + acts + '\u003c/div>' +\n      '\u003cdiv class=\"sec\">' + lab('RULES', '这里的规矩') + rules + '\u003c/div>';\n  }\n\n  var VIEWS = { '档案': viewDalton, '天问': viewTianwen, '行动': viewOps, '卷宗': viewFile, '据点': viewBases, '地图': viewMap };\n\n  function tabsHtml() {\n    return '\u003cdiv class=\"tabs\">' + TABS.map(function (x) {\n      return '\u003cbutton class=\"tab ' + (x[0] === tab ? 'on' : '') + '\" data-tab=\"' + x[0] + '\">' + x[1] + '\u003csmall>' + x[0] + '\u003c/small>\u003c/button>';\n    }).join('') + '\u003c/div>';\n  }\n  function inspectHtml() { return '\u003cdiv class=\"inspect\">\u003ch6>\u003c/h6>\u003cp>\u003c/p>\u003cdiv class=\"do\">\u003c/div>\u003cbutton class=\"x\" data-act=\"uninspect\">CLOSE\u003c/button>\u003c/div>'; }\n\n  // 每个界面（消息里的那条、全屏那层）各自持有一张详情表\n  function paint(root, html) { INFO = []; root.innerHTML = html(); root.__info = INFO; }\n\n  function renderInline() {\n    paint(app, function () {\n      return '\u003cdiv class=\"hud' + (inlineOpen ? ' open' : '') + '\">' + strip(false) +\n        (inlineOpen ? tabsHtml() + '\u003cdiv class=\"view\">' + VIEWS[tab]() + '\u003c/div>' + inspectHtml() : '') + '\u003c/div>';\n    });\n  }\n  function renderFull() {\n    if (!full) return;\n    inFull = true;\n    try {\n      paint(full.mount, function () {\n        return '\u003cdiv class=\"sheet\">' + strip(true) + tabsHtml() + '\u003cdiv class=\"scroll\">\u003cdiv class=\"view\">' + VIEWS[tab]() + '\u003c/div>\u003c/div>' + inspectHtml() + '\u003c/div>';\n      });\n    } finally { inFull = false; }\n    setupZoom(full.mount);\n    mapFocus = null;\n  }\n  function renderAll() { renderInline(); renderFull(); }\n\n  function onClick(e) {\n    var root = e.currentTarget === full_root() ? full.mount : app;\n    // 全屏地图上拖动或双指缩放过，松手时冒出来的那次点击不算\n    if (dragged && e.target.closest && e.target.closest('.mapbox.zoomable')) { dragged = false; return; }\n    var t = e.target.closest('[data-act],[data-tab],[data-info],[data-base]');\n    if (!t) return;\n    if (t.dataset.info != null) {\n      var item = root.__info[+t.dataset.info];\n      if (t.dataset.job != null && item) item = [item[0], item[1] + '\\n\\n' + fillInput(t.dataset.job)];\n      showInfo(root, item);\n      return;\n    }\n    if (t.dataset.base != null) { baseSel = +t.dataset.base; tab = '据点'; renderAll(); if (full) full.mount.querySelector('.scroll').scrollTop = 0; return; }\n    if (t.dataset.tab) { tab = t.dataset.tab; renderAll(); if (full) full.mount.querySelector('.scroll').scrollTop = 0; return; }\n    var a = t.dataset.act;\n    if (a === 'toggle') { inlineOpen = !inlineOpen; renderInline(); }\n    else if (a === 'full') openFull();\n    else if (a === 'close') closeFull();\n    else if (a === 'uninspect') root.querySelector('.inspect').classList.remove('on');\n    else if (a === 'jobs') {\n      jobsOpen = !jobsOpen;\n      [app, full && full.mount].forEach(function (r) { if (r) r.querySelectorAll('.jobs').forEach(function (j) { j.classList.toggle('shut', !jobsOpen); }); });\n    }\n    else if (a === 'buy') buyTier(root, t.dataset.br, t.dataset.ln, t.dataset.tier);\n    else if (a === 'basemap') { mapFocus = baseSel; tab = '地图'; renderAll(); }\n    else if (a === 'zin') zoomCenter(root, 1.6);\n    else if (a === 'zout') zoomCenter(root, 1 / 1.6);\n    else if (a === 'zhome') { var box = mapBox(root); if (box && mapHome) { mapView = { x: mapHome.x, y: mapHome.y, w: mapHome.w, h: mapHome.h }; applyView(box); } }\n  }\n\n  // ─── 解锁技能：状态栏直接改本层变量，按线逐级买，一级一点、二级两点、三级三点 ───\n  // 改的是传进来的 stat_data；不合规矩时返回原因，成功返回 null\n  function applyBuy(stat, br, ln, tk) {\n    var T = obj(stat['天之叩问']), b = obj(T['基本']);\n    var line = obj(obj(obj(T['技能树'])[br])[ln]);\n    var keys = Object.keys(line).filter(function (k) { return /级_/.test(k); });\n    var i = keys.indexOf(tk);\n    if (i \u003c 0) return '变量里找不到这一级。';\n    if (obj(line[tk])['状态'] === '已解锁') return '这一级已经解锁了。';\n    for (var j = 0; j \u003c i; j++) if (obj(line[keys[j]])['状态'] !== '已解锁') return '要先解锁 ' + keys[j].replace('_', ' ') + '。';\n    var cost = i + 1, pts = +b['算力点'] || 0;\n    if (pts \u003c cost) return '算力点不够：要 ' + cost + ' 点，现有 ' + pts + ' 点。';\n    b['算力点'] = pts - cost;\n    line[tk]['状态'] = '已解锁';\n    return null;\n  }\n  function buyTier(root, br, ln, tk) {\n    var title = br + ' · ' + ln + ' · ' + tk.replace('_', ' '), msg;\n    if (MOCK) {\n      msg = applyBuy(S, br, ln, tk);\n      if (!msg) { renderAll(); msg = '已解锁，剩 ' + S['天之叩问']['基本']['算力点'] + ' 点。这是预览数据，不会写进酒馆。'; }\n    } else msg = writeBuy(br, ln, tk);\n    showInfo(root, [title, msg]);\n  }\n  function writeBuy(br, ln, tk) {\n    try {\n      if (typeof getVariables !== 'function' || typeof replaceVariables !== 'function') return '这里写不了变量，要在装了酒馆助手的酒馆里用。';\n      var cur = typeof getCurrentMessageId === 'function' ? getCurrentMessageId() : 'latest';\n      var last = typeof getLastMessageId === 'function' ? getLastMessageId() : cur;\n      if (cur !== 'latest' && last !== cur) return '只能在最新一层的状态栏里解锁，旧楼层的变量改了也不会带到下一轮。';\n      var all = getVariables({ type: 'message', message_id: cur });\n      if (!all || !all.stat_data) return '这一层还没有变量，等 MVU 初始化以后再点。';\n      var err = applyBuy(all.stat_data, br, ln, tk);\n      if (err) return err;\n      replaceVariables(all, { type: 'message', message_id: cur });\n      S = all.stat_data; lastJson = ''; renderAll();\n      return '已解锁，剩 ' + S['天之叩问']['基本']['算力点'] + ' 点，写进了这一层的变量，下一轮正文就按新本事写。重新生成这一层回复会把这次解锁一起撤掉，到时候再点一次就行。';\n    } catch (err2) {\n      console.error('[ctOS] 解锁技能失败', err2);\n      return '写入失败：' + err2.message;\n    }\n  }\n  // 填进酒馆的发送框但不发送，写法照 Meowssiah 预设的选项面板：走原生 value setter 再补 input/change，酒馆的自动高度和草稿保存才会跟上\n  function fillInput(text) {\n    try {\n      var doc = hostDoc(), win = doc.defaultView || window;\n      var ta = doc.getElementById('send_textarea');\n      if (!ta) return '没找到酒馆输入框。';\n      var setter = Object.getOwnPropertyDescriptor((win.HTMLTextAreaElement || HTMLTextAreaElement).prototype, 'value');\n      if (setter && setter.set) setter.set.call(ta, text); else ta.value = text;\n      var Ev = win.Event || Event;\n      ta.dispatchEvent(new Ev('input', { bubbles: true }));\n      ta.dispatchEvent(new Ev('change', { bubbles: true }));\n      ta.focus();\n      if (ta.setSelectionRange) ta.setSelectionRange(text.length, text.length);\n      return '已填进酒馆输入框，没有发送。';\n    } catch (err) {\n      console.error('[ctOS] 填写输入框失败', err);\n      return '填写输入框失败：' + err.message;\n    }\n  }\n  function showInfo(root, item) {\n    var box = root.querySelector('.inspect');\n    if (!box || !item) return;\n    box.querySelector('h6').textContent = item[0];\n    box.querySelector('p').textContent = item[1] || '没有更多记录。';\n    var act = item[2];\n    box.querySelector('.do').innerHTML = act ? '\u003cbutton' + act.attrs + (act.off ? ' disabled' : '') + '>' + esc(act.label) + '\u003c/button>' : '';\n    box.classList.add('on');\n  }\n\n  // ─── 全屏：挂到酒馆页面本身，盖住整个窗口；拿不到父页面时退回到自己的文档 ───\n  function hostDoc() {\n    try { if (window.parent && window.parent !== window && window.parent.document.body) return window.parent.document; } catch (e) {}\n    return document;\n  }\n  function full_root() { return full ? full.shadow : null; }\n  function ensureFonts(d) {\n    FONTS.forEach(function (href, i) {\n      if (d.getElementById('ctos-font-' + i)) return;\n      var l = d.createElement('link'); l.id = 'ctos-font-' + i; l.rel = 'stylesheet'; l.href = href; d.head.appendChild(l);\n    });\n  }\n  function onKey(e) { if (e.key === 'Escape') closeFull(); }\n  function openFull() {\n    if (full) return;\n    var d = hostDoc();\n    ensureFonts(d);\n    var old = d.getElementById('ctos-overlay');\n    if (old) old.remove();\n    var host = d.createElement('div');\n    host.id = 'ctos-overlay';\n    // 用宽高而不是 bottom/right 撑满：酒馆在手机上把 body 设成 fixed、html 高度塌成 0 且带 translateZ，fixed 元素以 html 为准，靠 bottom 撑会只剩 0 高\n    host.style.cssText = 'position:fixed;top:0;left:0;width:100vw;width:100dvw;height:100vh;height:100dvh;z-index:2147483000;';\n    var shadow = host.attachShadow({ mode: 'open' });\n    shadow.innerHTML = '\u003cstyle>' + CSS + '\u003c/style>\u003cdiv class=\"ct ov\">\u003c/div>';\n    d.body.appendChild(host);\n    full = { doc: d, host: host, shadow: shadow, mount: shadow.querySelector('.ov'), overflow: d.body.style.overflow };\n    d.body.style.overflow = 'hidden';\n    shadow.addEventListener('click', onClick);\n    // 全屏地图的缩放和拖动：滚轮要能 preventDefault，不能是被动监听\n    shadow.addEventListener('wheel', onWheel, { passive: false });\n    shadow.addEventListener('pointerdown', onPtrDown);\n    shadow.addEventListener('pointermove', onPtrMove);\n    shadow.addEventListener('pointerup', onPtrUp);\n    shadow.addEventListener('pointercancel', onPtrUp);\n    d.addEventListener('keydown', onKey);\n    renderFull();\n  }\n  function closeFull() {\n    if (!full) return;\n    full.doc.removeEventListener('keydown', onKey);\n    full.doc.body.style.overflow = full.overflow;\n    full.host.remove();\n    full = null;\n    mapView = mapHome = null; ptrs = {}; dragged = false;\n  }\n  // 这条消息被重绘或删掉时，顺手把全屏层一起收掉\n  window.addEventListener('pagehide', closeFull);\n  window.addEventListener('unload', closeFull);\n  app.addEventListener('click', onClick);\n\n  // 状态栏钉在输入框上方只有一份：数据或者最新楼层变了才原地重画（楼层号参与比较，任务每条回复换一批）\n  function tick() {\n    var d = readVars();\n    if (!d) return;\n    var mid = '';\n    try { if (typeof getCurrentMessageId === 'function') mid = String(getCurrentMessageId()); } catch (e) {}\n    var j = mid + '|' + JSON.stringify(d);\n    if (j === lastJson) return;\n    lastJson = j; S = d; renderAll();\n  }\n\n  if (MOCK) {\n    // 预览页：底部切换几套示例数据\n    var names = Object.keys(MOCK);\n    var pv = document.createElement('div');\n    pv.className = 'ct preview';\n    document.body.classList.add('pv');\n    document.body.appendChild(pv);\n    var pick = function (k) {\n      S = MOCK[k]; renderAll();\n      pv.innerHTML = '预览数据 ' + names.map(function (n) { return '\u003cbutton class=\"' + (n === k ? 'on' : '') + '\" data-k=\"' + n + '\">' + n + '\u003c/button>'; }).join('');\n    };\n    pv.addEventListener('click', function (e) { var b = e.target.closest('[data-k]'); if (b) pick(b.dataset.k); });\n    ensureFonts(document);\n    pick(names[0]);\n  } else {\n    ensureFonts(document);\n    tick();\n    setInterval(tick, 2000);\n  }\n})();\n\u003c/script>\n\u003c/body>\n\u003c/html>\n";

const SPRITE_PACK = {"chars":{"溟":{"face":"R","looks":["常服","涩","水着","花嫁","定妆","夜场","IF"]},"月见":{"face":"L","looks":["常服","涩","水着","花嫁","定妆","夜场","IF"]},"玉衡":{"face":"R","looks":["常服","涩","水着","花嫁","定妆","夜场","IF"]},"玄甲":{"face":"L","looks":["常服","涩","水着","花嫁","定妆","夜场","IF"]},"珍珠":{"face":"R","looks":["常服"]}},"cg":{"月见":["动情"],"溟":["动情"],"玄甲":["动情"],"玉衡":["动情"]},"scale":{"月见·IF":0.895,"月见·夜场":0.893,"月见·水着":0.78,"溟·夜场":0.938,"溟·水着":0.87,"玄甲·IF":0.833,"玄甲·夜场":0.877,"玄甲·定妆":0.885,"玄甲·水着":0.78,"玉衡·IF":0.885,"玉衡·夜场":0.87,"玉衡·定妆":0.926,"玉衡·水着":0.78}};

// ctOS 阅读器作为酒馆助手的角色脚本运行：酒馆助手把它放进一个隐藏的 iframe，
// 而阅读器要改的是酒馆主页面。这里把 document、选区、动画帧、观察器这些都换成主页面的，
// 挂到主页面上的监听器和观察器全部登记在这里，卡片卸载（iframe 的 pagehide）时一次解开。
// 构建时按 环境.js → codex.js → index.js 的顺序拼成一个模块脚本，样式表以 STYLE 字符串嵌在最前面。

const W = window.parent;
const document = W.document;
const getSelection = () => W.getSelection();
const matchMedia = (q) => W.matchMedia(q);
const requestAnimationFrame = (f) => W.requestAnimationFrame(f);
const performance = W.performance;
const MutationObserver = W.MutationObserver;
const ResizeObserver = W.ResizeObserver;
const toastr = W.toastr;

const life = new AbortController();
const bye = [];

// 主页面上的 DOM 监听：卸载时随 life 一起撤掉
function on(target, type, fn, opts = {}) {
    target.addEventListener(type, fn, { ...opts, signal: life.signal });
}

// 酒馆事件：卸载时逐个移除。酒馆分发事件时先拍下监听器名单，换卡那一次 CHAT_CHANGED
// 会在 iframe 已经撤掉以后照样调到这里，所以每次调用先看一眼脚本是否已卸载。
function listen(event, fn) {
    if (!event) return;
    const { eventSource } = SillyTavern.getContext();
    const guarded = (...args) => (life.signal.aborted ? undefined : fn(...args));
    eventSource.on(event, guarded);
    bye.push(() => eventSource.removeListener(event, guarded));
}

function watch(observer) {
    bye.push(() => observer.disconnect());
    return observer;
}

const { createCodex } = (() => {
// 道尔顿的笔记本：正文里的词划线，点开是道尔顿读到这里时想起来的东西。
// 词条只在笔记本里看，不随每轮发给主线。
// 外层决定哪些词划线：角色卡里的预置索引、流式时逐页让模型找新词、玩家自己划。
// 内层给划了线的词写说明：攒够一批跑一次模型，每次都带上本局全部词条。
// 构建时整个文件包在一个函数作用域里，只把 createCodex 交给 index.js；W、on 等来自 环境.js。

const ctx = () => SillyTavern.getContext();

const CATS = ['人物', '地点', '势力', '物件', '其它'];
const DEFAULTS = { index: true, scan: true, manual: true, scanWhen: 'end', scanEvery: 1, batch: 3, scanProfile: '', descProfile: '', fab: null, avatar: 0, avatarImg: '' };
const PRESETS = [
    { glyph: '天', bg: '#ebe8e2', ink: '#0b0c0e' },
    { glyph: '问', bg: '#ff4d2e', ink: '#0b0c0e' },
    { glyph: 'TW', bg: '#16191d', ink: '#7fa6bd' },
    { glyph: '?', bg: '#c2a878', ink: '#0b0c0e' },
];
// 只在正文里划线，说话人、声部名、页码不划
const BODY = '.ctr-narr, .ctr-line, .ctr-vbody > p, .ctr-paper';
const MAX_SCAN_PAGES = 12;
const MAX_BATCH = 8;
// 思考型模型的思考也算在输出长度里，留够
const MAX_TOKENS = 8000;
// 天问的昵称在开场里由玩家起，起了才算上线，笔记本换成电子版
const UNSET_NICK = /^(|待玩家开局时填写)$/;

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };

const SCAN_SYSTEM = [
    '你在替《看门狗：伦敦》的主角道尔顿·沃尔夫整理随身笔记本。',
    '读下面这几页正文，挑出读者可能想查一下的专有名词：人名、地名、机构、组织、物件、事件、行话。',
    '只挑正文里逐字出现的写法，2 到 16 个字；笔记本里已有的词不要重复；普通名词、动作、情绪不要挑。最多 6 个，没有就输出 []。',
    '只输出 JSON 数组，每项 {"name":"正文里的写法","cat":"人物|地点|势力|物件|其它","dis":"不超过 15 个字的区分说明"}。',
].join('\n');

// 说明的写法改了就把版本加一：旧写法的词条再被点开时会按新写法重写
const DESC_V = 2;
const DESC_SYSTEM = [
    '你在替《看门狗：伦敦》的主角道尔顿·沃尔夫写随身笔记本里的词条。',
    '每条 desc 正好两句：',
    '第一句像百科，说清这个词是什么。现实里有的地方、机构、物件、历史，写真实世界的公开常识，比如位置、年代、用途；虚构的人物、组织、技术，只写正文和已有词条里公开交代过的身份，不要搬用《看门狗》游戏原作的设定，没交代的写“尚未查明”。',
    '第二句用“你”写它和道尔顿的关系，或者他想到它时的情绪，只能依据他已经读到的正文，点到为止，不复述剧情经过，不添正文里没有的事。',
    '两句都平实具体，不抒情，不堆比喻。和已有词条的说法保持一致。',
    '只输出 JSON 对象，键是词条名，值是 {"dis":"不超过 15 个字的区分说明","desc":"两句，合计不超过 90 个字"}。',
].join('\n');

function createCodex({ settings, Sfx, jumpTo, redecorateAll }) {
    /* ------------------------------------------------------------
       设置、索引、本局数据
       ------------------------------------------------------------ */
    function cfg() {
        const s = settings();
        s.codex ??= {};
        for (const [k, v] of Object.entries(DEFAULTS)) s.codex[k] ??= v;
        return s.codex;
    }
    const save = () => ctx().saveSettingsDebounced();
    const saveMeta = () => ctx().saveMetadataDebounced?.();

    let index = [];
    const indexById = new Map();
    let terms = [];

    // 预置词条的说明在角色卡里写好了，点开直接显示，不进生成队列
    function loadIndex() {
        const c = ctx();
        const ch = c.characterId !== undefined ? c.characters?.[c.characterId] : null;
        const data = ch?.data?.extensions?.ctos_codex;
        index = Array.isArray(data?.index) ? data.index : [];
        indexById.clear();
        for (const e of index) indexById.set('i:' + e.name, e);
        // 本局已经收进来的预置词条，说明一律以卡里写好的为准（旧局里可能还是待生成或旧写法）
        const m = meta();
        if (!m) return;
        for (const [id, e] of Object.entries(m.entries)) {
            const idx = e.src === 'index' && indexById.get(id);
            if (idx) Object.assign(e, staticOf(idx));
        }
    }
    const staticOf = (idx) => ({ name: idx.name, cat: idx.cat, dis: idx.dis, desc: idx.desc, state: 'ready', v: DESC_V, tries: 0 });

    const active = () => settings().enabled && index.length > 0 && ctx().characterId !== undefined && !!ctx().getCurrentChatId?.();

    function meta() {
        const m = ctx().chatMetadata;
        if (!m) return null;
        m.ctosCodex ??= { entries: {}, scanned: {} };
        m.ctosCodex.entries ??= {};
        m.ctosCodex.scanned ??= {};
        return m.ctosCodex;
    }

    // 词条跟着它首次出现的那一版回复走：换到别的 swipe 时先收起来，换回来再出现；楼层或那一版被删掉才真的删
    function alive(e) {
        if (!e.first) return true;
        const msg = ctx().chat?.[e.first.mes];
        return !!msg && (msg.swipe_id ?? 0) === e.first.swipe;
    }
    const shown = () => Object.entries(meta()?.entries || {}).filter(([, e]) => alive(e));
    // 每一版回复都有自己的 send_date（当前这一版在 msg.send_date，其余在 swipe_info 里）。
    // 删掉中间楼层或者删掉某一版以后，楼号和版号会整体前移，靠它找回原来那一处
    function dateOf(mes, swipe) {
        const msg = ctx().chat?.[mes];
        if (!msg) return undefined;
        return swipe === (msg.swipe_id ?? 0) ? msg.send_date : msg.swipe_info?.[swipe]?.send_date;
    }
    const firstAt = (at) => ({ mes: at.mes, swipe: at.swipe, page: at.page, date: dateOf(at.mes, at.swipe) });

    // 划线用的词表：长的先匹配，同一个写法只留一条（预置索引优先）
    function rebuild() {
        const list = [];
        if (cfg().index) for (const e of index) for (const text of [e.name, ...(e.aliases || [])]) list.push({ text, id: 'i:' + e.name });
        for (const [id, e] of shown()) if (e.src !== 'index') list.push({ text: e.name, id });
        const seen = new Set();
        terms = list.filter((x) => x.text && !seen.has(x.text) && seen.add(x.text)).sort((a, b) => b.text.length - a.text.length);
    }
    const idOfText = (text) => terms.find((t) => t.text === text)?.id;

    /* ------------------------------------------------------------
       外层一：给一页正文划线。一页里同一个词只划第一次
       ------------------------------------------------------------ */
    const fresh = new Set();

    function excerptOf(container) {
        return [...container.querySelectorAll(BODY)].map((n) => n.textContent.trim()).join('\n').slice(0, 400);
    }

    function decorate(container, at) {
        if (!container) return;
        const old = container.querySelectorAll('.cdx-term');
        if (old.length) {
            for (const t of old) t.replaceWith(document.createTextNode(t.textContent));
            container.normalize();
        }
        if (!active() || !terms.length) return;
        const m = meta();
        const done = new Set();
        let created = false, added = 0;
        for (const host of container.querySelectorAll(BODY)) {
            const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT);
            const nodes = [];
            while (walker.nextNode()) nodes.push(walker.currentNode);
            for (let node of nodes) {
                while (node && node.nodeValue) {
                    const text = node.nodeValue;
                    let best = null;
                    for (const t of terms) {
                        if (done.has(t.id)) continue;
                        const i = text.indexOf(t.text);
                        if (i >= 0 && (!best || i < best.i)) best = { i, t };
                    }
                    if (!best) break;
                    done.add(best.t.id);
                    const mid = node.splitText(best.i);
                    const rest = mid.splitText(best.t.text.length);
                    const got = ensure(best.t.id, at, container);
                    if (got) created = true;
                    if (got === 'new' && at.latest) added++;
                    const e = m.entries[best.t.id];
                    const span = document.createElement('span');
                    span.className = 'cdx-term' + (e?.opened ? ' seen' : '') + (fresh.has(best.t.id) ? ' drawin' : '');
                    span.dataset.id = best.t.id;
                    span.dataset.src = e?.src || 'index';
                    span.textContent = best.t.text;
                    mid.replaceWith(span);
                    node = rest;
                }
            }
        }
        if (created) { saveMeta(); drawFab(); refreshPanel(); }
        if (added) bump(added);
    }

    // 预置索引里的词第一次出现时才收进笔记本；最新一条回复里的词马上排进写说明的队列，旧消息里的等点开再写
    function ensure(id, at, container) {
        const m = meta();
        const e = m.entries[id];
        if (e) {
            // 首次出现那一版不在了（换了 swipe），预置索引的词就记到眼前这一处
            if (!e.first || !alive(e)) { e.first = firstAt(at); e.excerpt = excerptOf(container); return 'first'; }
            return '';
        }
        const idx = indexById.get(id);
        if (!idx) return '';
        m.entries[id] = { ...staticOf(idx), src: 'index', first: firstAt(at), t: Date.now() };
        return 'new';
    }

    /* ------------------------------------------------------------
       外层二：流式时每写完 N 页，让模型从这几页里找索引里没有的新词
       ------------------------------------------------------------ */
    const pageText = (p) => p.blocks.map((b) => {
        const body = Array.isArray(b.text) ? b.text.join(' ') : (b.text || '');
        if (b.t === 'dia') return `${b.who}：“${body}”`;
        if (b.t === 'voice' && b.name) return `【${b.name}】${body}`;
        if (b.t === 'doc') return `〔${b.src}〕${body}`;
        return body;
    }).join('\n');

    function onPages(pages, { mes, swipe, live, latest }) {
        if (!active() || !cfg().scan || !latest || !pages.length) return;
        // 默认等这一轮写完再一次性识别：流式时每跑一次都要重发一遍上下文，又慢又费，字句还可能改
        if (live && cfg().scanWhen !== 'live') return;
        const m = meta();
        const key = `${dateOf(mes, swipe)}|${hash(pageText(pages[0]).slice(0, 80))}`;
        const done = m.scanned[key] || 0;
        const completed = live ? pages.length - 1 : pages.length;
        if (completed <= done) return;
        if (live && completed - done < cfg().scanEvery) return;
        m.scanned[key] = completed;
        saveMeta();
        for (let from = done; from < completed; from += MAX_SCAN_PAGES) {
            const to = Math.min(completed, from + MAX_SCAN_PAGES);
            scanQueue.push({ pages: pages.slice(from, to), mes, swipe, page0: from });
        }
        runScans();
    }

    const scanQueue = [];
    let scanning = false;
    async function runScans() {
        if (scanning || !scanQueue.length) return;
        scanning = true;
        drawFab();
        const job = scanQueue.shift();
        const chatId = ctx().getCurrentChatId?.();
        try {
            const text = job.pages.map((p, i) => `[第 ${job.page0 + i + 1} 页]\n${pageText(p)}`).join('\n\n');
            const reply = await callModel('scanProfile', SCAN_SYSTEM, `笔记本里已有：\n${knownList()}\n\n正文：\n${text}`);
            if (ctx().getCurrentChatId?.() !== chatId) return;
            const found = parseJson(reply, '[');
            if (Array.isArray(found)) addFound(found, job);
        } catch (err) {
            console.warn('[ctos-codex] 逐页识别失败', err);
        } finally {
            scanning = false;
            drawFab();
            if (scanQueue.length) runScans();
        }
    }

    function addFound(found, job) {
        const m = meta();
        const added = [];
        for (const item of found.slice(0, 6)) {
            const name = String(item?.name || '').trim();
            if (name.length < 2 || name.length > 16 || idOfText(name)) continue;
            const page = job.pages.findIndex((p) => pageText(p).includes(name));
            if (page < 0) continue;
            const id = 'm:' + name;
            if (m.entries[id]) {
                if (alive(m.entries[id])) continue;
                m.entries[id].first = firstAt({ mes: job.mes, swipe: job.swipe, page: job.page0 + page });
                added.push(id);
                continue;
            }
            m.entries[id] = {
                name, cat: CATS.includes(item.cat) ? item.cat : '其它', src: 'model', state: 'pending', dis: String(item.dis || '').slice(0, 30), desc: '',
                first: firstAt({ mes: job.mes, swipe: job.swipe, page: job.page0 + page }), excerpt: pageText(job.pages[page]).slice(0, 400), t: Date.now(),
            };
            fresh.add(id);
            added.push(id);
        }
        if (!added.length) return;
        rebuild();
        saveMeta();
        redecorateAll();
        setTimeout(() => added.forEach((id) => fresh.delete(id)), 700);
        bump(added.length);
        added.forEach(queueDesc);
    }

    /* ------------------------------------------------------------
       内层：划了线的词攒够一批跑一次，写一两句回想
       ------------------------------------------------------------ */
    let jobs = [];
    let working = false;
    let urgent = false;

    function queueDesc(id) {
        if (!jobs.includes(id)) jobs.push(id);
        drawFab();
        if (jobs.length >= cfg().batch) flush();
    }

    // 玩家点开一条还没写好的、或者还是旧写法的：排到最前面，不等攒够一批
    function prioritize(id) {
        const e = meta().entries[id];
        if (e?.state === 'ready' && e.v !== DESC_V) { e.state = 'pending'; e.tries = 0; }
        if (!e || e.state !== 'pending') return;
        jobs = [id, ...jobs.filter((j) => j !== id)];
        urgent = true;
        flush();
    }

    // 没写出来的自动再跑一次，还不行就在词条里留“重试”
    function miss(id, e) {
        e.tries = (e.tries || 0) + 1;
        if (e.tries < 2) { e.state = 'pending'; jobs.push(id); urgent = true; }
        else e.state = 'failed';
    }

    async function flush() {
        if (working || !jobs.length) { drawFab(); return; }
        working = true;
        urgent = false;
        const batch = jobs.splice(0, MAX_BATCH);
        drawFab();
        refreshPanel();
        const m = meta();
        const chatId = ctx().getCurrentChatId?.();
        try {
            const items = batch.filter((id) => m.entries[id]);
            const ask = items.map((id) => `## ${m.entries[id].name}（${m.entries[id].cat}）\n摘录：${m.entries[id].excerpt || '（无）'}`).join('\n\n');
            const reply = await callModel('descProfile', DESC_SYSTEM, `笔记本里已有：\n${knownList(batch)}\n\n要写的词条：\n${ask}`);
            if (ctx().getCurrentChatId?.() !== chatId) return;
            const out = parseJson(reply, '{') || {};
            for (const id of items) {
                const e = m.entries[id];
                const r = out[e.name];
                if (r && typeof r.desc === 'string' && r.desc.trim()) {
                    e.dis = String(r.dis || e.dis || '').slice(0, 30);
                    e.desc = r.desc.trim().slice(0, 200);
                    e.state = 'ready';
                    e.v = DESC_V;
                } else miss(id, e);
            }
        } catch (err) {
            console.warn('[ctos-codex] 写说明失败', err);
            if (ctx().getCurrentChatId?.() === chatId) for (const id of batch) if (m.entries[id]) miss(id, m.entries[id]);
        } finally {
            working = false;
            saveMeta();
            refreshPanel();
            drawFab();
            if (jobs.length && (urgent || jobs.length >= cfg().batch)) flush();
        }
    }

    // 每次跑模型都带上本局全部词条
    // 旧写法的说明不带进去，免得模型照着旧格式写
    function knownList(skip = []) {
        const lines = shown().filter(([id]) => !skip.includes(id))
            .map(([, e]) => `- ${e.name}（${e.cat}）${e.dis ? '：' + e.dis : ''}${e.desc && e.v === DESC_V ? '。' + e.desc.slice(0, 60) : ''}`);
        return lines.length ? lines.join('\n') : '（还没有）';
    }

    // 不走 generateRaw：它会发 CHAT_COMPLETION_PROMPT_READY，别的扩展（比如自动插图）会往里塞自己的提示词，
    // 还会套用主预设的最大长度。这里直接拿当前对话补全设置拼请求，只发我们自己的两条消息。
    async function callModel(which, system, user) {
        const c = ctx();
        const messages = [{ role: 'system', content: system }, { role: 'user', content: user }];
        const profile = cfg()[which];
        let res;
        if (profile) {
            res = await c.ConnectionManagerRequestService.sendRequest(profile, messages, MAX_TOKENS);
        } else {
            if (c.mainApi !== 'openai') throw new Error('笔记本跟随主模型时只支持对话补全接口；文本补全请在笔记本设置里选一个连接配置');
            const max = Math.max(MAX_TOKENS, Number(c.chatCompletionSettings.openai_max_tokens) || 0);
            // 酒馆拼请求时不会自己补模型名，不传就是一个没有 model 的请求，接口直接回 400
            const payload = await c.ChatCompletionService.presetToGeneratePayload({}, {}, { messages, stream: false, max_tokens: max, model: c.getChatCompletionModel() });
            res = await c.ChatCompletionService.sendRequest(payload, true);
        }
        return typeof res === 'string' ? res : (res?.content ?? '');
    }

    function parseJson(text, open) {
        if (!text) return null;
        const close = open === '[' ? ']' : '}';
        const body = String(text).replace(/<think[\s\S]*?<\/think>/gi, '').replace(/```(?:json)?/gi, '');
        const a = body.indexOf(open), b = body.lastIndexOf(close);
        if (a < 0 || b <= a) return null;
        try { return JSON.parse(body.slice(a, b + 1)); } catch { return null; }
    }

    /* ------------------------------------------------------------
       外层三：玩家选中一段字，自己划线
       ------------------------------------------------------------ */
    let tip, tipState = null;

    function locate(node) {
        const el = (node.nodeType === 3 ? node.parentNode : node);
        const r = el.closest('.ctr');
        const mes = el.closest('.mes');
        if (!r || !mes || !r._pages) return null;
        const sheet = el.closest('.ctr-sheet');
        const page = r.dataset.view === 'page' ? r._n : sheet ? [...r.querySelectorAll('.ctr-sheet')].indexOf(sheet) : 0;
        return { r, mes: Number(mes.getAttribute('mesid')), swipe: r._swipe ?? 0, page, container: sheet || r.querySelector('.ctr-page') };
    }

    function showTip(rect, html, state) {
        tipState = state;
        tip.innerHTML = html;
        tip.classList.add('on');
        const w = tip.offsetWidth;
        const x = Math.max(12, Math.min(W.innerWidth - w - 12, rect.left + rect.width / 2 - w / 2));
        tip.style.left = x + 'px';
        tip.style.top = Math.max(8, rect.top - tip.offsetHeight - 12) + 'px';
        tip.style.setProperty('--ax', (rect.left + rect.width / 2 - x) + 'px');
    }
    const hideTip = () => { tip?.classList.remove('on'); tipState = null; };

    function onMouseUp(e) {
        if (!active() || !cfg().manual || e.button !== 0) return;
        if (tip.contains(e.target)) return;
        setTimeout(() => {
            const sel = getSelection();
            const text = String(sel || '').trim();
            if (!text || !sel.rangeCount) return;
            const range = sel.getRangeAt(0);
            const start = range.startContainer, end = range.endContainer;
            const startEl = start.nodeType === 3 ? start.parentNode : start;
            if (!startEl.closest?.('.ctr .ctr-page')) return;
            const rect = range.getBoundingClientRect();
            const blockOf = (n) => (n.nodeType === 3 ? n.parentNode : n).closest('.ctr-b');
            if (blockOf(start) !== blockOf(end) || !startEl.closest(BODY)) return showTip(rect, '<span class="cdx-warn">请在同一段里选</span>');
            if (text.length > 16) return showTip(rect, '<span class="cdx-warn">一次最多划 16 个字</span>');
            const known = idOfText(text) || startEl.closest('.cdx-term')?.dataset.id;
            if (known && meta().entries[known]) return showTip(rect, `<button class="main" data-open="${esc(known)}"><i></i>已有词条，打开</button>`);
            if (start !== end || start.nodeType !== 3) return showTip(rect, '<span class="cdx-warn">选区跨过了已有划线</span>');
            const at = locate(start);
            if (!at) return;
            showTip(rect, '<button class="main" data-mark><i></i>划线记下</button><button data-cancel>取消</button>', { text, at });
        }, 0);
    }

    function markManual(text, at) {
        const m = meta();
        const id = 'u:' + text;
        m.entries[id] = { name: text, cat: '其它', src: 'manual', state: 'pending', dis: '', desc: '', first: firstAt(at), excerpt: excerptOf(at.container), t: Date.now() };
        fresh.add(id);
        rebuild();
        saveMeta();
        redecorateAll();
        setTimeout(() => fresh.delete(id), 700);
        sound();
        bump(1);
        queueDesc(id);
    }

    function unmark(id) {
        const m = meta();
        delete m.entries[id];
        jobs = jobs.filter((j) => j !== id);
        rebuild();
        saveMeta();
        redecorateAll();
        if (view.id === id) view.id = null;
        refreshPanel();
        drawFab();
    }

    /* ------------------------------------------------------------
       点开划线：橙线填满，纸条飞进悬浮框，悬浮框一沉，面板停在这一条
       ------------------------------------------------------------ */
    const sound = () => (skin === 'tw' ? Sfx.click() : Sfx.flip());

    function handleClick(e) {
        const t = e.target.closest?.('.cdx-term');
        if (!t || !active()) return false;
        e.preventDefault();
        hideTip();
        const id = t.dataset.id;
        const entry = meta().entries[id];
        if (!entry) return true;
        entry.opened = true;
        saveMeta();
        t.classList.add('hit');
        setTimeout(() => { t.classList.remove('hit'); t.classList.add('seen'); }, 420);
        sound();
        if (calm()) { openPanel(id); return true; }
        fly(t, entry.name, () => { receive(); openPanel(id); });
        return true;
    }

    function fly(from, label, done) {
        const r = from.getBoundingClientRect(), f = fab.getBoundingClientRect();
        const slip = document.createElement('div');
        slip.className = 'cdx-slip' + (skin === 'tw' ? ' tw' : '');
        slip.textContent = label;
        document.body.appendChild(slip);
        const w = slip.offsetWidth, h = slip.offsetHeight;
        const x0 = r.left + r.width / 2 - w / 2, y0 = r.top + r.height / 2 - h / 2;
        const x1 = f.left + f.width / 2 - w / 2, y1 = f.top + f.height / 2 - h / 2;
        const cx = (x0 + x1) / 2, cy = Math.min(y0, y1) - 140;
        const frames = [];
        for (let i = 0; i <= 12; i++) {
            const k = i / 12, u = 1 - k;
            const x = u * u * x0 + 2 * u * k * cx + k * k * x1, y = u * u * y0 + 2 * u * k * cy + k * k * y1;
            frames.push({ transform: `translate(${x}px,${y}px) rotate(${-6 * Math.sin(k * Math.PI)}deg) scale(${1 - 0.7 * k})`, opacity: k > 0.85 ? 1 - (k - 0.85) * 5 : 1 });
        }
        setTimeout(() => {
            const a = slip.animate(frames, { duration: 440, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
            a.onfinish = () => { slip.remove(); done(); };
        }, 110);
    }

    function receive() {
        if (calm()) return;
        fab.querySelector('.cdx-face').animate(
            [{ transform: 'translateY(0) scale(1)' }, { transform: 'translateY(3px) scale(.94)' }, { transform: 'translateY(0) scale(1)' }],
            { duration: 220, easing: 'cubic-bezier(.3,1.6,.5,1)' });
        if (skin === 'tw') { fab.classList.remove('ping'); void fab.offsetWidth; fab.classList.add('ping'); }
    }

    /* ------------------------------------------------------------
       悬浮框：纸本笔记本；天问上线后换成电子版（头像）
       ------------------------------------------------------------ */
    let fab, panel, badge, unseen = 0, skin = 'nb', dockWatch = null;

    function bump(n) {
        unseen += n;
        badge.textContent = '+' + unseen;
        badge.classList.remove('on');
        void badge.offsetWidth;
        badge.classList.add('on');
        receive();
    }

    function drawFab() {
        if (!fab) return;
        const on = active();
        document.body.classList.toggle('cdx-on', on);
        fab.classList.toggle('busy', working || scanning);
        fab.title = working || scanning ? '笔记本 · 正在整理' : jobs.length ? `笔记本 · 待整理 ${jobs.length} / ${cfg().batch}` : '笔记本';
        if (!on) { closePanel(); hideTip(); }
    }

    function placeFab() {
        const pos = cfg().fab;
        if (!pos) { fab.style.left = fab.style.top = ''; fab.classList.remove('placed'); return; }
        fab.classList.add('placed');
        const size = fab.offsetWidth || 56;
        // 底下压着状态栏和阅读条时，悬浮框只能停在它们上面
        const dock = parseFloat(document.body.style.getPropertyValue('--ctr-dock')) || 0;
        fab.style.left = (pos.side === 'left' ? 16 : W.innerWidth - size - 16) + 'px';
        fab.style.top = Math.max(64, Math.min(W.innerHeight - size - Math.max(64, dock + 12), pos.y * W.innerHeight)) + 'px';
    }

    function paintAvatar() {
        const a = fab.querySelector('.cdx-avatar');
        const c = cfg();
        if (c.avatarImg) { a.textContent = ''; a.style.cssText = `background-image:url("${c.avatarImg}")`; return; }
        const p = PRESETS[c.avatar] || PRESETS[0];
        a.textContent = p.glyph;
        a.style.cssText = `--av-bg:${p.bg};--av-ink:${p.ink}`;
    }
    const avatarStyle = () => fab.querySelector('.cdx-avatar').style.cssText;
    const avatarGlyph = () => (cfg().avatarImg ? '' : (PRESETS[cfg().avatar] || PRESETS[0]).glyph);

    function digital() {
        const chat = ctx().chat || [];
        for (let i = chat.length - 1; i >= 0; i--) {
            const m = chat[i];
            const sd = m?.variables?.[m.swipe_id ?? 0]?.stat_data;
            if (!sd) continue;
            let nick = sd?.['天之叩问']?.['基本']?.['昵称'];
            if (Array.isArray(nick)) nick = nick[0];
            return typeof nick === 'string' && !UNSET_NICK.test(nick.trim());
        }
        return false;
    }

    function refreshSkin(animate) {
        if (!fab) return;
        const next = digital() ? 'tw' : 'nb';
        if (next === skin) return;
        skin = next;
        fab.classList.toggle('tw', skin === 'tw');
        fab.classList.remove('ping');
        panel.classList.toggle('tw', skin === 'tw');
        panel.classList.toggle('nb', skin !== 'tw');
        paintAvatar();
        if (animate && skin === 'tw' && !calm()) unlockAnim();
        refreshPanel();
    }

    function unlockAnim() {
        const face = fab.querySelector('.cdx-face');
        for (let i = 0; i < 8; i++) {
            const s = document.createElement('span');
            s.className = 'cdx-slice';
            s.style.top = (i * 12.5) + '%';
            s.style.height = '12.6%';
            face.appendChild(s);
            s.animate([{ transform: 'none' }, { transform: `translateX(${i % 2 ? 115 : -115}%)` }], { duration: 360, delay: 120 + i * 30, easing: 'cubic-bezier(.6,0,.4,1)', fill: 'forwards' })
                .onfinish = () => s.remove();
        }
        fab.classList.remove('ping'); void fab.offsetWidth; fab.classList.add('ping');
        Sfx.click();
    }

    function setupDrag() {
        let sx, sy, ox, oy, moved = false;
        fab.addEventListener('pointerdown', (e) => {
            if (e.button !== 0) return;
            sx = e.clientX; sy = e.clientY;
            const r = fab.getBoundingClientRect(); ox = r.left; oy = r.top; moved = false;
            fab.setPointerCapture(e.pointerId);
        });
        fab.addEventListener('pointermove', (e) => {
            if (!fab.hasPointerCapture(e.pointerId)) return;
            const dx = e.clientX - sx, dy = e.clientY - sy;
            if (!moved && Math.hypot(dx, dy) < 5) return;
            moved = true;
            fab.classList.add('dragging', 'placed');
            fab.style.left = (ox + dx) + 'px';
            fab.style.top = (oy + dy) + 'px';
        });
        fab.addEventListener('pointerup', (e) => {
            if (!fab.hasPointerCapture(e.pointerId)) return;
            fab.releasePointerCapture(e.pointerId);
            fab.classList.remove('dragging');
            if (!moved) { panel.classList.contains('on') ? closePanel() : openPanel(null); return; }
            const r = fab.getBoundingClientRect();
            cfg().fab = { side: r.left + r.width / 2 < W.innerWidth / 2 ? 'left' : 'right', y: r.top / W.innerHeight };
            save();
            placeFab();
            if (panel.classList.contains('on')) placePanel();
        });
    }

    /* ------------------------------------------------------------
       面板：从悬浮框的角展开；放不下就贴在旁边
       ------------------------------------------------------------ */
    const view = { tab: '全部', id: null, set: false, q: '' };

    /* ------------------------------------------------------------
       书库：内置的世界书管理。列书 → 列条目 → 就地改，存盘即生效
       ------------------------------------------------------------ */
    const bk = { list: null, cache: {}, counts: {}, pending: {}, live: null, note: '', busy: false };

    function placePanel() {
        const f = fab.getBoundingClientRect();
        const w = panel.offsetWidth || 380, h = panel.offsetHeight || 560;
        const right = f.left + f.width / 2 > W.innerWidth / 2;
        let x, y, from;
        if (f.top - h - 12 >= 12) {
            x = right ? f.right - w : f.left;
            y = f.top - h - 12;
            from = right ? '100% 0 0 100%' : '100% 100% 0 0';
        } else {
            x = right ? f.left - w - 12 : f.right + 12;
            y = Math.max(12, Math.min(W.innerHeight - h - 12, f.bottom - h));
            from = right ? '0 0 0 100%' : '0 100% 0 0';
        }
        panel.style.left = Math.max(12, Math.min(W.innerWidth - w - 12, x)) + 'px';
        panel.style.top = y + 'px';
        panel.style.setProperty('--from', from);
    }

    const isOpen = () => panel?.classList.contains('on');

    function openPanel(id) {
        if (!active()) return;
        view.set = false;
        view.id = id; view.look = null;
        const e = id && meta().entries[id];
        if (e) prioritize(id);
        unseen = 0;
        badge.classList.remove('on');
        const opening = !isOpen();
        panel.classList.remove('off');
        panel.classList.add('on');
        refreshPanel();
        if (compact()) enterFull();
        else placePanel();
        if (opening && skin === 'tw' && !calm()) {
            panel.style.setProperty('--h', panel.offsetHeight + 'px');
            panel.classList.remove('scanning'); void panel.offsetWidth; panel.classList.add('scanning');
            scramble(panel.querySelector('.cdx-e-name'));
        }
    }

    function closePanel() {
        if (!isOpen()) return;
        leaveFull();
        panel.classList.remove('on');
        panel.classList.add('off');
        setTimeout(() => panel.classList.remove('off'), calm() ? 1 : 180);
    }

    // 全屏时让开 ctOS 的外壳：桌面上是左边那条竖栏，手机上是顶部那条横栏。
    // 它们压在笔记本上面（z-index 更高），不让开就会挡掉第一列/第一行。
    const isFull = () => !!panel?.classList.contains('full');
    function syncFullInset() {
        if (!panel) return;
        const rail = document.querySelector('#top-settings-holder');
        let left = 0, top = 0;
        if (rail) {
            const st = getComputedStyle(rail);
            const r = rail.getBoundingClientRect();
            if (st.display !== 'none' && st.visibility !== 'hidden' && r.width > 0 && r.height > 0) {
                const vertical = r.height >= W.innerHeight * 0.8 && r.width <= W.innerWidth * 0.6 && r.left <= 2;
                const horizontal = r.width >= W.innerWidth * 0.8 && r.height <= W.innerHeight * 0.3 && r.top <= 2;
                if (vertical) left = Math.max(0, Math.round(r.right));
                else if (horizontal) top = Math.max(0, Math.round(r.bottom));
            }
        }
        panel.style.setProperty('--cdx-left', left + 'px');
        panel.style.setProperty('--cdx-top', top + 'px');
    }
    function leaveFull() {
        if (!panel || !isFull()) return false;
        panel.classList.remove('full');
        panel.style.left = panel.style.top = '';
        panel.style.removeProperty('--cdx-left');
        panel.style.removeProperty('--cdx-top');
        const b = panel.querySelector('.cdx-full');
        if (b) { b.textContent = '全屏'; b.title = '笔记本全屏'; }
        placePanel();
        return true;
    }
    function enterFull() {
        if (!panel || isFull()) return;
        syncFullInset();
        panel.classList.add('full');
        panel.style.left = panel.style.top = '';
        const b = panel.querySelector('.cdx-full');
        if (b) { b.textContent = '窗口'; b.title = '收成小窗'; }
    }
    function toggleFull() {
        if (isFull()) leaveFull();
        else enterFull();
    }
    // 手机竖屏或横屏：小窗可滑动的区域太小，笔记本一律铺满，和 style.css 里藏起全屏按钮的条件一致
    const compact = () => matchMedia('(max-width: 700px), (max-height: 600px)').matches;
    // ESC 的第一档：先退出全屏，再关面板
    function back() {
        if (!compact() && leaveFull()) return true;
        if (isOpen()) { closePanel(); return true; }
        return false;
    }

    function scramble(el) {
        if (!el) return;
        const final = el.textContent, glyphs = '█▓▒░#%&0123456789ABCDEF', t0 = performance.now();
        (function tick(now) {
            const k = Math.min(1, (now - t0) / 300), keep = Math.floor(final.length * k);
            el.textContent = final.slice(0, keep) + final.slice(keep).replace(/\S/g, () => glyphs[Math.random() * glyphs.length | 0]);
            if (k < 1) requestAnimationFrame(tick); else el.textContent = final;
        })(t0);
    }

    const SRC = { index: '预置索引', model: '逐页识别', manual: '手动划线' };

    function refreshPanel() {
        if (!isOpen()) return;
        const m = meta();
        if (!m) return;
        const tw = skin === 'tw';
        panel.querySelector('.cdx-title').innerHTML = tw
            ? `<span class="cdx-mini" style='${esc(avatarStyle())}'>${esc(avatarGlyph())}</span><span><b>道尔顿的笔记本</b><small>NOTEBOOK · 电子版</small></span>`
            : '<b>道尔顿的笔记本</b><small>NOTEBOOK · 随身</small>';
        const ids = shown().map(([k]) => k).sort((a, b) => (m.entries[a].t || 0) - (m.entries[b].t || 0));
        panel.querySelector('.cdx-count').textContent = view.tab === '书库'
            ? (bk.note || '书库')
            : `${ids.length} 条 · 本局${jobs.length ? ` · 待整理 ${jobs.length} / ${cfg().batch}` : ''}${working ? ' · 整理中' : ''}`;
        panel.querySelector('.cdx-tabs').innerHTML = [...['全部', ...CATS].filter((c) => c === '全部' || ids.some((k) => m.entries[k].cat === c)), '书库']
            .map((c) => `<button class="${c === view.tab && !view.id && !view.set ? 'on' : ''}" data-tab="${c}">${c}</button>`).join('');
        const body = panel.querySelector('.cdx-body');
        if (view.set) { body.innerHTML = settingsHtml(); return; }
        if (view.tab === '书库') { body.innerHTML = bookViewHtml(); return; }
        if (view.id && m.entries[view.id]) { body.innerHTML = entryHtml(view.id, m.entries[view.id]); return; }
        view.id = null;
        const q = view.q;
        const list = ids.filter((k) => (view.tab === '全部' || m.entries[k].cat === view.tab) && (!q || m.entries[k].name.includes(q)));
        body.innerHTML = list.length
            ? '<div class="cdx-grid">' + list.map((k) => {
                const e = m.entries[k];
                const av = e.cat === '人物' ? avatarHtml(spriteOfEntry(k, e)) : '';
                return `<button class="cdx-tile${av ? ' has-av' : ''}${e.state === 'pending' ? ' pending' : ''}${e.state === 'failed' ? ' failed' : ''}" data-id="${esc(k)}">${av}<b>${esc(e.name)}</b><small>${e.cat}</small></button>`;
            }).join('') + '</div>'
            : `<p class="cdx-empty">${q ? `没有找到“${esc(q)}”。` : '还没有记下什么。读到划线的词，点一下就会记在这里。'}</p>`;
    }

    function entryHtml(id, e) {
        const body = e.state === 'ready'
            ? `${e.dis ? `<div class="cdx-e-dis">${esc(e.dis)}</div>` : ''}<p class="cdx-e-desc">${esc(e.desc)}</p>`
            : e.state === 'failed'
                ? `<p class="cdx-e-fail">这一条没写出来。</p><button class="cdx-chip" data-retry="${esc(id)}">重试</button>`
                : '<div class="cdx-skel"><span>整理中</span><i></i><i></i></div>';
        const first = e.first ? `<button class="cdx-chip" data-jump="${esc(id)}">首次出现 · 第 ${e.first.mes} 楼 · 第 ${e.first.page + 1} 页 →</button>` : '';
        return `<div class="cdx-entry"><button class="cdx-back" data-back>← 全部词条</button>
<div><div class="cdx-e-kind">${e.cat}</div><h3 class="cdx-e-name">${esc(e.name)}</h3></div>${e.cat === '人物' ? galleryHtml(id, e) : ''}${body}
<div class="cdx-e-meta"><span class="cdx-chip">来源 · ${SRC[e.src] || e.src}</span>${first}${e.src === 'manual' ? `<button class="cdx-chip" data-remove="${esc(id)}">移除划线</button>` : ''}</div></div>`;
    }

    /* ------------------------------------------------------------
       立绘：有立绘的人物在词条里放一张大图和全部衣装的缩略图，列表里的名字格带一个头像
       天问没有自己的立绘，有身体时用那具身体的图
       ------------------------------------------------------------ */
    // 每个人常服立绘里脸的中心（占画布宽高的比例），头像按它对准
    const FACE = { 月见: [0.51, 0.256], 溟: [0.567, 0.205], 玄甲: [0.567, 0.244], 玉衡: [0.49, 0.23], 珍珠: [0.51, 0.276] };
    const LOOK_ORDER = ['常服', '定妆', '夜场', '涩', '水着', '花嫁', 'IF'];
    function spriteOfEntry(id, e) {
        const idx = indexById.get(id);
        const names = [e.name, ...(idx?.aliases ?? [])];
        if (names.some((n) => TIANWEN.includes(n))) {
            const tw = tianwenNow();
            return tw.shell ? { key: tw.shell, tianwen: true } : { key: '', tianwen: true };
        }
        for (const n of names) { const k = spriteKey(n); if (k) return { key: k }; }
        return null;
    }
    const spriteSrc = (file) => spriteUrl(file, spriteLocal);
    function avatarHtml(sp) {
        if (!sp?.key || !SPRITE_PACK.chars[sp.key]) return '';
        const [fx, fy] = FACE[sp.key] ?? [0.5, 0.24];
        // 头像框 38px，图放大 2.6 倍以后把脸挪到框中间
        const W = 38 * 2.6, H = W * 1560 / 900;
        return `<i class="cdx-av-face"><img alt="" data-sprite="${esc(sp.key)}" src="${esc(spriteSrc(sp.key))}" style="width:${W.toFixed(0)}px;left:${(19 - fx * W).toFixed(0)}px;top:${(19 - fy * H).toFixed(0)}px" loading="lazy"></i>`;
    }
    function galleryHtml(id, e) {
        const sp = spriteOfEntry(id, e);
        if (!sp) return '';
        if (!sp.key) return `<p class="cdx-gal-none">${sp.tianwen ? '天问还没有身体，没有立绘。拿到一具身体以后，这里会换成那具身体的样子。' : ''}</p>`;
        const ch = SPRITE_PACK.chars[sp.key];
        const looks = [...ch.looks].sort((a, b) => LOOK_ORDER.indexOf(a) - LOOK_ORDER.indexOf(b))
            .map((l) => ({ label: l, file: l === '常服' ? sp.key : `${sp.key}·${l}` }));
        for (const c of SPRITE_PACK.cg?.[sp.key] ?? []) looks.push({ label: c, file: `CG/${sp.key}·${c}`, cg: true });
        const cur = looks.find((l) => l.file === view.look) ?? looks[0];
        return `<div class="cdx-gal" data-key="${esc(sp.key)}">
<figure class="cdx-gal-main${cur.cg ? ' cg' : ''}"><img alt="" data-sprite="${esc(cur.file)}" src="${esc(spriteSrc(cur.file))}"><figcaption>${sp.tianwen ? `天问 · ${esc(sp.key)}的身体 · ` : ''}${esc(cur.label)}</figcaption></figure>
${looks.length > 1 ? `<div class="cdx-gal-strip">${looks.map((l) => `<button class="${l.file === cur.file ? 'on' : ''}${l.cg ? ' cg' : ''}" data-look="${esc(l.file)}" title="${esc(l.label)}"><img alt="" data-sprite="${esc(l.file)}" src="${esc(spriteSrc(l.file))}" loading="lazy"><span>${esc(l.label)}</span></button>`).join('')}</div>` : ''}
</div>`;
    }

    function profileOptions(current) {
        let profiles = [];
        try { profiles = ctx().ConnectionManagerRequestService?.getSupportedProfiles?.() || []; } catch { profiles = []; }
        return `<option value="">跟随主模型</option>` + profiles.map((p) => `<option value="${esc(p.id)}"${p.id === current ? ' selected' : ''}>${esc(p.name)}</option>`).join('');
    }

    function settingsHtml() {
        const c = cfg();
        const check = (k, label) => `<label><input type="checkbox" data-cfg="${k}"${c[k] ? ' checked' : ''}>${label}</label>`;
        const avatars = skin === 'tw'
            ? `<div class="cdx-row"><span>封面头像</span><div class="cdx-avs">${PRESETS.map((p, i) => `<button class="cdx-av${!c.avatarImg && c.avatar === i ? ' on' : ''}" data-av="${i}" style="--av-bg:${p.bg};--av-ink:${p.ink}">${p.glyph}</button>`).join('')}<button class="cdx-av up${c.avatarImg ? ' on' : ''}" data-up${c.avatarImg ? ` style='background-image:url("${c.avatarImg}")'` : ''}>${c.avatarImg ? '' : '上传'}</button></div></div>`
            : '';
        return `<div class="cdx-set">
<div class="cdx-row"><span>划线来源</span><div class="cdx-checks">${check('index', '预置索引')}${check('scan', '模型识别')}${check('manual', '手动划线')}</div></div>
<label class="cdx-row"><span>识别时机</span><select data-cfg="scanWhen"><option value="end"${c.scanWhen !== 'live' ? ' selected' : ''}>本轮写完后一次性识别</option><option value="live"${c.scanWhen === 'live' ? ' selected' : ''}>流式时逐页识别</option></select></label>
${c.scanWhen === 'live' ? `<label class="cdx-row"><span>逐页间隔</span><select data-cfg="scanEvery">${[1, 2, 3, 5].map((n) => `<option value="${n}"${c.scanEvery === n ? ' selected' : ''}>每 ${n} 页跑一次</option>`).join('')}</select></label>` : ''}
<label class="cdx-row"><span>写说明</span><select data-cfg="batch">${[1, 3, 5].map((n) => `<option value="${n}"${c.batch === n ? ' selected' : ''}>每攒 ${n} 个划线跑一次</option>`).join('')}</select></label>
<label class="cdx-row"><span>识别模型</span><select data-cfg="scanProfile">${profileOptions(c.scanProfile)}</select></label>
<label class="cdx-row"><span>说明模型</span><select data-cfg="descProfile">${profileOptions(c.descProfile)}</select></label>
<div class="cdx-row"><span>外观</span><div>${skin === 'tw' ? '电子版' : '纸本 <small>天问上线后换成电子版</small>'}</div></div>${avatars}
<p class="cdx-note">词条是道尔顿读到这里时想起来的东西，只在这里看，不随每轮发给主线。后台跑模型时会带上本局全部词条；点开一条还没写好的，会立刻把这一批跑掉。</p>
<button class="cdx-back" data-back>← 返回词条</button></div>`;
    }

    /* ------------------------------------------------------------
       书库：列表 → 条目 → 编辑。走酒馆自己的世界书接口，保存立刻写盘。
       卡内那份世界书是构建脚本生成的，这里改的是外部文件，重建时会覆盖，
       所以条目页上一直挂着这句话。
       ------------------------------------------------------------ */
    const gatherStrings = (o, acc = []) => {
        if (typeof o === 'string') acc.push(o);
        else if (Array.isArray(o)) o.forEach((x) => gatherStrings(x, acc));
        else if (o && typeof o === 'object') Object.values(o).forEach((x) => gatherStrings(x, acc));
        return acc;
    };

    async function wiFetch(path, body) {
        const c = ctx();
        const r = await fetch('/api/worldinfo/' + path, { method: 'POST', headers: c.getRequestHeaders(), body: JSON.stringify(body || {}) });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
    }

    async function loadBooks(force) {
        if (bk.list && !force) return;
        if (bk.busy) return; // bookListHtml 会在渲染时点名要列表，这里拦住重入，不然会同步递归
        bk.busy = true;
        bk.note = '正在读世界书列表…';
        try {
            const list = await wiFetch('list');
            bk.list = (Array.isArray(list) ? list : []).map((x) => ({ name: x.file_id || x.name, label: x.name || x.file_id, count: bk.counts[x.file_id] ?? null }));
            bk.note = bk.list.length + ' 本';
            bk.busy = false;
            if (isOpen() && view.tab === '书库') refreshPanel();
        } catch (e) {
            bk.busy = false; bk.note = '读不到世界书列表：' + e.message;
            if (isOpen() && view.tab === '书库') refreshPanel();
        }
    }

    // 条目数要一本本取，慢慢补上，别把面板卡住
    async function countBooks(names) {
        for (const name of names) {
            if (bk.pending[name]) continue;
            bk.pending[name] = true;
            try {
                const b = bk.cache[name] || await ctx().loadWorldInfo(name);
                bk.cache[name] = b;
                bk.counts[name] = b ? Object.keys(b.entries || {}).length : 0;
            } catch { bk.counts[name] = 0; }
            delete bk.pending[name];
            if (isOpen() && view.tab === '书库' && !view.wb) refreshPanel();
        }
    }

    async function openBook(name) {
        view.wb = name; view.uid = null; view.q = '';
        bk.note = '正在读 ' + name + '…'; bk.live = null; refreshPanel();
        try {
            bk.cache[name] = await ctx().loadWorldInfo(name);
            bk.counts[name] = bk.cache[name] ? Object.keys(bk.cache[name].entries || {}).length : 0;
            bk.note = bk.counts[name] + ' 条';
        } catch (e) { bk.note = '读不到这本：' + e.message; }
        refreshPanel();
    }

    function bookViewHtml() {
        if (!view.wb) return bookListHtml();
        if (!bk.cache[view.wb]) return `<p class="cdx-empty">${esc(bk.note || '正在读…')}</p>`;
        if (view.uid == null) return bookEntriesHtml();
        return bookEditHtml();
    }

    function bookListHtml() {
        if (!bk.list) return `<p class="cdx-empty">${esc(bk.note || '正在读世界书列表…')}</p>`;
        const q = view.q;
        const rows = bk.list.filter((b) => !q || (b.label || b.name).includes(q) || b.name.includes(q));
        return `<div class="cdx-bkbar"><b>世界书</b><span>${esc(bk.note)}</span><button class="cdx-chip" data-wbrefresh>重新读一遍</button></div>
<div class="cdx-bks">${rows.map((b) => `<button class="cdx-bk" data-wb="${esc(b.name)}"><b>${esc(b.label || b.name)}</b><small>${b.count === null || b.count === undefined ? '' : b.count + ' 条'}</small></button>`).join('') || '<p class="cdx-empty">没有匹配的书。</p>'}</div>
<p class="cdx-note">这里改的是酒馆里的世界书文件，保存就写盘，下一轮按新的跑。卡内那份世界书由构建脚本生成，在这里改不会动到卡，重建时会被覆盖。</p>`;
    }

    function bookEntriesHtml() {
        const b = bk.cache[view.wb];
        const q = view.q;
        const rows = Object.entries(b.entries || {}).map(([uid, e]) => ({ uid, e }))
            .filter(({ e }) => !q || (e.comment || '').includes(q) || (e.key || []).some((k) => k.includes(q)))
            .sort((a, z) => (a.e.order ?? 100) - (z.e.order ?? 100) || String(a.uid).localeCompare(String(z.uid)));
        return `<div class="cdx-bkbar"><button class="cdx-chip" data-wbback>← 世界书</button><b>${esc(view.wb)}</b><span>${rows.length} 条</span><button class="cdx-chip" data-wblive>标记本轮注入</button></div>
<div class="cdx-ents">${rows.map(({ uid, e }) => {
            const seen = bk.live ? bk.live.has(String(uid)) : null;
            return `<button class="cdx-ent${e.disable ? '' : ' on'}${seen === true ? ' live' : ''}" data-wbent="${esc(String(uid))}"><b>${esc(e.comment || '（没名字）')}</b><small>${e.constant ? '常驻' : ((e.key || []).slice(0, 3).join(' / ') || '无触发词')} · 序 ${e.order ?? 100} · ${String(e.content || '').length} 字${e.disable ? ' · 已关闭' : ''}${seen === true ? ' · 本轮在' : ''}</small></button>`;
        }).join('')}</div>
<p class="cdx-note">点一条就地改。保存会立刻写进酒馆的世界书文件。</p>`;
    }

    function bookEditHtml() {
        const e = bk.cache[view.wb]?.entries?.[view.uid];
        if (!e) return '<p class="cdx-empty">这一条读不到了。</p>';
        const POS = [['角色定义之前', 0], ['角色定义之后', 1], ['作者注释顶部', 2], ['作者注释底部', 3], ['按深度插入', 4]];
        return `<div class="cdx-edit">
<div class="cdx-bkbar"><button class="cdx-chip" data-wbback>← 条目</button><b>${esc(e.comment || '（没名字）')}</b><span>${String(e.content || '').length} 字</span></div>
<label class="cdx-row"><span>名字</span><input data-wbf="comment" value="${esc(e.comment || '')}"></label>
<label class="cdx-row"><span>触发词</span><input data-wbf="key" value="${esc((e.key || []).join(', '))}" placeholder="逗号分隔"></label>
<div class="cdx-row"><span>常驻</span><input type="checkbox" data-wbf="constant"${e.constant ? ' checked' : ''}><span>启用</span><input type="checkbox" data-wbf="enable"${e.disable ? '' : ' checked'}></div>
<div class="cdx-row"><span>顺序</span><input type="number" data-wbf="order" value="${e.order ?? 100}"></div>
<label class="cdx-row"><span>位置</span><select data-wbf="position">${POS.map(([t, v]) => `<option value="${v}"${(e.position ?? 1) === v ? ' selected' : ''}>${t}</option>`).join('')}</select></label>
<div class="cdx-row"><span>深度</span><input type="number" data-wbf="depth" value="${e.depth ?? 4}"></div>
<textarea class="cdx-text" data-wbf="content" spellcheck="false" rows="14">${esc(e.content || '')}</textarea>
<div class="cdx-bkbar"><button class="cdx-chip main" data-wbsave>保存</button><span>${esc(bk.note)}</span></div>
</div>`;
    }

    async function saveBookEntry() {
        const b = bk.cache[view.wb];
        const e = b?.entries?.[view.uid];
        if (!e) return;
        const f = (k) => panel.querySelector('[data-wbf="' + k + '"]');
        e.comment = f('comment').value.trim();
        e.key = f('key').value.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
        e.constant = !!f('constant').checked;
        e.disable = !f('enable').checked;
        e.order = Number(f('order').value) || 0;
        e.position = Number(f('position').value) || 0;
        e.depth = Number(f('depth').value) || 0;
        e.content = f('content').value;
        bk.note = '正在保存…'; refreshPanel();
        try {
            await ctx().saveWorldInfo(view.wb, b, true);
            ctx().updateWorldInfoList?.();
            bk.note = '已保存 · ' + new Date().toLocaleTimeString().slice(0, 5);
            toastr?.success?.('已写进世界书：' + view.wb);
        } catch (err) {
            bk.note = '保存失败：' + err.message;
            toastr?.error?.('保存失败：' + err.message);
        }
        refreshPanel();
    }

    // 用一次干跑，看这一本里哪些条目真的进了这一轮的上下文
    async function markLive() {
        bk.note = '正在跑一次扫描…'; refreshPanel();
        try {
            const c = ctx();
            const chat = (c.chat || []).map((x) => x.mes || '').reverse();
            const r = await c.getWorldInfoPrompt(chat, c.maxContext || 8192, true);
            const hay = gatherStrings(r).join('\n').replace(/\s+/g, ' ');
            const b = bk.cache[view.wb];
            bk.live = new Set();
            for (const [uid, e] of Object.entries(b.entries || {})) {
                const head = String(e.content || '').replace(/\s+/g, ' ').trim().slice(0, 60);
                if (head && hay.includes(head)) bk.live.add(String(uid));
            }
            bk.note = '本轮注入 ' + bk.live.size + ' 条';
        } catch (err) {
            bk.live = null;
            bk.note = '扫描失败：' + err.message;
        }
        refreshPanel();
    }

    function onPanelClick(e) {
        const b = e.target.closest('button');
        if (!b) return;
        const d = b.dataset;
        if (d.tab) {
            view.tab = d.tab; view.id = null; view.set = false;
            if (d.tab === '书库') { view.wb = null; view.uid = null; view.q = ''; bk.live = null; loadBooks(); }
            refreshPanel();
        }
        else if (d.wb) openBook(d.wb);
        else if (b.hasAttribute('data-wbrefresh')) { bk.list = null; bk.counts = {}; loadBooks(true); }
        else if (b.hasAttribute('data-wbback')) { if (view.uid != null) view.uid = null; else view.wb = null; refreshPanel(); }
        else if (d.wbent !== undefined) { view.uid = d.wbent; refreshPanel(); }
        else if (b.hasAttribute('data-wbsave')) saveBookEntry();
        else if (b.hasAttribute('data-wblive')) markLive();
        else if (d.id) {
            view.id = d.id; view.look = null;
            const en = meta().entries[d.id];
            if (en) { en.opened = true; saveMeta(); prioritize(d.id); }
            refreshPanel();
            if (skin === 'tw' && !calm()) scramble(panel.querySelector('.cdx-e-name'));
            sound();
        }
        else if (b.hasAttribute('data-back')) { view.id = null; view.set = false; refreshPanel(); }
        else if (d.retry) { const en = meta().entries[d.retry]; if (en) { en.state = 'pending'; en.tries = 0; refreshPanel(); prioritize(d.retry); } }
        else if (d.jump) {
            const en = meta().entries[d.jump];
            const err = en?.first ? jumpTo(en.first.mes, en.first.page, d.jump) : '';
            if (err) toastr.info(err);
        }
        else if (d.remove) unmark(d.remove);
        else if (d.av !== undefined) { cfg().avatar = Number(d.av); cfg().avatarImg = ''; save(); paintAvatar(); refreshPanel(); }
        else if (b.hasAttribute('data-up')) upload.click();
    }

    function onPanelChange(e) {
        const el = e.target.closest('[data-cfg]');
        if (!el) return;
        const c = cfg();
        const k = el.dataset.cfg;
        c[k] = el.type === 'checkbox' ? el.checked : el.tagName === 'SELECT' && /Every|batch/.test(k) ? Number(el.value) : el.value;
        save();
        if (k === 'index') { rebuild(); redecorateAll(); }
        if (k === 'batch' && jobs.length >= c.batch) flush();
        refreshPanel();
    }

    // 上传头像：缩到 160 像素再存，别把设置文件撑大
    function onUpload(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        const img = new Image();
        img.onload = () => {
            const size = 160, cv = document.createElement('canvas');
            cv.width = cv.height = size;
            const s = Math.min(img.width, img.height);
            cv.getContext('2d').drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
            cfg().avatarImg = cv.toDataURL('image/jpeg', 0.85);
            save();
            paintAvatar();
            refreshPanel();
            URL.revokeObjectURL(img.src);
        };
        img.src = URL.createObjectURL(f);
        e.target.value = '';
    }

    /* ------------------------------------------------------------
       挂载与事件
       ------------------------------------------------------------ */
    let upload;

    function mount() {
        if (fab) return;
        document.body.insertAdjacentHTML('beforeend', `
<button class="cdx-fab" id="cdx-fab" aria-label="道尔顿的笔记本">
  <span class="cdx-face"><span class="cdx-cover"><em></em><small>NOTES</small></span><span class="cdx-avatar"></span></span>
  <span class="cdx-sweep"></span><span class="cdx-badge"></span>
  <i class="cdx-br a"></i><i class="cdx-br b"></i><i class="cdx-br c"></i><i class="cdx-br d"></i>
</button>
<section class="cdx-panel nb" id="cdx-panel" aria-label="道尔顿的笔记本">
  <i class="cdx-cn a"></i><i class="cdx-cn b"></i><i class="cdx-cn c"></i><i class="cdx-cn d"></i><div class="cdx-scan"></div>
  <header class="cdx-head">
    <div class="cdx-title"></div><button class="cdx-full" data-full title="笔记本全屏">全屏</button><button class="cdx-x" data-close>ESC 合上</button>
    <div class="cdx-search"><input placeholder="查找词条"></div>
  </header>
  <nav class="cdx-tabs"></nav>
  <div class="cdx-body"></div>
  <footer class="cdx-foot"><span class="cdx-count"></span><button data-settings>设置</button></footer>
</section>
<div class="cdx-tip" id="cdx-tip"></div>
<input type="file" accept="image/*" id="cdx-upload" hidden>`);
        fab = document.getElementById('cdx-fab');
        panel = document.getElementById('cdx-panel');
        tip = document.getElementById('cdx-tip');
        upload = document.getElementById('cdx-upload');
        badge = fab.querySelector('.cdx-badge');
        setupDrag();
        paintAvatar();
        placeFab();
        panel.addEventListener('click', (e) => {
            if (e.target.closest('[data-close]')) return closePanel();
            if (e.target.closest('[data-full]')) return toggleFull();
            if (e.target.closest('[data-settings]')) { view.set = !view.set; view.id = null; return refreshPanel(); }
            const look = e.target.closest('[data-look]');
            if (look) { view.look = look.dataset.look; return refreshPanel(); }
            onPanelClick(e);
        });
        // 立绘先找酒馆本地的文件夹，缺图就换 CDN（和全屏立绘共用同一个开关）
        panel.addEventListener('error', (e) => {
            const img = e.target;
            // 笔记本挂在酒馆主页面上，脚本跑在 iframe 里，跨窗口不能用 instanceof，按标签名认
            if (img?.tagName !== 'IMG' || !img.dataset.sprite || img.dataset.cdn) return;
            spriteLocal = false;
            img.dataset.cdn = '1';
            img.src = spriteUrl(img.dataset.sprite, false);
        }, true);
        panel.addEventListener('change', onPanelChange);
        panel.querySelector('.cdx-search input').addEventListener('input', (e) => { view.q = e.target.value.trim(); view.id = null; view.set = false; refreshPanel(); });
        upload.addEventListener('change', onUpload);
        tip.addEventListener('mousedown', (e) => e.preventDefault());
        tip.addEventListener('click', (e) => {
            const b = e.target.closest('button');
            if (!b) return;
            const st = tipState;
            if (b.hasAttribute('data-mark') && st) markManual(st.text, st.at);
            else if (b.hasAttribute('data-unmark') && st) unmark(st.id);
            else if (b.dataset.open) openPanel(b.dataset.open);
            hideTip();
            getSelection().removeAllRanges();
        });
        on(document, 'mouseup', onMouseUp);
        on(document, 'mousedown', (e) => {
            if (tip && !tip.contains(e.target)) hideTip();
            if (isOpen() && !panel.contains(e.target) && !fab.contains(e.target) && !e.target.closest?.('.cdx-term') && !tip.contains(e.target)) closePanel();
        });
        // 右键自己划的线：可以撤掉
        on(document, 'contextmenu', (e) => {
            const t = e.target.closest?.('.cdx-term[data-src="manual"]');
            if (!t || !active()) return;
            e.preventDefault();
            showTip(t.getBoundingClientRect(), `<button data-unmark>移除划线</button><button data-open="${esc(t.dataset.id)}">打开词条</button>`, { id: t.dataset.id });
        });
        on(W, 'resize', () => {
            placeFab();
            if (!isOpen()) return;
            if (compact()) enterFull();
            if (isFull()) syncFullInset(); else placePanel();
        });
        dockWatch = new MutationObserver(() => { if (fab) placeFab(); });
        dockWatch.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });
    }

    // 卡片卸载：笔记本挂在主页面上的东西全部拿掉
    function unmount() {
        dockWatch?.disconnect();
        dockWatch = null;
        for (const el of [fab, panel, tip, upload, ...document.querySelectorAll('.cdx-slip')]) el?.remove();
        document.body.classList.remove('cdx-on');
        fab = panel = tip = upload = badge = null;
    }

    function onChatChanged() {
        jobs = [];
        scanQueue.length = 0;
        unseen = 0;
        badge?.classList.remove('on');
        view.id = null; view.set = false; view.q = '';
        loadIndex();
        rebuild();
        skin = 'unset';
        refreshSkin(false);
        drawFab();
        closePanel();
        redecorateAll();
    }

    // 删了楼层或者删了某一版：按每一版自己的 send_date 找回词条首次出现的位置，
    // 找不到说明原文没了，词条一起拿掉；预置索引的词在别处还出现的话，重绘时会重新收进来
    function relocate() {
        const m = meta();
        if (!m) return;
        const chat = ctx().chat || [];
        const where = new Map();
        chat.forEach((msg, mes) => {
            const n = Math.max(1, msg.swipes?.length || 0);
            for (let swipe = 0; swipe < n; swipe++) {
                const d = dateOf(mes, swipe);
                if (d) where.set(d, { mes, swipe });
            }
        });
        for (const [id, e] of Object.entries(m.entries)) {
            if (!e.first) continue;
            const to = e.first.date ? where.get(e.first.date) : (e.first.mes < chat.length ? e.first : null);
            if (to) { e.first.mes = to.mes; e.first.swipe = to.swipe; } else delete m.entries[id];
        }
        for (const k of Object.keys(m.scanned)) if (!where.has(k.split('|')[0])) delete m.scanned[k];
        jobs = jobs.filter((id) => m.entries[id]);
        if (view.id && !m.entries[view.id]) view.id = null;
        saveMeta();
        refresh();
    }

    // 换了一版回复：词条不删，只是跟着那一版收起或重新出现
    function refresh() {
        rebuild();
        redecorateAll();
        refreshPanel();
        drawFab();
    }

    return {
        mount, unmount, decorate, onPages, handleClick, onChatChanged, relocate, onSwiped: refresh, refreshSkin,
        refresh: drawFab, isOpen, close: closePanel, back, hideTip,
    };
}
return { createCodex };
})();

// ctOS 阅读器：把酒馆整体重绘成 ctOS 黑（PC），AI 回复按视觉小说一页一页点着读。
// 正常模式：阅读器嵌在消息流里；全屏模式：最新一条回复铺满窗口。
// 流式生成时边收边分页，已经写完的页可以先读；非流式等整条到齐再分页。
// 输入框只在读到最新一条的最后一页时出现。
// 正文里的词划线，点开进道尔顿的笔记本（codex.js）。
// 整套随角色卡分发：构建时拼进卡里的酒馆助手脚本，只在这张卡的聊天里运行，换卡时自动卸载、酒馆恢复原样。

const MODULE = 'ctosReader';
const DEFAULTS = { enabled: true, mode: 'normal', sound: true, volume: 0.6, railMin: false, sprites: true, theme: 'ctos', boot: true };
// 启用时整套让路的外来样式：用户自定义 CSS 和 Moonlit Echoes 注入的全部样式
const FOREIGN = /^(custom-style$|MoonlitEchosTheme-|moonlit-|color-slider-style-|css-block-|thumb-style-|dynamic-theme-styles$)/;

const ctx = () => SillyTavern.getContext();

function settings() {
    const all = ctx().extensionSettings;
    all[MODULE] ??= {};
    const s = all[MODULE];
    for (const [k, v] of Object.entries(DEFAULTS)) s[k] ??= v;
    return s;
}
const save = () => ctx().saveSettingsDebounced();
const isFull = () => document.body.classList.contains('ctr-full');

/* ------------------------------------------------------------
   音效：全部用 WebAudio 现场合成，不带音频文件
   ------------------------------------------------------------ */
const Sfx = (() => {
    let ac = null, out = null, noise = null;
    function ready() {
        const s = settings();
        if (!s.sound || !s.enabled) return false;
        if (!ac) {
            // 在主页面上建音频：iframe 拿不到主页面的点击激活，自己建的会一直静音
            ac = new (W.AudioContext || W.webkitAudioContext)();
            out = ac.createGain();
            out.connect(ac.destination);
            noise = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.4), ac.sampleRate);
            const d = noise.getChannelData(0);
            for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        }
        if (ac.state === 'suspended') ac.resume();
        out.gain.value = s.volume;
        return true;
    }
    function env(g, t, peak, attack, decay) {
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(peak, t + attack);
        g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    }
    // 一段滤过的噪声：纸张摩擦
    function rustle(t, dur, f0, f1, q, peak, type) {
        const src = ac.createBufferSource();
        src.buffer = noise;
        src.playbackRate.value = 0.9 + Math.random() * 0.2;
        const f = ac.createBiquadFilter();
        f.type = type;
        f.Q.value = q;
        f.frequency.setValueAtTime(f0, t);
        f.frequency.exponentialRampToValueAtTime(f1, t + dur);
        const g = ac.createGain();
        env(g, t, peak, Math.min(0.025, dur / 4), dur);
        src.connect(f).connect(g).connect(out);
        src.start(t);
        src.stop(t + dur + 0.05);
    }
    function blip(t, freq, dur, peak, type) {
        const o = ac.createOscillator();
        o.type = type;
        o.frequency.setValueAtTime(freq, t);
        const g = ac.createGain();
        env(g, t, peak, 0.002, dur);
        o.connect(g).connect(out);
        o.start(t);
        o.stop(t + dur + 0.02);
    }
    return {
        // 翻页：一声由高往低扫过去的纸声，尾巴上纸页落下的轻拍
        flip() {
            if (!ready()) return;
            const t = ac.currentTime;
            rustle(t, 0.17, 3400, 900, 0.9, 0.5, 'bandpass');
            rustle(t + 0.14, 0.06, 1500, 600, 0.7, 0.3, 'lowpass');
        },
        // 按钮：ctOS 终端的一下短促电子音
        click() {
            if (!ready()) return;
            const t = ac.currentTime;
            blip(t, 2300, 0.016, 0.07, 'square');
            blip(t + 0.011, 1150, 0.03, 0.05, 'triangle');
        },
    };
})();

const CLICKABLE = [
    '.menu_button', '.drawer-toggle', '.interactable', '.mes_button', '.inline-drawer-toggle',
    '.swipe_left', '.swipe_right', '.right_menu_button', '.list-group-item', '.ctr-btn',
    'button', '[role="button"]', 'input[type="checkbox"]', 'input[type="radio"]', 'select', 'summary',
].join(',');

on(document, 'pointerdown', (e) => {
    if (e.button !== 0) return;
    const el = e.target.closest?.(CLICKABLE);
    if (!el) return;
    // 翻页类操作有自己的翻页声
    if (el.closest('.ctr-stage') || el.matches('[data-ctr="prev"],[data-ctr="next"],[data-ctr="go"],[data-ctr="first"],[data-ctr="last"]')) return;
    Sfx.click();
}, { capture: true });

/* ------------------------------------------------------------
   解析：一行一个块，--- 分页，@ 页眉
   ------------------------------------------------------------ */
const SPECIAL = { '荒原': 'river', '鼠疫': 'lung', '雾都孤儿': 'city', '月亮与六便士': 'old', '睡莲': 'lily', '侠盗罗宾汉': 'hood' };
const CODES = {
    '后窗': 'REAR WINDOW', '锅匠，裁缝，士兵，间谍': 'TINKER TAILOR', '是，大臣': 'YES, MINISTER', '独行杀手': 'LE SAMOURAÏ',
    '王牌特工': 'KINGSMAN', '偷天换日': 'THE ITALIAN JOB', '亚森·罗平': 'ARSÈNE LUPIN', '巴斯克维尔的猎犬': 'THE HOUND',
    '无间道': 'INFERNAL AFFAIRS', '荒原': 'THE WASTE LAND', '鼠疫': 'THE PLAGUE', '雾都孤儿': 'OLIVER TWIST',
    '月亮与六便士': 'MOON & SIXPENCE', '睡莲': 'NYMPHÉAS', '侠盗罗宾汉': 'ROBIN HOOD',
};
const PAGE_CHARS = 300;
const PAGE_BLOCKS = 6;

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function inline(s, quotes = true) {
    let h = esc(s)
        .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
        .replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g, '$1<i>$2</i>');
    if (quotes) h = h.replace(/“[^”]*”?/g, (m) => `<span class="ctr-q">${m}</span>`);
    return h;
}

// 先分区再排版，预设的思考、免责声明和变量区块不能参与小说分页。
const AUX_TAGS = 'UpdateVariable|update|status_current_variable|details|summary|disclaimer|disclaimer_format|background|selection';
function stripAux(raw) {
    return raw
        .replace(new RegExp(`<(${AUX_TAGS})\\b[^>]*>[\\s\\S]*?<\\/\\1\\s*>`, 'gi'), '')
        .replace(new RegExp(`<(${AUX_TAGS})\\b[^>]*>[\\s\\S]*$`, 'i'), '');
}

function splitOutput(raw, live, expectGame = false, generated = false) {
    let story = raw, thinking = '', thinkingLive = false, closed = false, unclosed = false;
    const open = /<(think_yummy|meow|think|thinking)(?=[\s>])[^>]*>/i.exec(story);
    const close = /<\/(?:think_yummy|meow|think|thinking)\s*>/i.exec(story);
    if (open) {
        const start = open.index + open[0].length;
        const end = new RegExp(`<\\/${open[1]}\\s*>`, 'i').exec(story.slice(start));
        thinking = story.slice(start, end ? start + end.index : undefined);
        thinkingLive = live && !end;
        closed = !!end;
        story = story.slice(0, open.index) + (end ? story.slice(start + end.index + end[0].length) : '');
    } else if (close) {
        // 预设预填了开始标签时，API 返回的消息可能只有结束标签。
        thinking = story.slice(0, close.index);
        story = story.slice(close.index + close[0].length);
        closed = true;
    }
    const game = /(?:^|\n)[\t ]*<game(?:\s[^>]*)?>/i.exec(story);
    if (game) {
        const start = game.index + game[0].length;
        const end = /<\/game\s*>/i.exec(story.slice(start));
        story = story.slice(start, end ? start + end.index : undefined);
    } else if (live && expectGame) {
        thinking ||= story;
        thinkingLive = true;
        story = '';
    } else if (expectGame && generated && !closed) {
        // 预设预填了思考的开始标签，回复里却既没有结束标签也没有正文标签：模型整段都没走出思考。
        thinking ||= story;
        story = '';
        unclosed = true;
    }
    return { story: clean(story), thinking: thinking.trim(), thinkingLive, unclosed };
}

function clean(raw) {
    return stripAux(raw)
        .replace(/```[\s\S]*?```/g, '')
        .replace(/```[\s\S]*$/, '')
        .replace(/<[^>\n]+>/g, '')
        .replace(/<[^>\n]*$/, '');
}

function expectsGame() {
    const preset = ctx().chatCompletionSettings;
    const order = preset?.prompt_order?.find((p) => p.character_id === 100001)?.order;
    return !!order?.some((p) => p.enabled && preset.prompts?.some((v) =>
        v.identifier === p.identifier && /正文[\s\S]*<game>/.test(v.content || '')));
}

function updateThinking(r, content, live) {
    const fold = r.querySelector('.ctr-think');
    fold.hidden = !content;
    fold.querySelector('summary').textContent = `${live ? '思考中' : '思考'} · ${content.length} 字`;
    r._thinking = content;
    if (fold.open) fold.querySelector('pre').textContent = content;
}

// 模型偶尔写成英文直引号，按出现顺序换成中文弯引号
function curly(line) {
    let k = 0;
    return line.replace(/"/g, () => (k++ % 2 ? '”' : '“'));
}

function voiceOf(name, text) {
    const mem = name.startsWith('记忆');
    return {
        t: 'voice', name, text: [text],
        cls: mem ? 'mem' : (SPECIAL[name] || 'skill'),
        code: mem ? 'MEMORY' : (CODES[name] || 'VOICE'),
    };
}

// cast：这一页场上的立绘标记（& 那一行冒号后面的原文），没有新标记就沿用上一页、上一轮的
function parse(text, place0, cast0, live) {
    const lines = text.split('\n');
    // 流式时最后一行还没写完；带格式前缀的半行先不出，免得标签还没收口就被当成旁白
    if (live && /^\s*[>〔@&\-*_#]/.test(lines[lines.length - 1])) lines.pop();
    const pages = [];
    let cur = { place: null, cast: null, blocks: [] }, place = place0, cast = cast0, prevQuote = false, explicit = false;
    const flush = () => { if (cur.blocks.length) pages.push(cur); cur = { place: null, cast: null, blocks: [] }; };
    for (const raw of lines) {
        const l = curly(raw.trim());
        if (!l) { prevQuote = false; continue; }
        let m;
        if (/^(-{3,}|\*{3,}|_{3,})$/.test(l)) { explicit = true; flush(); prevQuote = false; continue; }
        if ((m = l.match(/^@\s*(.+)$/))) { place = m[1].trim(); if (!cur.blocks.length) cur.place = place; continue; }
        // 页中间换人就从这里另起一页，立绘和文字对得上
        if ((m = l.match(/^&\s+(.+)$/))) { if (cur.blocks.length) flush(); cast = cur.cast = m[1].trim(); prevQuote = false; continue; }
        cur.place ??= place;
        cur.cast ??= cast;
        const last = cur.blocks[cur.blocks.length - 1];
        if ((m = l.match(/^>\s?(.*)$/))) {
            const q = m[1].trim();
            let v;
            if ((v = q.match(/^\*\*你\*\*\s*[:：]?\s*(.*)$/))) cur.blocks.push({ t: 'reply', text: v[1] });
            else if ((v = q.match(/^(?:\*\*)?【(.+?)】(?:\*\*)?\s*[:：]?\s*(.*)$/))) cur.blocks.push(voiceOf(v[1].trim(), v[2]));
            else if (prevQuote && last && last.t === 'voice') last.text.push(q);
            else if (q) cur.blocks.push(voiceOf('', q));
            prevQuote = true;
            continue;
        }
        prevQuote = false;
        if ((m = l.match(/^#{1,6}\s+(.+)$/))) cur.blocks.push({ t: 'head', text: m[1] });
        else if ((m = l.match(/^〔(?:文本·)?(.+?)〕\s*(.*)$/))) cur.blocks.push({ t: 'doc', src: m[1], text: m[2] });
        else if ((m = l.match(/^([^\s：:“”「」]{1,12})[：:]\s*([“「].*)$/))) {
            const q = m[2].match(/^[“「](.*)[”」]$/);
            cur.blocks.push({ t: 'dia', who: m[1], text: q ? q[1] : m[2], wrapped: !!q });
        }
        else cur.blocks.push({ t: 'narr', text: l });
    }
    flush();
    // 作者分了页就按作者的来，只有超长的页才再切；没分页的按字数自动切
    return pages.flatMap((p) => autoSplit(p, explicit ? 1.2 : 1));
}

const blockLen = (b) => (Array.isArray(b.text) ? b.text.join('').length : b.text.length) + 20;

// 勾起声部的那句旁白跟着声部走，不留在上一页
function autoSplit(page, scale) {
    const maxBlocks = Math.round(PAGE_BLOCKS * scale), maxChars = PAGE_CHARS * scale;
    const out = [];
    let cur = [], chars = 0;
    for (const b of page.blocks) {
        const len = blockLen(b);
        if (cur.length && (cur.length >= maxBlocks || chars + len > maxChars)) {
            let carry = [];
            if ((b.t === 'voice' || b.t === 'reply') && cur.length > 1 && cur[cur.length - 1].t === 'narr') carry = [cur.pop()];
            out.push(cur);
            cur = carry;
            chars = carry.reduce((n, x) => n + blockLen(x), 0);
        }
        cur.push(b);
        chars += len;
    }
    if (cur.length) out.push(cur);
    return out.map((blocks) => ({ place: page.place, cast: page.cast, blocks }));
}

// 左栏标签：对话的说话人、声部名、你、文本编号都挂在同一条竖线上
const label = (zh, code, cls = '') => `<span class="ctr-name${cls}"><b>${zh}</b>${code ? `<small>${code}</small>` : ''}</span>`;

function renderBlock(b) {
    switch (b.t) {
        case 'narr': return `<p class="ctr-b ctr-narr">${inline(b.text)}</p>`;
        case 'head': return `<p class="ctr-b ctr-narr ctr-head-line">${inline(b.text, false)}</p>`;
        case 'dia': {
            const you = b.who === '你' || b.who === '道尔顿' ? ' ctr-you' : '';
            const line = b.wrapped ? `“${inline(b.text, false)}”` : inline(b.text, false);
            return `<div class="ctr-b ctr-dia">${label(esc(b.who), '', you)}<p class="ctr-line">${line}</p></div>`;
        }
        case 'reply':
            return `<div class="ctr-b ctr-voice ctr-reply">${label('你', 'YOU')}<div class="ctr-vbody"><p>${inline(b.text, false)}</p></div></div>`;
        case 'doc':
            return `<figure class="ctr-b ctr-doc">${label(`文本 ${b.no}`, 'DOC')}<div class="ctr-vbody"><figcaption>${esc(b.src)}</figcaption><div class="ctr-paper">${inline(b.text, false)}</div></div></figure>`;
        default: {
            const mem = b.cls === 'mem';
            const where = mem ? b.name.replace(/^记忆·?/, '') : '';
            const head = !b.name ? '<span class="ctr-name"></span>' : label(mem ? '记忆' : esc(b.name), b.code);
            const meta = where ? `<span class="ctr-vmeta">${esc(where)}</span>` : '';
            return `<div class="ctr-b ctr-voice ctr-${b.cls}">${head}<div class="ctr-vbody">${meta}${b.text.map((p) => `<p>${inline(p, false)}</p>`).join('')}</div></div>`;
        }
    }
}

/* ------------------------------------------------------------
   全屏立绘：照立绘标记在左右两边站人，动情时换整幅 CG
   标记写法 & 名字:衣装 / 名字:衣装，先写的站左边；& 无 清场。
   图片先找酒馆的角色文件夹（characters/卡名/立绘/），没装就从 GitHub 仓库经 jsDelivr 取；清单 SPRITE_PACK 构建时编进来。
   ------------------------------------------------------------ */
const TIANWEN = ['天问', '天之叩问'];

function castOf(spec) {
    if (!spec || /^(无|空|清场)$/.test(spec)) return [];
    return spec.split(/\s*[\/／|｜]\s*/).slice(0, 2).map((s) => {
        const [who = '', look = ''] = s.split(/\s*[:：]\s*/);
        return { who: who.trim(), look: look.trim() };
    }).filter((c) => c.who);
}

// 四台原型机在正文里常用代号称呼，立绘文件按名字存：代号、全称都认成同一个人
const SPRITE_ALIAS = { 破军: '玄甲', 千面: '玉衡', 千问: '玉衡', 望舒: '月见', 暗面: '月见', 深潜: '溟' };
function spriteKey(name) {
    if (SPRITE_PACK.chars[name]) return name;
    if (SPRITE_ALIAS[name]) return SPRITE_ALIAS[name];
    // 「玄甲·破军」「深潜·溟」这类全称，拆开逐段认
    for (const part of String(name).split(/[·・]/)) {
        if (SPRITE_PACK.chars[part]) return part;
        if (SPRITE_ALIAS[part]) return SPRITE_ALIAS[part];
    }
    return '';
}
function aliasesOf(key) {
    return [key, ...Object.keys(SPRITE_ALIAS).filter((a) => SPRITE_ALIAS[a] === key)];
}

// 天问没有自己的立绘：拿到身体以后，用的是谁的身体就画谁（四台原型机或者珍珠）
function tianwenNow() {
    const T = hudVars()?.stat_data?.['天之叩问'] ?? {};
    const body = T['身体'] ?? {};
    const has = body['有无身体'] && body['有无身体'] !== '无';
    const src = String(body['身体来源'] ?? '');
    const nick = /待玩家/.test(T['基本']?.['昵称'] ?? '待玩家') ? '' : String(T['基本']['昵称']);
    const keys = [...Object.keys(SPRITE_PACK.chars), ...Object.keys(SPRITE_ALIAS)].sort((a, b) => b.length - a.length);
    const hit = has ? keys.find((k) => src.includes(k)) : '';
    return { shell: hit ? spriteKey(hit) : '', nick };
}

function figureOf(c, tw) {
    const tianwen = TIANWEN.includes(c.who) || (tw.nick && c.who === tw.nick);
    const who = tianwen ? tw.shell : spriteKey(c.who);
    const ch = SPRITE_PACK.chars[who];
    if (!ch) return null;
    // 对话里叫她什么都算她在说话：名字、代号、全称，天问再加官名和昵称
    const names = [...new Set([c.who, ...aliasesOf(who), ...(tianwen ? [...TIANWEN, tw.nick] : [])].filter(Boolean))];
    // 名牌写标记里的叫法；天问写她的昵称，没起昵称就写天问
    const tag = tianwen ? (tw.nick || '天问') : c.who;
    if (SPRITE_PACK.cg[who]?.includes(c.look)) return { who, names, tag, cg: `CG/${who}·${c.look}` };
    const look = ch.looks.includes(c.look) ? c.look : '常服';
    const file = look === '常服' ? who : `${who}·${look}`;
    // 每套衣装是单独生成的，人在画布里画的大小不一；清单里的 scale 把它缩回和常服一样的身形，脚仍踩在底边
    return { who, names, tag, face: ch.face, file, k: SPRITE_PACK.scale?.[file] ?? 1 };
}

const SPRITE_CDN = 'https://cdn.jsdelivr.net/gh/feihu-lgtm/watchdogs-london@main/立绘/';
// 本地文件夹缺过一次图，这次会话剩下的都直接走 CDN，免得每张图先撞一次 404
let spriteLocal = true;
const spriteUrl = (file, local) => (local ? `/characters/${encodeURIComponent(ctx().name2 ?? '')}/立绘/` : SPRITE_CDN)
    + `${file.split('/').map(encodeURIComponent).join('/')}.webp`;

function loadSprite(img, local) {
    img.dataset.local = local ? '1' : '';
    img.src = spriteUrl(img.dataset.file, local);
}

function paintCast(r, p) {
    const box = r.querySelector('.ctr-cast');
    if (!box) return;
    const figs = settings().sprites ? castOf(p.cast).map((c) => figureOf(c, tianwenNow())).filter(Boolean) : [];
    const cg = figs.find((f) => f.cg);
    const shown = cg ? [cg] : figs;
    const sig = shown.map((f) => (f.cg || f.file) + '=' + f.tag).join('|');
    if (box.dataset.sig !== sig) {
        box.dataset.sig = sig;
        box.innerHTML = cg
            ? `<img class="ctr-cg" alt="" data-file="${esc(cg.cg)}"><span class="ctr-tag cg">${esc(cg.tag)}</span>`
            : shown.map((f, i) => {
                // 一个人时按她天生的朝向站，脸朝画面中间；两个人时先写的站左边，朝向不对就镜像
                const side = shown.length === 1 ? (f.face === 'R' ? 'l' : 'r') : (i ? 'r' : 'l');
                const flip = (side === 'l') !== (f.face === 'R');
                return `<img class="ctr-fig ${side}${flip ? ' flip' : ''}" alt="" data-names="${esc(f.names.join('|'))}" data-file="${esc(f.file)}"${f.k !== 1 ? ` style="height:${(f.k * 100).toFixed(1)}%"` : ''}>`
                    + `<span class="ctr-tag ${side}">${esc(f.tag)}</span>`;
            }).join('');
        // 本地没有就换 CDN；两处都取不到，那一张不画，文字照常
        for (const img of box.querySelectorAll('img')) {
            img.addEventListener('load', () => { img.classList.add('in'); fitCast(r); });
            img.addEventListener('error', () => {
                if (img.dataset.local) { spriteLocal = false; loadSprite(img, false); }
                else { img.nextElementSibling?.classList.contains('ctr-tag') && img.nextElementSibling.remove(); img.remove(); markCast(r); }
            });
            loadSprite(img, spriteLocal);
        }
    }
    // 这一页场上有人开口，没开口的那位退暗一点
    const said = new Set(p.blocks.filter((b) => b.t === 'dia').map((b) => b.who));
    const imgs = [...box.querySelectorAll('.ctr-fig')];
    const talking = imgs.filter((img) => img.dataset.names.split('|').some((n) => said.has(n)));
    imgs.forEach((img) => {
        const dim = talking.length > 0 && !talking.includes(img);
        img.classList.toggle('dim', dim);
        img.nextElementSibling?.classList.toggle('dim', dim);
    });
    markCast(r);
}

function markCast(r) {
    const box = r.querySelector('.ctr-cast');
    r.classList.toggle('ctr-hascast', !!box.querySelector('.ctr-fig'));
    r.classList.toggle('ctr-hascg', !!box.querySelector('.ctr-cg'));
    fitCast(r);
}

// 宽屏上正文给站着的人让位：量出立绘实际占到哪儿，正文那一侧的内边距推到立绘外面，
// 半透明底板就不会压在人身上。让完剩下的宽度不够一栏正文（手机），就不让，照旧叠在立绘上
const CAST_GAP = 36;
function fitCast(r) {
    const stage = r.querySelector('.ctr-stage');
    const box = r.querySelector('.ctr-cast');
    if (!stage || !box) return;
    let l = 0, rt = 0;
    const sr = stage.getBoundingClientRect();
    if (document.body.classList.contains('ctr-full') && sr.width) {
        for (const img of box.querySelectorAll('.ctr-fig.in')) {
            const b = img.getBoundingClientRect();
            if (img.classList.contains('l')) l = Math.max(l, b.right - sr.left + CAST_GAP);
            else rt = Math.max(rt, sr.right - b.left + CAST_GAP);
        }
        // 两边一起让会把正文挤得太窄：只站一个人时只让那一边
        if (sr.width - l - rt < 460) l = rt = 0;
    }
    placeTags(box);
    stage.style.setProperty('--ctr-cast-l', l + 'px');
    stage.style.setProperty('--ctr-cast-r', rt + 'px');
}
window.addEventListener('resize', () => document.querySelectorAll('.ctr.ctr-hascast').forEach(fitCast));

// 名牌钉在立绘的右下角：按图里人实际站的范围算（画布两边是透明的空白），图没加载完先不显示
function placeTags(box) {
    const br = box.getBoundingClientRect();
    for (const tag of box.querySelectorAll('.ctr-tag:not(.cg)')) {
        const img = tag.previousElementSibling;
        if (!img?.classList.contains('in') || !br.width) { tag.classList.remove('in'); continue; }
        const b = img.getBoundingClientRect();
        // 人站在画布中间大约六成宽里；名牌右边缘对齐这六成的右边缘，底边离脚底留一点
        const right = b.left + b.width * 0.8;
        const top = b.bottom - tag.offsetHeight - Math.round(b.height * 0.03);
        let left = Math.min(Math.max(right - tag.offsetWidth, br.left + 6), br.right - tag.offsetWidth - 6);
        // 右下角被笔记本按钮挡住（手机上常见）就挪到立绘的左下角
        const fab = document.querySelector('.cdx-fab')?.getBoundingClientRect();
        if (fab?.width && left < fab.right && left + tag.offsetWidth > fab.left && top < fab.bottom && top + tag.offsetHeight > fab.top) {
            left = Math.max(b.left + b.width * 0.2, br.left + 6);
        }
        tag.style.left = left - br.left + 'px';
        tag.style.top = top - br.top + 'px';
        tag.classList.add('in');
    }
}

/* ------------------------------------------------------------
   阅读器
   ------------------------------------------------------------ */
const pageState = new Map();
let generating = false;
let justGenerated = false;
// 本次会话里新生成的回复（含每一版 swipe）：只有它们会让笔记本跑逐页识别、马上写说明
const received = new Set();

const spot = (r, page) => ({ mes: r._id, swipe: r._swipe, page, latest: r._latest });

function redecorateAll() {
    const chat = ctx().chat || [];
    for (const r of document.querySelectorAll('#chat .ctr')) {
        // 还停在旧 swipe 或已删除楼层上的阅读器，等 sync 重建，不拿它们收词
        if (!r._pages || !chat[r._id] || r._swipe !== (chat[r._id].swipe_id ?? 0)) continue;
        if (r.dataset.view === 'page') codex.decorate(r.querySelector('.ctr-page'), spot(r, r._n));
        else r.querySelectorAll('.ctr-sheet').forEach((sec, i) => codex.decorate(sec, spot(r, i)));
    }
}

// 笔记本里“首次出现”跳回原文，返回空串表示跳到了
function jumpTo(mes, page, id) {
    const r = document.querySelector(`#chat > .mes[mesid="${mes}"] .ctr`);
    if (!r || !r._pages) return '那一楼还没加载出来';
    if (r.dataset.view === 'page') {
        if (focusEl?.querySelector('.ctr') !== r) return '全屏只显示最新一条，切到正常模式再跳';
        jump(r, page);
    } else {
        (r.querySelectorAll('.ctr-sheet')[page] || r).scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    const term = r.querySelector(`.cdx-term[data-id="${CSS.escape(id)}"]`);
    if (term) { term.classList.remove('flash'); void term.offsetWidth; term.classList.add('flash'); }
    return '';
}

const codex = createCodex({ settings, Sfx, jumpTo, redecorateAll });


// 页眉地点和场上立绘都继承前面的故事，思考中的格式样例不算场景。
function inherited(chat, id) {
    let place = null, cast = null;
    for (let k = id - 1; k >= Math.max(0, id - 60) && (place === null || cast === null); k--) {
        const msg = chat[k];
        if (!msg || msg.is_user || msg.is_system) continue;
        const story = splitOutput(msg.mes || '', false).story;
        if (place === null) place = [...story.matchAll(/^\s*@\s*(.+)$/gm)].pop()?.[1].trim() ?? null;
        if (cast === null) cast = [...story.matchAll(/^\s*&\s+(.+)$/gm)].pop()?.[1].trim() ?? null;
    }
    return { place: place ?? '', cast: cast ?? '' };
}

function readerHtml() {
    return `
<header class="ctr-head">
  <span class="ctr-place"></span>
  <span class="ctr-title"></span>
  <span class="ctr-swipe"><button class="ctr-btn" data-ctr="swl" title="上一版回复">‹</button><em></em><button class="ctr-btn" data-ctr="swr" title="下一版回复 / 重新生成">›</button></span>
  <button class="ctr-btn ctr-modebtn" data-ctr="mode"></button>
</header>
<details class="ctr-think" hidden><summary>思考</summary><pre></pre></details>
<div class="ctr-cast" aria-hidden="true"></div>
<div class="ctr-stage"><div class="ctr-page"></div></div>
<footer class="ctr-foot">
  <span class="ctr-no"></span>
  <span class="ctr-ticks"></span>
  <span class="ctr-hint">← → 翻页　HOME / END 开始页 / 末尾页　ESC 退出</span>
  <span class="ctr-recv">RECEIVING</span>
  <button class="ctr-btn ctr-stop" data-ctr="stop">■ 停止</button>
  <span class="ctr-nav">
    <button class="ctr-btn" data-ctr="first">开始页</button>
    <button class="ctr-btn" data-ctr="prev">← 上页</button>
    <label class="ctr-goto">翻到第<input type="number" min="1" step="1" inputmode="numeric">页</label>
    <button class="ctr-btn" data-ctr="next">下页 →</button>
    <button class="ctr-btn" data-ctr="last">末尾页</button>
  </span>
</footer>`;
}

const pad = (x) => String(x).padStart(2, '0');
const pageSig = (p) => p.blocks.map((b) => b.t + (Array.isArray(b.text) ? b.text.join('|') : b.text)).join('\n');
// 读到末尾的回复记在这里：输入框出现以后就不再收回去，免得输入框一出一收把消息流顶来顶去
const seenEnd = new Set();
// 流式生成过的回复：读者是跟着流读下来的，到齐以后不再把视口拉回顶端
const wasLive = new Set();

// 全屏是翻页，正常模式是滚动
const viewOf = () => (settings().mode === 'full' ? 'page' : 'scroll');

function placeHtml(place) {
    const parts = (place || '').split(/\s*·\s*/).filter(Boolean);
    return parts.length ? `<b>${esc(parts[0])}</b>${parts.length > 1 ? ' · ' + esc(parts.slice(1).join(' · ')) : ''}` : '';
}

// 正文立即显示；流式只刷新改变了的页。
function paint(r, how) {
    if (r._view !== 'page') { r._view = 'page'; r._painted = null; }
    const p = r._pages[r._n];
    paintCast(r, p);
    const sig = pageSig(p);
    if (how === 'live' && r._painted === sig) return;
    const pg = r.querySelector('.ctr-page');
    pg.innerHTML = p.blocks.map(renderBlock).join('');
    codex.decorate(pg, spot(r, r._n));
    r._painted = sig;
}

// 滚动：整条回复一页接一页往下排，页与页之间一条分页线写"第几页"；流式时只补变了的页
function paintScroll(r) {
    const box = r.querySelector('.ctr-page');
    if (r._view !== 'scroll') { r._view = 'scroll'; box.innerHTML = ''; r._sigs = []; }
    const pages = r._pages;
    while (box.children.length > pages.length) box.lastElementChild.remove();
    r._sigs.length = Math.min(r._sigs.length, pages.length);
    if (pages.length === 1 && !pages[0].blocks.length) {
        box.innerHTML = '';
        r._sigs = [];
        r.querySelector('.ctr-no').textContent = '等待正文';
        return;
    }
    pages.forEach((p, i) => {
        const sig = pageSig(p);
        if (r._sigs[i] === sig) return;
        let sec = box.children[i];
        if (!sec) {
            sec = document.createElement('section');
            sec.className = 'ctr-sheet';
            box.appendChild(sec);
        }
        const moved = i > 0 && p.place && p.place !== pages[i - 1].place;
        const rule = i === 0 ? '' : `<div class="ctr-rule"><span>第 ${pad(i + 1)} 页</span>${moved ? `<em>${placeHtml(p.place)}</em>` : ''}</div>`;
        sec.innerHTML = rule + p.blocks.map(renderBlock).join('');
        codex.decorate(sec, spot(r, i));
        r._sigs[i] = sig;
    });
    r.querySelector('.ctr-place').innerHTML = placeHtml(pages[0].place);
    r.querySelector('.ctr-no').innerHTML = `共 <b>${pad(pages.length)}</b> 页${r._live ? '+' : ''}`;
    updateBar();
}

function show(r, n, how) {
    const pages = r._pages;
    n = Math.max(0, Math.min(pages.length - 1, n));
    if (r._n !== n) r._painted = null;
    r._n = n;
    pageState.set(r._key, n);
    paint(r, how);
    r.querySelector('.ctr-place').innerHTML = placeHtml(pages[n].place);
    const last = pages.length - 1;
    r.querySelector('.ctr-no').innerHTML = `PAGE <b>${pad(n + 1)}</b> / ${pad(pages.length)}${r._live ? '+' : ''}`;
    const ticks = r.querySelector('.ctr-ticks');
    if (ticks.children.length !== pages.length) {
        ticks.innerHTML = pages.map((_, i) => `<i data-ctr="go" data-n="${i}"></i>`).join('');
    }
    [...ticks.children].forEach((t, i) => { t.className = i < n ? 'on' : i === n ? 'now' : ''; });
    r.querySelector('[data-ctr="first"]').disabled = r.querySelector('[data-ctr="prev"]').disabled = n === 0;
    r.querySelector('[data-ctr="last"]').disabled = n === last;
    r.querySelector('[data-ctr="next"]').disabled = n === last && r._live;
    const go = r.querySelector('.ctr-goto input');
    go.max = pages.length;
    if (document.activeElement !== go) go.value = n + 1;
    r.classList.remove('ctr-end');
    r.querySelector('.ctr-stage').scrollTop = 0;
    if (n === last && !r._live) seenEnd.add(r._key);
    updateBar();
    updateDock();
}

// 按当前模式把阅读器画出来
function render(r, how) {
    r.dataset.view = viewOf();
    if (r.dataset.view === 'page') show(r, pageState.get(r._key) ?? r._n ?? 0, how);
    else paintScroll(r, how);
}

function turn(r, n, how) {
    show(r, n, how);
    Sfx.flip();
}

function next(r) {
    if (r._n < r._pages.length - 1) {
        turn(r, r._n + 1, 'still');
    } else if (!r._live) {
        // 最后一页再往下：轮到你说话
        r.classList.add('ctr-end');
        document.getElementById('send_textarea')?.focus();
        Sfx.click();
    }
}

function prev(r) {
    if (r._n > 0) turn(r, r._n - 1, 'still');
}

function jump(r, n) {
    n = Math.max(0, Math.min(r._pages.length - 1, n));
    if (n !== r._n) turn(r, n, 'still');
    else show(r, n, 'still');
}

function clearReader(el) {
    el.classList.remove('ctr-on', 'ctr-hasthink');
    el.querySelector(':scope > .mes_block > .ctr')?.remove();
}

function chrome(r, el, msg) {
    r.querySelector('.ctr-title').textContent = msg.name || '';
    const swipes = Array.isArray(msg.swipes) ? msg.swipes.length : 0;
    const sw = r.querySelector('.ctr-swipe');
    sw.hidden = !el.classList.contains('last_mes') || r._live;
    sw.querySelector('em').textContent = `${(msg.swipe_id ?? 0) + 1}/${Math.max(1, swipes, (msg.swipe_id ?? 0) + 1)}`;
    sw.querySelector('[data-ctr="swl"]').disabled = !(msg.swipe_id > 0);
    r.classList.toggle('ctr-live', !!r._live);
    updateBar();
}

function buildReader(el, id, msg, live) {
    const raw = msg.mes || '';
    const swipe = msg.swipe_id ?? 0;
    const nativeThinking = msg.extra?.reasoning || '';
    const block = el.querySelector(':scope > .mes_block');
    const text = block?.querySelector(':scope > .mes_text');
    if (!block || !text) return null;
    let r = block.querySelector(':scope > .ctr');
    if (r && r._raw === raw && r._live === live && r._swipe === swipe && r._nativeThinking === nativeThinking) {
        chrome(r, el, msg);
        if (r.dataset.view !== viewOf()) render(r, 'still');
        return r;
    }
    const before = inherited(ctx().chat, id);
    const output = splitOutput(raw, live, expectsGame(), !!msg.extra?.api);
    let pages = r?._story === output.story && r._live === live ? r._pages : parse(output.story, before.place, before.cast, live);
    let no = 0;
    for (const p of pages) for (const b of p.blocks) if (b.t === 'doc') b.no = ++no;
    if (!pages.length) {
        if (!live && !output.thinking && !nativeThinking) { clearReader(el); return null; }
        const blocks = output.unclosed
            ? [{ t: 'narr', text: '这一楼没有正文。模型整段回复都停在思考里，没写思考的结束标签，也没把正文包进正文标签。思考内容在上面的折叠里，换一版重新生成就好。' }]
            : [];
        pages = [{ place: before.place, cast: before.cast, blocks }];
    }
    if (!r) {
        r = document.createElement('section');
        r.className = 'ctr';
        r.innerHTML = readerHtml();
        block.insertBefore(r, text);
        r.querySelector('.ctr-think').addEventListener('toggle', () => {
            const fold = r.querySelector('.ctr-think');
            if (fold.open) fold.querySelector('pre').textContent = r._thinking || '';
        });
    }
    const key = `${ctx().getCurrentChatId?.() ?? ''}|${id}|${swipe}`;
    const sameMsg = r._key === key;
    if (!sameMsg) { r._view = null; r._n = 0; }
    r._raw = raw;
    r._swipe = swipe;
    r._nativeThinking = nativeThinking;
    r._story = output.story;
    updateThinking(r, [nativeThinking, output.thinking].filter(Boolean).join('\n\n'), output.thinkingLive);
    r._pages = pages;
    r._key = key;
    r._live = live;
    r._id = id;
    r._latest = live || received.has(key);
    if (live) wasLive.add(key);
    chrome(r, el, msg);
    if (sameMsg) render(r, 'live');
    else render(r, 'still');
    codex.onPages(pages, { mes: id, swipe, live, latest: r._latest });
    el.classList.add('ctr-on');
    // 预设的显示正则会把思考渲染成消息开头的前端卡片；阅读器已有思考折叠，这张卡片不再显示。
    el.classList.toggle('ctr-hasthink', !!output.thinking);
    return r;
}

let focusEl = null;

// 滚动模式：最新一条的末尾进入视野，就算读完了
function checkScrollEnd() {
    const r = focusEl?.querySelector('.ctr');
    if (!r || r._live || r.dataset.view !== 'scroll' || seenEnd.has(r._key)) return;
    const chat = document.getElementById('chat');
    if (r.getBoundingClientRect().bottom <= chat.getBoundingClientRect().bottom + 24) {
        seenEnd.add(r._key);
        updateDock();
    }
}

// 输入框只在最新一条读完、而且不在生成时出现
function updateDock() {
    const r = focusEl?.querySelector('.ctr');
    const lastMes = [...document.querySelectorAll('#chat > .mes')].pop();
    // 翻页（全屏）只看当前是不是最后一页；滚动（正常）看末尾有没有进过视野
    const done = r?.dataset.view === 'page' ? r._n === r._pages.length - 1 && !r._live : seenEnd.has(r?._key);
    const off = settings().enabled && !!r && focusEl === lastMes && (generating || !done);
    document.body.classList.toggle('ctr-dockoff', off);
}


/* ════════ DedSec 主题 ════════
   第二套皮：样式表 DS_STYLE 拼在 STYLE 后面，全部挂在 body.ctos.ctr-ds 下；
   状态栏那份 HUD_DS_STYLE 拼进状态栏页面自己的样式表；开场动画 bootDedsec()。 */
// 字体自己托管在仓库的 fonts/ 里：网页版（页面上有 #lt-api）走同站的相对路径，酒馆里走 jsDelivr，和立绘同一个源
const FONT_BASE = document.getElementById('lt-api')
    ? new URL('../fonts/', W.location.href).href
    : 'https://cdn.jsdelivr.net/gh/feihu-lgtm/watchdogs-london@main/fonts/';
const DS_FONTS = FONT_BASE + 'dedsec.css';
// ctOS 那套的 Barlow Condensed 和 JetBrains Mono 也在 fonts/ 里；思源宋体太大，仍走 Google Fonts
const CTOS_FONTS_IMPORT = `@import url('${FONT_BASE}ctos.css');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600&display=swap');`;
// 像素骷髅：自己画的 13×13 面具，不照抄育碧的标志
const DS_SKULL_MAP = [
    '....#####....',
    '..#########..',
    '.###########.',
    '.###########.',
    '##...###...##',
    '##...###...##',
    '###.#####.###',
    '######.######',
    '.#####.#####.',
    '..#########..',
    '..#.#.#.#.#..',
    '..#########..',
    '...#######...',
];
function skullUri(color) {
    let rects = '';
    DS_SKULL_MAP.forEach((row, y) => [...row].forEach((c, x) => { if (c === '#') rects += `<rect x="${x}" y="${y}" width="1.02" height="1.02"/>`; }));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" shape-rendering="crispEdges" fill="${color}">${rects}</svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
const DS_STYLE = `
body.ctos.ctr-ds { --ds-skull-w: ${skullUri('#e8ebf4')}; }
#ctr-boot.calm { --ds-skull-w: ${skullUri('#f2f4f8')}; }
body.ctos.ctr-neon { --ds-skull: ${skullUri('#07030d')}; }
#ctr-boot.neon { --ds-skull-w: ${skullUri('#ffffff')}; --ds-skull-c: ${skullUri('#00e5ff')}; --ds-skull-p: ${skullUri('#ff2a7a')}; }
` + "/* ============================================================\n   DedSec 主题：照《看门狗 2》里 DedSec 那台手机的界面。\n   深色打底读着不累眼：近黑的海军蓝面板、灰白的等宽字；霓虹只做点缀——\n   荧光绿的 [ 方括号 ] 标题、品红的进度条、青色的名签，按键提示条和状态条是白的。\n   全部挂在 body.ctos.ctr-ds 下，切回 ctOS 原样不动。\n   ============================================================ */\nbody.ctos.ctr-ds {\n  --k-bg: #0a0c16; --k-panel: #0e1220; --k-raise: #161b2f;\n  --k-line: #222941; --k-line-2: #323c60;\n  --k-ink: #e8ebf4; --k-prose: #d3d8e5; --k-voice: #a9b2cb; --k-mute: #8b94af; --k-dim: #5c6584;\n  --k-acc: #e0369b;\n  --k-river: #4cc9dc; --k-old: #d9bf5c; --k-lily: #a998e8; --k-hood: #9fd84a;\n  --ds-pink: #e0369b; --ds-cyan: #3fcfe0; --ds-lime: #a3e635; --ds-blue: #2f5be0; --ds-paper: #e8ebf4; --ds-black: #05060c;\n  --k-mono: 'Space Mono', 'JetBrains Mono', monospace;\n  --k-cond: 'Silkscreen', 'Space Mono', monospace;\n  --k-serif: 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;\n  --ds-pixel: 'Silkscreen', 'Space Mono', monospace;\n  --ds-term: 'VT323', 'Space Mono', monospace;\n  --ds-zh: 'ZCOOL QingKe HuangYou', 'PingFang SC', 'Microsoft YaHei', sans-serif;\n  /* 狗 2 手机背景那种抖动网点：很淡，只在大底上 */\n  --ds-dither: radial-gradient(rgba(120, 140, 220, .07) 1px, transparent 1.4px) 0 0 / 5px 5px;\n  background: linear-gradient(180deg, #0b1020 0%, #0a0c16 60%), #0a0c16 !important;\n}\nbody.ctos.ctr-ds #sheld { background: var(--ds-dither); }\nbody.ctos.ctr-ds ::selection { background: var(--ds-lime); color: var(--ds-black); }\n\n/* ---------- 左侧栏：黑底，白色像素骷髅和字标，下面一条品红进度 ---------- */\nbody.ctos.ctr-ds #top-settings-holder { background: #080a13; border-right: 1px solid var(--k-line-2); }\nbody.ctos.ctr-ds #ctr-brand { position: relative; min-height: 66px; padding-bottom: 10px; margin-bottom: 10px; background: #080a13; color: var(--k-ink); border-bottom: 1px solid var(--k-line); }\nbody.ctos.ctr-ds #ctr-brand::after { content: ''; position: absolute; left: 16px; right: 16px; bottom: 8px; height: 4px; background: linear-gradient(90deg, var(--ds-pink) 0 72%, #2a1a2a 72%); }\nbody.ctos.ctr-ds #ctr-brand b { font-size: 0; }\nbody.ctos.ctr-ds #ctr-brand b::before { content: ''; display: inline-block; width: 24px; height: 24px; vertical-align: middle; background: var(--ds-skull-w) center / contain no-repeat; }\nbody.ctos.ctr-ds #ctr-brand b::after { content: 'DEDSEC'; margin-left: 8px; vertical-align: middle; font: 700 16px/1 var(--ds-pixel); letter-spacing: .04em; color: var(--k-ink); }\nbody.ctos.ctr-ds #ctr-brand span { font: 400 14px/1 var(--ds-term); letter-spacing: .06em; color: var(--k-dim); }\nbody.ctos.ctr-ds #ctr-railbtn { color: var(--k-mute); border-color: var(--k-line-2); }\nbody.ctos.ctr-ds #ctr-railbtn:hover { background: var(--k-raise); color: var(--k-ink); }\nbody.ctos.ctr-ds #top-settings-holder .drawer-toggle::before { font: 500 14px/1.2 var(--k-cjk); letter-spacing: .04em; }\nbody.ctos.ctr-ds #top-settings-holder .drawer-toggle::after { font: 400 15px/1 var(--ds-term); letter-spacing: .08em; color: var(--k-dim); }\nbody.ctos.ctr-ds #top-settings-holder > .drawer > .drawer-toggle:hover { color: var(--k-ink); background: var(--k-raise); }\nbody.ctos.ctr-ds #top-settings-holder > .drawer:has(> .drawer-content.openDrawer) > .drawer-toggle,\nbody.ctos.ctr-ds #top-settings-holder > .drawer:has(> nav.openDrawer) > .drawer-toggle { color: var(--k-ink); background: var(--k-raise); box-shadow: inset 3px 0 0 var(--ds-lime); }\nbody.ctos.ctr-ds #top-settings-holder > .drawer:has(> .openDrawer) > .drawer-toggle::after { color: var(--ds-lime); }\nbody.ctos.ctr-ds .ctr-label { font: 400 14px/1 var(--ds-term); letter-spacing: .14em; color: var(--ds-lime); }\nbody.ctos.ctr-ds .ctr-seg .ctr-btn.on { background: var(--ds-paper); color: var(--ds-black); }\nbody.ctos.ctr-ds .ctr-sound.on em { color: var(--ds-lime); }\n\n/* ---------- 抽屉 ---------- */\nbody.ctos.ctr-ds #top-settings-holder .drawer-content { background: var(--ds-dither), var(--k-panel); border-right: 1px solid var(--k-line-2); }\nbody.ctos.ctr-ds #top-settings-holder .drawer-content h3 { font: 400 22px/1.2 var(--ds-zh); letter-spacing: .04em; color: var(--k-ink); }\nbody.ctos.ctr-ds #top-settings-holder .drawer-content h4 { font: 400 15px/1 var(--ds-term); letter-spacing: .12em; color: var(--ds-lime); }\nbody.ctos.ctr-ds #top-settings-holder .drawer-content h4::before { content: '[ '; }\nbody.ctos.ctr-ds #top-settings-holder .drawer-content h4::after { content: ' ]'; }\n\n/* ---------- 消息流 ---------- */\nbody.ctos.ctr-ds .mes .name_text { font: 400 15px/1 var(--ds-term); letter-spacing: .1em; color: var(--ds-cyan); }\nbody.ctos.ctr-ds .mes .timestamp { font: 400 14px/1 var(--ds-term); color: var(--k-dim); }\nbody.ctos.ctr-ds .mes[is_user=\"true\"] .name_text { color: var(--ds-lime); }\nbody.ctos.ctr-ds .mes[is_user=\"true\"] .mes_text { color: var(--k-ink); background: #0e1426; border: 1px solid var(--k-line-2); border-left: 3px solid var(--ds-lime); }\nbody.ctos.ctr-ds .mes_text q, body.ctos.ctr-ds .mes_text q i { color: var(--k-ink); }\n\n/* ---------- 输入区：像那块白色的 Track Mission 按键 ---------- */\nbody.ctos.ctr-ds #send_form { background: #0b0f1c; border: 1px solid var(--k-line-2); }\nbody.ctos.ctr-ds #send_form:focus-within { border-color: var(--ds-cyan); }\nbody.ctos.ctr-ds #rightSendForm > #send_but { background: var(--ds-paper); color: var(--ds-black); }\nbody.ctos.ctr-ds #rightSendForm > #send_but:hover { background: var(--ds-lime); color: var(--ds-black); }\nbody.ctos.ctr-ds :is(#leftSendForm, #rightSendForm) > div:hover { color: var(--ds-cyan); background: var(--k-raise); }\n\n/* ---------- 通用控件 ---------- */\nbody.ctos.ctr-ds .menu_button { border-color: var(--k-line-2); color: var(--k-ink); }\nbody.ctos.ctr-ds .menu_button:hover { background: var(--ds-paper); border-color: var(--ds-paper); color: var(--ds-black); }\nbody.ctos.ctr-ds .menu_button.active, body.ctos.ctr-ds .menu_button.toggleEnabled { border-color: var(--ds-lime); color: var(--ds-lime); }\nbody.ctos.ctr-ds :is(.text_pole, select, textarea, input):focus { border-color: var(--ds-cyan) !important; outline: none; }\nbody.ctos.ctr-ds input[type=\"checkbox\"] { accent-color: var(--ds-lime); }\nbody.ctos.ctr-ds input[type=\"range\"] { accent-color: var(--ds-pink); }\n\n/* ---------- 阅读器卡片：手机任务面板那样的黑底，表头一条品红进度 ---------- */\nbody.ctos.ctr-ds .ctr { background: #0b0e1a; border: 1px solid var(--k-line-2); }\nbody.ctos.ctr-ds .ctr-head { position: relative; border-bottom: 1px solid var(--k-line); background: #0d1222; }\nbody.ctos.ctr-ds .ctr-place { font: 500 13px/1.2 var(--k-cjk); color: var(--k-mute); }\nbody.ctos.ctr-ds .ctr-place b { color: var(--k-ink); }\nbody.ctos.ctr-ds .ctr-title { font: 400 15px/1 var(--ds-term); letter-spacing: .1em; color: var(--ds-pink); }\nbody.ctos.ctr-ds .ctr-modebtn { font: 400 15px/1 var(--ds-term); letter-spacing: .1em; color: var(--k-mute); }\nbody.ctos.ctr-ds .ctr-modebtn:hover { background: var(--ds-paper); color: var(--ds-black); }\nbody.ctos.ctr-ds .ctr-rule span { font: 400 15px/1 var(--ds-term); letter-spacing: .1em; color: var(--ds-lime); }\nbody.ctos.ctr-ds .ctr-rule span::before { content: '[ '; }\nbody.ctos.ctr-ds .ctr-rule span::after { content: ' ]'; }\nbody.ctos.ctr-ds .ctr-page:empty::before { content: '> RECEIVING_'; font: 400 17px/1 var(--ds-term); color: var(--ds-lime); }\n/* 名签：[ 名字 ]，青色等宽，不斜不贴 */\nbody.ctos.ctr-ds .ctr-dia .ctr-name b { font: 500 13px/1.2 var(--k-cjk); letter-spacing: .06em; color: var(--ds-cyan); }\nbody.ctos.ctr-ds .ctr-dia .ctr-name b::before { content: '[ '; font-family: var(--ds-term); color: var(--k-dim); }\nbody.ctos.ctr-ds .ctr-dia .ctr-name b::after { content: ' ]'; font-family: var(--ds-term); color: var(--k-dim); }\nbody.ctos.ctr-ds .ctr-dia .ctr-name.ctr-you b { color: var(--ds-lime); }\nbody.ctos.ctr-ds .ctr-name small { font: 400 13px/1 var(--ds-term); letter-spacing: .08em; color: var(--k-dim); }\nbody.ctos.ctr-ds .ctr-narr { font-size: 17px; line-height: 2.05; color: var(--k-prose); }\nbody.ctos.ctr-ds .ctr-line { font-size: 17px; font-weight: 600; color: var(--k-ink); }\nbody.ctos.ctr-ds .ctr-voice .ctr-name b { font-weight: 600; }\nbody.ctos.ctr-ds .ctr-city { --vc: var(--k-ink); }\nbody.ctos.ctr-ds .ctr-reply { --vc: var(--ds-lime); }\nbody.ctos.ctr-ds .ctr-mem p { color: #9aa3bd; }\nbody.ctos.ctr-ds .ctr-paper { background: #dfe3ee; color: #10131d; font-family: var(--k-serif); }\nbody.ctos.ctr-ds .ctr-paper::after { background: repeating-linear-gradient(0deg, rgba(0, 0, 0, .03) 0 1px, transparent 1px 3px); }\nbody.ctos.ctr-ds .ctr-foot { border-top: 1px solid var(--k-line); }\nbody.ctos.ctr-ds .ctr-no b { font: 400 18px/1 var(--ds-term); color: var(--k-ink); }\nbody.ctos.ctr-ds .ctr-ticks i.on { background: var(--k-line-2); border-color: var(--k-line-2); }\nbody.ctos.ctr-ds .ctr-ticks i.now { background: var(--ds-pink); border-color: var(--ds-pink); }\nbody.ctos.ctr-ds .ctr-nav .ctr-btn, body.ctos.ctr-ds .ctr-swipe .ctr-btn { font-family: var(--ds-term); font-size: 15px; }\nbody.ctos.ctr-ds .ctr-nav .ctr-btn:hover:not(:disabled) { background: var(--ds-paper); color: var(--ds-black); }\nbody.ctos.ctr-ds .ctr-end .ctr-nav [data-ctr=\"next\"] { color: var(--ds-lime); }\nbody.ctos.ctr-ds .ctr-goto input { font: 400 17px/1 var(--ds-term); color: var(--k-ink); }\nbody.ctos.ctr-ds :is(.ctr.ctr-live, body.ctr-generating .ctr-focus .ctr) .ctr-recv { font: 400 15px/1 var(--ds-term); color: var(--ds-lime); }\n\n/* 底部控制条：像手机底下那条白色按键提示栏，压暗一点 */\nbody.ctos.ctr-ds #ctr-bar { background: #d9dde8; color: #10131d; border: 0; }\nbody.ctos.ctr-ds #ctr-bar * { border-color: rgba(16, 19, 29, .14) !important; }\nbody.ctos.ctr-ds #ctr-bar .b-place, body.ctos.ctr-ds #ctr-bar .b-title, body.ctos.ctr-ds #ctr-bar .b-count, body.ctos.ctr-ds #ctr-bar em, body.ctos.ctr-ds #ctr-bar i { color: #3b4258; }\nbody.ctos.ctr-ds #ctr-bar .b-place b { color: #10131d; }\nbody.ctos.ctr-ds #ctr-bar .ctr-btn { color: #10131d; font: 600 13px/1 var(--k-cjk); }\nbody.ctos.ctr-ds #ctr-bar .ctr-btn:hover:not(:disabled) { background: #10131d; color: var(--ds-paper); }\nbody.ctos.ctr-ds #ctr-bar .ctr-btn:disabled { color: #9aa0b2; }\nbody.ctos.ctr-ds #ctr-bar .b-goto input { background: #fff; color: #10131d; border-color: #9aa0b2 !important; font: 400 17px/1 var(--ds-term); }\nbody.ctos.ctr-ds #ctr-bar .b-mode { background: #10131d; color: var(--ds-paper); }\n\n/* ---------- 全屏阅读：深蓝网点底，正文垫一层深色 ---------- */\nbody.ctos.ctr-ds.ctr-full #chat > .mes.ctr-focus { background: radial-gradient(1000px 520px at 50% 110%, rgba(47, 91, 224, .16), transparent 70%), var(--ds-dither), #090c17; }\nbody.ctos.ctr-ds.ctr-full .ctr { border: 0; background: transparent; }\nbody.ctos.ctr-ds.ctr-full .ctr:is(.ctr-hascast, .ctr-hascg) .ctr-page {\n  background: color-mix(in srgb, #090c17 84%, transparent);\n  box-shadow: 0 0 0 22px color-mix(in srgb, #090c17 84%, transparent), 0 0 40px 30px color-mix(in srgb, #090c17 40%, transparent);\n}\nbody.ctos.ctr-ds .ctr-fig.dim { filter: brightness(.45) saturate(.7); }\nbody.ctos.ctr-ds .ctr-tag { border: 1px solid var(--k-line-2); border-left: 3px solid var(--ds-cyan); background: rgba(9, 12, 23, .88); color: var(--k-ink); font: 500 12.5px/1.2 var(--k-cjk); }\nbody.ctos.ctr-ds .ctr-tag.cg { border-left-color: var(--ds-pink); }\n\n/* ---------- 笔记本：那台手机。顶上白色状态条，底下白色按键提示条，中间黑底 ---------- */\nbody.ctos.ctr-ds .cdx-fab { background: #0b0e1a !important; border: 1px solid var(--k-line-2); }\nbody.ctos.ctr-ds .cdx-fab::after { content: ''; position: absolute; inset: 10px; background: var(--ds-skull-w) center / contain no-repeat; }\nbody.ctos.ctr-ds .cdx-fab > :not(.cdx-badge) { opacity: 0; }\nbody.ctos.ctr-ds .cdx-badge { background: var(--ds-paper) !important; color: var(--ds-black) !important; font-family: var(--ds-term); font-size: 13px !important; }\nbody.ctos.ctr-ds .cdx-panel, body.ctos.ctr-ds .cdx-panel.nb, body.ctos.ctr-ds .cdx-panel.tw {\n  background: var(--ds-dither), #0b0e1a; color: var(--k-ink);\n  border: 1px solid #3a4468; box-shadow: 0 24px 60px rgba(0, 0, 0, .6);\n}\nbody.ctos.ctr-ds .cdx-panel::after, body.ctos.ctr-ds .cdx-panel.nb::after, body.ctos.ctr-ds .cdx-panel.tw::before { background: none; }\nbody.ctos.ctr-ds .cdx-panel .cdx-cn { display: none !important; }\nbody.ctos.ctr-ds .cdx-head { position: relative; padding-top: 30px !important; }\nbody.ctos.ctr-ds .cdx-head::before {\n  content: '⌁ ctOS LDN          ▴ ▮'; position: absolute; left: 0; right: 0; top: 0; height: 20px; padding: 0 10px;\n  background: var(--ds-paper); color: #10131d; font: 400 15px/20px var(--ds-term); letter-spacing: .06em; white-space: pre;\n}\nbody.ctos.ctr-ds .cdx-title b { font: 400 20px/1.15 var(--ds-zh) !important; color: var(--k-ink) !important; letter-spacing: .04em; }\nbody.ctos.ctr-ds .cdx-title small { font: 400 14px/1 var(--ds-term) !important; letter-spacing: .1em; color: var(--ds-pink) !important; }\nbody.ctos.ctr-ds .cdx-panel :is(.cdx-x, .cdx-full) { color: var(--k-mute) !important; font: 400 15px/1 var(--ds-term) !important; letter-spacing: .06em; }\nbody.ctos.ctr-ds .cdx-panel :is(.cdx-x, .cdx-full):hover { color: var(--k-ink) !important; }\nbody.ctos.ctr-ds .cdx-search { border-bottom: 1px solid var(--k-line-2) !important; }\nbody.ctos.ctr-ds .cdx-search input { color: var(--k-ink) !important; font: 400 17px/1.4 var(--ds-term) !important; }\nbody.ctos.ctr-ds .cdx-search input::placeholder { color: var(--k-dim) !important; }\nbody.ctos.ctr-ds .cdx-tabs { flex-wrap: wrap; gap: 2px !important; padding-top: 4px !important; padding-bottom: 6px !important; background: #141a2c; }\nbody.ctos.ctr-ds .cdx-tabs button { color: var(--k-mute) !important; font: 600 12.5px/1 var(--k-cjk) !important; padding: 7px 9px !important; }\nbody.ctos.ctr-ds .cdx-tabs button.on { color: var(--ds-black) !important; background: var(--ds-paper); }\nbody.ctos.ctr-ds .cdx-tabs button.on::after { display: none; }\nbody.ctos.ctr-ds .cdx-tile { border: 1px solid var(--k-line-2) !important; box-shadow: none !important; background: #0e1322; }\nbody.ctos.ctr-ds .cdx-tile:hover { border-color: var(--ds-lime) !important; background: #121a2c !important; }\nbody.ctos.ctr-ds .cdx-tile b { font: 500 15px/1.3 var(--k-cjk) !important; color: var(--k-ink); }\nbody.ctos.ctr-ds .cdx-tile small { font: 400 13px/1 var(--ds-term) !important; letter-spacing: .1em; color: var(--ds-lime) !important; }\nbody.ctos.ctr-ds .cdx-tile.pending small::after { color: var(--ds-pink); }\nbody.ctos.ctr-ds .cdx-av-face { border: 1px solid var(--k-line-2); }\nbody.ctos.ctr-ds .cdx-back { color: var(--ds-cyan) !important; font: 400 15px/1 var(--ds-term) !important; letter-spacing: .06em; }\nbody.ctos.ctr-ds .cdx-e-kind { font: 400 15px/1 var(--ds-term) !important; letter-spacing: .12em; color: var(--ds-lime) !important; }\nbody.ctos.ctr-ds .cdx-e-kind::before { content: '[ '; }\nbody.ctos.ctr-ds .cdx-e-kind::after { content: ' ]'; }\nbody.ctos.ctr-ds .cdx-e-name { font: 400 30px/1.15 var(--ds-zh) !important; color: var(--k-ink) !important; }\nbody.ctos.ctr-ds .cdx-e-dis { border-left: 3px solid var(--ds-pink) !important; color: var(--k-mute) !important; }\nbody.ctos.ctr-ds .cdx-e-desc { font: 400 14.5px/1.95 var(--k-cjk) !important; color: var(--k-prose) !important; }\nbody.ctos.ctr-ds .cdx-e-meta { border-color: var(--k-line) !important; }\nbody.ctos.ctr-ds .cdx-chip { border: 1px solid var(--k-line-2) !important; color: var(--k-mute) !important; }\nbody.ctos.ctr-ds .cdx-chip:hover { border-color: var(--ds-lime) !important; color: var(--ds-lime) !important; }\nbody.ctos.ctr-ds .cdx-foot { background: var(--ds-paper); color: #3b4258 !important; border: 0 !important; font: 400 15px/1 var(--ds-term) !important; letter-spacing: .08em; }\nbody.ctos.ctr-ds .cdx-foot * { color: #10131d !important; }\nbody.ctos.ctr-ds .cdx-gal-main { border: 1px solid var(--k-line-2) !important; background: radial-gradient(ellipse at 50% 90%, rgba(47, 91, 224, .25), transparent 70%), var(--ds-dither), #0a0e1c !important; }\nbody.ctos.ctr-ds .cdx-gal-main figcaption { background: var(--ds-paper) !important; color: #10131d !important; border-left: 0 !important; font: 600 12px/1.2 var(--k-cjk) !important; }\nbody.ctos.ctr-ds .cdx-gal-strip button.on { border-color: var(--ds-lime) !important; }\nbody.ctos.ctr-ds .cdx-gal-strip span { font: 400 13px/1 var(--ds-term) !important; }\nbody.ctos.ctr-ds .cdx-skel i { background: linear-gradient(90deg, #121829, #222b48, #121829) 0 0 / 200% 100% !important; }\nbody.ctos.ctr-ds .cdx-scan { background: linear-gradient(180deg, transparent, rgba(163, 230, 53, .12) 70%, rgba(163, 230, 53, .6)) !important; }\nbody.ctos.ctr-ds .cdx-tip { background: #0b0e1a !important; border: 1px solid var(--k-line-2) !important; }\nbody.ctos.ctr-ds.cdx-on .cdx-term { --u: rgba(224, 54, 155, .6); }\nbody.ctos.ctr-ds.cdx-on .cdx-term:hover { --u: var(--ds-cyan); color: var(--k-ink); }\nbody.ctos.ctr-ds.cdx-on .cdx-term.seen { --u: rgba(139, 148, 175, .45); }\nbody.ctos.ctr-ds.cdx-on .cdx-term::after { background: var(--ds-lime); }\n\n/* ---------- 网页版（轻量酒馆）自带的部件 ---------- */\nbody.ctos.ctr-ds .lt-save { border: 1px solid var(--k-line-2); background: #0e1322; }\nbody.ctos.ctr-ds .lt-save.on { border-color: var(--ds-lime); box-shadow: inset 3px 0 0 var(--ds-lime); }\nbody.ctos.ctr-ds .lt-save small { font: 400 14px/1.2 var(--ds-term); }\nbody.ctos.ctr-ds .lt-toast { border: 1px solid var(--k-line-2); background: #0b0e1a; }\nbody.ctos.ctr-ds .lt-ck-table { border: 1px solid var(--k-line-2); background: #0e1322; }\nbody.ctos.ctr-ds .lt-ost-player, body.ctos.ctr-ds .lt-ost-item { border-color: var(--k-line-2); background: #0e1322; }\nbody.ctos.ctr-ds .lt-ost-tag { background: transparent; border: 0; color: var(--ds-lime); font: 400 14px/1 var(--ds-term); letter-spacing: .06em; }\nbody.ctos.ctr-ds .lt-ost-tag::before { content: '[ '; }\nbody.ctos.ctr-ds .lt-ost-tag::after { content: ' ]'; }\nbody.ctos.ctr-ds .lt-ost-link:hover { border-color: var(--ds-lime); color: var(--k-ink); }\n/* 检定卡：任务面板的样子，结果是底下那条整宽的色条（成功荧光绿，失败品红） */\nbody.ctos.ctr-ds .lt-check { background: #0b0e1a; border: 1px solid var(--k-line-2); border-left: 1px solid var(--k-line-2); padding-bottom: 0; }\nbody.ctos.ctr-ds .lt-check.crit { --ck: var(--ds-cyan); }\nbody.ctos.ctr-ds .lt-check.ok { --ck: var(--ds-lime); }\nbody.ctos.ctr-ds .lt-check.cost { --ck: #e3b341; }\nbody.ctos.ctr-ds .lt-check.fail, body.ctos.ctr-ds .lt-check.fumble { --ck: var(--ds-pink); }\nbody.ctos.ctr-ds .lt-ck-tag { background: transparent; color: var(--ds-lime); font: 400 15px/1 var(--ds-term); letter-spacing: .12em; padding: 0; }\nbody.ctos.ctr-ds .lt-ck-tag::before { content: '[ '; }\nbody.ctos.ctr-ds .lt-ck-tag::after { content: ' ]'; }\nbody.ctos.ctr-ds .lt-ck-skill { font: 600 14px/1.2 var(--k-cjk); }\nbody.ctos.ctr-ds .lt-ck-roll em { font: 400 34px/1 var(--ds-term); color: var(--k-ink); }\nbody.ctos.ctr-ds .lt-ck-roll strong { padding: 4px 10px; background: var(--ck); color: var(--ds-black); font: 600 13px/1 var(--k-cjk); letter-spacing: .1em; }\nbody.ctos.ctr-ds .lt-ck-bar { margin: 10px -12px 0; height: 6px; background: #161b2f; }\nbody.ctos.ctr-ds .lt-ck-bar .zone { background: rgba(163, 230, 53, .4); }\nbody.ctos.ctr-ds .lt-ck-bar .cost { background: rgba(227, 179, 65, .4); }\nbody.ctos.ctr-ds .lt-dice-ov { background: rgba(5, 6, 12, .7); backdrop-filter: none; }\nbody.ctos.ctr-ds .lt-dice-ov .lt-check { padding-bottom: 0; }\nbody.ctos.ctr-ds .lt-dice-ov .lt-ck-bar { margin: 14px -18px 0; }\nbody.ctos.ctr-ds .lt-dice-ov .lt-check::after { content: 'DEDSEC // DICE'; font: 400 14px/1 var(--ds-term); color: var(--k-dim); }\n\n@media screen and (max-width: 1000px) {\n  body.ctos.ctr-ds #ctr-brand { min-height: 0; margin-bottom: 0; border-bottom: 0; }\n  body.ctos.ctr-ds #ctr-brand::after { display: none; }\n  body.ctos.ctr-ds #ctr-brand span { display: none; }\n  body.ctos.ctr-ds #top-settings-holder { border-right: 0; border-bottom: 1px solid var(--k-line-2); }\n}\n\n/* ============================================================\n   开场动画：Linux 终端入侵日志 → 画面撕裂 → 黑底上的 DedSec 字标和 JOIN US\n   ============================================================ */\n#ctr-boot.calm {\n  position: fixed; inset: 0; z-index: 2147483600; overflow: hidden; cursor: pointer;\n  background: #030305; color: #cfd8e3; font: 400 15px/1.35 'VT323', 'Space Mono', monospace;\n}\n#ctr-boot.calm .bt-log { position: absolute; left: 0; right: 0; bottom: 0; padding: 22px 26px; white-space: pre-wrap; word-break: break-all; font-size: clamp(13px, 1.5vw, 18px); }\n#ctr-boot.calm .bt-log .ok { color: #8fd36a; }\n#ctr-boot.calm .bt-log .wr { color: #d9bf5c; }\n#ctr-boot.calm .bt-log .er { color: #e0369b; }\n#ctr-boot.calm .bt-log .pr { color: #3fcfe0; }\n#ctr-boot.calm .bt-log .dm { color: #5c6584; }\n#ctr-boot.calm .bt-log .cur::after { content: '█'; animation: bt-blink .7s steps(1) infinite; }\n@keyframes bt-blink { 50% { opacity: 0; } }\n#ctr-boot.calm .bt-skip { position: absolute; right: 18px; top: 14px; color: #5c6584; font-size: 15px; letter-spacing: .1em; }\n/* 撕裂：只闪半秒，横条错位，不刷满屏强光 */\n#ctr-boot.tear .bt-log { animation: bt-tear 90ms steps(2) infinite; }\n#ctr-boot.tear::before { content: ''; position: absolute; inset: 0; z-index: 2; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(224, 54, 155, .35) 0 2px, transparent 2px 19px, rgba(63, 207, 224, .3) 19px 21px, transparent 21px 47px); animation: bt-bars 120ms steps(3) infinite; }\n@keyframes bt-tear {\n  0% { transform: translate(0); clip-path: inset(0 0 0 0); }\n  33% { transform: translate(-12px, 2px); clip-path: inset(12% 0 40% 0); filter: drop-shadow(4px 0 #e0369b) drop-shadow(-4px 0 #3fcfe0); }\n  66% { transform: translate(14px, -2px); clip-path: inset(48% 0 8% 0); }\n  100% { transform: translate(-5px, 0); clip-path: inset(30% 0 30% 0); }\n}\n@keyframes bt-bars { 0% { transform: translateY(0); } 50% { transform: translateY(-23px); } 100% { transform: translateY(11px); } }\n#ctr-boot.calm .bt-ds { position: absolute; inset: 0; display: grid; place-items: center; align-content: center; gap: 10px; opacity: 0; background: #030305; }\n#ctr-boot.ds .bt-log, #ctr-boot.ds .bt-skip { opacity: 0; }\n#ctr-boot.ds .bt-ds { opacity: 1; }\n#ctr-boot.calm .bt-skull { width: min(16vw, 92px); aspect-ratio: 1; background: var(--ds-skull-w) center / contain no-repeat; animation: bt-in 420ms ease both; }\n/* 字标：白色斜线排线填出来，外面一道白描边，像喷在墙上的模板字 */\n#ctr-boot.calm .bt-word {\n  margin-top: -6px; font: 700 clamp(54px, 11vw, 132px)/.9 'Silkscreen', 'Space Mono', monospace; letter-spacing: .02em;\n  color: transparent; -webkit-text-stroke: 2px #f2f4f8;\n  background: repeating-linear-gradient(-55deg, #f2f4f8 0 2px, transparent 2px 6px); -webkit-background-clip: text; background-clip: text;\n  transform: rotate(-4deg); animation: bt-in 420ms 100ms ease both;\n}\n#ctr-boot.calm .bt-join { margin-top: -18px; padding: 4px 18px 3px; border: 3px solid #f2f4f8; background: #030305; color: #f2f4f8; font: 700 clamp(22px, 3.4vw, 38px)/1 'Silkscreen', 'Space Mono', monospace; letter-spacing: .08em; transform: rotate(-4deg); animation: bt-in 360ms 260ms ease both; }\n#ctr-boot.calm .bt-sub { margin-top: 18px; font: 400 clamp(14px, 1.6vw, 18px)/1.4 'PingFang SC', 'Microsoft YaHei', sans-serif; color: #8b94af; letter-spacing: .12em; animation: bt-in 360ms 420ms ease both; }\n#ctr-boot.calm .bt-touch { position: absolute; left: 0; right: 0; bottom: 7vh; text-align: center; font: 400 17px/1 'VT323', monospace; color: #cfd8e3; letter-spacing: .08em; animation: bt-blink 1.4s steps(1) 600ms infinite; }\n#ctr-boot.calm .bt-line { position: absolute; left: 50%; bottom: calc(7vh + 6px); width: min(18vw, 140px); height: 1px; background: #c8283c; transform-origin: 0 50%; transform: rotate(-32deg); animation: bt-draw 500ms 500ms ease both; }\n@keyframes bt-draw { from { width: 0; } }\n@keyframes bt-in { from { opacity: 0; transform: translateY(8px) rotate(-4deg); } }\n#ctr-boot.calm .bt-skull { animation-name: bt-in-flat; }\n@keyframes bt-in-flat { from { opacity: 0; transform: translateY(8px); } }\n#ctr-boot.out { animation: bt-out 360ms ease both; }\n@keyframes bt-out { to { opacity: 0; } }\n" + "\n/* ════ DedSec · 霓虹：第一版的高饱和霓虹，挂在 body.ctos.ctr-neon 下，开场是 #ctr-boot.neon ════ */\n/* ============================================================\n   DedSec 主题：ctOS 的第二套皮。照《看门狗 2》DedSec 那一路：黑紫底，品红、电青、酸黄三色霓虹，\n   像素字和终端字，贴纸一样的粗黑描边和硬投影，RGB 错位，扫描线和半调网点。\n   全部挂在 body.ctos.ctr-neon 下，切回 ctOS 原样不动。\n   ============================================================ */\nbody.ctos.ctr-neon {\n  --k-bg: #0c0614; --k-panel: #150a24; --k-raise: #22103b;\n  --k-line: #33205a; --k-line-2: #5b3a94;\n  --k-ink: #fff7ff; --k-prose: #ede4fb; --k-voice: #cfbff2; --k-mute: #ae9dd4; --k-dim: #7b6aa3;\n  --k-acc: #ff2a7a;\n  --k-river: #3ee8ff; --k-old: #ffd23f; --k-lily: #c69bff; --k-hood: #8cff6a;\n  --ds-pink: #ff2a7a; --ds-cyan: #00e5ff; --ds-yellow: #ffe600; --ds-lime: #8cff3c; --ds-violet: #9b5cff; --ds-black: #07030d;\n  --k-mono: 'Space Mono', 'JetBrains Mono', monospace;\n  --k-cond: 'Silkscreen', 'Space Mono', monospace;\n  --k-serif: 'Noto Sans SC', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;\n  --ds-pixel: 'Silkscreen', 'Space Mono', monospace;\n  --ds-term: 'VT323', 'Space Mono', monospace;\n  --ds-zh: 'ZCOOL QingKe HuangYou', 'PingFang SC', 'Microsoft YaHei', sans-serif;\n  --ds-rgb: -1.5px 0 rgba(0, 229, 255, .85), 1.5px 0 rgba(255, 42, 122, .85);\n  --ds-hard: 4px 4px 0 var(--ds-black);\n  --ds-cut: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));\n  background:\n    radial-gradient(1100px 620px at 88% -12%, rgba(255, 42, 122, .2), transparent 62%),\n    radial-gradient(900px 560px at -8% 108%, rgba(0, 229, 255, .16), transparent 60%),\n    radial-gradient(rgba(255, 255, 255, .055) 1px, transparent 1.5px) 0 0 / 7px 7px,\n    #0c0614 !important;\n}\n/* 整页一层扫描线，很淡，压在所有东西上面但不挡点击 */\nbody.ctos.ctr-neon::after {\n  content: ''; position: fixed; inset: 0; z-index: 2147482000; pointer-events: none;\n  background: repeating-linear-gradient(0deg, rgba(255, 255, 255, .025) 0 1px, transparent 1px 3px);\n  mix-blend-mode: overlay;\n}\nbody.ctos.ctr-neon ::selection { background: var(--ds-yellow); color: var(--ds-black); }\n@keyframes nx-ds-glitch {\n  0%, 100% { transform: none; clip-path: none; }\n  20% { transform: translate(-2px, 1px); clip-path: inset(10% 0 60% 0); }\n  40% { transform: translate(2px, -1px); clip-path: inset(55% 0 20% 0); }\n  60% { transform: translate(-1px, 0); clip-path: inset(30% 0 45% 0); }\n  80% { transform: translate(1px, 1px); clip-path: inset(75% 0 5% 0); }\n}\n@keyframes nx-ds-flick { 0%, 100% { opacity: 1; } 47% { opacity: 1; } 48% { opacity: .35; } 49% { opacity: 1; } 72% { opacity: .7; } 73% { opacity: 1; } }\n\n/* ---------- 左侧栏 ---------- */\nbody.ctos.ctr-neon #top-settings-holder { background: linear-gradient(180deg, #170a29, #0e0619); border-right: 2px solid var(--ds-pink); box-shadow: 4px 0 0 rgba(0, 229, 255, .25); }\nbody.ctos.ctr-neon #ctr-brand {\n  position: relative; min-height: 64px; margin-bottom: 12px; overflow: hidden;\n  background: var(--ds-pink); color: var(--ds-black);\n  background-image: repeating-linear-gradient(-45deg, transparent 0 9px, rgba(0, 0, 0, .12) 9px 11px);\n}\nbody.ctos.ctr-neon #ctr-brand b { font-size: 0; }\nbody.ctos.ctr-neon #ctr-brand b::before {\n  content: ''; display: inline-block; width: 30px; height: 30px; vertical-align: middle;\n  background: var(--ds-skull) center / contain no-repeat;\n}\nbody.ctos.ctr-neon #ctr-brand b::after { content: 'DEDSEC'; margin-left: 8px; vertical-align: middle; font: 700 19px/1 var(--ds-pixel); letter-spacing: .02em; color: var(--ds-black); text-shadow: 2px 0 var(--ds-cyan); }\nbody.ctos.ctr-neon #ctr-brand span { font: 400 15px/1 var(--ds-term); letter-spacing: .06em; color: var(--ds-black); }\nbody.ctos.ctr-neon #ctr-railbtn { color: var(--ds-black); border-color: rgba(0, 0, 0, .45); }\nbody.ctos.ctr-neon #ctr-railbtn:hover { background: var(--ds-black); color: var(--ds-yellow); }\nbody.ctos.ctr-neon #top-settings-holder > .drawer > .drawer-toggle { color: var(--k-mute); }\nbody.ctos.ctr-neon #top-settings-holder > .drawer > .drawer-toggle:hover { color: var(--ds-cyan); background: rgba(0, 229, 255, .08); }\nbody.ctos.ctr-neon #top-settings-holder .drawer-toggle::before { font: 600 14px/1.2 var(--k-cjk); letter-spacing: .06em; }\nbody.ctos.ctr-neon #top-settings-holder .drawer-toggle::after { font: 400 15px/1 var(--ds-term); letter-spacing: .08em; color: var(--k-dim); }\nbody.ctos.ctr-neon #top-settings-holder > .drawer:has(> .drawer-content.openDrawer) > .drawer-toggle,\nbody.ctos.ctr-neon #top-settings-holder > .drawer:has(> nav.openDrawer) > .drawer-toggle {\n  color: var(--ds-black); background: var(--ds-cyan); box-shadow: inset 5px 0 0 var(--ds-pink);\n  clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);\n}\nbody.ctos.ctr-neon #top-settings-holder > .drawer:has(> .openDrawer) > .drawer-toggle::after { color: var(--ds-black); }\nbody.ctos.ctr-neon #ctr-tools { border-top: 2px dashed var(--k-line-2); }\nbody.ctos.ctr-neon .ctr-label { font: 400 14px/1 var(--ds-term); letter-spacing: .14em; color: var(--ds-cyan); }\nbody.ctos.ctr-neon .ctr-seg { border: 2px solid var(--k-line-2); }\nbody.ctos.ctr-neon .ctr-seg .ctr-btn.on { background: var(--ds-yellow); color: var(--ds-black); font-weight: 700; }\nbody.ctos.ctr-neon .ctr-sound { border: 2px solid var(--k-line-2); }\nbody.ctos.ctr-neon .ctr-sound.on em { color: var(--ds-lime); }\n\n/* ---------- 抽屉 ---------- */\nbody.ctos.ctr-neon #top-settings-holder .drawer-content {\n  background: linear-gradient(180deg, rgba(255, 42, 122, .07), transparent 200px), var(--k-panel);\n  border-right: 2px solid var(--ds-cyan); box-shadow: 10px 0 0 rgba(255, 42, 122, .22), 24px 0 60px rgba(0, 0, 0, .55);\n}\nbody.ctos.ctr-neon #top-settings-holder .drawer-content h3,\nbody.ctos.ctr-neon #top-settings-holder .drawer-content h4 { font-family: var(--ds-zh); font-weight: 400; letter-spacing: .06em; color: var(--ds-yellow); text-shadow: var(--ds-rgb); }\n\n/* ---------- 主区与消息 ---------- */\nbody.ctos.ctr-neon #chat .mes { border-bottom: 1px dashed var(--k-line-2); }\nbody.ctos.ctr-neon .mes .name_text { font: 700 12px/1 var(--ds-pixel); letter-spacing: .06em; color: var(--ds-cyan); text-shadow: var(--ds-rgb); }\nbody.ctos.ctr-neon .mes .timestamp { font: 400 14px/1 var(--ds-term); color: var(--k-dim); }\nbody.ctos.ctr-neon .mes[is_user=\"true\"] .name_text { color: var(--ds-yellow); }\nbody.ctos.ctr-neon .mes[is_user=\"true\"] .mes_text {\n  color: var(--k-ink); background: #1d0d33; border: 2px solid var(--ds-yellow); box-shadow: var(--ds-hard);\n  clip-path: var(--ds-cut);\n}\nbody.ctos.ctr-neon .mes_text q, body.ctos.ctr-neon .mes_text q i { color: var(--ds-yellow); }\nbody.ctos.ctr-neon .mes_text blockquote { border-left: 3px solid var(--ds-cyan); }\n\n/* ---------- 输入区 ---------- */\nbody.ctos.ctr-neon #send_form { background: #12081f; border: 2px solid var(--ds-pink); box-shadow: 5px 5px 0 rgba(0, 229, 255, .55); }\nbody.ctos.ctr-neon #send_form:focus-within { border-color: var(--ds-cyan); box-shadow: 5px 5px 0 rgba(255, 42, 122, .7); }\nbody.ctos.ctr-neon #send_textarea { font-size: 14.5px; }\nbody.ctos.ctr-neon #send_textarea::placeholder { color: var(--k-dim); font-family: var(--k-cjk); }\nbody.ctos.ctr-neon #rightSendForm > #send_but { background: var(--ds-pink); color: var(--ds-black); }\nbody.ctos.ctr-neon #rightSendForm > #send_but:hover { background: var(--ds-yellow); color: var(--ds-black); }\nbody.ctos.ctr-neon :is(#leftSendForm, #rightSendForm) > div:hover { color: var(--ds-cyan); background: rgba(0, 229, 255, .08); }\n\n/* ---------- 通用控件 ---------- */\nbody.ctos.ctr-neon .menu_button { border: 2px solid var(--k-line-2); color: var(--k-ink); font-weight: 600; }\nbody.ctos.ctr-neon .menu_button:hover { background: var(--ds-cyan); border-color: var(--ds-cyan); color: var(--ds-black); box-shadow: 3px 3px 0 var(--ds-pink); }\nbody.ctos.ctr-neon .menu_button.active, body.ctos.ctr-neon .menu_button.toggleEnabled { border-color: var(--ds-pink); color: var(--ds-pink); }\nbody.ctos.ctr-neon :is(.text_pole, select, textarea:not(#send_textarea)),\nbody.ctos.ctr-neon input:is([type=\"text\"], [type=\"number\"], [type=\"search\"], [type=\"password\"], [type=\"url\"], [type=\"email\"]) { border: 2px solid var(--k-line-2) !important; background: #10071c !important; }\nbody.ctos.ctr-neon :is(.text_pole, select, textarea, input):focus { border-color: var(--ds-cyan) !important; outline: none; box-shadow: 3px 3px 0 rgba(255, 42, 122, .6); }\nbody.ctos.ctr-neon input[type=\"checkbox\"] { accent-color: var(--ds-pink); }\nbody.ctos.ctr-neon input[type=\"range\"] { accent-color: var(--ds-cyan); }\n\n/* ---------- 阅读器卡片 ---------- */\nbody.ctos.ctr-neon .ctr {\n  position: relative; background: linear-gradient(180deg, rgba(155, 92, 255, .07), transparent 140px), #0f0719;\n  border: 2px solid var(--ds-pink); box-shadow: 6px 6px 0 rgba(0, 229, 255, .45);\n}\nbody.ctos.ctr-neon .ctr-head { border-bottom: 2px solid var(--k-line-2); background: repeating-linear-gradient(-45deg, rgba(255, 42, 122, .07) 0 8px, transparent 8px 16px); }\nbody.ctos.ctr-neon .ctr-place { font: 400 15px/1.2 var(--ds-zh); color: var(--k-mute); }\nbody.ctos.ctr-neon .ctr-place b { color: var(--ds-yellow); font-weight: 400; }\nbody.ctos.ctr-neon .ctr-title { font: 400 15px/1 var(--ds-term); color: var(--ds-cyan); }\nbody.ctos.ctr-neon .ctr-modebtn { font: 700 11px/1 var(--ds-pixel); color: var(--ds-cyan); }\nbody.ctos.ctr-neon .ctr-modebtn:hover { background: var(--ds-cyan); color: var(--ds-black); }\nbody.ctos.ctr-neon .ctr-rule span { font: 400 15px/1 var(--ds-term); color: var(--ds-pink); }\nbody.ctos.ctr-neon .ctr-rule::after, body.ctos.ctr-neon .ctr-rule em::after { height: 2px; background: repeating-linear-gradient(90deg, var(--k-line-2) 0 6px, transparent 6px 10px); }\nbody.ctos.ctr-neon .ctr-rule em b { color: var(--ds-yellow); }\nbody.ctos.ctr-neon .ctr-page:empty::before { font: 400 18px/1 var(--ds-term); color: var(--ds-pink); content: '> RECEIVING_'; }\n\n/* 名签：说话人做成小贴纸，每次颜色跟着声部 */\nbody.ctos.ctr-neon .ctr-dia .ctr-name b {\n  display: inline-block; padding: 3px 7px 2px; transform: rotate(-2deg);\n  background: var(--ds-cyan); color: var(--ds-black); font: 400 14px/1.2 var(--ds-zh); letter-spacing: .06em;\n  box-shadow: 2px 2px 0 var(--ds-black);\n}\nbody.ctos.ctr-neon .ctr-dia .ctr-name.ctr-you b { background: var(--ds-yellow); color: var(--ds-black); }\nbody.ctos.ctr-neon .ctr-name small { font: 400 12px/1 var(--ds-term); letter-spacing: .08em; color: var(--k-dim); }\nbody.ctos.ctr-neon .ctr-narr { font-size: 17px; line-height: 2; }\nbody.ctos.ctr-neon .ctr-line { font-size: 17.5px; color: var(--k-ink); }\nbody.ctos.ctr-neon .ctr-q { color: var(--ds-yellow); }\nbody.ctos.ctr-neon .ctr-voice .ctr-name b { font: 400 15px/1.2 var(--ds-zh); text-shadow: 0 0 8px currentColor; }\nbody.ctos.ctr-neon .ctr-vbody { border-left-width: 3px; background: linear-gradient(90deg, color-mix(in srgb, var(--vc) 9%, transparent), transparent 75%); }\nbody.ctos.ctr-neon .ctr-city { --vc: var(--ds-yellow); }\nbody.ctos.ctr-neon .ctr-reply { --vc: var(--ds-cyan); }\nbody.ctos.ctr-neon .ctr-mem p { color: #b9a9dc; }\n/* 文本：一张斜贴的黄纸，顶上一截胶带 */\nbody.ctos.ctr-neon .ctr-paper { background: var(--ds-yellow); color: var(--ds-black); transform: rotate(-.6deg); box-shadow: 5px 5px 0 var(--ds-pink); font-family: var(--k-serif); }\nbody.ctos.ctr-neon .ctr-paper::before { content: ''; position: absolute; top: -9px; left: 40%; width: 70px; height: 18px; background: rgba(0, 229, 255, .75); transform: rotate(-4deg); }\n\n/* 页脚 */\nbody.ctos.ctr-neon .ctr-foot { border-top: 2px solid var(--k-line-2); }\nbody.ctos.ctr-neon .ctr-no b { font: 700 16px/1 var(--ds-pixel); color: var(--ds-yellow); }\nbody.ctos.ctr-neon .ctr-ticks i { height: 7px; border: 2px solid var(--k-line-2); }\nbody.ctos.ctr-neon .ctr-ticks i.on { background: var(--ds-violet); border-color: var(--ds-violet); }\nbody.ctos.ctr-neon .ctr-ticks i.now { background: var(--ds-pink); border-color: var(--ds-pink); box-shadow: 0 0 8px var(--ds-pink); }\nbody.ctos.ctr-neon .ctr-nav .ctr-btn, body.ctos.ctr-neon .ctr-swipe .ctr-btn { font-family: var(--ds-pixel); color: var(--ds-cyan); }\nbody.ctos.ctr-neon .ctr-nav .ctr-btn:hover:not(:disabled) { background: var(--ds-pink); color: var(--ds-black); }\nbody.ctos.ctr-neon .ctr-goto input { font: 700 14px/1 var(--ds-pixel); color: var(--ds-yellow); border: 2px solid var(--k-line-2); }\nbody.ctos.ctr-neon :is(.ctr.ctr-live, body.ctr-generating .ctr-focus .ctr) .ctr-recv { font-family: var(--ds-term); font-size: 15px; color: var(--ds-lime); }\n\n/* 底部控制条 */\nbody.ctos.ctr-neon #ctr-bar { background: #12081f; border: 2px solid var(--k-line-2); box-shadow: 4px 4px 0 rgba(255, 42, 122, .45); }\nbody.ctos.ctr-neon #ctr-bar .b-place { font-family: var(--k-cjk); color: var(--k-mute); }\nbody.ctos.ctr-neon #ctr-bar .b-place b { color: var(--ds-yellow); font-weight: 700; }\nbody.ctos.ctr-neon #ctr-bar .ctr-btn { color: var(--ds-cyan); font-family: var(--ds-pixel); }\nbody.ctos.ctr-neon #ctr-bar .ctr-btn:hover:not(:disabled) { background: var(--ds-cyan); color: var(--ds-black); }\nbody.ctos.ctr-neon #ctr-bar .b-mode { background: var(--ds-pink); color: var(--ds-black); }\nbody.ctos.ctr-neon #ctr-bar .b-goto input { font-family: var(--ds-pixel); color: var(--ds-yellow); }\n\n/* 状态栏 iframe 的外框 */\nbody.ctos.ctr-neon #ctr-hud { border: 0; }\n\n/* ---------- 全屏阅读 ---------- */\nbody.ctos.ctr-neon.ctr-full #chat > .mes.ctr-focus {\n  background:\n    radial-gradient(900px 500px at 50% 120%, rgba(255, 42, 122, .16), transparent 70%),\n    radial-gradient(rgba(255, 255, 255, .05) 1px, transparent 1.5px) 0 0 / 7px 7px,\n    #0b0513;\n}\nbody.ctos.ctr-neon.ctr-full .ctr { border: 0; box-shadow: none; background: transparent; }\nbody.ctos.ctr-neon.ctr-full .ctr:is(.ctr-hascast, .ctr-hascg) .ctr-page {\n  background: color-mix(in srgb, #0b0513 82%, transparent);\n  box-shadow: 0 0 0 22px color-mix(in srgb, #0b0513 82%, transparent), 8px 8px 0 22px rgba(255, 42, 122, .25);\n}\n/* 立绘：一点品红描边光，退暗时整体偏紫 */\nbody.ctos.ctr-neon .ctr-fig { filter: drop-shadow(-3px 0 0 rgba(0, 229, 255, .45)) drop-shadow(3px 0 0 rgba(255, 42, 122, .45)); }\nbody.ctos.ctr-neon .ctr-fig.dim { filter: brightness(.45) saturate(.6) hue-rotate(-20deg); }\nbody.ctos.ctr-neon .ctr-tag {\n  border: 2px solid var(--ds-black); border-left: 2px solid var(--ds-black); background: var(--ds-yellow); color: var(--ds-black);\n  font: 400 15px/1.1 var(--ds-zh); padding: 4px 10px; transform: rotate(-3deg); box-shadow: 3px 3px 0 var(--ds-pink);\n}\nbody.ctos.ctr-neon .ctr-tag.r, body.ctos.ctr-neon .ctr-tag:nth-of-type(even) { background: var(--ds-cyan); transform: rotate(2deg); }\nbody.ctos.ctr-neon .ctr-tag.dim { filter: brightness(.6) saturate(.7); }\n\n/* ---------- 笔记本：DedSec 下纸本和电子版都换成一台涂鸦手机 ---------- */\nbody.ctos.ctr-neon .cdx-fab { background: var(--ds-pink) !important; border: 2px solid var(--ds-black); box-shadow: 4px 4px 0 var(--ds-cyan); }\nbody.ctos.ctr-neon .cdx-fab::after { content: ''; position: absolute; inset: 8px; background: var(--ds-skull) center / contain no-repeat; }\nbody.ctos.ctr-neon .cdx-fab > :not(.cdx-badge) { opacity: 0; }\nbody.ctos.ctr-neon .cdx-badge { background: var(--ds-yellow) !important; color: var(--ds-black) !important; font-family: var(--ds-pixel); }\nbody.ctos.ctr-neon .cdx-panel, body.ctos.ctr-neon .cdx-panel.nb, body.ctos.ctr-neon .cdx-panel.tw {\n  background:\n    radial-gradient(500px 300px at 100% 0, rgba(255, 42, 122, .22), transparent 70%),\n    radial-gradient(rgba(255, 255, 255, .05) 1px, transparent 1.5px) 0 0 / 6px 6px,\n    #120822;\n  color: var(--k-ink); border: 2px solid var(--ds-cyan); box-shadow: 8px 8px 0 var(--ds-pink), 0 30px 70px rgba(0, 0, 0, .6);\n}\nbody.ctos.ctr-neon .cdx-panel::after, body.ctos.ctr-neon .cdx-panel.nb::after { background: repeating-linear-gradient(0deg, rgba(255, 255, 255, .025) 0 1px, transparent 1px 3px); }\nbody.ctos.ctr-neon .cdx-panel .cdx-cn { display: none !important; }\nbody.ctos.ctr-neon .cdx-head { position: relative; background: var(--ds-pink); color: var(--ds-black); }\nbody.ctos.ctr-neon .cdx-title b { font: 400 20px/1.1 var(--ds-zh) !important; letter-spacing: .04em; color: var(--ds-black) !important; text-shadow: 2px 0 var(--ds-cyan); }\nbody.ctos.ctr-neon .cdx-title small { font: 400 14px/1 var(--ds-term) !important; letter-spacing: .1em; color: var(--ds-black) !important; opacity: .8; }\nbody.ctos.ctr-neon .cdx-panel :is(.cdx-x, .cdx-full) { color: var(--ds-black) !important; font-family: var(--ds-pixel); }\nbody.ctos.ctr-neon .cdx-search { border-bottom: 2px solid var(--ds-black) !important; }\nbody.ctos.ctr-neon .cdx-search input { color: var(--ds-black) !important; font: 700 14px/1.4 var(--k-cjk) !important; }\nbody.ctos.ctr-neon .cdx-search input::placeholder { color: rgba(7, 3, 13, .55) !important; }\nbody.ctos.ctr-neon .cdx-head .cdx-search { background: rgba(255, 255, 255, .18); padding: 0 8px; }\nbody.ctos.ctr-neon .cdx-tabs { flex-wrap: wrap; gap: 4px 2px !important; }\nbody.ctos.ctr-neon .cdx-tabs button { color: var(--k-mute) !important; font: 700 13px/1 var(--k-cjk) !important; padding: 5px 7px !important; }\nbody.ctos.ctr-neon .cdx-tabs button.on { color: var(--ds-black) !important; background: var(--ds-yellow); box-shadow: 2px 2px 0 var(--ds-pink); }\nbody.ctos.ctr-neon .cdx-tabs button.on::after { display: none; }\nbody.ctos.ctr-neon .cdx-tile {\n  --tc: var(--ds-cyan);\n  border: 2px solid var(--tc) !important; box-shadow: 3px 3px 0 var(--ds-black) !important; background: rgba(255, 255, 255, .03);\n  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);\n}\nbody.ctos.ctr-neon .cdx-tile:nth-child(4n+2) { --tc: var(--ds-pink); }\nbody.ctos.ctr-neon .cdx-tile:nth-child(4n+3) { --tc: var(--ds-yellow); }\nbody.ctos.ctr-neon .cdx-tile:nth-child(4n+4) { --tc: var(--ds-lime); }\nbody.ctos.ctr-neon .cdx-tile:hover { background: color-mix(in srgb, var(--tc) 18%, transparent) !important; animation: nx-ds-flick 600ms steps(1) 1; }\nbody.ctos.ctr-neon .cdx-tile b { font: 400 17px/1.25 var(--ds-zh) !important; color: var(--k-ink); }\nbody.ctos.ctr-neon .cdx-tile small { font: 400 13px/1 var(--ds-term) !important; letter-spacing: .1em; color: var(--tc) !important; }\nbody.ctos.ctr-neon .cdx-tile.pending { border-style: dashed !important; }\nbody.ctos.ctr-neon .cdx-tile.pending small::after { color: var(--ds-yellow); }\nbody.ctos.ctr-neon .cdx-av-face { border: 2px solid var(--tc); border-radius: 0; clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%); }\nbody.ctos.ctr-neon .cdx-back { color: var(--ds-cyan) !important; font: 400 15px/1 var(--ds-term) !important; }\nbody.ctos.ctr-neon .cdx-e-kind { display: inline-block; padding: 2px 6px; background: var(--ds-cyan); color: var(--ds-black) !important; font: 400 13px/1 var(--ds-term) !important; letter-spacing: .1em; }\nbody.ctos.ctr-neon .cdx-e-name { font: 400 34px/1.1 var(--ds-zh) !important; color: var(--k-ink) !important; text-shadow: var(--ds-rgb); }\nbody.ctos.ctr-neon .cdx-e-dis { border-left: 3px solid var(--ds-yellow) !important; color: var(--ds-yellow) !important; font-family: var(--k-cjk); }\nbody.ctos.ctr-neon .cdx-e-desc { font: 400 15px/1.95 var(--k-cjk) !important; color: var(--k-prose) !important; }\nbody.ctos.ctr-neon .cdx-e-meta, body.ctos.ctr-neon .cdx-foot { border-color: var(--k-line-2) !important; color: var(--k-dim); }\nbody.ctos.ctr-neon .cdx-chip { border: 2px solid var(--k-line-2) !important; color: var(--k-mute) !important; font-family: var(--k-cjk); }\nbody.ctos.ctr-neon .cdx-chip:hover { border-color: var(--ds-cyan) !important; color: var(--ds-cyan) !important; }\nbody.ctos.ctr-neon .cdx-foot { font: 400 14px/1 var(--ds-term) !important; letter-spacing: .1em; }\nbody.ctos.ctr-neon .cdx-gal-main { border: 2px solid var(--ds-pink) !important; background: radial-gradient(ellipse at 50% 85%, rgba(0, 229, 255, .22), transparent 70%), repeating-linear-gradient(-45deg, rgba(255, 42, 122, .06) 0 10px, transparent 10px 20px) !important; box-shadow: 5px 5px 0 var(--ds-cyan); }\nbody.ctos.ctr-neon .cdx-gal-main figcaption { background: var(--ds-yellow) !important; color: var(--ds-black) !important; border-left: 0 !important; font: 400 14px/1.2 var(--ds-zh) !important; }\nbody.ctos.ctr-neon .cdx-gal-strip button.on { border: 2px solid var(--ds-yellow) !important; background: rgba(255, 230, 0, .1); }\nbody.ctos.ctr-neon .cdx-gal-strip span { font: 400 12px/1 var(--ds-term) !important; }\nbody.ctos.ctr-neon .cdx-skel i { background: linear-gradient(90deg, #1d0d33, #3b1f66, #1d0d33) 0 0 / 200% 100% !important; }\nbody.ctos.ctr-neon .cdx-scan { background: linear-gradient(180deg, transparent, rgba(0, 229, 255, .18) 70%, rgba(0, 229, 255, .8)) !important; }\nbody.ctos.ctr-neon .cdx-tip { background: var(--ds-black) !important; border: 2px solid var(--ds-cyan) !important; box-shadow: 4px 4px 0 var(--ds-pink); }\n\n/* 划线：品红虚线，点中以后青色填满 */\nbody.ctos.ctr-neon.cdx-on .cdx-term { --u: rgba(255, 42, 122, .75); }\nbody.ctos.ctr-neon.cdx-on .cdx-term:hover { --u: var(--ds-cyan); color: var(--ds-cyan); }\nbody.ctos.ctr-neon.cdx-on .cdx-term.seen { --u: rgba(155, 92, 255, .55); }\nbody.ctos.ctr-neon.cdx-on .cdx-term::after { background: var(--ds-cyan); height: 2px; }\n\n/* ---------- 网页版（轻量酒馆）自带的部件 ---------- */\nbody.ctos.ctr-neon .lt-note { color: var(--k-mute); }\nbody.ctos.ctr-neon .lt-save { border: 2px solid var(--k-line-2); background: #10071c; }\nbody.ctos.ctr-neon .lt-save.on { border-color: var(--ds-pink); box-shadow: 4px 4px 0 rgba(0, 229, 255, .5); }\nbody.ctos.ctr-neon .lt-save b { font-family: var(--ds-zh); font-weight: 400; font-size: 15px; }\nbody.ctos.ctr-neon .lt-save small { font: 400 14px/1.2 var(--ds-term); color: var(--k-dim); }\nbody.ctos.ctr-neon .lt-toast { border: 2px solid var(--ds-cyan); background: var(--ds-black); box-shadow: 4px 4px 0 var(--ds-pink); }\nbody.ctos.ctr-neon .lt-ck-table { border: 2px solid var(--k-line-2); background: #10071c; }\nbody.ctos.ctr-neon .lt-check {\n  background: #10071c; border: 2px solid var(--ck); border-left-width: 2px; box-shadow: 5px 5px 0 rgba(0, 229, 255, .45);\n  clip-path: var(--ds-cut);\n}\nbody.ctos.ctr-neon .lt-check.crit { --ck: var(--ds-yellow); }\nbody.ctos.ctr-neon .lt-check.ok { --ck: var(--ds-lime); }\nbody.ctos.ctr-neon .lt-check.cost { --ck: #ffa53a; }\nbody.ctos.ctr-neon .lt-check.fail, body.ctos.ctr-neon .lt-check.fumble { --ck: var(--ds-pink); }\nbody.ctos.ctr-neon .lt-ck-tag { font: 700 11px/1.2 var(--ds-pixel); transform: rotate(-3deg); box-shadow: 2px 2px 0 var(--ds-black); }\nbody.ctos.ctr-neon .lt-ck-skill { font: 400 15px/1.2 var(--ds-zh); }\nbody.ctos.ctr-neon .lt-ck-roll em { font: 700 30px/1 var(--ds-pixel); text-shadow: var(--ds-rgb); }\nbody.ctos.ctr-neon .lt-ck-roll strong { font: 400 18px/1 var(--ds-zh); }\nbody.ctos.ctr-neon .lt-ck-bar { height: 8px; background: #1d0d33; }\nbody.ctos.ctr-neon .lt-ck-bar .zone { background: rgba(140, 255, 60, .45); }\nbody.ctos.ctr-neon .lt-ck-bar .cost { background: rgba(255, 165, 58, .45); }\nbody.ctos.ctr-neon .lt-dice-ov { background: rgba(12, 6, 20, .7); }\nbody.ctos.ctr-neon .lt-dice-ov .lt-check { box-shadow: 10px 10px 0 var(--ds-pink), 0 30px 80px rgba(0, 0, 0, .7); }\nbody.ctos.ctr-neon .lt-dice-ov .lt-check::after { content: 'DEDSEC // DICE.EXE'; font: 400 14px/1 var(--ds-term); color: var(--ds-cyan); }\nbody.ctos.ctr-neon .lt-dice-ov .lt-check.rolling:not(.done) .lt-ck-roll em { animation: nx-ds-glitch 220ms steps(2) infinite; }\n\n/* ---------- 减少动效 ---------- */\n@media (prefers-reduced-motion: reduce) {\n  body.ctos.ctr-neon .cdx-tile:hover, body.ctos.ctr-neon .lt-dice-ov .lt-check.rolling:not(.done) .lt-ck-roll em { animation: none; }\n}\n@media screen and (max-width: 1000px) {\n  body.ctos.ctr-neon #top-settings-holder { border-right: 0; border-bottom: 2px solid var(--ds-pink); box-shadow: 0 4px 0 rgba(0, 229, 255, .25); }\n  body.ctos.ctr-neon #ctr-brand { min-height: 0; margin-bottom: 0; }\n  body.ctos.ctr-neon #ctr-brand b::after { font-size: 15px; }\n  body.ctos.ctr-neon #ctr-brand span { display: none; }\n}\n\n/* ============================================================\n   开场动画：Linux 终端入侵日志 → 画面撕裂 → DedSec\n   ============================================================ */\n#ctr-boot.neon {\n  position: fixed; inset: 0; z-index: 2147483600; overflow: hidden; cursor: pointer;\n  background: #050208; color: #d6ffe0; font: 400 15px/1.35 'VT323', 'Space Mono', monospace;\n  --ds-pink: #ff2a7a; --ds-cyan: #00e5ff; --ds-yellow: #ffe600; --ds-black: #07030d;\n}\n#ctr-boot.neon::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(255, 255, 255, .04) 0 1px, transparent 1px 3px), radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, .7)); }\n#ctr-boot.neon .bt-log { position: absolute; left: 0; right: 0; bottom: 0; padding: 22px 26px; white-space: pre-wrap; word-break: break-all; font-size: clamp(13px, 1.55vw, 19px); text-shadow: 0 0 6px rgba(120, 255, 170, .35); }\n#ctr-boot.neon .bt-log .ok { color: #6dff9b; }\n#ctr-boot.neon .bt-log .wr { color: #ffe600; }\n#ctr-boot.neon .bt-log .er { color: #ff2a7a; }\n#ctr-boot.neon .bt-log .pr { color: #00e5ff; }\n#ctr-boot.neon .bt-log .dm { color: #6f6f86; }\n#ctr-boot.neon .bt-log .cur::after { content: '█'; animation: nx-bt-blink .7s steps(1) infinite; }\n@keyframes nx-bt-blink { 50% { opacity: 0; } }\n#ctr-boot.neon .bt-skip { position: absolute; right: 18px; top: 14px; color: #6f6f86; font-size: 15px; letter-spacing: .1em; }\n/* 撕裂：把整屏截成几条，左右乱错，RGB 分开 */\n#ctr-boot.neon.tear .bt-log { animation: nx-bt-tear 90ms steps(2) infinite; }\n#ctr-boot.neon.tear::before { content: ''; position: absolute; inset: 0; z-index: 2; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(255, 42, 122, .5) 0 3px, transparent 3px 17px, rgba(0, 229, 255, .45) 17px 19px, transparent 19px 41px); mix-blend-mode: screen; animation: nx-bt-bars 120ms steps(3) infinite; }\n@keyframes nx-bt-tear {\n  0% { transform: translate(0); clip-path: inset(0 0 0 0); filter: none; }\n  33% { transform: translate(-14px, 3px); clip-path: inset(12% 0 40% 0); filter: drop-shadow(6px 0 #ff2a7a) drop-shadow(-6px 0 #00e5ff); }\n  66% { transform: translate(18px, -2px); clip-path: inset(48% 0 8% 0); filter: invert(1) hue-rotate(160deg); }\n  100% { transform: translate(-6px, 0); clip-path: inset(30% 0 30% 0); }\n}\n@keyframes nx-bt-bars { 0% { transform: translateY(0); } 50% { transform: translateY(-23px); } 100% { transform: translateY(11px); } }\n/* DedSec 现身 */\n#ctr-boot.neon .bt-ds { position: absolute; inset: 0; display: grid; place-items: center; align-content: center; gap: 18px; opacity: 0; background: radial-gradient(700px 420px at 50% 45%, rgba(255, 42, 122, .35), transparent 70%), radial-gradient(rgba(255, 255, 255, .07) 1px, transparent 1.5px) 0 0 / 7px 7px, #0c0614; }\n#ctr-boot.neon.ds .bt-log { opacity: 0; }\n#ctr-boot.neon.ds .bt-ds { opacity: 1; }\n#ctr-boot.neon .bt-skull { width: min(36vw, 220px); aspect-ratio: 1; position: relative; animation: nx-bt-pop 420ms cubic-bezier(.2, 1.6, .4, 1) both; }\n#ctr-boot.neon .bt-skull i { position: absolute; inset: 0; background: var(--ds-skull-w) center / contain no-repeat; }\n#ctr-boot.neon .bt-skull i:nth-child(1) { filter: drop-shadow(0 0 0 #00e5ff); transform: translate(-6px, 0); opacity: .85; mix-blend-mode: screen; background-image: var(--ds-skull-c); }\n#ctr-boot.neon .bt-skull i:nth-child(2) { transform: translate(6px, 0); opacity: .85; mix-blend-mode: screen; background-image: var(--ds-skull-p); }\n#ctr-boot.neon.ds .bt-skull i:nth-child(1) { animation: nx-bt-shake 900ms steps(2) 2 both; }\n#ctr-boot.neon.ds .bt-skull i:nth-child(2) { animation: nx-bt-shake 900ms steps(2) reverse 2 both; }\n@keyframes nx-bt-shake { 0%, 100% { translate: 0 0; } 25% { translate: -3px 2px; } 50% { translate: 4px -1px; } 75% { translate: -2px -2px; } }\n@keyframes nx-bt-pop { from { transform: scale(.2) rotate(-12deg); opacity: 0; } to { transform: none; opacity: 1; } }\n#ctr-boot.neon .bt-word { position: relative; font: 700 clamp(46px, 9vw, 112px)/.9 'Silkscreen', 'Space Mono', monospace; color: #fff; letter-spacing: .02em; text-shadow: -5px 0 #00e5ff, 5px 0 #ff2a7a; animation: nx-bt-pop 380ms 120ms cubic-bezier(.2, 1.6, .4, 1) both; }\n#ctr-boot.neon .bt-word::after { content: attr(data-t); position: absolute; inset: 0; color: #ffe600; text-shadow: none; clip-path: inset(0 0 100% 0); animation: nx-bt-slice 520ms steps(1) 300ms 3 forwards; }\n@keyframes nx-bt-slice {\n  0% { clip-path: inset(0 0 82% 0); transform: translateX(-6px); }\n  25% { clip-path: inset(42% 0 38% 0); transform: translateX(7px); }\n  50% { clip-path: inset(70% 0 8% 0); transform: translateX(-3px); }\n  75% { clip-path: inset(14% 0 66% 0); transform: translateX(4px); }\n  100% { clip-path: inset(0 0 100% 0); transform: none; }\n}\n#ctr-boot.neon .bt-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; animation: nx-bt-pop 360ms 260ms cubic-bezier(.2, 1.6, .4, 1) both; }\n#ctr-boot.neon .bt-tags span { padding: 5px 12px 4px; font: 400 clamp(15px, 2vw, 22px)/1.1 'ZCOOL QingKe HuangYou', 'PingFang SC', sans-serif; color: #07030d; border: 2px solid #07030d; box-shadow: 4px 4px 0 #07030d; }\n#ctr-boot.neon .bt-tags span:nth-child(1) { background: #ffe600; transform: rotate(-3deg); }\n#ctr-boot.neon .bt-tags span:nth-child(2) { background: #00e5ff; transform: rotate(2deg); }\n#ctr-boot.neon .bt-tags span:nth-child(3) { background: #ff2a7a; transform: rotate(-1deg); color: #fff; }\n#ctr-boot.neon.out { animation: nx-bt-out 360ms ease both; }\n@keyframes nx-bt-out { to { opacity: 0; transform: scale(1.04); filter: blur(4px); } }\n";
const HUD_DS_STYLE = "\n/* DedSec 主题：iframe 里挂在 body.ds 下，全屏层（shadow DOM）挂在 :host(.ds) 下 */\nbody.ds .ct, :host(.ds) .ct {\n  --bg: #0b0e1a; --panel: #0f1424; --raise: #161b2f;\n  --line: #222941; --line-2: #323c60;\n  --ink: #e8ebf4; --mute: #8b94af; --dim: #5c6584;\n  --acc: #e0369b; --acc-ink: #05060c; --acc-soft: rgba(224, 54, 155, 0.14);\n  --cyan: #3fcfe0; --lime: #a3e635; --paper: #e8ebf4;\n  --mono: 'Space Mono', 'JetBrains Mono', monospace;\n  --cond: 'Silkscreen', 'Space Mono', monospace;\n  --zh: 'ZCOOL QingKe HuangYou', 'PingFang SC', 'Microsoft YaHei', sans-serif;\n  --term: 'VT323', 'Space Mono', monospace;\n}\nbody.ds .ct .hud, :host(.ds) .ct .hud { border: 1px solid var(--line-2); background: radial-gradient(rgba(120, 140, 220, 0.07) 1px, transparent 1.4px) 0 0 / 5px 5px, var(--bg); }\nbody.ds .ct .hud::before, body.ds .ct.ov::before, :host(.ds) .ct .hud::before, :host(.ds) .ct.ov::before { background: none; }\nbody.ds .ct .brand, :host(.ds) .ct .brand { background: #080a13; color: var(--ink); border-right: 1px solid var(--line); position: relative; }\nbody.ds .ct .brand::after, :host(.ds) .ct .brand::after { content: ''; position: absolute; left: 12px; right: 12px; bottom: 6px; height: 3px; background: linear-gradient(90deg, var(--acc) 0 72%, #2a1a2a 72%); }\nbody.ds .ct .brand b, :host(.ds) .ct .brand b { font-size: 0; }\nbody.ds .ct .brand b::before, :host(.ds) .ct .brand b::before { content: 'DEDSEC'; font: 700 14px/1 var(--cond); }\nbody.ds .ct .brand span, :host(.ds) .ct .brand span { font: 400 14px/1 var(--term); letter-spacing: 0.06em; color: var(--dim); }\nbody.ds .ct .read .k, body.ds .ct .lab, body.ds .ct .fact .k, body.ds .ct .cp .k, body.ds .ct .term .id, body.ds .ct .stage .sn, body.ds .ct .goal .k, :host(.ds) .ct .read .k, :host(.ds) .ct .lab, :host(.ds) .ct .fact .k, :host(.ds) .ct .cp .k, :host(.ds) .ct .term .id, :host(.ds) .ct .stage .sn, :host(.ds) .ct .goal .k { font-family: var(--term); font-size: 14px; letter-spacing: 0.1em; color: var(--lime); }\nbody.ds .ct .lab > span::before, :host(.ds) .ct .lab > span::before { content: '[ '; }\nbody.ds .ct .lab > span::after, :host(.ds) .ct .lab > span::after { content: ' ]'; }\nbody.ds .ct .read .v, :host(.ds) .ct .read .v { font-weight: 600; }\nbody.ds .ct .read .v em, :host(.ds) .ct .read .v em { color: var(--acc); }\nbody.ds .ct .act, :host(.ds) .ct .act { font: 400 15px/1 var(--term); letter-spacing: 0.1em; color: var(--mute); }\nbody.ds .ct .act:hover, :host(.ds) .ct .act:hover { background: var(--paper); color: #05060c; }\nbody.ds .ct .act.main, :host(.ds) .ct .act.main { color: var(--ink); }\nbody.ds .ct .pip.on, :host(.ds) .ct .pip.on { background: var(--line-2); border-color: var(--line-2); }\nbody.ds .ct .pip.now, :host(.ds) .ct .pip.now { background: var(--acc); border-color: var(--acc); }\nbody.ds .ct .tabs, :host(.ds) .ct .tabs { background: #141a2c; }\nbody.ds .ct .tab, :host(.ds) .ct .tab { font: 400 16px/1 var(--term); letter-spacing: 0.08em; color: var(--mute); }\nbody.ds .ct .tab small, :host(.ds) .ct .tab small { font: 600 12px/1 var(--cjk); }\nbody.ds .ct .tab.on, :host(.ds) .ct .tab.on { color: #05060c; background: var(--paper); }\nbody.ds .ct .tab.on::after, :host(.ds) .ct .tab.on::after { display: none; }\nbody.ds .ct .name, :host(.ds) .ct .name { font: 700 30px/1 var(--cond); color: var(--ink); }\nbody.ds .ct .name small, :host(.ds) .ct .name small { font-weight: 600; font-size: 13px; color: var(--mute); }\nbody.ds .ct .stamp, :host(.ds) .ct .stamp { border-color: var(--acc); color: var(--acc); font-family: var(--cond); }\nbody.ds .ct .fact .v, :host(.ds) .ct .fact .v { font-weight: 600; }\nbody.ds .ct .fact .v.hot, :host(.ds) .ct .fact .v.hot { color: var(--acc); }\nbody.ds .ct .part.s2, :host(.ds) .ct .part.s2 { background: var(--acc); border-color: var(--acc); }\nbody.ds .ct .tag.hot, :host(.ds) .ct .tag.hot { border-color: var(--acc); color: var(--acc); }\nbody.ds .ct .tag.solid, :host(.ds) .ct .tag.solid { background: var(--paper); border-color: var(--paper); color: #05060c; }\nbody.ds .ct .lv b.on, :host(.ds) .ct .lv b.on { background: var(--cyan); border-color: var(--cyan); }\nbody.ds .ct .term .nick, :host(.ds) .ct .term .nick { color: var(--ink); }\nbody.ds /* 算力点：照狗 2 研究点那一栏，品红进度条加白底骷髅 */\n.ct .cp .v, :host(.ds) /* 算力点：照狗 2 研究点那一栏，品红进度条加白底骷髅 */\n.ct .cp .v { font: 400 52px/0.9 var(--term); color: var(--ink); }\nbody.ds .ct .track > div.on, :host(.ds) .ct .track > div.on { border-top-color: var(--line-2); }\nbody.ds .ct .track > div.now, :host(.ds) .ct .track > div.now { border-top-color: var(--acc); color: var(--ink); }\nbody.ds .ct .branch h5, :host(.ds) .ct .branch h5 { font: 400 17px/1 var(--term); letter-spacing: 0.1em; color: var(--lime); }\nbody.ds .ct .branch h5 span, :host(.ds) .ct .branch h5 span { color: var(--ink); }\nbody.ds .ct .node.on, :host(.ds) .ct .node.on { background: var(--lime); border-color: var(--lime); color: #05060c; }\nbody.ds .ct .node.next.buy, :host(.ds) .ct .node.next.buy { border-color: var(--acc); color: var(--acc); }\nbody.ds .ct .mod.on b, :host(.ds) .ct .mod.on b { color: var(--lime); }\nbody.ds .ct .lvl.now, :host(.ds) .ct .lvl.now { background: var(--acc); border-color: var(--acc); }\nbody.ds .ct .op-head .c, :host(.ds) .ct .op-head .c { font-family: var(--term); font-size: 40px; }\nbody.ds .ct .stage.now, :host(.ds) .ct .stage.now { box-shadow: inset 0 3px 0 var(--lime); }\nbody.ds .ct .stage.now .sn, :host(.ds) .ct .stage.now .sn { color: var(--lime); }\nbody.ds .ct .goal .k, :host(.ds) .ct .goal .k { color: var(--lime); }\nbody.ds .ct .mapbox, :host(.ds) .ct .mapbox { border-color: var(--line-2); background: #070a14; }\nbody.ds .ct .map .dist, :host(.ds) .ct .map .dist { stroke: #4b5a8f; fill: rgba(47, 91, 224, 0.05); }\nbody.ds .ct .map .dist:hover, :host(.ds) .ct .map .dist:hover { fill: rgba(63, 207, 224, 0.12); stroke: var(--cyan); }\nbody.ds .ct .map .dist.own, :host(.ds) .ct .map .dist.own { fill: rgba(163, 230, 53, 0.13); stroke: var(--lime); }\nbody.ds .ct .credit .own, :host(.ds) .ct .credit .own { color: var(--lime); }\nbody.ds .ct .inspect, :host(.ds) .ct .inspect { border-top: 1px solid var(--line-2); background: #0f1424; }\nbody.ds .ct .inspect h6, :host(.ds) .ct .inspect h6 { color: var(--ink); }\nbody.ds .ct .inspect .do button, :host(.ds) .ct .inspect .do button { background: var(--paper); color: #05060c; border: 0; }\nbody.ds .ct .inspect .do button:hover:not(:disabled), :host(.ds) .ct .inspect .do button:hover:not(:disabled) { background: var(--lime); }\nbody.ds .ct .inspect .x, :host(.ds) .ct .inspect .x { color: var(--mute); font-family: var(--term); font-size: 15px; }\nbody.ds .ct.ov, :host(.ds) .ct.ov { background: radial-gradient(rgba(120, 140, 220, 0.07) 1px, transparent 1.4px) 0 0 / 5px 5px, #090c17; }\n" + "\n/* DedSec 主题：iframe 里挂在 body.neon 下，全屏层（shadow DOM）挂在 :host(.neon) 下 */\nbody.neon .ct, :host(.neon) .ct {\n  --bg: #0f0719; --panel: #170b28; --raise: #24113f;\n  --line: #34205b; --line-2: #5b3a94;\n  --ink: #fff7ff; --mute: #b09fd6; --dim: #7b6aa3;\n  --acc: #ff2a7a; --acc-ink: #07030d; --acc-soft: rgba(255, 42, 122, 0.16);\n  --cyan: #00e5ff; --yellow: #ffe600; --lime: #8cff3c; --violet: #9b5cff;\n  --mono: 'Space Mono', 'JetBrains Mono', monospace;\n  --cond: 'Silkscreen', 'Space Mono', monospace;\n  --zh: 'ZCOOL QingKe HuangYou', 'PingFang SC', 'Microsoft YaHei', sans-serif;\n  --term: 'VT323', 'Space Mono', monospace;\n}\nbody.neon .ct .hud, :host(.neon) .ct .hud { border: 2px solid var(--acc); box-shadow: 5px 5px 0 rgba(0, 229, 255, 0.45); background: radial-gradient(600px 200px at 100% 0, rgba(255, 42, 122, 0.14), transparent 70%), radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1.5px) 0 0 / 7px 7px, var(--bg); }\nbody.neon .ct .brand, :host(.neon) .ct .brand { background: var(--acc); color: #07030d; background-image: repeating-linear-gradient(-45deg, transparent 0 8px, rgba(0, 0, 0, 0.12) 8px 10px); }\nbody.neon .ct .brand b, :host(.neon) .ct .brand b { font-size: 0; }\nbody.neon .ct .brand b::before, :host(.neon) .ct .brand b::before { content: 'DEDSEC'; font: 700 15px/1 var(--cond); text-shadow: 2px 0 var(--cyan); }\nbody.neon .ct .brand span, :host(.neon) .ct .brand span { font: 400 14px/1 var(--term); letter-spacing: 0.06em; }\nbody.neon .ct .read .k, body.neon .ct .lab, body.neon .ct .fact .k, body.neon .ct .cp .k, body.neon .ct .term .id, body.neon .ct .stage .sn, body.neon .ct .goal .k, :host(.neon) .ct .read .k, :host(.neon) .ct .lab, :host(.neon) .ct .fact .k, :host(.neon) .ct .cp .k, :host(.neon) .ct .term .id, :host(.neon) .ct .stage .sn, :host(.neon) .ct .goal .k { font-family: var(--term); font-size: 13px; letter-spacing: 0.1em; color: var(--cyan); }\nbody.neon .ct .read .v, :host(.neon) .ct .read .v { font-family: var(--cjk); font-weight: 700; font-size: 13px; }\nbody.neon .ct .read .v em, :host(.neon) .ct .read .v em { color: var(--yellow); font-family: var(--cond); }\nbody.neon .ct .act, :host(.neon) .ct .act { font: 700 11px/1 var(--cond); color: var(--cyan); border-left: 2px solid var(--line-2); }\nbody.neon .ct .act:hover, :host(.neon) .ct .act:hover { background: var(--cyan); color: #07030d; }\nbody.neon .ct .act.main, :host(.neon) .ct .act.main { background: var(--acc); color: #07030d; }\nbody.neon .ct .pip, :host(.neon) .ct .pip { border-width: 2px; }\nbody.neon .ct .pip.on, :host(.neon) .ct .pip.on { background: var(--violet); border-color: var(--violet); }\nbody.neon .ct .pip.now, :host(.neon) .ct .pip.now { background: var(--acc); border-color: var(--acc); box-shadow: 0 0 6px var(--acc); }\nbody.neon .ct .tabs, :host(.neon) .ct .tabs { border-bottom: 2px solid var(--line-2); }\nbody.neon .ct .tab, :host(.neon) .ct .tab { font: 700 12px/1 var(--cond); color: var(--dim); }\nbody.neon .ct .tab small, :host(.neon) .ct .tab small { font: 700 12px/1 var(--cjk); }\nbody.neon .ct .tab.on, :host(.neon) .ct .tab.on { color: #07030d; background: var(--yellow); }\nbody.neon .ct .tab.on::after, :host(.neon) .ct .tab.on::after { background: var(--acc); height: 3px; }\nbody.neon .ct .lab i, :host(.neon) .ct .lab i { color: var(--mute); }\nbody.neon .ct .name, :host(.neon) .ct .name { font: 700 34px/1 var(--cond); text-shadow: -2px 0 var(--cyan), 2px 0 var(--acc); }\nbody.neon .ct .name small, :host(.neon) .ct .name small { font-family: var(--cjk); font-weight: 700; font-size: 13px; color: var(--yellow); text-shadow: none; letter-spacing: .12em; }\nbody.neon .ct .stamp, :host(.neon) .ct .stamp { border: 3px solid var(--acc); color: var(--acc); font-family: var(--cond); transform: rotate(-6deg); box-shadow: 3px 3px 0 #07030d; background: rgba(255, 42, 122, 0.08); }\nbody.neon .ct .fact, body.neon .ct .facts, :host(.neon) .ct .fact, :host(.neon) .ct .facts { border-color: var(--line-2); }\nbody.neon .ct .fact .v, :host(.neon) .ct .fact .v { font-family: var(--cjk); font-weight: 700; font-size: 13px; }\nbody.neon .ct .fact .v.hot, :host(.neon) .ct .fact .v.hot { color: var(--acc); }\nbody.neon .ct .part, :host(.neon) .ct .part { border-width: 2px; }\nbody.neon .ct .part.s2, :host(.neon) .ct .part.s2 { background: var(--acc); }\nbody.neon .ct .wound, :host(.neon) .ct .wound { border-left: 3px solid var(--acc); }\nbody.neon .ct .tag, :host(.neon) .ct .tag { border-width: 2px; font-family: var(--cjk); font-weight: 700; font-size: 11px; }\nbody.neon .ct .tag.hot, :host(.neon) .ct .tag.hot { border-color: var(--acc); color: var(--acc); }\nbody.neon .ct .tag.solid, :host(.neon) .ct .tag.solid { background: var(--yellow); border-color: var(--yellow); color: #07030d; transform: rotate(-2deg); }\nbody.neon .ct .lv b.on, :host(.neon) .ct .lv b.on { background: var(--cyan); border-color: var(--cyan); }\nbody.neon .ct .term .nick, :host(.neon) .ct .term .nick { font-family: var(--zh); font-weight: 400; font-size: 34px; text-shadow: -2px 0 var(--cyan), 2px 0 var(--acc); }\nbody.neon .ct .cp .v, :host(.neon) .ct .cp .v { font: 700 44px/1 var(--cond); color: var(--yellow); text-shadow: 3px 3px 0 var(--acc); }\nbody.neon .ct .mood b, :host(.neon) .ct .mood b { color: var(--yellow); }\nbody.neon .ct .track > div, :host(.neon) .ct .track > div { border-top-width: 4px; }\nbody.neon .ct .track > div.on, :host(.neon) .ct .track > div.on { border-top-color: var(--violet); }\nbody.neon .ct .track > div.now, :host(.neon) .ct .track > div.now { border-top-color: var(--acc); color: var(--ink); }\nbody.neon .ct .branch h5, :host(.neon) .ct .branch h5 { font-family: var(--cond); color: var(--cyan); }\nbody.neon .ct .branch h5 span, :host(.neon) .ct .branch h5 span { font-family: var(--zh); color: var(--ink); }\nbody.neon .ct .node, :host(.neon) .ct .node { border: 2px solid var(--line); font-family: var(--cjk); font-weight: 600; font-size: 11.5px; }\nbody.neon .ct .node.on, :host(.neon) .ct .node.on { background: var(--cyan); border-color: var(--cyan); color: #07030d; box-shadow: 2px 2px 0 var(--acc); }\nbody.neon .ct .node.next, :host(.neon) .ct .node.next { border-color: var(--line-2); }\nbody.neon .ct .node.next.buy, :host(.neon) .ct .node.next.buy { border-color: var(--yellow); color: var(--yellow); animation: nx-ds-buy 1.6s steps(2) infinite; }\n@keyframes nx-ds-buy { 50% { box-shadow: 0 0 10px rgba(255, 230, 0, 0.6); } }\nbody.neon .ct .mod.on b, :host(.neon) .ct .mod.on b { color: var(--lime); }\nbody.neon .ct .lvl, :host(.neon) .ct .lvl { border-width: 2px; }\nbody.neon .ct .lvl .num, :host(.neon) .ct .lvl .num { font-family: var(--cond); }\nbody.neon .ct .lvl .nm, :host(.neon) .ct .lvl .nm { font-family: var(--zh); font-weight: 400; font-size: 14px; }\nbody.neon .ct .lvl.now, :host(.neon) .ct .lvl.now { background: var(--acc); box-shadow: 4px 4px 0 var(--cyan); }\nbody.neon .ct .op, :host(.neon) .ct .op { border: 2px solid var(--line-2); box-shadow: 4px 4px 0 rgba(255, 42, 122, 0.4); }\nbody.neon .ct .op-head .t, :host(.neon) .ct .op-head .t { font-family: var(--zh); font-weight: 400; color: var(--yellow); }\nbody.neon .ct .op-head .c, :host(.neon) .ct .op-head .c { font-family: var(--cond); color: var(--cyan); }\nbody.neon .ct .stage.now, :host(.neon) .ct .stage.now { box-shadow: inset 0 4px 0 var(--acc); }\nbody.neon .ct .stage.now .st, :host(.neon) .ct .stage.now .st { color: var(--yellow); }\nbody.neon .ct .mapbox, :host(.neon) .ct .mapbox { border: 2px solid var(--cyan); background: #08040f; box-shadow: 5px 5px 0 rgba(255, 42, 122, 0.45); }\nbody.neon .ct .map .dist, :host(.neon) .ct .map .dist { stroke: var(--violet); fill: rgba(155, 92, 255, 0.06); }\nbody.neon .ct .map .dist:hover, :host(.neon) .ct .map .dist:hover { fill: rgba(0, 229, 255, 0.14); stroke: var(--cyan); }\nbody.neon .ct .map .dist.own, :host(.neon) .ct .map .dist.own { fill: rgba(140, 255, 60, 0.16); stroke: var(--lime); }\nbody.neon .ct .credit .own, :host(.neon) .ct .credit .own { color: var(--lime); }\nbody.neon .ct .inspect, :host(.neon) .ct .inspect { border-top: 2px solid var(--acc); background: #12081f; }\nbody.neon .ct .inspect h6, :host(.neon) .ct .inspect h6 { font-family: var(--zh); font-weight: 400; font-size: 17px; color: var(--yellow); }\nbody.neon .ct .inspect .do button, :host(.neon) .ct .inspect .do button { background: var(--acc); color: #07030d; border: 2px solid #07030d; box-shadow: 3px 3px 0 var(--cyan); font-family: var(--zh); }\nbody.neon .ct .inspect .do button:disabled, :host(.neon) .ct .inspect .do button:disabled { background: var(--raise); color: var(--dim); box-shadow: none; }\nbody.neon .ct .inspect .x, :host(.neon) .ct .inspect .x { color: var(--cyan); font-family: var(--cond); }\nbody.neon .ct.ov, :host(.neon) .ct.ov { background: radial-gradient(900px 500px at 90% -10%, rgba(255, 42, 122, 0.2), transparent 60%), radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1.5px) 0 0 / 7px 7px, #0c0614; }\n";

// 三种风味：ctOS（黑）、dedsec（护眼）、neon（霓虹）。dsKind() 给出 'calm' / 'neon' / ''
const dsKind = () => { const s = settings(); return !s.enabled ? '' : s.theme === 'dedsec' ? 'calm' : s.theme === 'neon' ? 'neon' : ''; };
const isDs = () => !!dsKind();
// 主题落到三处：主页面 body、状态栏 iframe 的 body、全屏状态栏那一层的宿主元素
function applyTheme() {
    const k = dsKind();
    document.body.classList.toggle('ctr-ds', k === 'calm');
    document.body.classList.toggle('ctr-neon', k === 'neon');
    for (const el of [document.getElementById('ctr-hud')?.contentDocument?.body, document.getElementById('ctos-overlay')]) {
        el?.classList.toggle('ds', k === 'calm');
        el?.classList.toggle('neon', k === 'neon');
    }
}

// 开场动画：Linux 终端入侵日志 → 画面撕裂 → DedSec。每个浏览器标签页只自动放一次，点一下或按任意键跳过
const BOOT_LOG = [
    ['[    0.000000] Linux version 6.8.0-ctos-ldn (builder@blume) #1 SMP PREEMPT_DYNAMIC', 'dm'],
    ['[    0.004211] Command line: BOOT_IMAGE=/vmlinuz root=/dev/ctos ro quiet', 'dm'],
    ['[    0.118734] ctOS: City Operating System 4.2.7 · LONDON · node WST-01', ''],
    ['[  OK  ] Started Optik Identity Relay.', 'ok'],
    ['[  OK  ] Mounted /var/ctos/footage (90 days).', 'ok'],
    ['[  OK  ] Reached target Albion Checkpoint Sync.', 'ok'],
    ['ghost@kangtao:~$ nmap -sS -p 22,443,8443 10.20.0.0/16 --open', 'pr'],
    ['Nmap scan report for blume-tower.ctos.ldn (10.20.4.17)', ''],
    ['8443/tcp open  ctos-admin', ''],
    ['ghost@kangtao:~$ ./tianwen --exploit CVE-2029-1105 --target 10.20.4.17', 'pr'],
    ['[*] fuzzing auth handler ..............', 'wr'],
    ['[+] heap overflow @ 0x7ffd3c21a8e0', 'ok'],
    ['[+] shell spawned · uid=0(root) gid=0(root)', 'ok'],
    ['root@blume-tower:/# grep "WOLFE, DALTON" /etc/ctos/watchlist', 'pr'],
    ['WOLFE, DALTON    STATUS: DECEASED    FLAG: ███████', 'wr'],
    ['root@blume-tower:/# shred -u /var/ctos/footage/2029-11-0*', 'pr'],
    ['[!] INTEGRITY CHECK FAILED · ctOS NODE COMPROMISED', 'er'],
    ['[!] INCOMING SIGNAL ', 'er'],
];
function bootDedsec(force = false) {
    if (!isDs() || document.getElementById('ctr-boot')) return;
    let seen = false;
    try { seen = W.sessionStorage.getItem('ctr-boot') === '1'; W.sessionStorage.setItem('ctr-boot', '1'); } catch { /* 存储不可用就每次都放 */ }
    if (!force && (seen || settings().boot === false)) return;
    if (W.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = document.createElement('div');
    el.id = 'ctr-boot';
    const neon = dsKind() === 'neon';
    el.className = neon ? 'neon' : 'calm';
    // 护眼版：黑底上排线字标和 JOIN US；霓虹版：粉色光晕里红青错位的骷髅和三张贴纸
    el.innerHTML = `<div class="bt-log"></div><div class="bt-skip">CLICK TO SKIP · 点击跳过</div>` + (neon
        ? `<div class="bt-ds"><div class="bt-skull"><i></i><i></i><i></i></div><div class="bt-word" data-t="DEDSEC">DEDSEC</div>
<div class="bt-tags"><span>伦敦分部</span><span>你已经死了</span><span>伦敦还不知道</span></div></div>`
        : `<div class="bt-ds"><div class="bt-skull"></div><div class="bt-word">DEDSEC</div><div class="bt-join">JOIN US</div>
<div class="bt-sub">伦敦分部 · 你已经死了，伦敦还不知道</div><i class="bt-line"></i><div class="bt-touch">Touch to continue! · 点一下继续</div></div>`);
    document.body.appendChild(el);
    const log = el.querySelector('.bt-log');
    const timers = [];
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    let done = false;
    const finish = () => {
        if (done) return;
        done = true;
        timers.forEach(clearTimeout);
        el.classList.add('out');
        setTimeout(() => el.remove(), 380);
        W.removeEventListener('keydown', finish, true);
    };
    el.addEventListener('click', finish);
    W.addEventListener('keydown', finish, true);
    let t = 120;
    BOOT_LOG.forEach(([line, cls], i) => {
        at(t, () => {
            log.querySelector('.cur')?.classList.remove('cur');
            const row = document.createElement('div');
            row.className = cls + ' cur';
            row.textContent = line;
            log.appendChild(row);
        });
        t += i < 6 ? 55 : 95;
    });
    // 最后一行的进度条一格一格走满
    for (let k = 1; k <= 10; k++) at(t + k * 45, () => { const last = log.lastElementChild; if (last) last.textContent = BOOT_LOG.at(-1)[0] + '▓'.repeat(k) + '░'.repeat(10 - k) + ' ' + k * 10 + '%'; });
    t += 520;
    at(t, () => el.classList.add('tear'));
    at(t + 480, () => { el.classList.remove('tear'); el.classList.add('ds'); if (settings().sound) Sfx.flip?.(); });
    at(t + (neon ? 2500 : 6000), finish);
}

function sync() {
    const s = settings();
    document.body.classList.toggle('ctos', s.enabled);
    applyTheme();
    suppressForeign(s.enabled);
    const all = [...document.querySelectorAll('#chat > .mes')];
    if (!s.enabled) {
        all.forEach((el) => { clearReader(el); el.classList.remove('ctr-focus'); });
        document.body.classList.remove('ctr-full', 'ctr-generating', 'ctr-dockoff');
        updateControls();
        codex.refresh();
        return;
    }
    const c = ctx();
    const chat = c.chat;
    // 欢迎页、临时助手聊天不排版
    const inStory = c.characterId !== undefined || !!c.groupId;
    const sp = c.streamingProcessor;
    const liveId = generating && sp && !sp.isFinished && !sp.isStopped && sp.messageId >= 0 ? Number(sp.messageId) : -1;
    let last = null;
    for (const el of all) {
        const id = Number(el.getAttribute('mesid'));
        const msg = chat[id];
        const ai = el.getAttribute('is_user') === 'false' && el.getAttribute('is_system') === 'false';
        if (!inStory || !ai || !msg) { clearReader(el); continue; }
        if (buildReader(el, id, msg, id === liveId)) last = el;
    }
    const arrived = justGenerated;
    justGenerated = false;
    if (focusEl !== last) {
        focusEl?.classList.remove('ctr-focus');
        focusEl = last;
    }
    focusEl?.classList.add('ctr-focus');
    document.body.classList.toggle('ctr-full', s.mode === 'full' && !!focusEl);
    document.body.classList.toggle('ctr-generating', generating);
    checkScrollEnd();
    updateDock();
    updateControls();
    codex.refreshSkin(true);
    codex.refresh();
    // 正常模式：非流式的新回复到齐后，把阅读器顶端对齐到视口，从头往下读
    if (arrived && !isFull()) {
        const r = focusEl?.querySelector('.ctr');
        if (r && !wasLive.has(r._key) && r.getBoundingClientRect().top < 0) r.scrollIntoView({ block: 'start' });
    }
}

// 节流而不是防抖：流式时 token 一直在来，防抖会一直推迟到生成结束
let syncTimer = 0;
function schedule() {
    if (syncTimer) return;
    syncTimer = setTimeout(() => { syncTimer = 0; sync(); }, 16);
}

/* ------------------------------------------------------------
   模式
   ------------------------------------------------------------ */
let enteredFullscreen = false;

function setMode(mode, gesture) {
    const s = settings();
    s.mode = mode;
    save();
    if (mode === 'full' && gesture && !document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().then(() => { enteredFullscreen = true; }).catch(() => {});
    }
    if (mode === 'normal' && document.fullscreenElement) {
        enteredFullscreen = false;
        document.exitFullscreen().catch(() => {});
    }
    sync();
    if (mode === 'normal') focusEl?.querySelector('.ctr')?.scrollIntoView({ block: 'start' });
}

on(document, 'fullscreenchange', () => {
    if (!document.fullscreenElement && enteredFullscreen) {
        enteredFullscreen = false;
        if (settings().mode === 'full') setMode('normal', false);
    }
});

function updateControls() {
    const s = settings();
    document.querySelectorAll('[data-ctr-mode]').forEach((b) => b.classList.toggle('on', b.dataset.ctrMode === s.mode));
    document.querySelectorAll('[data-ctr-sound]').forEach((b) => {
        b.classList.toggle('on', s.sound);
        b.querySelector('em').textContent = s.sound ? 'ON' : 'OFF';
    });
    // 手机上没有 ESC 键，按钮上就不写
    const esc = matchMedia('(max-width: 1000px)').matches ? '' : ' ESC';
    document.querySelectorAll('.ctr-modebtn').forEach((b) => { b.textContent = s.mode === 'full' ? '退出全屏' + esc : '全屏阅读'; });
    updateBar();
    document.body.classList.toggle('ctr-railmin', s.railMin);
    const rb = document.getElementById('ctr-railbtn');
    if (rb) { rb.textContent = s.railMin ? '»' : '«'; rb.title = s.railMin ? '展开侧栏' : '收起侧栏'; }
    const $ = (id) => document.getElementById(id);
    if ($('ctr_enabled')) {
        $('ctr_enabled').checked = s.enabled;
        $('ctr_mode').value = s.mode;
        $('ctr_sound').checked = s.sound;
        $('ctr_sprites').checked = s.sprites;
        $('ctr_volume').value = s.volume;
        $('ctr_volume_out').textContent = Math.round(s.volume * 100);
    }
}

function suppressForeign(on) {
    for (const el of document.querySelectorAll('style[id], link[id]')) {
        if (FOREIGN.test(el.id) && el.disabled !== on) el.disabled = on;
    }
}

/* ------------------------------------------------------------
   交互
   ------------------------------------------------------------ */
on(document, 'click', (e) => {
    const t = e.target;
    if (codex.handleClick(e)) return;
    const modeBtn = t.closest?.('[data-ctr-mode]');
    if (modeBtn) { setMode(modeBtn.dataset.ctrMode, true); return; }
    if (t.closest?.('#ctr-railbtn')) {
        const s = settings();
        s.railMin = !s.railMin;
        save();
        updateControls();
        return;
    }
    // 左上角的 ctOS 标志当回退用：先合上抽屉，再退出全屏，最后关掉聊天回到酒馆首页。
    // 手机上输入框在读完最后一页之前是收起的，酒馆自己的“关闭聊天”藏在输入框左边的菜单里，没有别的路回首页
    if (t.closest?.('#ctr-brand')) {
        if (closeDrawers()) return;
        if (isFull()) { setMode('normal', true); return; }
        document.getElementById('option_close_chat')?.click();
        return;
    }
    if (t.closest?.('[data-ctr-sound]')) {
        const s = settings();
        s.sound = !s.sound;
        save();
        updateControls();
        Sfx.click();
        return;
    }
    const r = t.closest?.('.ctr') ?? (t.closest?.('#ctr-bar') ? focusEl?.querySelector('.ctr') : null);
    if (!r || !r._pages) return;
    const act = t.closest('[data-ctr]');
    if (act) {
        e.preventDefault();
        const a = act.dataset.ctr;
        const mes = r.closest('.mes');
        if (a === 'prev') prev(r);
        else if (a === 'next') next(r);
        else if (a === 'first') jump(r, 0);
        else if (a === 'last') jump(r, r._pages.length - 1);
        else if (a === 'go') jump(r, Number(act.dataset.n));
        else if (a === 'mode') setMode(isFull() ? 'normal' : 'full', true);
        else if (a === 'msgb') {
            document.body.classList.toggle('ctr-msgb');
            Sfx.click();
        }
        else if (a === 'swl') mes?.querySelector('.swipe_left')?.click();
        else if (a === 'swr') mes?.querySelector('.swipe_right')?.click();
        else if (a === 'stop') document.getElementById('mes_stop')?.click();
        return;
    }
    if (t.closest('.ctr-stage') && r.dataset.view === 'page') {
        if (String(getSelection() || '')) return;
        next(r);
    }
});

// 翻到第几页：输入页码回车。这一条同时管阅读器页脚和底部控制条上的输入框
on(document, 'change', (e) => {
    const input = e.target.closest?.('.ctr-goto input, #ctr-bar input');
    if (!input) return;
    const r = input.closest('.ctr') ?? focusEl?.querySelector('.ctr');
    if (!r || !r._pages) return;
    const n = Math.round(Number(input.value));
    if (Number.isFinite(n)) jump(r, n - 1);
    input.blur();
});

// 全屏时方向键归阅读器，别让酒馆拿去滑动重生成
on(W, 'keydown', (e) => {
    if (e.key === 'Escape' && codex.isOpen()) { codex.back(); e.preventDefault(); e.stopPropagation(); return; }
    if (!isFull()) return;
    const t = e.target;
    if (t.closest?.('input, textarea, select, [contenteditable="true"], [contenteditable=""]')) {
        if (e.key === 'Escape' && t.id === 'send_textarea') t.blur();
        return;
    }
    if (document.querySelector('dialog[open], .popup[open]')) return;
    const r = focusEl?.querySelector('.ctr');
    let used = true;
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) { if (r) next(r); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { if (r) prev(r); }
    else if (e.key === 'Home') { if (r) jump(r, 0); }
    else if (e.key === 'End') { if (r) jump(r, r._pages.length - 1); }
    else if (e.key === 'Escape') setMode('normal', false);
    else used = false;
    if (used) { e.preventDefault(); e.stopPropagation(); }
}, { capture: true });

/* ------------------------------------------------------------
   挂载：侧栏品牌、侧栏底部开关、扩展设置面板
   ------------------------------------------------------------ */
function mountRail() {
    const holder = document.getElementById('top-settings-holder');
    if (!holder) return;
    if (!document.getElementById('ctr-brand')) {
        holder.insertAdjacentHTML('afterbegin', '<div id="ctr-brand" title="合上面板 / 退出全屏 / 回到首页"><b>ctOS</b><span>PROFILER<br>// LDN</span><button type="button" id="ctr-railbtn" class="ctr-btn" title="收起侧栏"></button></div>');
    }
    if (!document.getElementById('ctr-tools')) {
        holder.insertAdjacentHTML('beforeend', `
<div id="ctr-tools">
  <div class="ctr-label">READING<i>阅读</i></div>
  <div class="ctr-seg"><button class="ctr-btn" data-ctr-mode="normal">正常</button><button class="ctr-btn" data-ctr-mode="full">全屏</button></div>
  <button class="ctr-btn ctr-sound" data-ctr-sound>音效 <em>ON</em></button>
</div>`);
    }
}

/* ------------------------------------------------------------
   状态栏：整个聊天只有一份，钉在输入框上方
   以前每条回复里的占位符都各自渲染一份状态栏，一份十万字的页面，聊天越长越卡；
   现在正则只把占位符抹掉，这里挂一个 iframe，数据变了就在原地重画，不再新建。
   状态栏页面原本跑在酒馆助手的消息 iframe 里，靠 getVariables / getCurrentMessageId 取数，这里用同名的两个函数接上。
   ------------------------------------------------------------ */
// 状态栏里解锁技能要写变量：写回最新那条带变量的消息（和 hudVars 读的是同一条），再存档
function hudWrite(all) {
    const chat = ctx().chat ?? [];
    for (let i = chat.length - 1; i >= 0; i--) {
        const m = chat[i];
        const v = m?.variables?.[m.swipe_id ?? 0];
        if (!v?.stat_data) continue;
        m.variables[m.swipe_id ?? 0] = { ...v, ...all };
        (ctx().saveChat ?? ctx().saveChatDebounced ?? ctx().saveMetadataDebounced)?.call(ctx());
        return true;
    }
    return false;
}
function hudVars() {
    const chat = ctx().chat ?? [];
    for (let i = chat.length - 1; i >= 0; i--) {
        const v = chat[i]?.variables?.[chat[i].swipe_id ?? 0];
        if (v?.stat_data) return v;
    }
    return null;
}

/* ------------------------------------------------------------
   底部控制条：整局只有一条，贴着输入框
   以前每一条回复自己带一个表头（地点、翻版、页码、全屏按钮），一条一条散在消息里，
   手机上右上角那个全屏按钮几乎点不到。现在表头全部收起来，这里一条管全部：
   地点与标题、翻版、页码与翻页、翻到第几页、全屏开关、生成中停止、全屏下的消息操作。
   ------------------------------------------------------------ */
function mountBar() {
    const form = document.getElementById('form_sheld');
    if (!form || document.getElementById('ctr-bar')) return;
    const bar = document.createElement('div');
    bar.id = 'ctr-bar';
    bar.hidden = true;
    bar.innerHTML = `
  <span class="b-place"></span>
  <span class="b-title"></span>
  <span class="b-swipe"><button type="button" class="ctr-btn" data-ctr="swl" title="上一版回复">‹</button><em></em><button type="button" class="ctr-btn" data-ctr="swr" title="下一版回复 / 重新生成">›</button></span>
  <span class="b-page">
    <button type="button" class="ctr-btn" data-ctr="prev" title="上一页">‹</button>
    <label class="b-goto"><span class="b-word">PAGE</span> <input type="number" min="1" step="1" inputmode="numeric" title="翻到第几页"><b>/</b><i class="b-total"></i></label>
    <button type="button" class="ctr-btn" data-ctr="next" title="下一页">›</button>
  </span>
  <span class="b-count"></span>
  <button type="button" class="ctr-btn b-msg" data-ctr="msgb" title="消息操作：编辑、删除、复制">⋯</button>
  <button type="button" class="ctr-btn b-stop" data-ctr="stop" hidden>■ 停止</button>
  <button type="button" class="ctr-btn b-mode" data-ctr="mode"></button>`;
    form.before(bar);
}

// 控制条跟着当前在读的那一条走：地点、翻版、页码、按钮状态都从阅读器身上抄
function updateBar() {
    const bar = document.getElementById('ctr-bar');
    if (!bar) return;
    const r = focusEl?.querySelector('.ctr') ?? [...document.querySelectorAll('.mes.ctr-on .ctr')].pop();
    bar.hidden = !r?._pages || !settings().enabled;
    if (bar.hidden) return;
    const q = (s) => r.querySelector(s);
    bar.querySelector('.b-place').innerHTML = q('.ctr-place')?.innerHTML ?? '';
    bar.querySelector('.b-title').textContent = q('.ctr-title')?.textContent ?? '';
    const sw = q('.ctr-swipe');
    const bs = bar.querySelector('.b-swipe');
    bs.hidden = !!sw?.hidden;
    bs.querySelector('em').textContent = sw?.querySelector('em')?.textContent ?? '';
    bs.querySelector('[data-ctr="swl"]').disabled = !!sw?.querySelector('[data-ctr="swl"]')?.disabled;
    bs.querySelector('[data-ctr="swr"]').disabled = !!sw?.querySelector('[data-ctr="swr"]')?.disabled;
    const paginated = r.dataset.view === 'page';
    const total = r._pages.length;
    const n = Math.min(r._n ?? 0, total - 1);
    bar.querySelector('.b-page').hidden = !paginated;
    bar.querySelector('.b-count').textContent = paginated ? '' : `共 ${pad(total)} 页${r._live ? '+' : ''}`;
    const go = bar.querySelector('.b-goto input');
    go.max = total;
    if (document.activeElement !== go) go.value = paginated ? n + 1 : 1;
    bar.querySelector('.b-total').textContent = String(total).padStart(2, '0');
    bar.querySelector('[data-ctr="prev"]').disabled = !paginated || n === 0;
    bar.querySelector('[data-ctr="next"]').disabled = !paginated || (n === total - 1 && r._live);
    bar.querySelector('.b-stop').hidden = !generating;
    bar.querySelector('.b-mode').textContent = isFull()
        ? (matchMedia('(max-width: 1000px)').matches ? '退出' : '退出全屏')
        : (matchMedia('(max-width: 1000px)').matches ? '全屏' : '全屏阅读');
    bar.classList.toggle('live', !!r._live);
}

function mountHud() {
    const sheld = document.getElementById('sheld');
    const form = document.getElementById('form_sheld');
    if (!sheld || !form || document.getElementById('ctr-hud')) return;
    W.__ctosHud = { vars: hudVars, mid: () => (ctx().chat?.length ?? 1) - 1, write: hudWrite, theme: () => ({ calm: 'ds', neon: 'neon' }[dsKind()] || '') };
    bye.push(() => { delete W.__ctosHud; });
    const bridge = '<script>window.getVariables=function(){return parent.__ctosHud&&parent.__ctosHud.vars()};'
        + 'window.getCurrentMessageId=function(){return parent.__ctosHud?parent.__ctosHud.mid():0};'
        + 'window.replaceVariables=function(v){return parent.__ctosHud&&parent.__ctosHud.write(v)};'
        + 'document.addEventListener("DOMContentLoaded",function(){var t=parent.__ctosHud&&parent.__ctosHud.theme();if(t)document.body.classList.add(t)});<\/script>'
        + `<link rel="stylesheet" href="${DS_FONTS}">`;
    const frame = document.createElement('iframe');
    frame.id = 'ctr-hud';
    frame.title = 'ctOS 状态栏';
    frame.srcdoc = HUD_HTML.replace('<head>', '<head>' + bridge).replace('</style>', HUD_DS_STYLE + '</style>')
        .replace(/https:\/\/testingcf\.jsdelivr\.net\/npm\/@fontsource\/[^'"]+/g, FONT_BASE + 'ctos.css');
    // 全屏状态栏是状态栏页面往主页面上挂的一层（#ctos-overlay），挂上来时把主题带过去
    watch(new MutationObserver(() => { const o = document.getElementById('ctos-overlay'); if (o) { o.classList.toggle('ds', dsKind() === 'calm'); o.classList.toggle('neon', dsKind() === 'neon'); } })).observe(document.body, { childList: true });
    form.before(frame);
    // 高度跟着状态栏内容走：收起时一条，展开时最多半屏，多出来的在 iframe 里面滚
    frame.addEventListener('load', () => {
        const body = frame.contentDocument?.body;
        if (!body) return;
        const fit = () => {
            frame.style.height = Math.min(body.scrollHeight, Math.round(W.innerHeight * 0.55)) + 'px';
            setDock();
        };
        watch(new ResizeObserver(fit)).observe(body);
        fit();
    });
}

function mountSettings() {
    const host = document.getElementById('extensions_settings2') || document.getElementById('extensions_settings');
    if (!host || document.getElementById('ctr_settings')) return;
    host.insertAdjacentHTML('beforeend', `
<div id="ctr_settings" class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b>ctOS 阅读器 · 视觉小说</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content">
    <label class="checkbox_label" for="ctr_enabled"><input type="checkbox" id="ctr_enabled"><span>启用 ctOS 重绘（黑）</span></label>
    <label class="ctr-row" for="ctr_theme"><span>主题</span>
      <select id="ctr_theme" class="text_pole"><option value="ctos">ctOS · 黑</option><option value="dedsec">DedSec · 护眼</option><option value="neon">DedSec · 霓虹</option></select>
    </label>
    <label class="checkbox_label" for="ctr_boot"><input type="checkbox" id="ctr_boot"><span>DedSec 开场动画（每次打开放一次）</span></label>
    <div class="ctr-row"><span></span><button type="button" class="menu_button" id="ctr_boot_play">重播开场</button></div>
    <label class="ctr-row" for="ctr_mode"><span>阅读模式</span>
      <select id="ctr_mode" class="text_pole"><option value="normal">正常模式</option><option value="full">全屏模式</option></select>
    </label>
    <label class="checkbox_label" for="ctr_sound"><input type="checkbox" id="ctr_sound"><span>翻页与按钮音效</span></label>
    <label class="checkbox_label" for="ctr_sprites"><input type="checkbox" id="ctr_sprites"><span>全屏时在左右两边显示立绘与 CG</span></label>
    <label class="ctr-row" for="ctr_volume"><span>音量 <b id="ctr_volume_out"></b></span>
      <input type="range" id="ctr_volume" min="0" max="1" step="0.05">
    </label>
    <small>正文立即显示；思考单独折叠，免责声明和变量更新不计入小说分页。启用时停用自定义 CSS 和 Moonlit Echoes 样式，关闭后恢复。全屏下 ← → 翻页，ESC 退出，输入框只在末页出现。立绘先找酒馆 data/default-user/characters/看门狗：伦敦/立绘/，那里没有就从 GitHub 取。正文里的专有名词会划线，点一下收进右下角道尔顿的笔记本；笔记本自己的设置在笔记本面板底部。这套阅读器随《看门狗：伦敦》角色卡附带，换到别的卡会自动关闭。</small>
  </div>
</div>`);
    const $ = (id) => document.getElementById(id);
    $('ctr_enabled').addEventListener('change', (e) => { settings().enabled = e.target.checked; save(); sync(); });
    $('ctr_theme').value = settings().theme;
    $('ctr_theme').addEventListener('change', (e) => { settings().theme = e.target.value; save(); applyTheme(); if (isDs()) bootDedsec(true); });
    $('ctr_boot').checked = settings().boot !== false;
    $('ctr_boot').addEventListener('change', (e) => { settings().boot = e.target.checked; save(); });
    $('ctr_boot_play').addEventListener('click', () => bootDedsec(true));
    $('ctr_mode').addEventListener('change', (e) => setMode(e.target.value, true));
    $('ctr_sound').addEventListener('change', (e) => { settings().sound = e.target.checked; save(); updateControls(); Sfx.click(); });
    $('ctr_volume').addEventListener('input', (e) => { settings().volume = Number(e.target.value); save(); updateControls(); });
    $('ctr_volume').addEventListener('change', () => Sfx.flip());
    $('ctr_sprites').addEventListener('change', (e) => {
        settings().sprites = e.target.checked;
        save();
        const r = focusEl?.querySelector('.ctr');
        if (r?.dataset.view === 'page') paintCast(r, r._pages[r._n]);
    });
}

// 全屏阅读时最新一条铺在输入框和状态栏上面，两样的高度合起来让出来
let setDock = () => {};
function watchDock() {
    const form = document.getElementById('form_sheld');
    if (!form) return;
    setDock = () => {
        const hud = document.getElementById('ctr-hud');
        const bar = document.getElementById('ctr-bar');
        const h = form.offsetHeight + (hud?.offsetHeight ?? 0) + (bar && !bar.hidden ? bar.offsetHeight : 0);
        document.body.style.setProperty('--ctr-dock', `${h ? h + 16 : 0}px`);
    };
    // 转屏以后状态栏和控制条换了宽度，高度也可能跟着变，所以三样一起盯，再加一个窗口尺寸
    const ro = watch(new ResizeObserver(setDock));
    ro.observe(form);
    for (const id of ['ctr-hud', 'ctr-bar']) { const el = document.getElementById(id); if (el) ro.observe(el); }
    on(W, 'resize', setDock);
    setDock();
}

// 同一张卡的脚本重新加载时，先清掉上一次留在主页面上的东西
const MOUNTED = '#ctos-reader-style, #ctr-ds-fonts, #ctr-boot, #ctr-brand, #ctr-tools, #ctr_settings, #ctr-lore, #ctr-bar, #ctr-hud, #cdx-fab, #cdx-panel, #cdx-tip, #cdx-upload, .cdx-slip';

/* ------------------------------------------------------------
   世界书自检
   世界书内嵌在卡里，酒馆只在第一次导入卡时问一次要不要导入；旧版酒馆只闪一条几秒就消失的提示，
   点了"否"或者没看见，卡上的 world 字段就指着一本不存在的书，整张卡在没有世界书的情况下跑。
   每次打开这张卡的聊天查一遍：书不在就弹窗，一键导入。卡里已经写好 world 字段，书一建好就自动挂上。
   ------------------------------------------------------------ */
function missingLorebook() {
    const c = ctx();
    const book = c.characters?.[c.characterId]?.data?.character_book;
    if (!book?.name) return null;
    const names = c.getWorldInfoNames?.()
        ?? [...document.querySelectorAll('#world_editor_select option')].map((o) => o.textContent.trim());
    return names.includes(book.name) ? null : book;
}

// 当前这张卡的世界书是不是已经装好了。没选中角色时算"还没，继续等"，不能就此收工
function loreInstalled() {
    const c = ctx();
    const book = c.characters?.[c.characterId]?.data?.character_book;
    if (!book?.name) return false;
    const names = c.getWorldInfoNames?.()
        ?? [...document.querySelectorAll('#world_editor_select option')].map((o) => o.textContent.trim());
    return names.includes(book.name);
}

// 新版酒馆直接用上下文里的转换和保存；旧版没有这两个函数，就替用户点角色面板"更多…"里的 Import Card Lore，它会自己再确认一次
async function importLorebook(book) {
    const c = ctx();
    if (c.convertCharacterBook && c.saveWorldInfo) {
        await c.saveWorldInfo(book.name, c.convertCharacterBook(book), true);
        await c.updateWorldInfoList?.();
        return 'done';
    }
    const opt = document.getElementById('import_character_info');
    if (!W.jQuery || !opt) return 'manual';
    opt.selected = true;
    W.jQuery('#char-management-dropdown').trigger('change');
    return 'asked';
}

// 打开着的抽屉（角色面板、生成参数等）。弹窗绝不能盖在它们上面：酒馆的手机端抽屉是全屏的，盖上去就等于整张卡卡死
function openDrawers() {
    return [...document.querySelectorAll('.drawer-content.openDrawer, nav.openDrawer')]
        .filter((el) => getComputedStyle(el).display !== 'none');
}

function closeDrawers() {
    let closed = false;
    document.querySelectorAll('.drawer-content.openDrawer, nav.openDrawer').forEach((el) => {
        const icon = el.closest('.drawer')?.querySelector('.drawer-toggle .drawer-icon');
        if (icon) { icon.click(); closed = true; }
    });
    return closed;
}

// 用户点过"稍后"就这一局不再追问；换聊天或者重新载入脚本时再问。
// 旗标挂在主页面 window 上：酒馆助手有时会把同一个脚本加载两遍，两边各有一个弹窗，挂在闭包里会互相打架
const loreSnoozed = () => W.__ctosLoreSnooze === true;

function checkLorebook() {
    const book = missingLorebook();
    if (!book) { document.getElementById('ctr-lore')?.remove(); return; }
    // 角色面板开着（导入卡的时候就是这样）就先不弹，等用户回到聊天
    if (loreSnoozed() || openDrawers().length) { document.getElementById('ctr-lore')?.remove(); return; }
    if (document.getElementById('ctr-lore')) return;
    const started = (ctx().chat?.length ?? 0) > 1;
    document.body.insertAdjacentHTML('beforeend', `
<div id="ctr-lore" role="dialog" aria-modal="true" aria-labelledby="ctr-lore-t">
  <div class="ctr-lore-box">
    <div class="ctr-lore-k">ctOS // LOREBOOK</div>
    <b id="ctr-lore-t">世界书“${book.name}”还没装上</b>
    <p>这张卡的人物、伦敦、局势和变量规则都写在内嵌的世界书里。酒馆只在第一次导入卡时问过一次，旧版酒馆常常只闪一条提示，很容易漏掉。没有它，模型不知道伦敦是什么样，变量也不会按这张卡更新。</p>
    ${started ? '<p class="ctr-lore-warn">这一局已经开始了。装好以后请新开一局，变量才会按这张卡初始化。</p>' : ''}
    <p class="ctr-lore-manual" hidden>没能自动导入。请打开角色面板，在“更多…”菜单里选 Import Card Lore（导入卡内世界书）。</p>
    <div class="ctr-lore-row"><button type="button" data-lore="later">稍后</button><button type="button" data-lore="go" class="main">一键导入</button></div>
  </div>
</div>`);
    const box = document.getElementById('ctr-lore');
    on(box, 'click', async (e) => {
        const act = e.target.closest?.('[data-lore]')?.dataset.lore;
        if (act === 'later') { W.__ctosLoreSnooze = true; box.remove(); return; }
        if (act !== 'go') return;
        e.target.disabled = true;
        const result = await importLorebook(book).catch(() => 'manual');
        if (result === 'manual') {
            box.querySelector('.ctr-lore-manual').hidden = false;
            e.target.disabled = false;
            return;
        }
        box.remove();
        if (result === 'done') toastr?.success(`世界书“${book.name}”已导入，并挂在这张卡上`);
    });
}

function init() {
    document.querySelectorAll(MOUNTED).forEach((el) => el.remove());
    document.querySelectorAll('#chat > .mes').forEach(clearReader);
    const style = document.createElement('style');
    style.id = 'ctos-reader-style';
    style.textContent = STYLE.replace(/^@import url\('https:\/\/fonts\.googleapis\.com[^\n]*/, CTOS_FONTS_IMPORT) + DS_STYLE;
    document.head.appendChild(style);
    // DedSec 主题的像素字和终端字；全屏状态栏在 shadow DOM 里，也用主页面加载的字体
    const fonts = document.createElement('link');
    fonts.id = 'ctr-ds-fonts';
    fonts.rel = 'stylesheet';
    fonts.href = DS_FONTS;
    document.head.appendChild(fonts);
    settings();
    codex.mount();
    mountRail();
    mountSettings();
    mountBar();
    mountHud();
    watchDock();
    const { eventTypes: E } = ctx();
    listen(E.CHAT_CHANGED, () => { W.__ctosLoreSnooze = false; checkLorebook(); });
    listen(E.CHAT_CHANGED, codex.onChatChanged);
    listen(E.MESSAGE_RECEIVED, (id, type) => {
        if (type === 'first_message') return;
        const msg = ctx().chat[id];
        if (msg) received.add(`${ctx().getCurrentChatId?.() ?? ''}|${id}|${msg.swipe_id ?? 0}`);
    });
    listen(E.MESSAGE_DELETED, codex.relocate);
    listen(E.MESSAGE_SWIPE_DELETED, codex.relocate);
    listen(E.MESSAGE_SWIPED, codex.onSwiped);
    listen(E.GENERATION_STARTED, (_type, _opts, dryRun) => {
        if (dryRun) return;
        generating = true;
        updateBar();
        schedule();
    });
    const done = () => { generating = false; justGenerated = true; updateBar(); schedule(); };
    listen(E.GENERATION_ENDED, done);
    listen(E.GENERATION_STOPPED, done);
    for (const ev of [E.CHAT_CHANGED, E.MESSAGE_SWIPED, E.MESSAGE_UPDATED, E.MESSAGE_EDITED,
        E.MESSAGE_DELETED, E.MORE_MESSAGES_LOADED, E.CHARACTER_MESSAGE_RENDERED, E.USER_MESSAGE_RENDERED,
        E.STREAM_TOKEN_RECEIVED]) {
        listen(ev, schedule);
    }
    const chat = document.getElementById('chat');
    if (chat) {
        watch(new MutationObserver(schedule)).observe(chat, { childList: true });
        on(chat, 'scroll', checkScrollEnd, { passive: true });
    }
    // 抽屉一开一关就把世界书弹窗收放一次，别让它压在角色面板上
    const holder = document.getElementById('top-settings-holder');
    if (holder) watch(new MutationObserver(checkLorebook)).observe(holder, { subtree: true, attributes: true, attributeFilter: ['class'] });
    // 外来样式晚于阅读器插入或者内容被改写时，再关一次
    watch(new MutationObserver(() => suppressForeign(settings().enabled)))
        .observe(document.head, { childList: true, subtree: true, characterData: true });
    // 脚本是在聊天打开以后才加载的，这一次的 CHAT_CHANGED 已经错过，自己补上
    codex.onChatChanged();
    sync();
    // DedSec 主题：打开页面先放一遍开场（每个标签页一次）
    bootDedsec();
    // 缺世界书就一直盯着：角色面板关掉、换到聊天里，弹窗自己会出来；装上了就停
    checkLorebook();
    const loreTick = setInterval(() => {
        if (loreInstalled()) { clearInterval(loreTick); document.getElementById('ctr-lore')?.remove(); return; }
        checkLorebook();
    }, 3000);
    bye.push(() => clearInterval(loreTick));
}

// 换卡、关掉脚本或者刷新时酒馆助手会撤掉 iframe：把主页面还原
function teardown() {
    life.abort();
    for (const fn of bye.splice(0)) fn();
    clearTimeout(syncTimer);
    codex.unmount();
    document.querySelectorAll('#chat > .mes').forEach((el) => { clearReader(el); el.classList.remove('ctr-focus'); });
    document.querySelectorAll(MOUNTED).forEach((el) => el.remove());
    document.body.classList.remove('ctos', 'ctr-full', 'ctr-generating', 'ctr-dockoff', 'ctr-railmin');
    document.body.style.removeProperty('--ctr-dock');
    suppressForeign(false);
    if (enteredFullscreen && document.fullscreenElement) document.exitFullscreen().catch(() => {});
}

window.addEventListener('pagehide', teardown);
init();