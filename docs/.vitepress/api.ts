import axios from "axios"

interface Code {
  language: "C" | "Python3"
  value: string
}

const DEAD_RESULTS = {
  C: {
    encoded:
      "I2luY2x1ZGU8c3RkaW8uaD4NCg0KaW50IG1haW4oKQ0Kew0KICAgIHByaW50Zigi6buE5bKp5LiA6IGMIik7DQogICAgcmV0dXJuIDA7DQp9",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
  "C++": {
    encoded:
      "I2luY2x1ZGU8aW9zdHJlYW0+DQoNCnVzaW5nIG5hbWVzcGFjZSBzdGQ7DQoNCmludCBtYWluKCkNCnsNCiAgICBjb3V0PDwi6buE5bKp5LiA6IGMIjw8ZW5kbDsNCiAgICByZXR1cm4gMDsNCn0=",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
  Java: {
    encoded:
      "cHVibGljIGNsYXNzIE1haW4gew0KICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZ1tdIGFyZ3MpIHsNCiAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKCLpu4TlsqnkuIDogYwiKTsNCiAgICB9DQp9",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
  Python3: {
    encoded: "cHJpbnQoIum7hOWyqeS4gOiBjCIp",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
  Python2: {
    encoded: "",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
  Golang: {
    encoded: "",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
  JavaScript: {
    encoded: "",
    result: {
      status: 3,
      output: "黄岩一职",
    },
  },
}

function getChromeVersion() {
  var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
  return raw ? parseInt(raw[2], 10) : 0
}

const isLowVersion = getChromeVersion() < 80

const protocol = isLowVersion ? "http" : "https"

const http = axios.create({ baseURL: `${protocol}://judge0api.xuyue.cc` })

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
      C: 50,
      "C++": 54,
      Java: 62,
      Golang: 60,
      JavaScript: 63,
      Python2: 70,
      Python3: 71,
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
