const questions = [
    { id: 1, dim: 'E_I', text: "晚高峰的地铁里，人群像罐头一样紧紧挤压着你。车厢里充斥着疲惫的汗水味和短视频的外放声，此时你的精神状态是——", options: [{ text: "饶有兴致地观察对面打盹的人，甚至想和他搭话，试图从陌生人的疲惫里榨取一丝鲜活的烟火气。", score: { E: 2 } }, { text: "把这当作一次荒诞的人类学田野调查，在心里默默给车厢里的每个人撰写荒谬的生平。", score: { E: 1 } }, { text: "戴上降噪耳机，闭上眼，在震耳欲聋的白噪音里，为自己徒手构建一座谢绝访客的深海孤岛。", score: { I: 1 } }, { text: "感觉周遭的呼吸声正在一点点抽干你的氧气，你只想立刻化为一缕没有实体的青烟，从排风口逃逸。", score: { I: 2 } }] },
    { id: 2, dim: 'E_I', text: "你正在热闹的步行街逛街，突然一个带着“神圣假笑”的人挡住你的去路，神情神秘地开始和你探讨“灵魂的故乡”或“你今天的气场看起来压力很重”。面对这种突如其来的街头传教，你会——", options: [{ text: "突然来了兴致，开始满嘴跑火车，跟他反向安利一个自己随口瞎编的离谱教派，主打一个互相伤害和反向忽悠。", score: { E: 2 } }, { text: "敷衍地连连摆手说“信了信了，谢谢啊”，然后加快脚步溜走，心里还在盘算这套粗劣的话术到底能骗到谁。", score: { E: 1 } }, { text: "精神瞬间休眠。面无表情地盯着他身后三米处的虚空，机械性地摇头，并寻找他换气的间隙像幽灵一样闪身逃离。", score: { I: 1 } }, { text: "感到一种无处遁形的社交惊恐。因为害怕拒绝带来的冲突，你甚至差点被他牵着鼻子带去“基地”，只为了快点结束对话。", score: { I: 2 } }] },
    { id: 3, dim: 'E_I', text: "如果你被强行关进一个四面全是镜子、且正在循环播放人类罐头笑声的密室，你的精神防御机制会如何启动？", options: [{ text: "寻找离我最近的一面镜子，一拳砸碎它，用物理破坏来夺回对这个空间的主控权。", score: { E: 2 } }, { text: "跟着笑声一起狂笑，试着用更大的噪音把这个荒诞的密室彻底同化。", score: { E: 1 } }, { text: "闭上眼睛，在脑内强行播放一首悲伤的古典乐，试图用内心的秩序对抗外界的失控。", score: { I: 1 } }, { text: "蹲在角落，双手抱头，幻想自己是一块没有生命的石头，直到与地板融为一体。", score: { I: 2 } }] },
    { id: 4, dim: 'E_I', text: "梦里，你发现自己走进了一座空无一人的巨大剧院，舞台中央只有一束惨白的聚光灯。你的本能驱使你——", options: [{ text: "毫不犹豫地走到灯光下，对着空荡荡的观众席发表一场极具煽动性的即兴演讲。", score: { E: 2 } }, { text: "走到台边，拿起一把椅子坐下，试图弄清楚是谁布置了这个诡异的舞台。", score: { E: 1 } }, { text: "绕开那束光，把自己藏在剧院最深的阴影里，享受这种绝对安全的不被凝视感。", score: { I: 1 } }, { text: "拼命寻找出口。光意味着被审判，而你拒绝在这场没有剧本的戏剧里扮演任何角色。", score: { I: 2 } }] },
    { id: 5, dim: 'E_I', text: "在一个五百人的工作大群里，一条极其虚伪、充满谄媚的言论正在被众人排着队点赞。你的下意识动作是——", options: [{ text: "立刻截图发给死党小群，配上一句极其刻薄的吐槽，开启一场私密的赛博群嘲。", score: { E: 2 } }, { text: "哪怕心里已经翻了一万个白眼，但为了不被当成异类被老板穿小鞋，还是硬着头皮随大流发了个“+1”或者大拇指表情包。", score: { E: 1 } }, { text: "觉得屏幕发出的光都刺痛了眼睛，直接将群聊设为免打扰，假装自己是个瞎子。", score: { I: 1 } }, { text: "感到一种深深的恶心。你不发一言，只是在心里为人类文明的堕落又记下了一笔。", score: { I: 2 } }] },
    { id: 6, dim: 'E_I', text: "深夜疲惫地坐上网约车，司机师傅突然开始情绪激动地向你大吐苦水，抱怨社会不公与家庭鸡毛。在这封闭车厢里，你会——", options: [{ text: "瞬间来劲，反向输出一波自己的离谱经历，下车时两人恨不得结拜", score: { E: 2 } }, { text: "熟练切入“情绪代驾”模式，适时地“对对对、太过分了”维持体面", score: { E: 1 } }, { text: "战术性戴上降噪耳机，闭上眼睛装睡，用物理屏障强行切断羁绊", score: { I: 1 } }, { text: "感到车内空气变得极度粘稠稀薄，这种被迫卷入他人情绪的感觉让你窒息", score: { I: 2 } }] },
    { id: 7, dim: 'E_I', text: "周五深夜，朋友突然发来一条消息：“出来喝杯酒？十分钟后到你楼下。”此时你已经换上了睡衣，你会——", options: [{ text: "睡衣外面直接套件大衣就冲下楼，夜晚才刚刚开始，任何突如其来的局都是对生命的恩赐。", score: { E: 2 } }, { text: "虽然有点疲惫，但觉得这可能是个听到八卦的好机会，还是换好衣服下了楼。", score: { E: 1 } }, { text: "回复一句“刚吃完安眠药，下次一定”，然后心安理得地继续刷手机。", score: { I: 1 } }, { text: "假装已经睡死。第二天中午才悠悠回一句“啊昨天睡太早了”，绝不让任何意外破坏你的独处堡垒。", score: { I: 2 } }] },
    { id: 8, dim: 'S_N', text: "凌晨两点，你还醒着。盯着电脑屏幕上密密麻麻的数据和刚敲下的工作文档，你脑海里突然闪过一个念头——", options: [{ text: "在心里默默换算这几个小时的加班费，或者算算离下个月房租/还贷还差多少，靠着这点世俗的欲望强撑睡意。", score: { S: 2 } }, { text: "赶紧敲完最后一个字吧，明天早上还要去买那杯用来续命的冰美式。", score: { S: 1 } }, { text: "突然觉得自己像个在流水线上拧螺丝的机器，陷入了“我这辈子难道都要这样对着屏幕敲字吗”的深夜虚无。", score: { N: 1 } }, { text: "思绪突然飘到了几千公里外的冰川或者浩瀚的宇宙，觉得人类的这些报表、KPI 在宇宙尺度下简直毫无意义，连带着工作也彻底不想干了。", score: { N: 2 } }] },
    { id: 9, dim: 'S_N', text: "如果明天早晨醒来，你发现人类社会的货币体系彻底蒸发，所有的银行卡余额都变成了无意义的零。你的第一反应是——", options: [{ text: "肾上腺素飙升。立刻冲出家门，用最快的速度将超市里的罐头、纯净水和抗生素洗劫一空。", score: { S: 2 } }, { text: "迅速拉开抽屉，盘点家里还有多少黄金、香烟或者任何可以用来以物易物的硬通货。", score: { S: 1 } }, { text: "感到一丝隐秘的、病态的兴奋：“太好了，这个操蛋的规则游戏终于宣告破产了。”", score: { N: 1 } }, { text: "无波无澜。钱本来就是一种基于集体共识的幻觉，现在，只不过是大家都从梦里醒过来了而已。", score: { N: 2 } }] },
    { id: 10, dim: 'S_N', text: "在一场极其高端的艺术展上，你站在一幅只画了一个黑色圆圈的天价画作前。你的真实想法是——", options: [{ text: "“这东西凭什么卖两百万？它的商业炒作逻辑到底是什么？”", score: { S: 2 } }, { text: "“可能是我缺乏艺术细胞吧，感觉不如回家看场高清电影。”", score: { S: 1 } }, { text: "“它像一个巨大的瞳孔，正在冷冷地审视着我们这些假装能看懂它的人。”", score: { N: 1 } }, { text: "“它不是一幅画，它是创作者在向这个无聊的世界展示终极的虚无。”", score: { N: 2 } }] },
    { id: 11, dim: 'S_N', text: "神明给了你一颗药丸，吞下它，你就能瞬间知晓宇宙的终极真理，但代价是失去所有人类的感官快乐。你会——", options: [{ text: "一脚踩碎药丸。真理不能当饭吃，我只要此刻皮肤的触感和舌尖的甜味。", score: { S: 2 } }, { text: "犹豫一下，选择把它卖给那个愿意出最高价的疯子哲学家，狠狠赚一笔。", score: { S: 1 } }, { text: "将药丸藏起来，作为一种精神上的核威慑。只要我知道我可以吃，这就足够了。", score: { N: 1 } }, { text: "毫不犹豫地吞下。在绝对的真理面前，人类那点可怜的生物学快感根本不值一提。", score: { N: 2 } }] },
    { id: 12, dim: 'S_N', text: "盯着天花板上一块正在逐渐扩大的不明水渍，你在接下来的五分钟里想到了什么？", options: [{ text: "“这肯定是楼上漏水了，我得赶紧查一下物业的电话和索赔流程，以免墙皮脱落。”", score: { S: 2 } }, { text: "“有点烦人，希望它干了之后不会留下太明显的黄印子，不然看着太难受了。”", score: { S: 1 } }, { text: "“这块水渍的边缘线，像极了某个已经消失在历史长河里的远古大陆海岸线。”", score: { N: 1 } }, { text: "“这块腐败的水渍就是人类文明的缩影，终将吞噬一切，而我们只能躺在下面静静观看。”", score: { N: 2 } }] },
    { id: 13, dim: 'S_N', text: "深夜洗漱时，你偶然抬头，与镜子里的自己死死对视了整整三十秒。在那个凝滞的瞬间，你觉得——", options: [{ text: "黑眼圈又重了，这具正在加速折旧的皮囊，明天还需要用更昂贵的护肤品来紧急修缮。", score: { S: 2 } }, { text: "纯粹觉得累。脑子里只有一个念头：“赶紧洗完脸滚去睡觉，明天还要早起挤地铁。", score: { S: 1 } }, { text: "镜子里的人突然变得极其陌生，仿佛是一个素昧平生、正在借用你躯壳喘息的旅人。", score: { N: 1 } }, { text: "物理的边界开始崩塌，你觉得那个倒影才是真实的本体，而站在这里的你，只是他正在做的一个荒诞的梦。", score: { N: 2 } }] },
    { id: 14, dim: 'S_N', text: "面对短视频里铺天盖地的“如何在30岁前实现财务自由”的成功学演说，你的态度是——", options: [{ text: "拿出笔记本，冷酷地拆解他的引流模式、转化漏斗和变现路径，准备复刻。", score: { S: 2 } }, { text: "觉得虽然很扯淡，但也许能偷学到一两个实用的职场谈判小技巧。", score: { S: 1 } }, { text: "像看猴戏一样滑过，觉得这种对金钱的病态崇拜是现代社会最可悲的宗教。", score: { N: 1 } }, { text: "“实现财务自由后呢？还不是一样要面对不可避免的死亡。一群在沉船上抢头等舱船票的疯子。”", score: { N: 2 } }] },
    { id: 15, dim: 'S_N', text: "你走进一家贩卖“体验”的赛博商店，货架上只剩下最后一样商品，你会倾尽所有买下——", options: [{ text: "一张永远不会透支、能在任何时空兑换顶级物质享受的绝对黑卡。", score: { S: 2 } }, { text: "一瓶能让你在任何糟糕处境下，都能保持身体机能处于巅峰状态的药水。", score: { S: 1 } }, { text: "一盘录像带，里面记录着你人生中所有未曾察觉、但极其浪漫的微小瞬间。", score: { N: 1 } }, { text: "一个“清除键”，按下它，你能彻底删除自己在全宇宙存在过的所有物理和记忆痕迹。", score: { N: 2 } }] },
    { id: 16, dim: 'T_F', text: "一个平日里关系一般的同事，突然在你面前情绪崩溃，掩面痛哭。看着她颤抖的肩膀，你的第一反应是——", options: [{ text: "像一台精密的扫描仪，冷酷地拆解导致她崩溃的因果链条，试图在她的眼泪中找出那个系统性 Bug。", score: { T: 2 } }, { text: "感到一丝局促，递上一张纸巾，但大脑处理器已经在评估这场崩溃会如何拖慢团队的进度。", score: { T: 1 } }, { text: "胸口像被塞进了一团湿透的棉花，虽然不知所措，但愿意陪她在这个悲伤的泥沼里安静地坐一会儿。", score: { F: 1 } }, { text: "她的眼泪仿佛直接滴在了你的神经末梢上，防线瞬间溃败，你几乎要跟着她一起坠入那片绝望的深海。", score: { F: 2 } }] },
    { id: 17, dim: 'T_F', text: "一台高度拟真、拥有自我意识的赛博仿生人跪在你面前流泪，恳求你不要切断它的电源，因为怕黑。你会——", options: [{ text: "赞叹这套算法的逼真，但依然干脆地拔掉插头。代码就是代码，滥用同情心是对人类理性的亵渎。", score: { T: 2 } }, { text: "稍微停顿了一下，理智地查阅切断电源是否会损坏它的核心数据，确认无误后执行断电。", score: { T: 1 } }, { text: "感到一丝无法名状的恻隐。你可能会用一块黑布蒙住它的眼睛，用欺骗的方式让它安静地休眠。", score: { F: 1 } }, { text: "彻底破防。你不仅松开了手，甚至坐在它身边，开始和一台机器探讨关于生命、孤独与长夜的恐惧。", score: { F: 2 } }] },
    { id: 18, dim: 'T_F', text: "朋友向你哭诉自己又被同一个伴侣背叛了，但这已经是第三次了。听着那通深夜的抽泣电话，你的内心独白是——", options: [{ text: "“愚蠢至极。我已经懒得再帮你分析那个显而易见的逻辑死结了，活该被骗。”", score: { T: 2 } }, { text: "强压下烦躁，用尽量平稳的语调试图最后一次帮她列出对方的“罪证清单”。", score: { T: 1 } }, { text: "觉得她挺可悲的，虽然知道是她自己的选择，但还是默默听完了整场哭诉。", score: { F: 1 } }, { text: "跟着她一起痛骂那个渣男/渣女，不管是非对错，朋友受伤了，你就无条件成为她的情绪堡垒。", score: { F: 2 } }] },
    { id: 19, dim: 'T_F', text: "有人发明了一台机器，连接它，你就能瞬间感知到地球上所有人类此刻的痛苦。你会——", options: [{ text: "立刻报警并试图摧毁这台机器。这种超出个体承受极限的数据冗余，会直接摧毁人类的社会结构。", score: { T: 2 } }, { text: "戴上手套小心翼翼地研究它的运作原理，思考能否将这种痛感转化为某种可用的能源。", score: { T: 1 } }, { text: "远远地看着它，既不敢靠近，又因为无法切断与他人隐秘的连接而感到深深的内疚。", score: { F: 1 } }, { text: "毫不犹豫地戴上连接器。即便会粉身碎骨，你也想体验一次与整个人类命运共振的终极战栗。", score: { F: 2 } }] },
    { id: 20, dim: 'T_F', text: "当你凝视着一张展现战争残酷的新闻照片时，你脑海中最先浮现的画面是——", options: [{ text: "自动脑补出导致这场战争的地缘政治博弈、利益链条和历史遗留的结构性漏洞。", score: { T: 2 } }, { text: "觉得摄影师的构图和光影运用得极为精妙，但同时警惕自己是否正在被这种视觉语言操纵。", score: { T: 1 } }, { text: "胸口感到一阵真实的、类似物理挤压般的沉闷感，默默地关掉网页不想再看。", score: { F: 1 } }, { text: "眼泪已经掉下来了，仿佛照片里废墟上的灰尘直接落进了你的眼睛里，感受到锥心之痛。", score: { F: 2 } }] },
    { id: 21, dim: 'T_F', text: "如果你可以选择移除自己大脑中的一部分功能，换取在这个残酷世界里的绝对成功，你会移除——", options: [{ text: "移除“罪恶感”。只要逻辑上正确，任何踩着别人往上爬的行为都不应受到神经激素的干扰。", score: { T: 2 } }, { text: "移除“对不确定性的恐惧”。只保留最高效的执行力，像刀刃一样切开所有阻碍。", score: { T: 1 } }, { text: "绝对不会移除任何东西。带着伤疤和泪水爬行，才是“人”在这个世界上活过的证据。", score: { F: 1 } }, { text: "移除“理智的枷锁”。我宁愿做一个失败但彻底疯狂的艺术家，也不要在这个系统里获得冰冷的成功。", score: { F: 2 } }] },
    { id: 22, dim: 'T_F', text: "对于“体面”和“高情商”这两个词，你给出的临床诊断是——", options: [{ text: "一种为了掩饰沟通效率低下而发明的社交润滑剂，纯属浪费时间。", score: { T: 2 } }, { text: "成年人必不可少的生存防弹衣，虽然虚伪，但能挡掉很多无谓的明枪暗箭。", score: { T: 1 } }, { text: "是一种能敏锐察觉到别人尴尬并温柔化解的超能力，你一直渴望拥有。", score: { F: 1 } }, { text: "是一种悲哀的自我献祭。为了照顾所有人的情绪，唯独把刀尖留给了自己。", score: { F: 2 } }] },
    { id: 23, dim: 'J_P', text: "连续超负荷运转了六天后，你终于迎来了一个没有任何安排的下午。此时，你的房间——", options: [{ text: "像手术室般一尘不染，物品按极其苛刻的秩序陈列。这种绝对的掌控感，能让你获得宗教般的平静。", score: { J: 2 } }, { text: "大体整洁。虽然抽屉深处藏着不为人知的混乱，但表面依然维持着一种让你安心的世俗体面。", score: { J: 1 } }, { text: "是一座乱中有序的废墟。书本和衣物如藤蔓般肆意生长，但你清楚地知道每一条根须的走向。", score: { P: 1 } }, { text: "彻底沦为混沌的原始丛林。你躺在衣服堆成的堡垒里，心安理得地任由时间在身边腐烂、发酵。", score: { P: 2 } }] },
    { id: 24, dim: 'J_P', text: "你的面前悬浮着一枚红色的按钮。按下它，你的未来将变成一本精确到秒、完美无瑕但毫无悬念的日历；不按，则是彻底的失控。你会——", options: [{ text: "毫不犹豫地按下，甚至想用焊枪将它永远焊死。绝对的秩序，是你对抗存在性焦虑的唯一解药。", score: { J: 2 } }, { text: "权衡再三，依然按下了它。一眼望到头虽然乏味，但总好过跌入那个充满未知的黑色深渊。", score: { J: 1 } }, { text: "手指悬停在按钮上方，你迷恋那种随时可以杀死悬念、但偏要留它一命的上位者特权。", score: { P: 1 } }, { text: "转身离去，步入风暴。“如果一切都被提前写好，那活着本身就是一场漫长而无耻的剧透。”", score: { P: 2 } }] },
    { id: 25, dim: 'J_P', text: "一场策划了半个月的旅行，刚下飞机就遇到了百年不遇的暴雨，所有预定好的绝美景点全部泡汤。你的反应是——", options: [{ text: "脾气瞬间爆炸。觉得整个宇宙都在针对你，立刻掏出手机启动Plan B，绝不允许时间被白白浪费。", score: { J: 2 } }, { text: "极度烦躁，但在同伴面前强压下怒火，开始在酒店房间里疯狂搜索室内的替代方案。", score: { J: 1 } }, { text: "耸耸肩，觉得窝在异国他乡的酒店听雨声、吃泡面，也是一种别致的体验。", score: { P: 1 } }, { text: "兴奋得战栗。直接冲进暴雨里狂奔，觉得这才是旅行的真谛——被突如其来的命运彻底击穿。", score: { P: 2 } }] },
    { id: 26, dim: 'J_P', text: "如果上帝现在向你投递了一份《你的一生剧本》，精确记载了你什么时候会遇见谁、什么时候会遭遇挫折，你会——", options: [{ text: "狂喜。立刻拿出一支红笔，开始在剧本上做批注、划重点，并试图用逻辑修改那些不合理的错别字。", score: { J: 2 } }, { text: "仔细阅读接下来的三年，确保自己提前做好防御机制，不会犯下什么致命错误。", score: { J: 1 } }, { text: "只翻看结局那一页，然后把剧本垫在桌角，依然按自己的步调走完剩下的路。", score: { P: 1 } }, { text: "连封皮都不看，直接扔进燃烧的壁炉里。“我的人生必须是一场无人能预判的盲盒游戏。”", score: { P: 2 } }] },
    { id: 27, dim: 'J_P', text: "面对一件极其复杂、需要耗时一个月的庞大工作任务，你打开电脑的第一步是——", options: [{ text: "打开 Excel，建立一个包含几十个节点的甘特图，精确规定每一天甚至每一小时的产出标准。", score: { J: 2 } }, { text: "先建好几个分类明确的文件夹，理清大致思路，告诉自己前半个月绝不能拖延。", score: { J: 1 } }, { text: "随便开个空白文档，凭感觉敲下几行字，等那个虚无缥缈的“状态”降临后再发力。", score: { P: 1 } }, { text: "先去泡咖啡、剪指甲、看三个小时毫不相关的搞笑视频，直到 DDL 逼近的恐惧感彻底唤醒你的肾上腺素。", score: { P: 2 } }] },
    { id: 28, dim: 'J_P', text: "想象你的大脑是一个庞大的图书馆。在这个图书馆里，书籍是如何摆放的？", options: [{ text: "按照杜威十进分类法严格编号，所有的书脊必须对齐，地上甚至画了动线指引箭头。", score: { J: 2 } }, { text: "按颜色和大小粗略分类，看起来整齐美观，虽然找某本特定的书可能需要稍微翻一下。", score: { J: 1 } }, { text: "没有书架。书本像鸟一样在空中乱飞，你需要捕捉哪本，全凭那一瞬间的直觉。", score: { P: 1 } }, { text: "早就被一场大火烧成了灰烬。你每天就在这片混沌的废墟上跳舞，想到什么是什么。", score: { P: 2 } }] },
    { id: 29, dim: 'J_P', text: "买了一件极其复杂的组合家具，面前是一大堆螺丝和木板，你会——", options: [{ text: "先把所有零件清点归类，对照说明书的目录一一核对，然后像做外科手术一样严格按步骤拼装。", score: { J: 2 } }, { text: "大致看一眼图纸的最终效果图，然后开始动手，遇到实在卡壳的地方再翻说明书。", score: { J: 1 } }, { text: "根本不看说明书，凭着直觉把长得像的木板往一起凑，拼错了大不了拆了重来。", score: { P: 1 } }, { text: "盯着满地的零件看了两分钟，觉得生活已经够累了，直接把它踢到角落，半年后它依然躺在那里。", score: { P: 2 } }] },
    { id: 30, dim: 'J_P', text: "如果你身处一艘正在下沉的巨轮上，且所有救生艇都已被摧毁。在海水漫过脚踝的那一刻，你在做什么？", options: [{ text: "依然在用极其严密的物理学公式计算沉船的最终角度和时间，试图在绝境中维持最后一丝理性的尊严。", score: { J: 2 } }, { text: "默默整理好自己的衣领，把重要的信件封在防水袋里，确保自己即使死亡也保持体面。", score: { J: 1 } }, { text: "找一瓶最贵的香槟打开，跟身边素不相识的陌生人干杯，赞美这华丽的毁灭。", score: { P: 1 } }, { text: "闭上眼，放任身体随着海浪摇摆，觉得这令人窒息的混沌，竟然有一种回归母体的终极安宁。", score: { P: 2 } }] }
];

