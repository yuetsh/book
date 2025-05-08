import axios from "axios"
import { inBrowser } from "vitepress"

interface Code {
  language: "c" | "python"
  value: string
}

const DEAD_RESULTS = {
  c: {
    encoded:
      "I2luY2x1ZGU8c3RkaW8uaD4NCg0KaW50IG1haW4oKQ0Kew0KICAgIHByaW50Zigi6buE5bKp5LiA6IGMIik7DQogICAgcmV0dXJuIDA7DQp9",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
  python: {
    encoded: "cHJpbnQoIum7hOWyqeS4gOiBjCIp",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
}

//@ts-ignore
const http = axios.create({ baseURL: import.meta.env.VITE_JUDGE0_URL })

function encode(string?: string) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(string ?? "")))
}

function decode(bytes?: string) {
  const latin = atob(bytes ?? "")
  return new TextDecoder("utf-8").decode(
    Uint8Array.from({ length: latin.length }, (_, index) =>
      latin.charCodeAt(index),
    ),
  )
}

export async function createSubmission(code: Code, input: string) {
  const encodedCode = encode(code.value)

  if (encodedCode === DEAD_RESULTS[code.language].encoded) {
    return DEAD_RESULTS[code.language].result
  } else {
    const id = {
      c: 50,
      python: 71,
    }[code.language]
    let compilerOptions = ""
    if (id === 50) compilerOptions = "-lm" // 解决 GCC 的链接问题
    const payload = {
      source_code: encodedCode,
      language_id: id,
      stdin: encode(input),
      redirect_stderr_to_stdout: true,
      compiler_options: compilerOptions,
    }
    const response = await http.post("/submissions", payload, {
      params: { base64_encoded: true, wait: true },
    })
    const data = response.data
    return {
      status: data.status && data.status.id,
      output: [decode(data.compile_output), decode(data.stdout)]
        .join("\n")
        .trim(),
    }
  }
}
