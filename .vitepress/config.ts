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
      { text: "基础知识", link: "/python/00/index.md" },
      { text: "数据分析", link: "/data-analysis/index.md" },
      { text: "网络爬虫", link: "/crawler/index.md" },
      { text: "计算机速成课", link: "/crash-course/00/index.md" },
    ],
    sidebar: {
      "/python": [
        {
          text: "课程须知",
          items: [
            { text: "代码区", link: "/python/00/index.md" },
            { text: "自测猫", link: "/python/00/cat.md" },
            { text: "练习册", link: "/python/00/playground.md" },
            { text: "判题狗", link: "/python/00/dog.md" },
          ],
        },
      ],
      "/data-analysis": [{}],
      "/crawler": [{}],
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
    },
    outlineTitle: "目录",
    sidebarMenuLabel: "侧边栏",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "浅色/深色",

    docFooter: { prev: "上一篇", next: "下一篇" },
  },
})
