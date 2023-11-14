const worker = new Worker("/worker.js")

const callbacks = {}

worker.onmessage = (event) => {
  const { id, ...data } = event.data
  const onSuccess = callbacks[id]
  delete callbacks[id]
  onSuccess(data)
}

const asyncRun = (() => {
  let id = 0 // identify a Promise
  return (python: string, input: string) => {
    // the id could be generated more carefully
    id = (id + 1) % Number.MAX_SAFE_INTEGER
    return new Promise<{ results: string[]; error: string }>((onSuccess) => {
      callbacks[id] = onSuccess
      worker.postMessage({ python, input, id })
    })
  }
})()

export { asyncRun }
