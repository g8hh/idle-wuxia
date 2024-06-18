/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "I've awakened in an empty room, with no memory of how I got here. Suddenly, amidst waves of pain fleeting memories flash through my mind. Grasping at one, the knowledge of cultivation settles within me. I can't seem to remember more, but perhaps by growing stronger my memories will return.": "我在一个空房间里醒来，不记得我是怎么来的。突然，在痛苦的浪潮中，我的脑海中闪过了短暂的记忆。抓住其中一个，修行的知识就在我心里。我似乎记不住更多的东西了，但也许随着我变得更强壮，我的记忆就会恢复。",
    "Activities": "行动",
    "Beast Core": "兽核",
    "Breakthrough": "突破",
    "Common": "普通",
    "Cultivate": "修炼",
    "Cultivate Body": "修炼身体",
    "Cultivate Meridians": "修炼经脉",
    "Cultivate Spirit": "修炼灵识",
    "Currency": "货币",
    "Debug": "调试",
    "Gold Coins": "金币",
    "Herbs": "草药",
    "Journal": "日记",
    "Leather": "皮革",
    "Ore": "矿石",
    "Restart": "重新开始",
    "Who am I...": "我是谁……",
    "Wood": "木头",
    "Attack Power": "攻击力",
    "Avatars Limit": "化身上限",
    "Body Progress": "身体进度",
    "Body Stage": "身体阶段",
    "Current Health": "当前生命",
    "Current Qi": "当前气",
    "Current Stamina": "当前耐力",
    "Current Tier": "当前层级",
    "Defence": "防御",
    "Effects": "效果",
    "Effects on completion": "完成效果",
    "Effects per second": "每秒效果",
    "Improve your body through exercise": "通过锻炼来提升你的身体",
    "Improve your meridians by circulating qi": "通过循环气来提升你的经脉",
    "Improve your spirit through meditation": "通过冥想来提升你的灵识",
    "Max Health": "生命上限",
    "Max Qi": "气上限",
    "Max Stamina": "耐力上限",
    "Meridians Progress": "经脉进度",
    "Meridians Stage": "经脉阶段",
    "Next Tier": "下一层",
    "Spirit Progress": "灵识进度",
    "Spirit Stage": "灵识阶段",
    "Create Avatar": "创造化身",
    "Create an Avatar": "创造一个化身",
    "As my strength returns so does knowledge. I remember how to create an avatar to do my bidding.": "当我恢复力量时，知识也会恢复。我记得如何创造一个化身来执行我的命令。",
    "Avatars": "化身",
    "Main": "主要",
    "Consume your lifeforce to create an avatar to do your bidding. Shift/Ctrl click to increase qty.": "消耗你的生命力，创造一个化身来执行你的命令。Shift/Ctrl + 点击 可以增加数量。",
    "As my strength grows, so does my clarity of mind. I feel like I am reaching a limit which can only be surpassed with the help of an elixir. I can see a treasure pavilion in the distance, perhaps I can find what I need there, although I'll need to earn some gold first.": "随着我力量的增长，我的头脑也变得越来越清晰。我觉得我达到了一个极限，只有在长生不老药的帮助下才能超越。我可以看到远处有一个藏宝阁，也许我可以在那里找到我需要的东西，尽管我需要先赚一些金子。",
    "Assign an Avatar": "分配一个化身",
    "Beg to earn gold. It doesnt cost anything except your dignity.": "乞讨可以获得金币。除了你的尊严之外，没有什么损失。",
    "Begging": "乞讨",
    "Breakthrough Elixir": "突破丹",
    "Common Breakthrough Elixir": "普通突破丹",
    "Costs": "成本",
    "Manual Labor": "体力劳动",
    "Now that I have a clone, I can make it do my bidding by assigning it to tasks to speed up my progression.": "现在我有了一个克隆体，我可以让它执行我的命令，给它分配任务来加速我的进程。",
    "Performing": "表演",
    "Use your abilities to perform simple tricks.": "运用你的能力表演一些简单的把戏。",
    "Use your body to perform manual labor.": "用你的身体进行体力劳动。",
    "Work": "工作",
    "Need breakthrough elixir!": "需要突破丹!",
    "Assists with breaking through to the next stage": "协助突破进入下一阶段",
    "Blueprint": "蓝图",
    "Buy": "购买",
    "Can be used to provide a permanent upgrade": "可用于提供一个永久升级",
    "Armor": "护甲",
    "Attack Power Stone": "攻击力石",
    "Avatar Core": "化身核心",
    "Body Pill": "炼体丹",
    "Capture Crystal": "捕获水晶",
    "Disc": "飞盘",
    "Hatchet": "短柄斧",
    "Meridians Pill": "经络丹",
    "Orb Essence": "宝珠精华",
    "Pickaxe": "鹤嘴锄",
    "Resource Crate": "资源箱",
    "Scythe": "镰刀",
    "Spirit Pill": "灵丹",
    "Stamina Stone": "耐力石",
    "Storage Ring": "储物戒指",
    "Storage Trunk": "储物箱",
    "Sword": "剑",
    "Consumable": "消耗品",
    "Equipment": "装备",
    "Filter:": "筛选:",
    "Furniture": "家具",
    "Herb Tool": "草的工具",
    "Hold in inventory to capture creatures of the same tier. Mark creatures for capture in the bestiary. Quality of crystal determines strength of the creature.": "持有库存以捕获同级生物。在兽谱中标记待捕获的生物。水晶的品质决定了生物的力量。",
    "Home": "家园",
    "Increases the rate of orb spawns": "提高宝珠的生成率",
    "Inventory Cap": "库存上限",
    "Misc": "杂项",
    "Mount Range": "坐骑范围",
    "Orb Rate": "宝珠速率",
    "Ore Tool": "矿石工具",
    "Player": "玩家",
    "Provides cultivation boost for a limited time": "在限定时间内提供培养增益",
    "Resources bundled up into a crate": "资源被打包到一个板条箱里",
    "Sell": "出售",
    "Shop": "商店",
    "Special Upgrades": "特殊升级",
    "Tier": "层级",
    "Type": "类型",
    "Upgrade": "升级",
    "Vault size": "金库大小",
    "Wood Tool": "木制工具",
    "Area Cap": "区域上限",
    "Areas": "区域",
    "garden": "花园",
    "Garden": "花园",
    "Garden size": "花园大小",
    "Increase the size of your island and make more areas available.": "增加你的岛屿的大小，并提供更多可用的区域。",
    "Island Level": "岛屿等级",
    "Just a space for furniture": "只是放家具的地方",
    "Room": "房间",
    "Room size": "房间大小",
    "Upgrade Island": "升级岛屿",
    "Vault": "金库",
    "Workshop": "工坊",
    "Workshop size": "工坊规模",
    "Accessory": "配饰",
    "Creature": "生物",
    "Drop Rate": "掉落概率",
    "Inventory": "库存",
    "Mount": "坐骑",
    "Quality Rate": "品质率",
    "Sell Factor": "销售系数",
    "Shop Level": "商店等级",
    "Stats": "属性",
    "Weapon": "武器",
    "Set": "设定",
    "item": "物品",
    "Learn": "学习",
    "I've learnt a blueprint. I'll need to craft it with materials. I can find the materials by using gathering tools from the shop, or by adventuring. When I'm ready, I can queue an item for crafting and assign an avatar to craft the items for me.": "我学会了一张蓝图。我需要用材料来制作它。我可以通过使用商店里的收集工具或冒险来寻找材料。当我准备好了，我可以排队制作一个物品，并指派一个化身为我制作这些物品。",
    "Adventure": "冒险",
    "Blueprint learnt!": "蓝图学习成功!",
    "Craft": "制作",
    "Learnt Blueprint": "学会了蓝图",
    "Now that I have some gold, perhaps I can buy something useful at the treasure pavilion. They might also stock equipment for myself, or furniture for my home.": "现在我有了一些金币，或许可以去藏宝阁买些有用的东西。他们也可能为我自己储备设备，或者为我的家储备家具。",
    "Treasure Pavilion": "藏宝阁",
    "Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key": "按空格键开始拖动。拖动时，可以使用方向键移动物品，也可以按 Escape 键取消。\n某些屏幕阅读器可能需要您处于对焦模式或使用直通键",
    "Adventures": "冒险",
    "Battles": "战斗",
    "Bestiary": "兽谱",
    "Craft Queue": "制作队列",
    "Green Plains": "绿色平原",
    "Queue": "队列",
    "Recipes": "配方",
    "Any Quality": "任意品质",
    "Cant do that right now": "现在不能这么做",
    "Do until X": "一直做到X",
    "Do X times": "制作X次",
    "Equip": "装备",
    "Forever": "永远",
    "Apply": "使用",
    "Gather": "收集",
    "Gather herbs from a nearby forest.": "从附近的森林采集草药。",
    "Gather ore from a nearby forest.": "从附近的森林采集矿石。",
    "Gather wood from a nearby forest.": "从附近的森林采集木头。",
    "Rabbit": "兔子",
    "Boar": "野猪",
    "Capture Rate": "捕捉成功率",
    "Capturing": "捕捉",
    "Click to mark for capture": "单击以标记捕捉",
    "Health": "生命",
    "Dequeue": "移除",
    "Quality Crafting": "高品质工艺",
    "I've crafted an item of superior quality. If I tell my avatars to craft an item using \"Do until X\" I can make them keep crafting until the item reaches the desired quality. They will automatically sell any items that don't meet the quality requirements.": "我精心制作了一件质量上乘的物品。如果我告诉我的角色使用“一直做到X”去制作一个物品，我就可以让他们继续制作直到道具达到预期的质量。他们会自动出售任何不符合质量要求的物品。",
    "I found a beast core which will be useful for crafting. If I want more beast cores I'll need to venture to more dangerous areas by using a flying disc.": "我找到了一个兽核，对制作很有帮助。如果我想要更多的兽核，我需要使用飞盘去更危险的地方冒险。",
    "Beast Cores": "兽核",
    "Herb Trough": "草药槽",
    "Tanning Station": "制革站",
    "Sell All": "全部出售",
    "Place in a workshop to generate leather": "放置在工坊生产皮革",
    "Place in a garden to generate herbs": "放置在花园中以种植药草",
    "Loot": "战利品",
    "Meditation Mat": "冥想垫",
    "Currency Cap": "当前上限",
    "Coffer": "保险箱",
    "Keep'": "保留",
    "Can only have 1": "只能拥有1个",
    "Vengeance": "复仇",
    "As my body adjusts to new power, more memories become clear. Before me plays the end of my former life, revealing a trusted friend—now a shadowy figure draped in betrayal. They poisoned me, seeking to steal the knowledge of avatar cultivation I guarded. My death was merely the beginning of their ascent to power, and now, reborn, I burn for revenge. I must continue my cultivation and return to True Godhood if I am to stand a chance.": "随着我的身体适应新的力量，更多的记忆变得清晰起来。展现在我面前的是我过去生活的结局，一个值得信赖的朋友——现在却成了一个笼罩在背叛中的影子。他们毒死了我，想窃取我守护的神通修炼知识。我的死只是他们掌权的开始，现在，我重生了，我为复仇而燃烧。如果我还有机会，我必须继续我的修行，回归真正的神性。",
    "Anvil": "铁砧",
    "Fan": "扇子",
    "Misty Mountains": "迷雾山脉",
    "Dark Wood": "暗黑之林",
    "Bed": "床",
    "Increases the chance to craft high quality items": "增加制作高品质物品的机会",
    "Unset": "取消",
    "Increases the chance to craft high quality items - Can only have 1": "增加制作高品质物品的机会 - 只能有 1 个",
    "Keep": "保留",
    "Place": "放置",
    "Remove": "移除",
    "room": "房间",
    "Superior Serpent": "高级蛇",
    "Ore Crystal": "矿石水晶",
    "Slowly sheds ore flakes by consuming natural energy in the air": "通过消耗空气中的自然能量，缓慢脱落的矿石薄片",
    "Avatar Nexus": "化身枢纽",
    "Place in a garden to generate wood": "放置在花园中以产生木材",
    "Tree Basin": "树盆",
    "Warriors Bracelet": "武士手链",
    "Wardrobe": "衣柜",
    "Bookshelf": "书架",
    "Spear": "长矛",
    "You can't buy this right now": "你现在无法购买",
    "Crystal Lake": "水晶湖",
    "Forgotten Valley": "遗忘之谷",
    "Multipliers": "乘数",
    "vault": "金库",
    "workshop": "工坊",
    "Focus Pendant": "专注吊坠",
    "Merchant's Script": "商人脚本",
    "Daggers": "匕首",
    "The item has been dropped while not over a drop area.\n    \n  The item has returned to its starting position\n  of 17\n": "物品被放下时不在放下区域内。\n \n 物品已返回其起始位置\n（共 17 个）\n",
    "Locked n Loaded": "锁定并加载",
    "You are over an area that cannot be dropped on": "你处于无法放下的区域",
    "Close": "关闭",
    "Confirm": "确认",
    "Confirmation Required": "需要确认",
    "This action cannot be reversed. Please confirm you want to do this.": "此操作无法撤消。请确认您是否要执行此操作。",
    "Consume": "消耗",
    "Invest in Shop": "投资店铺",
    "Put money into the shop to increase the number of items it sells": "向商店投入资金以增加其销售的商品数量",
    "or Ctrl+Click to max": "或 Ctrl+单击以达到最大值",
    "Shift+Click to step by 10,": "Shift+单击以 10 为单位增加，",
    "Superior": "高级",
    "Gold Hoarder": "黄金囤积者",
    "Unequip": "脱下",
    "Space Cube": "空间魔方",
    "Staff": "手杖",
    "Stones": "石头",
    "Prosperity Bag": "福袋",
    "Bounty Hunting": "赏金猎人",
    "Condense Qi": "凝气",
    "Gatherer": "采集者",
    "Healing": "治疗",
    "Hunt cultivators with a bounty on their head": "以悬赏狩猎修士",
    "Sacred": "神圣",
    "Use your abilities to heal the sick": "用你的能力治愈病人",
    "Condense your own Qi into spirit stones": "把自己的气凝聚成灵石",
    "Leviathan": "利维坦",
    "Immortal Stone Hoarder": "仙石囤积者",
    "Phoenix": "凤凰",
    "Celestial": "天体",
    "Transcendant": "超越",
    "Air Elemental": "空气元素",
    "Avatar": "化身",
    "Betrayer": "背叛者",
    "Elemental Sanctuary": "元素圣殿",
    "Heaven's Gate": "天堂之门",
    "Immortal Stones": "不朽之石",
    "Limit Reached": "已达上限",
    "Sky Pillars": "天柱",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Black Tortoise": "玄武",
    "Dragon": "龙",
    "Monkey": "猴子",
    "Eagle": "鹰",
    "Bear": "熊",
    "Kirin": "麒麟",
    "Serpent": "蛇",
    "Tiger": "老虎",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Transcendant ": "超越",
    "Common ": "普通",
    "Crafted ": "已完成制作 ",
    "New loot! Common ": "新战利品！普通",
    "New loot! Celestial ": "新战利品！天体",
    "New loot! Sacred ": "新战利品！神圣",
    "New loot! Superior ": "新战利品！超级",
    "New loot! Transcendant ": "新战利品！超越",
    "Sacred ": "神圣",
    "Celestial ": "天体",
    "Superior ": "高级",
    "Unlocked achievement! ": "解锁成就! ",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ", Cripple": ", 残废",
    ", Mortal": ", 凡人",
    ", Saint": ", 圣人",
    ", True God": ", 真神",
    ", False God": ", 伪神",
    ", Immortal": ", 仙人",
    ", Immortal Emperor": ", 仙皇",
    ", Immortal King": ", 仙王",
    ", Saint King": ", 圣王",
    ", Saint Emperor": ", 圣皇",
    ", Cultivator": ", 修炼新手",
    ", Cultivator Expert": ", 修炼专家",
    ", Cultivator Adept": ", 修炼高手",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Health, (.+) per second$/, '生命，$1\/秒'],
    [/^Qi, (.+) per second$/, '气，$1\/秒'],
    [/^Stamina, (.+) per second$/, '耐力，$1\/秒'],
    [/^Body, lvl ([\d\.,]+)$/, '身体，$1 级'],
    [/^Meridians, lvl ([\d\.,]+)$/, '经脉，$1 级'],
    [/^Spirit, lvl ([\d\.,]+)$/, '灵识，$1 级'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^, ([\d\.,]+) seconds$/, ', $1 秒'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^You have lifted an item in position ([\d\.,]+)$/, '您已将物品从位置 $1 拿起'],
    [/^You have dropped the item.\n      \n      You have moved the item from position ([\d\.,]+)\n      to position ([\d\.,]+)\n    $/, '您已丢弃该物品。\n \n 您已将物品从位置 $1\n 移动到位置 $2\n'],
    [/^T([\d\.,]+) Resources Cap$/, 'T$1 资源上限'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Allows to gather herbs, tier ([\d\.,]+) or less$/, '允许收集草药，$1级或更低'],
    [/^Allows to gather ore, tier ([\d\.,]+) or less$/, '允许收集矿石，$1级或更低'],
    [/^Allows to gather wood, tier ([\d\.,]+) or less$/, '允许收集木材，$1级或更低'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);