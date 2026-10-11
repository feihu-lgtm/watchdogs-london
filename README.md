# 看门狗：伦敦

《看门狗：军团》同人角色卡。你是被写进遇难者名单的前军情六处特工道尔顿·沃尔夫，七天后从贝克街 221B 楼上醒来。全伦敦以为你死了，而你手里的手机住着网安模型「天问」。

- Pages：[https://feihu-lgtm.github.io/watchdogs-london/](https://feihu-lgtm.github.io/watchdogs-london/)
- 在线游玩：[play/](play/)

## 两种玩法

### 在线游玩

打开 [play/](play/)，填写自己的 OpenAI 兼容 API 地址、密钥和模型即可。存档保存在浏览器本地，立绘会自动从 CDN 加载。

### 导入 SillyTavern

需要酒馆助手（JS-Slash-Runner）和 ST-Prompt-Template。导入角色卡时允许内嵌正则、世界书和脚本，再导入预设「英式早餐」。

立绘包可选，解压到：

```text
data/default-user/characters/看门狗：伦敦/
```

不放立绘包也能游玩，页面会自动从 CDN 获取立绘。

预设除专为本卡调优的「英式早餐」外，亦提供底稿「【小猫之神】4.0」（完整保留 64 条原版提示词，仅剥离外部 Catbox 字体与粉色主题 CSS，折叠栏原生纯净渲染）。资源可在 [GitHub Releases (v1.0)](https://github.com/feihu-lgtm/watchdogs-london/releases/tag/v1.0) 或发布页下载。

## 怎么改预设

预设「英式早餐」只有一份：`下载/英式早餐_看门狗专属预设.json`。在线游玩用的 `play/data/preset.json` 是它的一模一样的副本，两份要一起改。

**在 SillyTavern 里改（推荐）**

1. 导入预设后，打开左上角「AI 响应配置」（滑块图标），在顶部预设下拉里选「英式早餐」。
2. 往下翻到提示词列表，每条右边的开关决定这条发不发，点铅笔图标改内容。常改的几组：
   - 📝 文风：雨夜伯爵茶 / 小龙坎 / DIE 特调，选一个开
   - ❤️ 尺度：nsfw 风格「正常」或「色色！」二选一；「⛔️关闭NSFW」「❤️防发情」按需开
   - 📏 篇幅与节奏：节奏三档、小总结、格式加强
   - ⚙️ 玩法：我不是主角、防抢话、背景 npc 发展、多视角、内心话
   - 标着「不要关」「别关」「勿删」的是骨架，关了会坏
3. 改完点「保存」，再用「导出预设」得到新的 `.json`。

**同步到在线游玩**

网页版没有预设编辑器，读的就是 `play/data/preset.json`。把上一步导出的文件同时覆盖 `play/data/preset.json` 和 `下载/英式早餐_看门狗专属预设.json`，提交推到 main，Pages 更新以后刷新页面就生效。开关状态也会带过去（网页版按预设里的提示词顺序和开关来拼）。

**注意**

- 最后一条「【思考起手】多声部早餐会议」是 AI 预填：整段提示词会以一条 AI 消息结尾。Gemini 3.x 这类接口不收这种写法，网页版会自动在末尾补一句用户消息；在 SillyTavern 里用 Gemini 报 “ending with a model turn” 时，关掉这一条或者把它的角色改成「用户」。
- 作者本机有预设的源文件和构建脚本（`构建.mjs` / `发布.mjs`）。直接改仓库里的 json 只是改了产物，下次重新发布会被源文件覆盖，所以改动也要抄回源文件。

## 伦敦伴读原声 (OST)

精选十四首冷战谍战、伦敦阴雨与网安算力原声，网易云音乐均可收听：

| 场景氛围 | 曲目与艺术家 | 专辑 / 出处 | 网易云 ID |
| :--- | :--- | :--- | :--- |
| 机房算力 / 算法天网 | Lorne Balfe - The Entity | 《碟中谍7：致命清算》 | [2059054982](https://music.163.com/#/song?id=2059054982) |
| 高科技静默潜入 | Danny Elfman - The Heist | 《碟中谍1》 | [473187110](https://music.163.com/#/song?id=473187110) |
| 伦敦街头突围追逐 | Lorne Balfe - Stairs and Rooftops | 《碟中谍6：全面瓦解》 | [1294165108](https://music.163.com/#/song?id=1294165108) |
| 西敏市雨夜密会 | Joe Kraemer - A Foggy Night in London | 《碟中谍5：神秘国度》 | [33728269](https://music.163.com/#/song?id=33728269) |
| DedSec 街头抵抗 | Stephen Barton - Welcome to the Resistance | 《看门狗：军团》 | [1803518592](https://music.163.com/#/song?id=1803518592) |
| 南伦敦雨夜碎拍 | Burial - Archangel | 《Untrue》 | [16640371](https://music.163.com/#/song?id=16640371) |
| 冷战特工暗斗 | Alberto Iglesias - Tinker Tailor Soldier Spy | 《锅匠，裁缝，士兵，间谍》 | [990303](https://music.163.com/#/song?id=990303) |
| 高压监视心跳 | Archive - Bullets | 《Controlling Crowds》 | [3884715](https://music.163.com/#/song?id=3884715) |
| 重装装甲尾随 | Massive Attack - Angel | 《Mezzanine》 | [21252137](https://music.163.com/#/song?id=21252137) |
| 神经脉冲潜行 | Jon Hopkins - Open Eye Signal | 《Immunity》 | [26321472](https://music.163.com/#/song?id=26321472) |
| 残破仿生人哀歌 | Lorn - Acid Rain | 《The Maze To Nowhere》 | [1497854235](https://music.163.com/#/song?id=1497854235) |
| 十一月泰晤士河晨雾 | Max Richter - November | 《Memoryhouse》 | [16964075](https://music.163.com/#/song?id=16964075) |
| 终端屏幕冷光 | Trent Reznor / Atticus Ross - Hand Covers Bruise | 《社交网络》 | [1061850](https://music.163.com/#/song?id=1061850) |
| 白厅突围困兽斗 | UNKLE - Burn My Shadow | 《War Stories》 | [21986980](https://music.163.com/#/song?id=21986980) |

## 授权与致谢

作者：小狐狸；商业用途不可以；二改可以；二改后不标注出处发布不可以。

本项目为育碧《看门狗：军团》同人二创。地图水岸线 © OpenStreetMap contributors（ODbL），区界 ONS 2023（OGL v3）。立绘画风参考《重返未来：1999》。

预设「英式早餐」作者为小狐狸，底稿来自 SoliUmbra 的「小猫之神」。
