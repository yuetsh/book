import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans-CN",
  title: "徐越的编程书",
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "。/style.css" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    nav: [
      { text: "首页", link: "/" },
      { text: "编程基础", link: "/basic/manual/book/index.md" },
      { text: "Web前端", link: "/web/2-div/index.md" },
      { text: "计算机速成课", link: "/crash-course/00/index.md" },
    ],
    sidebar: {
      "/basic": [
        {
          text: "使用说明",
          items: [
            { text: "本网站", link: "/basic/manual/book/index.md" },
            { text: "自测猫", link: "/basic/manual/code/index.md" },
            { text: "判题狗", link: "/basic/manual/oj/index.md" },
            { text: "练习册", link: "/basic/manual/play/index.md" },
          ],
        },
        {
          text: "编程技巧",
          items: [
            { text: "Python 小抄", link: "/basic/tips/cheatsheet/index.md" },
            // {
            //   text: "看懂报错信息",
            //   link: "/basic/tips/error-message/index.md",
            // },
            // { text: "使用 AI", link: "/basic/tips/chatgpt/index.md" },
          ],
        },
        {
          text: "判题狗",
          items: [
            {
              text: "推荐的做题顺序",
              link: "/basic/online-judge/ordering/index.md",
            },
          ],
        },
        {
          text: "趣味杂谈",
          items: [
            {
              text: "中文编程语言介绍",
              link: "/basic/others/chinese-program-language/index.md",
            },
          ],
        },
      ],
      "/crash-course": [
        { text: "简介", link: "/crash-course/00/index.md" },
        { text: "计算机早期历史", link: "/crash-course/01/index.md" },
        { text: "电子计算机", link: "/crash-course/02/index.md" },
        { text: "布尔逻辑和逻辑门", link: "/crash-course/03/index.md" },
        { text: "二进制", link: "/crash-course/04/index.md" },
        { text: "算术逻辑单元", link: "/crash-course/05/index.md" },
        { text: "寄存器和内存", link: "/crash-course/06/index.md" },
        { text: "中央处理器", link: "/crash-course/07/index.md" },
        { text: "指令和程序", link: "/crash-course/08/index.md" },
        { text: "高级 CPU 设计", link: "/crash-course/09/index.md" },
        { text: "早期的编程方式", link: "/crash-course/10/index.md" },
        { text: "编程语言发展史", link: "/crash-course/11/index.md" },
        { text: "编程原理 - 语句和函数", link: "/crash-course/12/index.md" },
        { text: "算法入门", link: "/crash-course/13/index.md" },
        { text: "......", link: "/crash-course/14/index.md" },
      ],
      "/web": [{ text: "盒模型(1)", link: "/web/2-div/index.md" }],
    },
    outlineTitle: "大纲",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "浅色/深色",

    docFooter: { prev: "上一篇", next: "下一篇" },
  },
})
