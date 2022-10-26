alert('欢迎来到朋友默契测试小游戏!' +
    '\n' + '这个小游戏一共十道题，有单选、多选' +
    '\n' + '输入答案的格式 例: ABC (注! 字母中间不要有空格)' +
    '\n' + '单选题选对计5分,多选题正确答案有两个时,选对一个计3分,选对两个计5分.正确答案有三个时,选对一个计2分,选对两个计3分,' +
    '选对三个计5分。' + '回答完所有问题程序将输出你与我的好友默契度，以及你的得分');
var score = 0;
var num1 = prompt('第一题(单选)' + '\n' + '我更喜欢什么电影?' + '\n' + 'A. 动作片' + '\n' + 'B. 爱情片' + '\n' + 'C. 科幻片' + '\n' + 'D. 悬疑片');
switch (num1) {
    case 'B':
        score += 5;
        break;
}
var num2 = prompt('第二题(单选)' + '\n' + '我更喜欢喝什么茶?' + '\n' + 'A. 乌龙茶' + '\n' + 'B. 毛尖茶' + '\n' + 'C. 红茶' + '\n' + 'D. 普洱茶');
switch (num2) {
    case 'A':
        score += 5;
        break;
}
var num3 = prompt('第三题(多选)' + '\n' + '我曾说过自己像什么?' + '\n' + 'A. 作家' + '\n' + 'B. 乞丐' + '\n' + 'C. 歌手' + '\n' + 'D. 流浪汉');
switch (num3) {
    case 'B':
        score += 3;
        break;
    case 'D':
        score += 3;
        break;
    case 'BD':
        score += 5;
        break;
    case 'DB':
        score += 5;
        break;
}
var num4 = prompt('第四题(多选)' + '\n' + '经常陪我的玩偶是什么样的?' + '\n' + 'A. 小猪' + '\n' + 'B. 小狗' + '\n' + 'C. 小马' + '\n' + 'D. 小兔');
switch (num4) {
    case 'A':
        score += 3;
        break;
    case 'C':
        score += 3;
        break;
    case 'AC':
        score += 5;
        break;
    case 'CA':
        score += 5;
        break;
}
var num5 = prompt('第五题(单选)' + '\n' + '怎样的事能让我兴奋得睡不着?' + '\n' + 'A. 被喜欢的人表白' + '\n' + 'B. 别人给我发大红包' + '\n' + 'C. 想出有意思的程序' + '\n' + 'D. 所持股票涨停');
switch (num5) {
    case 'C':
        score += 5;
        break;
}
var num6 = prompt('第六题(多选)' + '\n' + '微信里与人聊天，我最讨厌哪种行为?' + '\n' + 'A. 发超长语音' + '\n' + 'B. 只抢红包从来不发' + '\n' + 'C. 只发"在吗"不说正事' + '\n' + 'D. 很久才回消息');
switch (num6) {
    case 'A':
        score += 3;
        break;
    case 'C':
        score += 3;
        break;
    case 'AC':
        score += 5;
        break;
    case 'CA':
        score += 5;
        break;
}
var num7 = prompt('第七题(单选)' + '\n' + '我歌单里的歌通常是?' + '\n' + 'A. 说唱音乐' + '\n' + 'B. 纯音乐' + '\n' + 'C. 经典国语歌' + '\n' + 'D. 英文歌');
switch (num7) {
    case 'D':
        score += 5;
        break;
}
var num8 = prompt('第八题(单选)' + '\n' + '在电影 哈利波特 中,我最喜欢的角色是?' + '\n' + 'A. 哈利' + '\n' + 'B. 赫敏' + '\n' + 'C. 罗恩' + '\n' + 'D. 马尔福');
switch (num8) {
    case 'B':
        score += 5;
        break;
}
var num9 = prompt('第九题(单选)' + '\n' + '手机电量还剩多少时,我会感到焦虑?' + '\n' + 'A. 35%' + '\n' + 'B. 20%' + '\n' + 'C. 10%' + '\n' + 'D. 5%');
switch (num9) {
    case 'D':
        score += 5;
        break;
}
var num10 = prompt('第十题(多选)' + '\n' + '我喜欢什么口味的薯片?' + '\n' + 'A. 番茄味' + '\n' + 'B. 经典原味' + '\n' + 'C. 黄瓜味' + '\n' + 'D. 烧烤味');
switch (num10) {
    case 'A':
        score += 2;
        break;
    case 'B':
        score += 2;
        break;
    case 'C':
        score += 2;
        break;
    case 'AB':
        score += 3;
        break;
    case 'AC':
        score += 3;
        break;
    case 'BA':
        score += 3;
        break;
    case 'BC':
        score += 3;
        break;
    case 'CA':
        score += 3;
        break;
    case 'CB':
        score += 3;
        break;
    case 'ABC':
        score += 5;
        break;
    case 'ACB':
        score += 5;
        break;
    case 'BAC':
        score += 5;
        break;
    case 'BCA':
        score += 5;
        break;
    case 'CAB':
        score += 5;
        break;
    case 'CBA':
        score += 5;
        break;
}
matched = score * 2;
alert('游戏结束!' + '\n' + '你的得分是 ' + score + '分, 你与我的好友默契度是 ' + matched + '%')
if (score >= 45) {
    alert('牛的! 与众不同的! 震惊我本人的! ' + '\n' + '恭喜你获得奖品: 我答应你一件我能做到的事');
} else if (score >= 40) {
    alert('很棒了! 和我默契度80%以上! ' + '\n' + '恭喜你获得奖品: 一杯奶茶');
} else if (score >= 35) {
    alert('估计平时咱俩关系应该不错(你要是蒙的当我没说)' + '\n' + '恭喜你获得奖品: 一瓶三得利乌龙茶');
} else if (score >= 25) {
    alert('可能是我题太难了,没关系,已经很棒了~' + '\n' + '恭喜你获得奖品: 一瓶125ml旺仔牛奶');
} else if (score >= 40) {
    alert('可能我们平时聊这些比较少,抽时间可以加强一下' + '\n' + '恭喜你获得: 谢谢惠顾~')
} else {
    alert('好的我懂,不是咱两关系太浅,是题太难' + '\n' + '恭喜你获得: 谢谢惠顾~')
}