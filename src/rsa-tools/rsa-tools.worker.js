import "./setupGlobalBuffer";
import NodeRSA from "node-rsa";
import genKeyPair from "./gen-key-pair";

/**
 * 处理器
 */
const Handlers = {
  "gen-key-pair": innerGenKeyPair,
  "get-public-key": getPublicKey,
  encrypto,
};

onmessage = (event) => {
  const { data } = event;
  const type = data?.type;
  const id = data?.id;
  const handler = Handlers[type];

  if (handler) {
    try {
      const response = handler(data.request);
      postMessage({
        type,
        id,
        response,
      });
    } catch (e) {
      postMessage({
        type,
        id,
        error: true,
        exception: e,
      });
    }
  }
};

let globalPublicKey = "";

/**
 * 生成密钥对
 */
function innerGenKeyPair() {
  const keypair = genKeyPair();
  globalPublicKey = keypair.publicKey;
  return keypair;
}

/**
 * 获取公钥
 *
 * @returns 公钥
 */
function getPublicKey() {
  return globalPublicKey;
}

/**
 * 加密
 *
 * @param request
 * @returns
 */
function encrypto(request) {
  const { publicKeyString, text } = request;

  const publicKey = new NodeRSA(publicKeyString, "pkcs8-public-pem", {
    environment: "browser",
    encryptionScheme: {
      scheme: "pkcs1",
      padding: 256,
    },
  });

  const encrypted = publicKey.encrypt(text, "base64");
  return encrypted;
}