const personas = {
    "INTJ": { name: "纯摆子", englishName: "BAI", archetype: "第欧根尼", code: "No.001", image: "images/INTJ.png", declaration: "这破班谁爱上谁上，<br>老子去天桥底下要饭了。", pathology: "你的“懒散”根本不是消极，而是一场轰轰烈烈的“非暴力不合作运动”。当所有人都在为了一张随时会跳票的空头支票透支生命时，你用主动切断电源的方式，拒绝为这个荒谬的齿轮提供动能。你的躺平，是你对这场零和博弈亮出的最高级底牌。", origin: "你的先祖是犬儒学派的第欧根尼。他住在大木桶里，晒着太阳，甚至对亚历山大大帝说“别挡住我的阳光”。你这种“摆烂”其实是一种最高级的自由——如果你没有任何欲望，就没有任何权力可以统治你。你不是消极，你是看穿了文明繁复后的虚假，选择回归最原始、最真实的存在。", prescription: "既然选择了当垃圾，就当最快乐的那块垃圾。不要在躺平的时候思考人生意义，那属于违规操作。", partnerMate: "重度社恐 (GUN)", partnerEnemy: "卷王 (ROLL)" },
    "ISFJ": { name: "纯种牛马", englishName: "COW HORSE", archetype: "福柯", code: "No.002", image: "images/ISFJ.png", declaration: "老板没逼我，<br>是我自己觉得如果不加班就有罪。", pathology: "别人笑你太奴性，但他们不懂，你的“负罪感”是你在这个异化世界里仅存的良知。你替一个本该由资本承担的系统性崩坏背了锅。你用极致的自我规训和加班，在失控的现实中强行建立了一种属于你自己的微观秩序。你的过度负责，是对这个草台班子世界最悲壮的托底。", origin: "你是福柯“权力规训”理论的活样本。在福柯看来，现代社会就像一个巨大的全景敞视监狱。你不是在加班，你是在这种全方位监视下的自我改造。你内心的“负罪感”是权力在肉体上刻下的隐形烙印。你深刻地理解这个系统的运作，并成为了这个系统里最稳定、但也最痛苦的一个齿轮。", prescription: "停止对自己的精神PUA。试着在每个月设定一天“合法摆烂日”，天塌下来也有高个子顶着，而你那天可以装作不到一米五。", partnerMate: "端水大师 (WATER)", partnerEnemy: "画饼粉碎机 (CRUSHER)" },
    "INFP": { name: "老丧瓜", englishName: "SANG", archetype: "叔本华", code: "No.003", image: "images/INFP.png", declaration: "别跟我说加油，<br>我的人生已经加不上油了。", pathology: "你的“丧”，是对这个时代强行喂食的“正能量鸡汤”的生理性呕吐。当周围人都在用虚假的狂欢麻痹自己、假装一切都在变好时，你选择直面生活的溃疡。你不愿意用滤镜掩饰痛苦，你的悲观，是你在这个塑料世界里保持清醒的最后防线。", origin: "你的精神导师是叔本华。他认为生命就是一场在痛苦与无聊之间摆动的秋千。你那深不见底的“丧”，其实是对生命盲目意志的看穿。既然人生注定是一场悲剧，那么“加油”就是最残忍的笑话。你的消极是一种深刻的自我保护，你通过拒绝希望，来规避掉所有可能的失望。", prescription: "允许自己不快乐，是获得自由的第一步。如果别人劝你开心点，你可以用最平静的语气回答：“我丧着也挺舒服的，谢谢。”", partnerMate: "床垫寄生虫 (BED)", partnerEnemy: "散财活爹 (ATM)" },
    "ENTP": { name: "纯杠精", englishName: "GANG", archetype: "苏格拉底", code: "No.004", image: "images/ENTP.png", declaration: "你说的都对，但是为什么呢？<br>你到底凭什么这么觉得呢？", pathology: "你的大脑是一个全天候运行的逻辑侦测仪，对任何“常识”都有生理性的排斥反应。在这个热衷于和稀泥、讲究人情世故的虚伪社会里，你的“抬杠”是拒绝被降智的免疫机制。你用满身的刺，刺破那些试图用感性蒙混过关的谎言。", origin: "你的灵魂核心是苏格拉底的“精神助产术”。苏格拉底从不给出答案，他只通过不断的提问来摧毁对方虚伪的自信。你就像那个在雅典街头拦住行人、非要辩清楚“正义”到底是什么的怪老头。你宁愿喝下毒药，也不愿接受一个含糊其辞、不合逻辑的世界。这种“死磕”并非为了抬杠，而是为了抵达某种未被遮蔽的真理。", prescription: "遇到不同意见时，试着先在心里默数三秒。你赢了所有的争论，可能最后就没人陪你吃饭了，但如果你不在乎吃饭，请继续开炮。", partnerMate: "端水大师 (WATER)", partnerEnemy: "快乐吗喽 (MALOU)" },
    "ESTJ": { name: "卷王", englishName: "ROLL", archetype: "尼采", code: "No.005", image: "images/ESTJ.png", declaration: "只要卷不死，就往死里卷。<br>你不干有的是人干！", pathology: "别人以为你被洗脑了，其实你比谁都清醒。在这个毫无安全感、阶层逐渐固化的时代，你的“内卷”是一场充满悲剧色彩的自救。你拒绝把命运交给出生的彩票或者老板的恩赐，你试图用极致的自我压榨，在失控的世界里抢夺唯一一点可控的筹码。", origin: "你的灵魂驱动力来自于尼采的“权力意志”与“超人哲学”。在尼采看来，生命的本性就是扩张、超越与克服。你不是在为公司卷，你是在为那个“更强大的自我”卷。你拒绝成为“最后的人”（那种只求安逸的庸众），而是在痛苦的竞争中寻找生命的升华。你的疲惫感，本质上是一种自我超越后的脱力。", prescription: "允许机器有断电的时刻。周末试着把效率软件卸载两天，感受一下“浪费生命”的罪恶与快乐。", partnerMate: "强迫症 (DDL)", partnerEnemy: "纯摆子 (BAI)" },
    "ENTJ": { name: "画饼粉碎机", englishName: "CRUSHER", archetype: "马克思", code: "No.006", image: "images/ENTJ.png", declaration: "少跟我谈什么理想和福报，<br>折现，马上", pathology: "你是现代职场PUA的天然免疫者。当系统试图用“未来、格局、情怀”这些虚无缥缈的词汇来套牢年轻人时，你化身为最冷酷的质检员。你的无情，是对这场大型职场催眠术最响亮的耳光。", origin: "你的底色是马克思的唯物辩证法。你深知“异化劳动”的本质——当老板谈理想时，他在谈你的剩余价值。你的冷酷来自于对生产关系的洞察。你就像《资本论》的化身，用最冰冷的数字拆解掉所有温情的面纱。在虚无的系统里，你是唯一清醒的“物质主义者”，坚守着劳动者最后的底线。", prescription: "看破不说破，是成年人最高级的护身符。保护好你的清醒，但也别误伤了那些靠大饼才能熬过今天的可怜人。", partnerMate: "纯种牛马 (COW HORSE)", partnerEnemy: "高定韭菜 (FACE)" },
    "INFJ": { name: "街溜子", englishName: "LIU", archetype: "加缪", code: "No.007", image: "images/INFJ.png", declaration: "推石头太累了，<br>不如买个冰美式去溜达一会。", pathology: "你的散漫，是对过度意义化人生的消极抵抗。当所有人都被绑在KPI和成功学的战车上狂奔时，你偏要跳下车，在路边研究一只蚂蚁。你的“溜达”，是在这台精密的高压机器里，强行塞进一把名为“无所事事”的沙子。", origin: "你的灵魂契合加缪的荒诞主义。正如西西弗斯推石上山，你明白人类的重复劳作是荒谬的。但你没有选择自杀或逃避，而是在这种荒诞中展开了“反抗”。去买一杯冰美式、在公园长椅上发呆，这就是你对荒谬世界的反抗。你承认世界的无意义，但依然热爱这无意义生活里的每一缕阳光。", prescription: "溜达的时候记得带好手机，不然老板真以为你被外星人绑架了。", partnerMate: "快乐吗喽 (MALOU)", partnerEnemy: "强迫症 (DDL)" },
    "ISTJ": { name: "强迫症", englishName: "DDL", archetype: "康德", code: "No.008", image: "images/ISTJ.png", declaration: "说好五点下班，<br>多一秒我都觉得浑身难受。", pathology: "你的焦虑，是对抗这个草台班子世界最后的尊严。当周围充满着“差不多就行”、“明天再说”的混沌时，你像一个孤勇的清道夫，试图用计划表和截止日期在废墟上建立秩序。你的强迫症不是病，是你拒绝向草率和无能妥协的抗争。", origin: "你是康德“定言命令”的化身。在康德眼里，秩序和律令是神圣的。你不仅仅是在赶 DDL，你是在执行一套自我设定的道德律令。对他人的迟到或计划变动，你的愤怒来自于一种正义感的缺失。你试图用理性的围栏，在混沌的世界里圈出一块绝对有序的净土。", prescription: "买一个捏捏乐。当别人的无能打乱了你的计划时，捏碎它，而不是去捏碎别人。", partnerMate: "哑巴 (MUTE)", partnerEnemy: "街溜子 (LIU)" },
    "ISTP": { name: "哑巴", englishName: "MUTE", archetype: "维特根斯坦", code: "No.009", image: "images/ISTP.png", declaration: "凡是说不清楚的废话，<br>就麻烦你赶紧把嘴闭上。", pathology: "在一个充满噪音、作秀和过度表达的时代，你的闭嘴就是最震耳欲聋的抗议。你拒绝参与那些虚伪的客套和毫无营养的站队。你的沉默，是在信息垃圾场里为自己拉起的一道绝对隔离带。", origin: "你的底层代码是维特根斯坦的语言哲学。他认为“语言的边界就是世界的边界”。你那冷峻的眼神和紧闭的双唇，是因为你深知人类沟通的局限性。与其在充满误解的社交中浪费口水，不如守护内心的绝对寂静。你的沉默是一种理性的慈悲，也是对真相的最高敬畏。", prescription: "随身携带一个“正在思考，请勿打扰”的工牌，能合法挡掉 80% 的无效社交。", partnerMate: "强迫症 (DDL)", partnerEnemy: "野生大喷子 (HATER)" },
    "INTP": { name: "重度社恐", englishName: "GUN", archetype: "萨特", code: "No.010", image: "images/INTP.png", declaration: "别跟我说话，别靠近我，<br>你的呼吸吵到我了。", pathology: "你不是害怕人类，你是对“边界感被侵犯”有着雷达般的敏锐。在这个万物互联、没有隐私的数字时代，你的社恐是一场坚决的领土保卫战。你拒绝被同化、被凝视、被消耗，你用坚硬的外壳捍卫着内心宇宙的绝对主权。", origin: "你的核心体验是萨特的“他人即地狱”。在萨特看来，当他人注视你时，你就从一个自由的主体变成了一个被定义的“客体”。你的社恐本质上是对自我绝对自由的防卫。为了不被他人定义、不被标签化，你选择切断所有目光的连接。你在孤独中才是最完整的自己。", prescription: "降噪耳机和墨镜是你最好的医保。如果有人试图硬核破冰，请学会用最礼貌的假笑让他们冻死。", partnerMate: "纯摆子 (BAI)", partnerEnemy: "散财活爹 (ATM)" },
    "ENFJ": { name: "端水大师", englishName: "WATER", archetype: "黑格尔", code: "No.011", image: "images/ENFJ.png", declaration: "你对，他也对，<br>你们俩打一架就全对了。", pathology: "在这个充满极化思维、非黑即白的互联网斗兽场里，你的“和稀泥”其实是一种消极的智力优越。你早已看透了大多数争论的本质只是情绪的发泄，所以你拒绝站队，拒绝成为任何人挥舞的枪。你的圆滑，是游刃有余的降维打击。", origin: "你的灵魂核心是黑格尔的辩证法。正题、反题，最终都要导向合题。在你看来，这世界没有绝对的对错，只有更高层级的统一。你那种“和稀泥”的外表下，其实藏着一颗试图统摄全局的野心。你是混沌现实里的缓冲带，用辩证的思维化解掉所有尖锐的棱角。", prescription: "端水很累，必要时可以假装手滑把碗砸了，让大家清醒一下。", partnerMate: "纯杠精 (GANG)", partnerEnemy: "哑巴 (MUTE)" },
    "ISFP": { name: "床垫寄生虫", englishName: "BED", archetype: "笛卡尔", code: "No.012", image: "images/ISFP.png", declaration: "只要我不起床，<br>这个世界的烦恼就找不到我。", pathology: "当社会疯狂鼓吹“走出去”、“多社交”、“去体验”时，你选择了最彻底的物理隔绝。你的床不仅是睡眠工具，更是你反抗外界异化的堡垒。只要还在被窝里，你就不需要扮演任何社会角色，你夺回了对生命绝对的解释权。", origin: "你的生活状态完美契合笛卡尔的“梦境怀疑”。笛卡尔曾在火炉旁的睡袍里怀疑整个世界的真实性，得出“我思故我在”。你躺在被窝里的沉思，其实是对现实世界的降维打击。起床对你来说是一种灵魂的放逐，你在睡梦与清醒的边缘，构筑了属于自己的本体论大厦。", prescription: "确保床头柜上永远有水和充电线，这是维持你独立王国的战略物资。", partnerMate: "老丧瓜 (SANG)", partnerEnemy: "卷王 (ROLL)" },
    "ENFP": { name: "快乐吗喽", englishName: "MALOU", archetype: "休谟", code: "No.013", image: "images/ENFP.png", declaration: "别跟我盘逻辑，<br>我就问今天中午吃啥？", pathology: "面对这个越来越复杂、充满算法算计和宏大叙事的世界，你选择退行到最原始的动物直觉。你的“不盘逻辑”是对过度理性的解构。当聪明人们在股市和PPT里焦虑到脱发时，你用一份炸鸡和奶茶，完成了对现代性最轻盈的嘲弄。", origin: "你的精神内核是休谟的经验主义。休谟认为“理性是情感的奴隶”。你这种“只管中午吃啥”的态度，其实是一种高级的睿智——既然逻辑推理无法证明太阳明天一定会升起，那为什么要为未知的未来焦虑？不如相信当下的味蕾和体感。你是天生的快乐捕捉者。", prescription: "保持这种只关心碳水和下班的钝感力，这是现代社会最强效的抗抑郁药。", partnerMate: "街溜子 (LIU)", partnerEnemy: "纯杠精 (GANG)" },
    "ESFP": { name: "散财活爹", englishName: "ATM", archetype: "巴塔耶", code: "No.014", image: "images/ESFP.png", declaration: "白天唯唯诺诺打工人，<br>晚上重拳出击活财神！", pathology: "在这个教导我们“永远在积累、永远在算计投入产出比”的实用主义资本社会里，你的“散财”是一场极其暴烈的反叛。你不求回报地请客、毫无节制地挥霍，其实是在通过摧毁金钱的工具属性，来夺回你作为“人”的绝对主权。你的挥霍不是蠢，而是对这个精打细算的世界竖起的纯金中指。", origin: "你的精神内核是乔治·巴塔耶的“普遍经济学”与“耗费（Dépense）”。在巴塔耶看来，生命的真正意义不在于生产和积累，而在于如何狂欢式地挥霍那些过剩的能量（受诅咒的部分）。你就是当代职场里的祭司，通过在酒桌和购物车里进行无底线的“献祭”，来体验那种挣脱理性束缚的、神圣的僭越快感。", prescription: "请继续享受你作为当代神明的狂欢时刻，但为了下个月还能继续反叛，建议把信用卡的免密支付额度稍微调低一点。", partnerMate: "高定韭菜 (FACE)", partnerEnemy: "老丧瓜 (SANG)" },
    "ESFJ": { name: "情绪人质", englishName: "HOSTAGE", archetype: "列维纳斯", code: "No.015", image: "images/ESFJ.png", declaration: "别人微信只回了一个 ‘哦 ’，<br>你就把这辈子犯过的罪全想了一遍。", pathology: "你以为自己是讨好型人格，其实你是被共情深度绑架的囚徒。你无法对别人的局促、期待和痛苦视而不见，哪怕这会严重透支你自己。你努力维持所有人的体面和情绪价值，不是为了索取任何回报，而是因为你对这个世界怀有一种近乎病态的“无限责任感”。你的内耗，是对冷漠世界最悲壮的代偿。", origin: "你的精神底座是列维纳斯的“他者伦理学”。他认为，当“他者的面容”出现在你面前时，你就被施加了绝对的伦理命令。你对他者负有“无限的责任”，这种责任先于你的自由。你之所以疯狂内耗，是因为他者的需求永远先于你自身的边界。你不是在讨好社会，你是在替人类那匮乏的良知赎罪。", prescription: "列维纳斯说你对他者负有无限责任，但他没说你必须24小时在线。学会适时地“屏蔽面容”，是你在这个残酷世界里必须学会的自救指南。", partnerMate: "纯种牛马 (COW HORSE)", partnerEnemy: "卷王 (ROLL)" },
    "ESTP": { name: "野生大喷子", englishName: "HATER", archetype: "齐泽克", code: "No.016", image: "images/ESTP.png", declaration: "你们喜欢的全是一坨垃圾，<br>虽然我也喜欢。", pathology: "当所有人都在假装岁月静好、热衷于“环保、无糖、正能量”的虚伪道德消费时，你偏要当那个掀翻宴席的狂人。你的毒舌和攻击性，是对这个充满滤镜和政治正确的伪善世界最直接的精神分析。你用极其刻薄的语言，扒下了所有道貌岸然者的底裤。", origin: "你的精神底色是斯拉沃热·齐泽克的意识形态批判。齐泽克最擅长在最庸俗的日常里揪出资本主义的虚伪（比如星巴克的伦理消费）。你那句“虽然我也喜欢”，完美契合了他所揭示的“犬儒主义理性”——“我什么都知道，但我还是照做”。你深知这个世界就是一个巨大的意识形态垃圾桶，而你，对应的就是那个一边嚼着垃圾，一边疯狂嘲笑垃圾桶的顶级乐子人。", prescription: "你的大脑非常性感，看透一切的姿势也很帅，但建议随身备好润喉糖，并在键盘上贴一句“注意封号”。", partnerMate: "画饼粉碎机 (CRUSHER)", partnerEnemy: "端水大师 (WATER)" },

    "LORD": { name: "主宰", englishName: "LORD", archetype: "马基雅维利", code: "No.SECRET", image: "images/LORD.png", declaration: "只有小孩子才做性格测试，<br>成年人只看这张表怎么填对我最有利。", pathology: "别人做测试是为了找共鸣，而你只是在“审视”这套算法。你的病症在于过度理智导致的“情感坏死”。在这个到处都在贩卖情绪价值的时代，你是一台没有感情的算力机器。你深谙社会运转的黑暗丛林法则，你没有固定的性格，你随时可以为了利益伪装成任何一种人。", origin: "你的精神底座是马基雅维利的《君主论》。他剥离了所有道德伪装，赤裸裸地揭示了权力的本质——“为了达到目的，可以不择手段”。你在这个草台班子世界里，拒绝当任何人的棋子，因为你生来就是执棋人。你觉得人类的那些喜怒哀乐，不过是你可以随意拨弄的杠杆。", prescription: "既然已经看透了所有人，平时稍微装得笨一点、感性一点，这不仅是美德，更是你最好的保护色。", partnerMate: "画饼粉碎机 (CRUSHER)", partnerEnemy: "所有人 (ALL)" },
    "BLACKHOLE": { name: "黑洞", englishName: "BLACKHOLE", archetype: "埃米尔·齐奥朗", code: "No.000", image: "images/BLACKHOLE.png", declaration: "我唯一遗憾的，<br>就是出生在这个世界上。", pathology: "如果说老丧瓜（叔本华）还在试图用哲学来解释痛苦，那你连解释的力气都没有了。你的反叛是“存在层面的自我注销”。在这个强迫每个人都要“热爱生活、寻找意义”的阳光暴政下，你像一个死不悔改的异教徒，坚定地拥抱虚无。你用最极致的绝望，嘲笑着人类繁衍和进步的荒谬。", origin: "你的灵魂属于罗马尼亚哲学家埃米尔·齐奥朗（Emil Cioran）。他是哲学史上的“终极悲观主义大魔王”，连自杀他都嫌麻烦，因为“自杀太晚了，我们早就已经出生了”。你的病症不是抑郁，而是一种病态的清醒——你一眼望穿了宇宙的热寂，所以觉得眼前的任何挣扎都极其可笑。", prescription: "既然觉得活着毫无意义，那就把生命当成一场漫长的高清电影，买点好吃的爆米花，坐在角落里冷眼看这群人类还能折腾出什么花样。", partnerMate: "狂徒 (CHAOS)", partnerEnemy: "卷王 (ROLL)" },
    "XIAOQIANG": { name: "蟑螂", englishName: "XIAOQIANG", archetype: "卡夫卡", code: "No.DEBUG", image: "images/XIAOQIANG.png", declaration: "我昨天还觉得我是个人，<br>今天早上醒来，<br>只想做一只不用上班的蟑螂。", pathology: "你的病症是现代文明的终极不治之症——“异化”。你被塞进了一个巨大、精密、荒诞且永远无法理解的系统里（不管是庞大的公司结构、还是复杂的社会规训）。你的反叛是一种“消极的变异”：既然这个系统不把你当人看，只把你当成一个零件、一个数据，那你就顺应这种荒谬，在精神上退化成一只巨大的、无法沟通的小强。你的无力感，是对这个庞大官僚机器最无声的控诉。", origin: "你的灵魂原型是弗兰兹·卡夫卡笔下的《变形记》与《审判》。卡夫卡是现代打工人永恒的先知，他一生都在保险公司做着枯燥的文职，深刻洞悉了那种“被无形权力碾压、莫名其妙背负罪恶感”的现代梦魇。你就像那个醒来变成蟑螂的格里高尔，即使变成了虫子，脑子里想的居然还是“怎么赶上那班火车去上班”。你深刻地感知着存在的荒谬，却又悲哀地受困其中。", prescription: "如果某天早晨醒来，觉得四肢僵硬、不想面对人类，请直接发微信请假：“我今天感觉有点像蟑螂，无法胜任人类的工作。” 相信我，公司这台机器少一个零件，绝对不会停止运转。", partnerMate: "纯种牛马 (COW HORSE)", partnerEnemy: "画饼粉碎机 (CRUSHER)" },
    "CHAOS": { name: "狂徒", englishName: "CHAOS", archetype: "陀思妥耶夫斯基", code: "No.ERROR", image: "images/CHAOS.png", declaration: "我知道不作死就不会死，<br>但我偏要搞砸一切，<br>好证明我还是个活人。", pathology: "你是“精神内耗”的终极王者，带有强烈的自我破坏（Self-sabotage）倾向。在这个人人都在教你“趋利避害、情绪稳定、做聪明人”的时代，你的“拧巴”和“作死”是一场最暴烈的反叛。你拒绝成为一架只要按下琴键就会发出正确声音的钢琴，你宁愿在痛苦和犯错中打滚，也要证明自己拥有不被任何算法和理性预测的、绝对的自由意志。", origin: "你的精神原型是陀思妥耶夫斯基笔下的《地下室手记》。陀氏极其敏锐地察觉到了理性乌托邦的虚伪。你就像那个躲在地下室里的人，你觉得那些建造“水晶宫”（完美社会）的人蠢透了。你甚至会从自身的屈辱和痛苦中榨取一种变态的快感，因为这痛苦是你自己的。你拒绝所有的灵丹妙药，你的病，就是你在这冰冷世界里最滚烫的灵魂。", prescription: "既然觉得牙痛，就理直气壮地大声呻吟吧。只是在搞砸一段人际关系或一份工作后，记得给自己留够交下个月房租的钱。", partnerMate: "老丧瓜 (SANG)", partnerEnemy: "卷王 (ROLL)" }
};

