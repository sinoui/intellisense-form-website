import Worker from "./rsa-tools.worker";

const isInBrowser = !!global.Worker;
const worker = isInBrowser ? new Worker() : null;

let idSeed = 1;

export async function genKeyPair() {
  return sendMessage("gen-key-pair");
}

export async function getPublicKey() {
  return sendMessage("get-public-key");
}

export async function encrypto(request) {
  return sendMessage("encrypto", request);
}

async function sendMessage(type, request) {
  const id = idSeed++;
  worker.postMessage({ type, id, request });
  return new Promise((resolve, reject) => {
    const onMessage = (event) => {
      const { data } = event;
      if (data?.id === id) {
        worker.removeEventListener("messasge", onMessage);
        if (data.error) {
          reject(data.exception);
        } else {
          resolve(data.response);
        }
      }
    };

    worker.addEventListener("message", onMessage);
  });
}
