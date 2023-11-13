// webworker.js

// Setup your project to serve `py-worker.js`. You should also serve
// `pyodide.js`, and all its associated `.asm.js`, `.json`,
// and `.wasm` files as well:
importScripts("https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js")

async function loadPyodideAndPackages() {
  self.pyodide = await loadPyodide()
}

const pyodideReadyPromise = loadPyodideAndPackages()

self.onmessage = async (event) => {
  // make sure loading is done
  await pyodideReadyPromise
  // Don't bother yet with this line, suppose our API is built in such a way:
  const { id, python, input } = event.data
  // Now is the easy part, the one that is similar to working in the main thread:
  try {
    let result = ""
    self.pyodide.setStdin({ stdin: () => input })
    self.pyodide.setStdout({ batched: (str) => (result = str) })
    await self.pyodide.runPythonAsync(python)
    self.postMessage({ result, error: '', id })
  } catch (error) {
    self.postMessage({ result: '', error: error.message, id })
  }
}