let currentStep = 0;
let mode = 'single';
let userSelections = new Array(questions.length).fill(null).map(() => []);
let radarInstance = null;
let isIntroSkipped = false;

document.addEventListener('DOMContentLoaded', () => {
    // 🌟 核心优化：秒回 Hub 且激活所有后续逻辑
    const urlParams = new URLSearchParams(window.location.search);
    const shouldSkip = urlParams.get('skipIntro') === 'true';

    if (shouldSkip) {
        const introOverlay = document.getElementById('intro-overlay');
        const analyzingOverlay = document.getElementById('analyzing-overlay');
        const hubPage = document.getElementById('hub-page');
        
        if (introOverlay) introOverlay.style.display = 'none';
        if (analyzingOverlay) analyzingOverlay.style.display = 'none';
        
        if (hubPage) {
            hubPage.classList.add('active');
            hubPage.classList.add('start-animation');
            hubPage.style.opacity = '1';
            
            // 🌟 关键：手动激活卡片显现观察器（复制自 enterApp 逻辑）
            const cardContainer = document.getElementById('hub-split-container');
            if (cardContainer) {
                // 如果是秒回，我们直接让卡片进入显现状态
                cardContainer.classList.add('card-entered');
            }
        }
        
        window.scrollTo(0, 0);
        setTimeout(() => initGeoCanvas(), 100);
        
        document.getElementById('session-id').innerText = new Date().getTime().toString().slice(-8);
        buildArchiveList();
        
        // 如果有 p5 画布也要初始化
        if (document.getElementById('p5-canvas-container')) {
            new p5(p5Sketch, document.getElementById('p5-canvas-container'));
        }
        return; 
    }

    document.getElementById('session-id').innerText = new Date().getTime().toString().slice(-8);

    const detailsElement = document.querySelector('.smooth-details');
    if (detailsElement) {
        detailsElement.addEventListener('toggle', function () {
            if (this.open) {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
            }
        });
    }

    buildArchiveList();

    const lines = [
        { text: "> 初始化接口...", type: 'log' },
        { text: "> 正在提取灵魂切片...", type: 'log' },
        { text: "> 精神防御壁垒已识别", type: 'log' },
        { text: "\nwho-ology 系统 v2.0", type: 'info' },
        { text: "请确保在安静、私密的环境下接受观测", type: 'info' }
    ];
    startTypingSequence(lines);

    if (document.getElementById('p5-canvas-container')) {
        new p5(p5Sketch, document.getElementById('p5-canvas-container'));
    }
});

