import RSA from 'wasm-rsa';

/**
 * 生成密钥对
 */
const genKeyPair = async () => {
  const rsa = await RSA();
  const startTime = performance.now();
  const bits = 2048;

  const privateKey = rsa.generateRSAPrivate(bits);
  rsa.createRSAPublic(privateKey.n, privateKey.e);
  
  const privateKeyString = rsa.privateKeyToPEM();
  const publicKeyString = rsa.publicKeyToPEM();

  console.log(`生成秘钥用时：${performance.now() - startTime} ms`);

  return {
    privateKey: privateKeyString,
    publicKey: publicKeyString,
  };
};

export default genKeyPair;
