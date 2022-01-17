import RSA from "wasm-rsa";
import { Buffer } from "buffer";
import genKeyPair from "./gen-key-pair";

/**
 * 处理器
 */
const Handlers = {
  "gen-key-pair": innerGenKeyPair,
  "get-public-key": getPublicKey,
  encrypto,
};

onmessage = async (event) => {
  const { data } = event;
  const type = data?.type;
  const id = data?.id;
  const handler = Handlers[type];

  if (handler) {
    try {
      const response = await handler(data.request);
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
async function innerGenKeyPair() {
  const keypair = await genKeyPair();
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
async function encrypto(request) {
  const { publicKeyString, text } = request;

  const rsa = await RSA();

  rsa.createRSAPublicFromPEM(publicKeyString);

  const endataHex = rsa.publicEncrypt(text);
  // wasm-rsa 加密后的密文采用 hex 编码，需要转成 base64 编码
  const endata = Buffer.from(endataHex, "hex");
  const endataBase64 = endata.toString("base64");
  return endataBase64;
}
