<script setup lang="ts">
import { computed, ref } from "vue"
import { useData } from "vitepress"
import { VPButton } from "vitepress/theme"
import CodeMirror from "vue-codemirror6"
import { cpp } from "@codemirror/lang-cpp"
import { python } from "@codemirror/lang-python"
import { EditorView } from "@codemirror/view"
import { createSubmission } from "../../api"
import { smoothy } from "../cm-themes/smoothy"
import { oneDark } from "../cm-themes/oneDark"

interface Props {
  code: string
  readonly?: boolean
  lang?: "python" | "c"
}

const props = withDefaults(defineProps<Props>(), {
  lang: "python",
  readonly: false,
})

const { isDark } = useData()

const lang = computed(() => {
  if (props.lang === "python") {
    return python()
  }
  return cpp()
})

const styleTheme = EditorView.baseTheme({
  "& .cm-scroller": {
    "font-family": "Consolas",
  },
  "&.cm-editor.cm-focused": {
    outline: "none",
  },
})

const input = ref("")
const output = ref("")
const code = ref(props.code.trim())

async function run() {
  const result = await createSubmission(
    { value: code.value, language: props.lang === "python" ? "Python3" : "C" },
    input.value,
  )
  output.value = result.output
}

function reset() {
  code.value = props.code.trim()
  output.value = ""
}
</script>
<template>
  <ClientOnly>
    <p>代码编辑区</p>
    <CodeMirror
      v-model="code"
      :lang="lang"
      :tab-size="4"
      :readonly="props.readonly"
      :extensions="[styleTheme, isDark ? oneDark : smoothy]"
      wrap
      basic
      tab
    />
    <p>输入框</p>
    <CodeMirror v-model="input" :extensions="[styleTheme]" />
    <div :class="$style.actions">
      <VPButton :class="$style.run" @click="run" text="运行"></VPButton>
      <VPButton @click="reset" theme="alt" text="重置"></VPButton>
    </div>
    <p v-if="output.length">运行结果</p>
    <pre>{{ output }}</pre>
  </ClientOnly>
</template>
<style module>
.actions {
  margin-top: 20px;
}

.run {
  margin-right: 20px;
}
</style>