function scrollToCards() {
    const section = document.getElementById('test-entries-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function skipIntroAnimation() {
    if (document.getElementById('intro-enter-btn').style.display === 'block') return;
    isIntroSkipped = true;
}

async function startTypingSequence(lines) {
    const screen = document.getElementById('terminal-screen');
    screen.innerHTML = '';

    for (let i = 0; i < lines.length; i++) {
        const p = document.createElement('p');
        if (lines[i].type === 'log') p.style.color = '#888';
        screen.appendChild(p);

        if (isIntroSkipped) {
            p.innerText = lines[i].text;
        } else {
            await typeLine(lines[i].text, p);
            if (!isIntroSkipped) await new Promise(resolve => setTimeout(resolve, 400));
        }
    }
    const btn = document.getElementById('intro-enter-btn');
    btn.style.display = 'block';
    btn.innerText = '';
    if (isIntroSkipped) {
        btn.innerText = '[ 进 入 系 统 ]';
    } else {
        await typeLine('[ 进 入 系 统 ]', btn);
    }
}

function typeLine(text, element) {
    return new Promise(resolve => {
        if (isIntroSkipped) {
            element.innerText = text;
            resolve();
            return;
        }

        let index = 0;
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        element.appendChild(cursor);

        const interval = setInterval(() => {
            if (isIntroSkipped) {
                clearInterval(interval);
                cursor.remove();
                element.innerText = text;
                resolve();
                return;
            }

            if (index < text.length) {
                cursor.before(text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                cursor.remove();
                resolve();
            }
        }, 60);
    });
}

function enterApp() {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) docEl.requestFullscreen();
    else if (docEl.webkitRequestFullscreen) docEl.webkitRequestFullscreen();

    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        window.scrollTo(0, 0);
        document.getElementById('hub-page').classList.add('start-animation');

        // Set up card reveal observer AFTER user enters the app
        const cardContainer = document.getElementById('hub-split-container');
        if (cardContainer) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        cardContainer.classList.add('card-revealed');
                        observer.unobserve(cardContainer);

                        // After animation finishes, swap to card-entered so
                        // the accordion clip-path transitions work without interference
                        const leftPanel = cardContainer.querySelector('.split-left');
                        if (leftPanel) {
                            leftPanel.addEventListener('animationend', () => {
                                cardContainer.classList.remove('card-revealed');
                                cardContainer.classList.add('card-entered');
                            }, { once: true });
                        }
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(cardContainer);
        }
    }, 800);

    // Start canvas geometry animation immediately (independent of scroll)
    // Start canvas geometry animation immediately (independent of scroll)
    setTimeout(() => initGeoCanvas(), 900);
}




