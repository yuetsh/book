# 典型题目

## 只有输出

[3022 经典的Hello World](https://oj.xuyue.cc/problem/3022)：第一个程序，确认环境能跑通

[1051 家有家法，行有行规](https://oj.xuyue.cc/problem/1051)：多行输出，注意换行

[1052 胜利的旗帜](https://oj.xuyue.cc/problem/1052)：照着图案逐行打印，一个字符都不能错

## print 的 sep 和 end

[8019 爱吃水果的学长](https://oj.xuyue.cc/problem/8019)（仅 Python）：sep：多个内容之间用什么隔开

[8020 爱学英语的学长](https://oj.xuyue.cc/problem/8020)（仅 Python）：end：输出完不换行

[8021 学长奇怪的密码](https://oj.xuyue.cc/problem/8021)（仅 Python）：sep 和 end 一起用

## 输入（单个 / 隔行输入）

[1082 【原】启动](https://oj.xuyue.cc/problem/1082)：读一行文字，拼进输出

[3049 自我介绍](https://oj.xuyue.cc/problem/3049)：读两行，分别填进句子里

[2056 千颜篇（二）](https://oj.xuyue.cc/problem/2056)：隔行输入，输出模板里有固定文字

## 输入（一行多个，用空格隔开）

[4077 苦命鸳鸯](https://oj.xuyue.cc/problem/4077)：一行拆成两个

[1080 回来吧，我最骄傲の信仰](https://oj.xuyue.cc/problem/1080)：一行拆成四个，分别填进歌词

[2020 学习鸣式](https://oj.xuyue.cc/problem/2020)：一行三项 + 第二行再读一项

## 输入（类型转换 + 整数运算）

[4005 《蓝色妖姬之切尔西传奇1.0》](https://oj.xuyue.cc/problem/4005)：读进来先转整数，再做减法

[1044 加法计算器](https://oj.xuyue.cc/problem/1044)：两个数相加

[1049 Switch！](https://oj.xuyue.cc/problem/1049)：交换两个变量

[3018 勾股定理](https://oj.xuyue.cc/problem/3018)：一行两个数，转换后套公式

## 整除与取余

[4021 日期换算](https://oj.xuyue.cc/problem/4021)：// 和 % 成对使用：天数换成周和天

[1004 逆序的三位数](https://oj.xuyue.cc/problem/1004)：拆出个十百位，还要处理 700 → 7

[1015 康康买文具](https://oj.xuyue.cc/problem/1015)：先把元角统一成角再整除

[3076 蜜橘装箱问题](https://oj.xuyue.cc/problem/3076)：有余数时箱子要多加一个

## 输出（保留小数位）

[1046 圆的面积](https://oj.xuyue.cc/problem/1046)：保留 4 位小数

[1025 无聊的温度转换V1](https://oj.xuyue.cc/problem/1025)：小数运算 + 保留 2 位

[3050 算平均分](https://oj.xuyue.cc/problem/3050)：三个成绩求平均

[3029 计算三角形面积](https://oj.xuyue.cc/problem/3029)：开平方：海伦公式求三角形面积

## 格式化字符串（f-string / printf）

[1007 整数四则运算](https://oj.xuyue.cc/problem/1007)：把变量和运算符按格式拼成算式

[2007 三皇之燧人氏](https://oj.xuyue.cc/problem/2007)：输出里带百分号

## 字符串（索引、切片、常用方法）

[3060 碎嘴的“复读鸡“](https://oj.xuyue.cc/problem/3060)：正向和负向索引

[3059 懒惰的“回音”山谷](https://oj.xuyue.cc/problem/3059)：切片 + 反转

[3073 日志清洗与关键词定位](https://oj.xuyue.cc/problem/3073)：strip、lower、find 连着用

[3075 数据格式转换](https://oj.xuyue.cc/problem/3075)：split、join、upper 连着用

[2040 身份证信息识别](https://oj.xuyue.cc/problem/2040)：综合：从身份证号里切出生日，再算年龄和生肖

## 列表（Python 列表方法）

[3078 水果篮子](https://oj.xuyue.cc/problem/3078)：append

[3080 插入新成员](https://oj.xuyue.cc/problem/3080)：insert 到指定位置

[3084 取出最后一件](https://oj.xuyue.cc/problem/3084)：pop 取出并删除

[3087 截取电影片段](https://oj.xuyue.cc/problem/3087)：切片去掉头尾

## 条件（if / if…else）

[1040 《如果呢》—— 条件结构热身题](https://oj.xuyue.cc/problem/1040)：最简单的 if…else

[2073 课堂练习（2）](https://oj.xuyue.cc/problem/2073)：用 % 2 判断偶数

[1083 这个游戏到底谁能赢啊！](https://oj.xuyue.cc/problem/1083)：两个数比大小

[1089 海公牛](https://oj.xuyue.cc/problem/1089)：先算出结果，再根据结果判断

## 条件（多分支：查表）

[1022 叫你一声，你敢答应吗？](https://oj.xuyue.cc/problem/1022)：字符串相等判断

[1086 【农】韩信十三枪](https://oj.xuyue.cc/problem/1086)：数字对应内容，分支很多（Python 可以试试字典）

[1097 移不动、联不通、信不过](https://oj.xuyue.cc/problem/1097)：多个输入对应同一个结果

## 条件（多分支：按区间）

[1035 成绩评定](https://oj.xuyue.cc/problem/1035)：最经典的分数段

[3016 你行不行啊，细狗](https://oj.xuyue.cc/problem/3016)：边界值包不包含

[3031 BMI指数](https://oj.xuyue.cc/problem/3031)：先算 BMI 再分段

[3039 班级电费计算器](https://oj.xuyue.cc/problem/3039)：阶梯计价：每一段分别算钱再加起来

## switch 语句（C 语言）

[8015 今天是星期几](https://oj.xuyue.cc/problem/8015)：最基本的 switch

[8013 成绩等级转换](https://oj.xuyue.cc/problem/8013)：用 score / 10 让 switch 处理区间

[8012 简易计算器](https://oj.xuyue.cc/problem/8012)：菜单 + 除数为 0 的特判

## 条件（and / or / 嵌套 if）

[1050 集瓶盖赢大奖](https://oj.xuyue.cc/problem/1050)：or

[3004 if 的使用](https://oj.xuyue.cc/problem/3004)：三个条件 and 在一起

[1204 空调安全启动](https://oj.xuyue.cc/problem/1204)：嵌套 if：先判断一个条件，再判断下一个

[5006 今夕是何年](https://oj.xuyue.cc/problem/5006)：闰年：and 和 or 混用

## 循环（简单：重复 n 次）

[1084 【原】万猿升万德](https://oj.xuyue.cc/problem/1084)：重复输出 n 行

[2078 课堂练习（6）](https://oj.xuyue.cc/problem/2078)：输出 1 到 n，用上循环变量

[1045 ********](https://oj.xuyue.cc/problem/1045)：n 为 0 时要特判

[2107 NICEEEEE!](https://oj.xuyue.cc/problem/2107)：每一行都比上一行多一点

## 循环（累加、累乘、数列）

[1041 小小高斯 —— 循环结构热身题](https://oj.xuyue.cc/problem/1041)：1 加到 100

[2008 逃离地下室](https://oj.xuyue.cc/problem/2008)：阶乘：累乘

[1103 人生的365次方（基础版）](https://oj.xuyue.cc/problem/1103)：连乘 365 次

[1011 求交错序列前N项和](https://oj.xuyue.cc/problem/1011)：正负交替的分数求和

## 循环 + 条件（枚举、筛选）

[3100 跳过偶数](https://oj.xuyue.cc/problem/3100)：continue 跳过不要的数

[3107 找能被7整除的数](https://oj.xuyue.cc/problem/3107)：找出能被 7 整除的数

[4008 渡劫成仙](https://oj.xuyue.cc/problem/4008)：筛选出来再求和

[5007 霍格沃兹的魔法楼梯](https://oj.xuyue.cc/problem/5007)：从小往大枚举，找第一个满足条件的数

## 循环（while、模拟过程）

[3097 吃泡泡糖](https://oj.xuyue.cc/problem/3097)：最基本的 while

[1104 收获百倍的成就](https://oj.xuyue.cc/problem/1104)：不知道要循环几次，直到满足条件为止

[3038 公交卡余额提醒](https://oj.xuyue.cc/problem/3038)：边循环边输出过程

[1006 冰雹猜想](https://oj.xuyue.cc/problem/1006)：每一步按奇偶走不同分支

[3041 背单词计划](https://oj.xuyue.cc/problem/3041)：读到 -1 结束

## 循环（遍历一组数）

[1018 一眼·鉴定·一阶段](https://oj.xuyue.cc/problem/1018)：先读个数，再读 n 个数求和

[3106 找最大数](https://oj.xuyue.cc/problem/3106)：求最大值

[3032 奇偶统计器](https://oj.xuyue.cc/problem/3032)：分类计数

[2103 评委打分](https://oj.xuyue.cc/problem/2103)：去掉最高分和最低分再求平均

[3035 过滤“幸运数字”（3）](https://oj.xuyue.cc/problem/3035)：筛选结果放进列表输出

## 循环（遍历字符串）

[2038 OOXX](https://oj.xuyue.cc/problem/2038)：统计字符出现次数

[4026 让我们说中文3](https://oj.xuyue.cc/problem/4026)：筛掉英文字母

[1029 “简单”的加密 V1](https://oj.xuyue.cc/problem/1029)：字符编码运算，Z 之后要回到 A

[1116 《晴天》](https://oj.xuyue.cc/problem/1116)：最长连续段

[P040 字符串压缩](https://oj.xuyue.cc/problem/P040)：连续相同字符压缩

## 循环嵌套（图形、乘法表）

[P018 数字阶梯](https://oj.xuyue.cc/problem/P018)：内层循环次数随行号变化

[1009 九九乘法表](https://oj.xuyue.cc/problem/1009)：九九乘法表

[1010 九九乘法表V2](https://oj.xuyue.cc/problem/1010)：控制行尾空格和最后一行换行

[4055 杨辉三角](https://oj.xuyue.cc/problem/4055)：杨辉三角：下一行由上一行算出来

## 函数

[3114 自定义函数求两数之和](https://oj.xuyue.cc/problem/3114)：传两个参数，返回和

[3115 自定义函数判断奇偶](https://oj.xuyue.cc/problem/3115)：返回字符串

[3117 自定义函数求三个数的平均值](https://oj.xuyue.cc/problem/3117)：返回保留两位的小数

[P061 玫瑰花数判断](https://oj.xuyue.cc/problem/P061)（不支持 C）：把判断逻辑封装成函数

## 数学专题

[9025 康康和你的痛苦训练（挨揍）](https://oj.xuyue.cc/problem/9025)：最大公因数

[9010 44CK6L+b5Yi25LiW55WM44CL](https://oj.xuyue.cc/problem/9010)：十进制转二进制

[1033 康康的二向箔](https://oj.xuyue.cc/problem/1033)：转二进制、翻转、再转回十进制

[5005 到底有几只兔子啊！](https://oj.xuyue.cc/problem/5005)：斐波那契数列

[1107 电子脑的 Ghost 验证](https://oj.xuyue.cc/problem/1107)：判断会不会进入循环

## 排序与查找

[4012 开龙脊](https://oj.xuyue.cc/problem/4012)：三个数排序

[2005 这个康康明明要随机数结果却还要人输入，真是太逊了](https://oj.xuyue.cc/problem/2005)：去重后排序

[4022 两数相加](https://oj.xuyue.cc/problem/4022)：两层循环找两数之和

[1119 《青花瓷》](https://oj.xuyue.cc/problem/1119)：找最接近的数，还有平局规则

## 综合性的题目

[1001 三天打鱼两天晒网](https://oj.xuyue.cc/problem/1001)：取余 + 条件

[1003 计算时间差](https://oj.xuyue.cc/problem/1003)：解析时间格式，再借位相减

[1023 康康买西瓜](https://oj.xuyue.cc/problem/1023)：循环 + 求平均

[1032 前前前世](https://oj.xuyue.cc/problem/1032)：日期推算星期几

## 规则模拟

[2037 无中生有](https://oj.xuyue.cc/problem/2037)：规则不多，但出牌顺序会影响结果

[1061 【农】鲁班大师，智商二百五](https://oj.xuyue.cc/problem/1061)：把一长串加成规则翻译成公式

## 挑战

[1043 神奇的 6174](https://oj.xuyue.cc/problem/1043)：循环 + 数位排序 + 固定 4 位输出

[1076 鸣人卷](https://oj.xuyue.cc/problem/1076)：螺旋矩阵

[7004 创建日历](https://oj.xuyue.cc/problem/7004)：打印日历

[1020 好耶！是大冒险！](https://oj.xuyue.cc/problem/1020)：枚举所有敲击方案，找最少次数

## SQL

[SQL01 查询工资高于5000元的员工](https://oj.xuyue.cc/problem/SQL01)：WHERE 条件查询

[SQL02 按学分从高到低查询课程](https://oj.xuyue.cc/problem/SQL02)：ORDER BY 排序

[SQL08 统计每个部门的员工人数](https://oj.xuyue.cc/problem/SQL08)：GROUP BY 分组计数

[SQL04 上调销售部员工工资](https://oj.xuyue.cc/problem/SQL04)：UPDATE 改数据

[SQL03 统计平均工资超过6000元的部门](https://oj.xuyue.cc/problem/SQL03)：JOIN + GROUP BY + HAVING
