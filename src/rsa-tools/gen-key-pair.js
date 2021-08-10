import NodeRSA from "node-rsa";

/**
 * 生成密钥对
 */
const genKeyPair = () => {
  const key = new NodeRSA({
    environment: "browser",
    encryptionScheme: {
      scheme: "pkcs1",
      padding: 256,
    },
  });

  const privateKeyString = key.exportKey("pkcs8-private-pem");
  const publicKeyString = key.exportKey("pkcs8-public-pem");

  return {
    privateKey: privateKeyString,
    publicKey: publicKeyString,
  };
};

export default genKeyPair;