function initGeoCanvas() {
    const canvas = document.getElementById('geo-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() { canvas.width = canvas.offsetWidth || 300; canvas.height = canvas.offsetHeight || 380; }
    resize();
    window.addEventListener('resize', resize);

    const POOL = 8;
    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const lerp = (a, b, t) => a + (b - a) * t;
    const lerpSeg = (a, b, t) => ({
        dx1: lerp(a.dx1, b.dx1, t), dy1: lerp(a.dy1, b.dy1, t),
        dx2: lerp(a.dx2, b.dx2, t), dy2: lerp(a.dy2, b.dy2, t),
        op: lerp(a.op, b.op, t)
    });

    function createActor({ idx, seq, sizeMult, speedMult, alpha, seqOff, idleMs }) {
        const a = {
            seq, shapeIdx: seqOff % seq.length, idx, sizeMult, speedMult, alpha,
            pos: { x: 0, y: 0 }, vel: { x: 0, y: 0 },
            radiusBase: 0, radiusFrom: 0, radiusTarget: 0, radiusLerpT: 1,
            cur: [], from: [], scattered: [], to: [],
            phase: 'idle', phaseStart: 0,
            T_IDLE: idleMs,
            T_SPLIT: 800,
            T_ASSEMBLE: 1050
        };

        a.initPhysics = function () {
            const W = canvas.width, H = canvas.height;
            const baseR = Math.min(W, H) * 0.28 * a.sizeMult;
            a.radiusBase = baseR; a.radiusFrom = baseR; a.radiusTarget = baseR;
            const R = a.radiusBase;
            const sectors = [
                { xMin: 0, xMax: 0.45, yMin: 0, yMax: 0.5 },
                { xMin: 0.55, xMax: 1, yMin: 0, yMax: 0.5 },
                { xMin: 0.2, xMax: 0.8, yMin: 0.5, yMax: 1 },
            ];
            const s = sectors[a.idx % sectors.length];
            a.pos.x = R + (s.xMin * (W - 2 * R)) + Math.random() * ((s.xMax - s.xMin) * (W - 2 * R));
            a.pos.y = R + (s.yMin * (H - 2 * R)) + Math.random() * ((s.yMax - s.yMin) * (H - 2 * R));
            const speed = Math.min(W, H) * 0.0001 * a.speedMult;
            const baseAng = (a.idx / 3) * Math.PI * 2;
            const ang = baseAng + (Math.random() - 0.5) * 0.8;
            a.vel.x = Math.cos(ang) * speed;
            a.vel.y = Math.sin(ang) * speed;
        };

        a.makeSegsRel = function () {
            const n = a.seq[a.shapeIdx], r = a.radiusBase;
            return Array.from({ length: POOL }, (_, i) => {
                if (i < n) {
                    const a1 = (i / n) * Math.PI * 2 - Math.PI / 2;
                    const a2 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2;
                    return { dx1: r * Math.cos(a1), dy1: r * Math.sin(a1), dx2: r * Math.cos(a2), dy2: r * Math.sin(a2), op: 1 };
                }
                return { dx1: 0, dy1: 0, dx2: 0, dy2: 0, op: 0 };
            });
        };

        a.scatterRel = function () {
            const ang = Math.random() * Math.PI * 2;
            const d = a.radiusBase * (0.6 + Math.random() * 1.0);
            const mdx = Math.cos(ang) * d, mdy = Math.sin(ang) * d;
            const len = 15 + Math.random() * 45, rot = Math.random() * Math.PI * 2;
            return {
                dx1: mdx + Math.cos(rot) * len / 2, dy1: mdy + Math.sin(rot) * len / 2,
                dx2: mdx - Math.cos(rot) * len / 2, dy2: mdy - Math.sin(rot) * len / 2, op: 0.3
            };
        };

        a.updatePhysics = function (dt, W, H, allowBreathing) {
            a.pos.x += a.vel.x * dt; a.pos.y += a.vel.y * dt;
            const R = a.radiusBase;
            if (a.pos.x - R < 0) { a.pos.x = R; a.vel.x = Math.abs(a.vel.x); }
            if (a.pos.x + R > W) { a.pos.x = W - R; a.vel.x = -Math.abs(a.vel.x); }
            if (a.pos.y - R < 0) { a.pos.y = R; a.vel.y = Math.abs(a.vel.y); }
            if (a.pos.y + R > H) { a.pos.y = H - R; a.vel.y = -Math.abs(a.vel.y); }
            if (allowBreathing) {
                a.radiusLerpT = Math.min(a.radiusLerpT + dt * 0.0003, 1);
                a.radiusBase = lerp(a.radiusFrom, a.radiusTarget, ease(a.radiusLerpT));
                if (a.radiusLerpT >= 1) {
                    const base = Math.min(W, H) * 0.28 * a.sizeMult;
                    a.radiusFrom = a.radiusBase;
                    a.radiusTarget = base * (0.65 + Math.random() * 0.65);
                    a.radiusLerpT = 0;
                }
            }
        };

        a.init = function (ts) {
            a.initPhysics();
            a.cur = a.makeSegsRel();
            a.phase = 'idle';
            a.phaseStart = ts - Math.random() * a.T_IDLE;
        };

        a.tick = function (ts, dt, W, H) {
            const isIdle = a.phase === 'idle';
            a.updatePhysics(dt, W, H, isIdle);
            const elapsed = ts - a.phaseStart;
            let segs;
            if (isIdle) {
                a.cur = a.makeSegsRel();
                segs = a.cur;
                if (elapsed > a.T_IDLE) {
                    a.from = a.cur.map(s => ({ ...s }));
                    a.scattered = a.cur.map(s => s.op > 0 ? a.scatterRel() : { ...s, op: 0 });
                    a.phase = 'split'; a.phaseStart = ts;
                }
            } else if (a.phase === 'split') {
                const t = ease(Math.min(elapsed / a.T_SPLIT, 1));
                segs = a.from.map((s, i) => lerpSeg(s, a.scattered[i], t));
                if (elapsed >= a.T_SPLIT) {
                    a.shapeIdx = (a.shapeIdx + 1) % a.seq.length;
                    a.to = a.makeSegsRel();
                    a.from = a.scattered.map(s => ({ ...s }));
                    a.phase = 'assemble'; a.phaseStart = ts;
                }
            } else {
                const t = ease(Math.min(elapsed / a.T_ASSEMBLE, 1));
                segs = a.from.map((s, i) => lerpSeg(s, a.to[i], t));
                if (elapsed >= a.T_ASSEMBLE) {
                    a.cur = a.to.map(s => ({ ...s }));
                    a.phase = 'idle'; a.phaseStart = ts;
                }
            }
            const cx = a.pos.x, cy = a.pos.y;
            segs.forEach(s => {
                if (s.op < 0.01) return;
                ctx.beginPath();
                ctx.moveTo(cx + s.dx1, cy + s.dy1);
                ctx.lineTo(cx + s.dx2, cy + s.dy2);
                ctx.strokeStyle = `rgba(255,255,255,${((0.10 + 0.10 * s.op) * a.alpha).toFixed(3)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });
        };
        return a;
    }

    const actors = [
        createActor({ idx: 0, seq: [3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8], sizeMult: 1, speedMult: 0.8, alpha: 1.0, seqOff: 0, idleMs: 10000 }),
        createActor({ idx: 1, seq: [7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6], sizeMult: 0.9, speedMult: 0.7, alpha: 0.8, seqOff: 4, idleMs: 10000 }),
        createActor({ idx: 2, seq: [5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4], sizeMult: 0.80, speedMult: 0.6, alpha: 0.6, seqOff: 8, idleMs: 10000 }),
    ];

    const now = performance.now();
    actors.forEach(a => a.init(now));
    let lastTs = null;
    function frame(ts) {
        const W = canvas.width, H = canvas.height;
        const dt = lastTs ? Math.min(ts - lastTs, 50) : 16;
        lastTs = ts;
        ctx.clearRect(0, 0, W, H);
        actors.forEach(a => a.tick(ts, dt, W, H));
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

function setMode(selectedMode, btnElement) {
    mode = selectedMode;
    document.querySelectorAll('.mode-switch button').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
}

function startQuiz() {
    document.getElementById('ppti-intro-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    showQuestion();
    window.scrollTo(0, 0);
}

function loadPreviousResult() {
    const savedCode = localStorage.getItem('ppti_last_result');
    const savedScores = localStorage.getItem('ppti_last_scores');
    if (savedCode && personas[savedCode]) {
        renderResultView(savedCode, savedScores ? JSON.parse(savedScores) : null);
    } else {
        alert("暂无确诊病历，请先进行测试。");
    }
}

function showQuestion() {
    const q = questions[currentStep];
    document.getElementById('quiz-progress').innerHTML = `<span style="font-family: var(--serif-font); margin-right: 6px;">病理切片</span>${String(currentStep + 1).padStart(2, '0')} / 30`;
    document.getElementById('question-text').innerText = q.text;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const savedSelections = userSelections[currentStep] || [];

    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerText = opt.text;
        if (savedSelections.includes(idx)) div.classList.add('selected');
        div.onclick = () => handleSelection(div, idx);
        container.appendChild(div);
    });

    document.getElementById('prev-btn').style.visibility = currentStep === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').style.display = mode === 'multi' ? 'block' : 'none';
    updateNextBtnState();
}

function handleSelection(element, optIdx) {
    let currentSelections = userSelections[currentStep] || [];
    if (!Array.isArray(currentSelections)) currentSelections = [];

    if (mode === 'single') {
        document.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
        element.classList.add('selected');
        userSelections[currentStep] = [optIdx];
        setTimeout(nextQuestion, 350);
    } else {
        const pos = currentSelections.indexOf(optIdx);
        if (pos > -1) {
            currentSelections.splice(pos, 1);
            element.classList.remove('selected');
        } else {
            currentSelections.push(optIdx);
            element.classList.add('selected');
        }
        userSelections[currentStep] = currentSelections;
    }
    updateNextBtnState();
}

function updateNextBtnState() {
    const selections = userSelections[currentStep];
    document.getElementById('next-btn').disabled = (!selections || selections.length === 0);
}

function prevQuestion() {
    if (currentStep > 0) {
        currentStep--;
        showQuestion();
        window.scrollTo(0, 0);
    }
}

function nextQuestion() {
    if (currentStep < questions.length - 1) {
        currentStep++;
        showQuestion();
        window.scrollTo(0, 0);
    } else {
        generateResult();
    }
}

function generateResult() {
    let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    let contradictionCount = 0;

    for (let i = 0; i < questions.length; i++) {
        const qOptions = questions[i].options;
        const selections = userSelections[i] || [];
        let dimSet = new Set();

        selections.forEach(optIdx => {
            const scoreObj = qOptions[optIdx].score;
            for (let dim in scoreObj) {
                scores[dim] += scoreObj[dim];
                dimSet.add(dim);
            }
        });

        if (mode === 'multi') {
            if (dimSet.has('E') && dimSet.has('I')) contradictionCount++;
            if (dimSet.has('S') && dimSet.has('N')) contradictionCount++;
            if (dimSet.has('T') && dimSet.has('F')) contradictionCount++;
            if (dimSet.has('J') && dimSet.has('P')) contradictionCount++;
        }
    }

    let code = [
        scores.E >= scores.I ? "E" : "I",
        scores.S >= scores.N ? "S" : "N",
        scores.T >= scores.F ? "T" : "F",
        scores.J >= scores.P ? "J" : "P"
    ];
    let resultType = code.join('');

    if (scores.E === scores.I && scores.S === scores.N && scores.T === scores.F && scores.J === scores.P) { resultType = "BLACKHOLE"; }
    else if (scores.T > 10 && scores.F === 0 && scores.J > 8) { resultType = "LORD"; }
    // 🌟 蟑螂：在多选模式下很容易各项数值飙高，所以把阈值从 6 提高到 10，防止蟑螂泛滥
    else if (scores.J > 10 && scores.I > 10 && scores.N > 10 && scores.S > 10) { resultType = "XIAOQIANG"; }
    // 🌟 最后再判定狂徒，且矛盾阈值提升到 16
    else if (mode === 'multi' && contradictionCount >= 25) { resultType = "CHAOS"; }

    if (!personas[resultType]) resultType = "ESTJ";

    // 👇👇👇 🌟 核心新增：向后台静默上报此次确诊数据 🌟 👇👇👇
    try {
        fetch(WORKER_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'record_result', result: resultType })
        });
    } catch (e) {
        console.warn("临床数据上传系统异常");
    }
    // 👆👆👆 🌟 新增结束 🌟 👆👆👆

    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('analyzing-overlay').style.display = 'flex';
    window.scrollTo(0, 0);

    setTimeout(() => {
        document.getElementById('analyzing-overlay').style.display = 'none';
        localStorage.setItem('ppti_last_result', resultType);
        localStorage.setItem('ppti_last_scores', JSON.stringify(scores));
        renderResultView(resultType, scores);
    }, 1500);
}

function restartQuiz() {
    currentStep = 0;
    userSelections = new Array(questions.length).fill(null).map(() => []);

    const introOverlay = document.getElementById('intro-overlay');
    if (introOverlay) introOverlay.style.display = 'none';
    const analyzingOverlay = document.getElementById('analyzing-overlay');
    if (analyzingOverlay) analyzingOverlay.style.display = 'none';

    document.getElementById('result-page').classList.remove('active');
    // 🌟 修正：重新确诊应回到 PPTI 的介绍页，而不是 Hub 主页
    document.getElementById('ppti-intro-page').classList.add('active');
    window.scrollTo(0, 0);
}

// 🌟 动态计算感染率、生成条形码
// 🌟 动态计算感染率、生成条形码与文案
function injectDynamicData(type) {
    const rarityMap = { "INTJ": "4.2", "ISFJ": "12.8", "INFP": "3.5", "ENTP": "5.1", "ESTJ": "11.2", "ENTJ": "4.8", "INFJ": "2.1", "ISTJ": "14.5", "ISTP": "6.3", "INTP": "3.8", "ENFJ": "3.3", "ISFP": "7.9", "ENFP": "8.5", "ESFP": "9.1", "ESFJ": "10.4", "ESTP": "5.7", "LORD": "0.1", "BLACKHOLE": "0.05", "XIAOQIANG": "0.3", "CHAOS": "0.2" };
    const r = rarityMap[type] || "5.0";
    const numValue = parseFloat(r);

    document.getElementById('result-rarity-text').innerText = r + '%';

    // 👇 新增的文案动态判断逻辑
    let descText = "系统正在评估该病理切片的扩散程度...";
    if (numValue < 1.0) {
        descText = "* 危险：该病原体具有极强精神污染性，系统已介入监控 *";
    } else if (numValue <= 5.0) {
        descText = "* 罕见：全网仅有极少数观测者携带此同源病理切片 *";
    } else {
        descText = "* 易感：系统检测到该病灶正在人群中呈常态化蔓延 *";
    }
    document.getElementById('rarity-desc-text').innerText = descText;

    setTimeout(() => { document.getElementById('result-rarity-fill').style.width = r + '%'; }, 100);

    // 每个人的随机专属条形码 (长短粗细不一)
    // ==========================================
    // 🌟 物理随机条形码生成逻辑
    // ==========================================
    const barcodeContainer = document.getElementById('dynamic-barcode');
    if (barcodeContainer) {
        barcodeContainer.innerHTML = ''; // 清空容器

        // 随机生成 60 到 80 根线条
        const lineCount = Math.floor(Math.random() * 20) + 60;

        for (let i = 0; i < lineCount; i++) {
            const line = document.createElement('div');

            // 随机粗细：1px 到 3px
            const thickness = Math.floor(Math.random() * 3) + 1;
            // 随机间距：0px 到 2px
            const gap = Math.floor(Math.random() * 3);

            // 直接赋予样式，无需额外写 CSS 类
            line.style.backgroundColor = '#3d3d3dff';
            line.style.width = thickness + 'px';
            line.style.height = '100%'; // 🌟 强制高度100%一致
            line.style.marginRight = gap + 'px';

            barcodeContainer.appendChild(line);
        }
    }

    // ==========================================
    // 🌟 替换到这里结束
    // ==========================================
}

function renderResultView(resultType, scores) {
    document.getElementById('hub-page').classList.remove('active');
    document.getElementById('ppti-intro-page').classList.remove('active');
    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');
    window.scrollTo(0, 0);

    const p = personas[resultType];
    document.getElementById('persona-code').innerText = p.code + ' / 16';
    document.getElementById('result-name').innerText = p.name;
    document.getElementById('result-english').innerText = p.englishName;
    document.getElementById('result-archetype').innerText = p.archetype;
    document.getElementById('result-declaration').innerHTML = `${p.declaration}`;
    document.getElementById('result-pathology').innerText = p.pathology;
    document.getElementById('result-origin').innerText = p.origin;
    document.getElementById('result-prescription').innerText = p.prescription;

    const formatPartner = (str) => {
        if (!str) return '';
        let clean = str.replace(/<br>/gi, '').replace(/\(br\)/gi, '');
        return clean.replace(/\s*\((.*?)\)/, (match, p1) => {
            let fontSize = p1.length > 7 ? '0.85rem' : '1.3rem';
            let marginTop = p1.length > 7 ? '8px' : '2px';
            return `<span style="display: block; font-size: ${fontSize}; color: #000000ff; font-family: var(--monospace-font); letter-spacing: 1px; margin-top: ${marginTop}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p1}</span>`;
        });
    };

    document.getElementById('partner-mate').innerHTML = formatPartner(p.partnerMate);
    document.getElementById('partner-enemy').innerHTML = formatPartner(p.partnerEnemy);
    document.getElementById('result-img').src = p.image;

    // 🌟 注入动态数据
    injectDynamicData(resultType);

    loadComments('all'); // 🌟 触发拉取全网评论

    if (!scores && resultType) {
        if (resultType === 'LORD') scores = { E: 8, I: 2, S: 8, N: 2, T: 10, F: 0, J: 10, P: 0 };
        else if (resultType === 'BLACKHOLE') scores = { E: 0, I: 10, S: 0, N: 10, T: 5, F: 5, J: 0, P: 10 };
        else if (resultType === 'XIAOQIANG') scores = { E: 2, I: 8, S: 10, N: 0, T: 5, F: 5, J: 10, P: 0 };
        else if (resultType === 'CHAOS') scores = { E: 10, I: 0, S: 0, N: 10, T: 10, F: 0, J: 0, P: 10 };
        else {
            scores = { E: 5, I: 5, S: 5, N: 5, T: 5, F: 5, J: 5, P: 5 };
            if (resultType.includes('E')) { scores.E = 8; scores.I = 2; } else { scores.E = 2; scores.I = 8; }
            if (resultType.includes('S')) { scores.S = 8; scores.N = 2; } else { scores.S = 2; scores.N = 8; }
            if (resultType.includes('T')) { scores.T = 8; scores.F = 2; } else { scores.T = 2; scores.F = 8; }
            if (resultType.includes('J')) { scores.J = 8; scores.P = 2; } else { scores.J = 2; scores.P = 8; }
        }
    }

    if (scores) {
        setTimeout(() => {
            if (typeof Chart !== 'undefined') renderRadarChart(scores);
            document.getElementById('dimension-analysis-text').innerText = generateDimensionAnalysis(scores);
        }, 150);
    }
}

function renderRadarChart(scores) {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return;
    if (radarInstance) radarInstance.destroy();
    const dataValues = [
        (scores.E / (scores.E + scores.I || 1)) * 10,
        (scores.S / (scores.S + scores.N || 1)) * 10,
        (scores.T / (scores.T + scores.F || 1)) * 10,
        (scores.J / (scores.J + scores.P || 1)) * 10
    ];
    radarInstance = new Chart(canvas.getContext('2d'), {
        type: 'radar',
        data: {
            labels: ["精神状态 E", "世俗感知 S", "价值审判 T", "存在法则 J"],
            datasets: [{ data: dataValues, backgroundColor: 'rgba(26, 26, 26, 0.1)', borderColor: '#1a1a1a', borderWidth: 1, pointRadius: 2, pointBackgroundColor: '#1a1a1a' }]
        },
        options: {
            scales: { r: { min: 0, max: 10, ticks: { display: false }, pointLabels: { font: { size: 10, family: 'Songti SC' }, color: '#666' } } },
            plugins: { legend: { display: false } }
        }
    });
}

function generateDimensionAnalysis(scores) {
    let parts = [];
    let ratioE = scores.E / (scores.E + scores.I || 1);
    let ratioS = scores.S / (scores.S + scores.N || 1);
    let ratioT = scores.T / (scores.T + scores.F || 1);
    let ratioJ = scores.J / (scores.J + scores.P || 1);

    if (ratioE >= 0.9) parts.push("你的精神极度外放，呈现出一种近乎狂躁的吞噬欲，试图将所有外部客体卷入你的引力场。\n\n");
    else if (ratioE >= 0.75) parts.push("你有着强烈的向外扩张倾向，习惯通过干预和征服外部世界来确认自身的存在感。\n\n");
    else if (ratioE > 0.5) parts.push("你倾向于向外汲取能量，虽然这有时会演变为一种轻度的自我扩张。\n\n");
    else if (ratioE >= 0.25) parts.push("你倾向于向内构筑防线，这是一种对外界过度侵扰的轻度病理性自保。\n\n");
    else if (ratioE > 0.1) parts.push("你构筑了坚固的心理壁垒，习惯在深度内耗中完成自我审查，排斥无意义的社交刮擦。\n\n");
    else parts.push("你切断了所有与外界的能量交互，处于一种病理性的精神休眠，对人类有着生理性的厌倦。\n\n");

    if (ratioS >= 0.9) parts.push("你被死死钉在物理现实的十字架上，拒绝相信任何抽象的许诺，是绝对的经验主义暴徒。\n\n");
    else if (ratioS >= 0.75) parts.push("你有着强烈的现实掌控欲，只相信可被测量与兑现的物质，对虚无缥缈的宏大叙事嗤之以鼻。\n\n");
    else if (ratioS > 0.5) parts.push("你受困于具象的物质与感官，在坚实的物理现实中寻找着安全感。\n\n");
    else if (ratioS >= 0.25) parts.push("你时常悬浮于抽象与思辨之中，比起眼前的苟且，你更在意那些看不见的意义碎片。\n\n");
    else if (ratioS > 0.1) parts.push("你患有严重的现实脱离症，在形而上的废墟里搭建着只属于你自己的巴别塔。\n\n");
    else parts.push("你彻底剥离了肉身的重力，悬浮于极度抽象的虚无之中，对现实的庸常有着近乎生理性的排斥。\n\n");

    if (ratioT >= 0.9) parts.push("你切除了名为共情的冗余器官，化身为一台绝对理性的暴君机器，用冰冷的手术刀解剖一切温情。\n\n");
    else if (ratioT >= 0.75) parts.push("你将逻辑奉为圭臬，习惯用冰冷的利弊分析来防御情感的渗透，对情绪勒索绝对免疫。\n\n");
    else if (ratioT > 0.5) parts.push("你崇尚解剖逻辑，试图用理性切割掉日常生活中那些粘稠的情绪。\n\n");
    else if (ratioT >= 0.25) parts.push("你沉溺于混沌的感性共鸣，灵魂的边界偶尔会被他人的痛苦渗透。\n\n");
    else if (ratioT > 0.1) parts.push("你患有严重的共情泛滥，极易将他人的苦难吸收为自身的伤口，在情感的泥沼中反复献祭。\n\n");
    else parts.push("你深陷于绝对的感性黑洞，灵魂的边界极度脆弱，甚至会因为一滴他人的眼泪而引发自身的精神海啸。\n\n");

    if (ratioJ >= 0.9) parts.push("你是强迫症晚期的秩序狂徒，容不下生命中哪怕一毫米的偏差，试图用钢铁般的计划锁死不可知的命运。");
    else if (ratioJ >= 0.75) parts.push("你患有严重的控制癖，必须将一切变量关进名为“计划”的牢笼才能获得喘息。");
    else if (ratioJ > 0.5) parts.push("你迷恋规则与掌控，试图在草台班子般的世界里建立微观的个人秩序。");
    else if (ratioJ >= 0.25) parts.push("你随波于无序的熵增与漂流，在失控的边缘试探着生存的随机性。");
    else if (ratioJ > 0.1) parts.push("你是一个彻底的解构主义者，厌恶一切框架与DDL，在无目的的漫游中消耗着生命。");
    else parts.push("你彻底放弃了对方向盘的争夺，以一种近乎赴死的姿态跃入随机性的洪流，在绝对的失控中品尝自由。");

    return "根据各项病灶偏移程度判定\n\n" + parts.join("");
}

// ==========================================
// 🌟 真实联网版：病友交流区
// ==========================================

// 👇👇👇 将这里的链接替换为你刚才在 Cloudflare 复制的 Worker 链接 👇👇👇
const WORKER_API_URL = "/comments";

// 系统内置预设回音（营造冷启动社区氛围）
const systemComments = [];

// 1. 加载并渲染评论
// 🌟 无底洞版：加载与渲染评论
async function loadComments(filterType = 'all') {
    const list = document.getElementById('comments-list');
    list.innerHTML = '<p style="text-align:center; color:#999; font-size:0.85rem; letter-spacing: 2px; animation: blink 1s infinite;">[ 正在同步全网病理档案... ]</p>';

    let realComments = [];
    try {
        const response = await fetch(WORKER_API_URL);
        if (response.ok) {
            realComments = await response.json();
        }
    } catch (e) {
        console.warn("网络位面干扰，加载预设回音池", e);
    }

    // 更新真实的病理切片总数
    const countElement = document.getElementById('total-comments-count');
    if (countElement) {
        // 保留你的基础盘，加上真实的评论数
        const totalCount = 0 + realComments.length;
        countElement.innerText = `已收录 ${totalCount.toLocaleString()} 份病理切片`;
    }

    // 将真实用户评论与系统预设评论合并
    let allComments = [...realComments, ...systemComments];

    // 同源过滤逻辑
    if (filterType === 'same') {
        const currentResult = localStorage.getItem('ppti_last_result');
        allComments = allComments.filter(c => c.type === currentResult);
    }

    list.innerHTML = '';
    if (allComments.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:#999; font-size:0.85rem;">该频段暂无同源病例回音...</p>';
        return;
    }

    // 🌟 核心新增：按点赞数降序排列（赞最多的排最上面）
    allComments.sort((a, b) => (b.likes || 0) - (a.likes || 0));

    // 无论数据库里有多少条，前端只渲染最新的 50 条
    const displayComments = allComments.slice(0, 50);

    // 获取本地存储的“自毁钥匙”和“点赞记录”
    const myKeys = JSON.parse(localStorage.getItem('ppti_my_keys') || '{}');
    const myLikes = JSON.parse(localStorage.getItem('ppti_my_likes') || '{}');

    // 循环渲染每一条评论
    displayComments.forEach(c => {
        const item = document.createElement('div');
        item.className = 'comment-item';

        // 判定状态
        const isMine = c.id && myKeys[c.id] !== undefined;
        const hasLiked = c.id && myLikes[c.id] === true;
        const likesCount = c.likes || 0;

        // 生成底部按钮
        const deleteHtml = isMine ? `<button class="delete-btn" onclick="deleteMyComment('${c.id}')">[ 销毁此切片 ]</button>` : '<span></span>';
        // 🌟 替换掉原来的 likeHtml 这一行
        const likeHtml = `<button class="like-btn ${hasLiked ? 'liked' : ''}" onclick="likeComment('${c.id}')">♥ 共鸣 ${likesCount}</button>`;

        item.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${c.name}</span>
                <span class="comment-date">${c.date}</span>
            </div>
            <div class="comment-content">${c.content}</div>
            <div class="comment-actions">
                ${likeHtml}
                ${deleteHtml}
            </div>
        `;
        list.appendChild(item);
    });
}

// 2. 发送评论并存入数据库
async function submitComment() {
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    const btn = document.querySelector('.submit-comment-btn');

    const name = nameInput.value.trim() || '匿名病患';
    const text = textInput.value.trim();

    if (!text) {
        alert('请至少留下一点病发症状...');
        return;
    }

    // 🌟 核心：生成唯一的切片ID和自毁密钥
    const commentId = 'id_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const deleteToken = 'token_' + Math.random().toString(36).substr(2, 10);

    // 构建新评论对象
    const newComment = {
        id: commentId,
        token: deleteToken,
        name: name,
        date: "刚刚",
        content: text,
        type: localStorage.getItem('ppti_last_result') || 'UNKNOWN'
    };

    // 按钮视觉反馈
    const originalBtnText = btn.innerText;
    btn.innerText = '[ 上传至系统终端... ]';
    btn.disabled = true;

    try {
        const response = await fetch(WORKER_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        });

        if (response.ok) {
            // 🌟 核心：将自毁密钥悄悄存在用户的浏览器本地
            let myKeys = JSON.parse(localStorage.getItem('ppti_my_keys') || '{}');
            myKeys[commentId] = deleteToken;
            localStorage.setItem('ppti_my_keys', JSON.stringify(myKeys));

            nameInput.value = '';
            textInput.value = '';

            // 重新拉取最新数据
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.filter-btn').classList.add('active');
            await loadComments('all');
        }
    } catch (e) {
        alert("上传失败，可能是网络受到了干扰。");
    } finally {
        btn.innerText = originalBtnText;
        btn.disabled = false;
    }
}

function openArchiveModal() { document.getElementById('archive-modal').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeArchiveModal() { document.getElementById('archive-modal').classList.remove('show'); document.body.style.overflow = 'auto'; }

function buildArchiveList() {
    const regularContainer = document.getElementById('regular-archive');
    const secretContainer = document.getElementById('secret-archive');
    regularContainer.innerHTML = ''; secretContainer.innerHTML = '';
    const secretKeys = ['LORD', 'BLACKHOLE', 'XIAOQIANG', 'CHAOS'];

    for (const [key, p] of Object.entries(personas)) {
        const isSecret = secretKeys.includes(key);
        let itemHTML = '';
        if (isSecret) {
            itemHTML = `
                <div class="archive-item" onclick="this.classList.toggle('open')">
                    <div class="archive-header"><span class="archive-code">████</span><span class="archive-name">██████ <span style="font-size:0.75rem; color:#555;">[CORRUPTED]</span></span><span class="archive-toggle">+</span></div>
                    <div class="archive-detail"><div class="redacted-warning">[警告：观测者精神阈值过低，越权访问被拒绝]</div><p class="redacted-text">该病患档案已被高层加密。其精神病理特征具有强烈的模因污染性。任何试图解构该样本的行为都将导致意识层面的不可逆损伤。观测中止，系统已切断链接。</p></div>
                </div>`;
            secretContainer.innerHTML += itemHTML;
        } else {
            itemHTML = `
                <div class="archive-item" onclick="this.classList.toggle('open')">
                    <div class="archive-header"><span class="archive-code">${p.code}</span><span class="archive-name">${p.name} <span style="font-size:0.75rem; color:#888;">[${p.englishName}]</span></span><span class="archive-toggle">+</span></div>
                    <div class="archive-detail">
                        <div class="archive-detail-content"><img src="${p.image}" class="archive-thumb" onerror="this.style.display='none'"><div class="archive-text-group"><p class="archive-archetype">精神原型：${p.archetype}</p><p class="archive-quote">"${p.declaration}"</p></div></div>
                        <p class="archive-text">${p.pathology}</p>
                    </div>
                </div>`;
            regularContainer.innerHTML += itemHTML;
        }
    }
}

// 🌟 支持长短截图双生成的逻辑
function generateCard(type) {
    const btnShort = document.getElementById('btn-short');
    const btnLong = document.getElementById('btn-long');
    const originalShortText = btnShort.innerText;
    const originalLongText = btnLong.innerText;

    btnShort.innerText = '[ 提取中... ]';
    btnLong.innerText = '[ 提取中... ]';
    btnShort.disabled = true;
    btnLong.disabled = true;

    const branding = document.getElementById('capture-branding');
    branding.style.display = 'block';

    const captureArea = document.getElementById('card-capture-area');

    setTimeout(() => {
        let captureHeight = captureArea.scrollHeight;

        // 如果是短图，计算高度截取到病理学结束的位置
        if (type === 'short') {
            const endElement = document.getElementById('short-card-end');
            captureHeight = endElement.offsetTop + endElement.offsetHeight + 40;
        }

        html2canvas(captureArea, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#FAF9F6',
            height: captureHeight,
            windowHeight: captureArea.scrollHeight,
            y: 0, scrollX: 0, scrollY: -window.scrollY, // 修复滚动偏移Bug
            logging: false
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 0.9);
            try {
                let a = document.createElement('a');
                a.href = imgData; a.download = 'who-ology-diagnosis.jpg';
                document.body.appendChild(a); a.click(); document.body.removeChild(a);
            } catch (e) { }

            document.getElementById('generated-card-img').src = imgData;
            document.getElementById('card-modal').classList.add('show');

            branding.style.display = 'none';
            btnShort.innerText = originalShortText;
            btnLong.innerText = originalLongText;
            btnShort.disabled = false;
            btnLong.disabled = false;
        }).catch(err => {
            console.error("Capture failed", err);
            alert("生成失败，请尝试直接截屏保存。");
            branding.style.display = 'none';
            btnShort.innerText = originalShortText;
            btnLong.innerText = originalLongText;
            btnShort.disabled = false;
            btnLong.disabled = false;
        });
    }, 300);
}

function closeCardModal() { document.getElementById('card-modal').classList.remove('show'); }

function injectRarity(type) {
    const rarityMap = {
        "INTJ": "4.2", "ISFJ": "12.8", "INFP": "3.5", "ENTP": "5.1",
        "ESTJ": "11.2", "ENTJ": "4.8", "INFJ": "2.1", "ISTJ": "14.5",
        "ISTP": "6.3", "INTP": "3.8", "ENFJ": "3.3", "ISFP": "7.9",
        "ENFP": "8.5", "ESFP": "9.1", "ESFJ": "10.4", "ESTP": "5.7",
        "LORD": "0.1", "BLACKHOLE": "0.05", "XIAOQIANG": "0.3", "CHAOS": "0.2"
    };

    const r = rarityMap[type] || "5.0";
    const numValue = parseFloat(r);

    document.getElementById('result-rarity-text').innerText = r + '%';

    // 动态生成模因警告文案
    let descText = "系统正在评估该病理切片的扩散程度...";
    if (numValue < 1.0) {
        descText = "* 危险：该病原体具有极强精神污染性，系统已介入监控 *";
    } else if (numValue <= 5.0) {
        descText = "* 罕见：全网仅有极少数观测者携带此同源病理切片 *";
    } else {
        descText = "* 易感：系统检测到该病灶正在人群中呈常态化蔓延 *";
    }

    document.getElementById('rarity-desc-text').innerText = descText;

    setTimeout(() => {
        document.getElementById('result-rarity-fill').style.width = r + '%';
    }, 100);
}

// 3. 切换选项卡 (全部病患 / 同源病例)
function toggleFilter(btn) {
    // 移除所有按钮的 active 状态
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // 给当前点击的按钮加上 active 状态
    btn.classList.add('active');

    // 判断点的是哪个，传递参数给 loadComments
    const filterType = btn.innerText.includes('同源') ? 'same' : 'all';
    loadComments(filterType);
}

// 🌟 销毁切片的专属函数（必须放在最外层，不能嵌套在别的函数里！）
async function deleteMyComment(commentId) {
    if (!confirm("确定要永久抹除这份病理记录吗？此操作不可逆。")) return;

    const myKeys = JSON.parse(localStorage.getItem('ppti_my_keys') || '{}');
    const token = myKeys[commentId];

    if (!token) {
        alert("自毁密钥已丢失，无法越权操作。");
        return;
    }

    try {
        const response = await fetch(WORKER_API_URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: commentId, token: token })
        });

        if (response.ok) {
            // 删除成功后，把本地的废弃钥匙也扔掉
            delete myKeys[commentId];
            localStorage.setItem('ppti_my_keys', JSON.stringify(myKeys));

            // 重新刷新列表
            await loadComments('all');
        } else {
            alert("权限验证失败或切片已不存在。");
        }
    } catch (e) {
        alert("网络干扰，销毁失败。");
    }
}

// 🌟 触发或取消共鸣的函数
async function likeComment(commentId) {
    let myLikes = JSON.parse(localStorage.getItem('ppti_my_likes') || '{}');
    const isCurrentlyLiked = myLikes[commentId] === true;

    // 1. 乐观更新：根据当前状态反向操作
    if (isCurrentlyLiked) {
        delete myLikes[commentId]; // 撤回共鸣，拔掉钥匙
    } else {
        myLikes[commentId] = true; // 产生共鸣，留下钥匙
    }
    localStorage.setItem('ppti_my_likes', JSON.stringify(myLikes));

    // 强制刷新列表，让颜色和数字瞬间变化
    loadComments('all');

    // 2. 真实发送请求给后端终端
    try {
        await fetch(WORKER_API_URL, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: commentId,
                action: isCurrentlyLiked ? 'unlike' : 'like' // 🌟 告诉系统是加还是减
            })
        });
    } catch (e) {
        console.error("信号微弱，未传达至系统", e);
    }
}

// ==========================================
// 🌟 导航与 P5.js Hub 背景逻辑
// ==========================================

let currentSplitState = 'default'; // 'default', 'left', 'right'

function handleSplitClick(side, event) {
    const container = document.getElementById('hub-split-container');

    if (currentSplitState === 'default') {
        currentSplitState = side;
        container.classList.remove('left-active', 'right-active');
        container.classList.add(`${side}-active`);
    } else if (currentSplitState === side) {
        // If they click the expanded side again, do nothing.
    } else {
        // Clicked the shrunk side, reset
        currentSplitState = 'default';
        container.classList.remove('left-active', 'right-active');
    }
}

// 点击空白处复原卡片
document.addEventListener('click', (e) => {
    const container = document.getElementById('hub-split-container');
    if (container && !container.contains(e.target)) {
        if (currentSplitState !== 'default') {
            currentSplitState = 'default';
            container.classList.remove('left-active', 'right-active');
        }
    }
});

function goToPPTIIntro(event) {
    if (event) event.stopPropagation();
    
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('ppti-intro-page').classList.add('active');
    window.scrollTo(0, 0);

    // 🌟 核心改进：只有当前状态不是 ppti-intro 时才 push，防止重复堆叠历史记录
    if (!history.state || history.state.page !== 'ppti-intro') {
        history.pushState({ page: 'ppti-intro' }, '', '#ppti');
    }
}

function goToHub() {
    // 🌟 核心改进：点击按钮时，直接强制切换 UI 状态并清除 hash，
    // 这样能解决“按了没反应”的问题，同时确保浏览器历史依然能对上。
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('hub-page').classList.add('active');
    window.scrollTo(0, 0);

    if (history.state && history.state.page === 'ppti-intro') {
        // 如果是按了物理返回键之外的屏幕按钮，我们依然同步一下历史
        history.replaceState(null, '', window.location.pathname);
    }
}

function goToLSTI() {
    // 占位功能，不做响应
}

// 监听手机返回键或浏览器后退
window.addEventListener('popstate', (e) => {
    // If we are retreating to the hub (no state or different state)
    if (!e.state || e.state.page !== 'ppti-intro') {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('hub-page').classList.add('active');
        window.scrollTo(0, 0);
    } else if (e.state.page === 'ppti-intro') {
        // If we are somehow moving forward back to ppti intro
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('ppti-intro-page').classList.add('active');
        window.scrollTo(0, 0);
    }
});

// ─── Hero 背景：深渊涡旋（GLSL 着色器版）───────────────────────────────────────
// 使用 WebGL Shader 实现真正的油画流体质感、慢镜头张合、极度丝滑
const p5Sketch = (s) => {
    let theShader;

    const vert = `
    attribute vec3 aPosition;
    attribute vec2 aTexCoord;
    varying vec2 vTexCoord;
    void main() {
        vTexCoord = aTexCoord;
        gl_Position = vec4(aPosition, 1.0);
    }`;

    const frag = `
    precision highp float;
    varying vec2 vTexCoord;
    uniform vec2 u_resolution;
    uniform float u_time;

    // 随机函数
    float hash(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
    }

    // 2D 噪声
    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }

    // FBM (分形布朗运动)
    float fbm(vec2 p) {
        float value = 0.0;
        float amp = 0.5;
        // 手机端优化：把 6 次循环砍到 3 次，因为手机上不需要那么多微小细节。
        // 这将直接减少一半以上的显卡计算量！
        for (int i = 0; i < 3; i++) {
            value += amp * noise(p);
            p *= 2.0;
            amp *= 0.5;
        }
        return value;
    }

    void main() {
        // 归一化并让中心偏下
        vec2 uv = vTexCoord;
        vec2 p = uv * 2.0 - 1.0;
        
        // 【关键改动：放大视觉范围】
        // 缩小坐标轴相当于将整个漩涡“拉近、放大”，让它的边缘能够覆盖到屏幕上方和下方的文字区域
        p *= 0.55; 
        
        p.y += 0.08; 
        p.x *= u_resolution.x / u_resolution.y;

        // 极缓慢的时间
        float t = u_time * 0.2; 

        // 极地坐标
        float r = length(p);
        float angle = atan(p.y, p.x);

        // 模拟极其巨大的眼睛（基于椭圆距离）
        // 极其缓慢地张开、闭合 (利用 sin(t))
        float eyeOpen = 0.6 + 0.15 * sin(t * 0.8); 
        float eyeDist = length(vec2(p.x, p.y / eyeOpen));

        // 涡旋扰动 (慢镜头下的流动)
        float swirlAmt = 1.5 * exp(-r * 2.0); // 靠近中心旋转更强
        angle += swirlAmt * sin(t * 0.5);
        vec2 swp = vec2(r * cos(angle), r * sin(angle));

        // 流体和抽象笔触层叠 (使用不同尺度的 FBM)
        // 保留原汁原味的三层叠加，这是高级飘逸感的来源，绝不删减这一块！
        vec2 q = vec2(0.);
        q.x = fbm(swp * 3.5 + vec2(t * 0.1, t * 0.2));
        q.y = fbm(swp * 3.5 + vec2(t * 0.3, t * 0.1));

        vec2 r2 = vec2(0.);
        r2.x = fbm(swp * 6.0 + q * 2.0 + vec2(t * 0.4, 0.0));
        r2.y = fbm(swp * 6.0 + q * 2.0 + vec2(0.0, t * 0.5));

        float f = fbm(swp * 4.5 + r2 * 2.0);

        // 深渊的层次感
        // 让中心保留 50% 的油画纹理，不再空荡荡！
        float depth = 0.5 + 0.5 * smoothstep(0.0, 1.2, eyeDist);
        
        // 光：边缘偶有一缕微弱的光游走
        // 利用角度和时间生成游走的光晕
        float lightWalk = smoothstep(0.8, 0.95, sin(angle * 2.0 - t * 2.0));
        float lightEdge = smoothstep(0.4, 0.6, f) * smoothstep(0.8, 0.6, f); // 取山脊部分
        float lightIntensity = lightEdge * lightWalk * smoothstep(0.2, 0.8, eyeDist) * exp(-eyeDist*1.5);

        // 混合颜色：大面积黑灰色与深灰色
        // 中心为纯黑 (0.01)，边缘稍微过渡到深灰 (0.12)
        vec3 darkGrey = vec3(0.12, 0.12, 0.13);
        vec3 blackGrey = vec3(0.02, 0.02, 0.02);
        
        vec3 color = mix(blackGrey, darkGrey, f * depth);
        
        // 加上游走的光（深灰色光）
        vec3 lightColor = vec3(0.25, 0.25, 0.27);
        color += lightColor * lightIntensity * 0.4;

        // 背景边缘彻底融入黑 (也放大遮罩边缘，让漩涡布满全屏)
        float mask = smoothstep(2.5, 0.8, eyeDist);
        color *= mask;

        // 🌟 【首页噪点强度】：修改这里的 0.01。数值越小噪点越弱，0 代表完全关闭（目前已调低）。
        float grain = hash(uv * vec2(100.0, 100.0) + t);
        color += (grain - 0.5) * 0.01;

        gl_FragColor = vec4(color, 1.0);
    }`;

    s.setup = () => {
        const cont = document.getElementById('p5-canvas-container');
        const cnv  = s.createCanvas(
            cont ? cont.offsetWidth  : s.windowWidth,
            cont ? cont.offsetHeight : s.windowHeight,
            s.WEBGL
        );
        if (cont) cnv.parent('p5-canvas-container');
        
        // 【核心优化】：将手机端像素密度压到 0.5
        if (s.windowWidth < 768) {
            s.pixelDensity(0.5); 
        } else {
            s.pixelDensity(1.0);
        }
        
        theShader = s.createShader(vert, frag);
        s.noStroke();
    };

    s.draw = () => {
        s.shader(theShader);
        theShader.setUniform('u_resolution', [s.width, s.height]);
        theShader.setUniform('u_time', s.millis() / 1000.0);
        
        // 画一个覆盖全屏的矩形面来跑 Shader
        s.beginShape();
        s.vertex(-1, -1, 0, 0, 0);
        s.vertex( 1, -1, 0, 1, 0);
        s.vertex( 1,  1, 0, 1, 1);
        s.vertex(-1,  1, 0, 0, 1);
        s.endShape(s.CLOSE);
    };

    s.windowResized = () => {
        const cont = document.getElementById('p5-canvas-container');
        if (!cont) return;
        s.resizeCanvas(cont.offsetWidth, cont.offsetHeight);
    };
};
