<script setup lang="ts">
import { computed, ref } from "vue"
import { useData } from "vitepress"
import { Codemirror } from "vue-codemirror"
import { cpp } from "@codemirror/lang-cpp"
import { python } from "@codemirror/lang-python"
import { EditorView } from "@codemirror/view"
import { VPButton } from "vitepress/theme"
import { oneDark } from "../codemirror/oneDark"
import { smoothy } from "../codemirror/smoothy"
import { asyncRun } from "./py"

interface Props {
  modelValue: string
  readonly: boolean
  lang?: "python" | "c"
}

const props = withDefaults(defineProps<Props>(), {
  lang: "python",
  readonly: false
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
const output = ref<string[]>([])
const error = ref("")
const code = ref(props.modelValue.trim())

async function run() {
  const ev = await asyncRun(code.value, input.value)
  output.value = ev.results
  error.value = ev.error
}

function reset() {
  code.value = props.modelValue.trim()
  error.value = ""
  output.value = []
}
</script>
<template>
  <p>代码编辑区</p>
  <Codemirror
    :disabled="props.readonly"
    v-model="code"
    indentWithTab
    :extensions="[styleTheme, lang, isDark ? oneDark : smoothy]"
    :tabSize="4"
  />
  <p>输入框</p>
  <Codemirror
    v-model="input"
    indentWithTab
    :extensions="[styleTheme, isDark ? oneDark : smoothy]"
    :tabSize="4"
  />
  <div :class="$style.actions">
    <VPButton :class="$style.run" @click="run" text="运行"></VPButton>
    <VPButton @click="reset" theme="alt" text="重置"></VPButton>
  </div>
  <p v-if="output.length || error">运行结果</p>
  <pre v-for="(it, index) in output" :key="index">{{ it }}</pre>
  <pre>{{ error }}</pre>
</template>
<style module>
.actions {
  margin-top: 20px;
}

.run {
  margin-right: 20px;
}
</style>
