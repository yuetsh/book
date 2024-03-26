import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import BVideo from "./components/BVideo.vue"
import Author from "./components/Author.vue"
import CodeEditor from "./components/CodeEditor.vue"

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.component("bvideo", BVideo)
    app.component("author", Author)
    app.component("editor", CodeEditor)
  },
} satisfies Theme
