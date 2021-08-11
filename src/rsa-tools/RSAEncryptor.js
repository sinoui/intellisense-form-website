import Button from "@sinoui/core/Button";
import TextInput from "@sinoui/core/TextInput";
import React, { useState } from "react";
import { Row, Column } from "@sinoui/core/Grid";
import message from "@sinoui/message";
import CodeBlock from "@theme/CodeBlock";
import styles from "./rsa-encryptor.module.css";
import { getPublicKey, encrypto } from "./rsa-tools-api";

const defaultPublicKeyString = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzgdvW9uvYoqzlAXpM7gs
BxCaRGrt1h9fIwWYfZUDO9qEI+S5h9jmPhfglnX0O8s05p1pWU1YbDqCR4kIiAyv
5RKe1HJd3BxJ1kp+Y/soBjNYqXvigkn90TgQE9Ip1t+LR5kRMgRbwSvvFqXm0aId
7468g8LxyavjHRfJy7uuiVVCw8qCh7HBdsIn/p3oS7yi64qbooRc+VQv+/NLFLeL
0izENXgpzCJEK/4Yy2ttrP6LODqP3fGmbjy2eNcOV2JkWGio/Akcr0K1+JsvW4wO
GDn9Atr1hzMgo9lpjjiBkRfzxrYNYMiKLO+AKW6WApzQmWuoSAEEPs9yq4yua5UY
9wIDAQAB
-----END PUBLIC KEY-----`;

/**
 * RSA 加密工具
 */
const RSAEncryptor = () => {
  const [encrypted, setEncrypted] = useState("");
  const [publicKey, setPublicKey] = useState(defaultPublicKeyString);
  const [text, setText] = useState("");

  const setDefaultPublicKey = () => {
    setPublicKey(defaultPublicKeyString);
  };

  const setPublicKeyFromTools = async () => {
    const publicKey = await getPublicKey();
    setPublicKey(publicKey);
  };

  const handleEncrypto = async () => {
    if (!text || text.trim().length === 0) {
      message.warning("请先填写需要加密的密码");
      return;
    }
    if (!publicKey || publicKey.trim().length === 0) {
      message.warning("请先填写公钥");
      return;
    }
    const request = {
      publicKeyString: publicKey,
      text,
    };

    try {
      const result = await encrypto(request);
      setEncrypted(result);
    } catch (e) {
      console.error(e);
      message.error("加密失败，请检查是否设置了正确的公钥。");
    }
  };

  return (
    <>
      <Row>
        <Column className={styles.columnLeft} lg={10} md={24}>
          <TextInput
            className={styles.input}
            variant="outlined"
            label="需要加密的密码"
            value={text}
            onChange={(event) => setText(event.target.value)}
            shrink
            required
          ></TextInput>
          <TextInput
            className={styles.input}
            variant="outlined"
            label="加密结果"
            value={encrypted}
            readOnly
            shrink
            multiline
            minRows={3}
            placeholder="点击加密按钮，生成加密结果"
          />
          <p>
            <Button raised onClick={handleEncrypto}>
              加密
            </Button>
          </p>
        </Column>
        <Column className={styles.columnRight} lg={14} md={24}>
          <p>
            <Button onClick={setDefaultPublicKey}>使用默认的公钥</Button>
            <Button onClick={setPublicKeyFromTools}>使用生成的RSA公钥</Button>
          </p>
          <TextInput
            className={styles.publicKeyInput}
            variant="outlined"
            label="公钥"
            multiline
            minRows={9}
            value={publicKey}
            onChange={(event) => setPublicKey(event.target.value)}
            required
          ></TextInput>
          <p></p>

          <blockquote>
            <p>* 表示必填</p>
          </blockquote>

          <blockquote>
            <ul>
              <li>默认的公钥是指智能表单项目中内置的公钥。</li>
              <li>
                生成的RSA公钥是指上个章节介绍的“生成RSA密钥对”工具生成的公钥。
              </li>
              <li>您也可以填入自己的RSA公钥。</li>
            </ul>
          </blockquote>
        </Column>
      </Row>
      {encrypted && (
        <div class="admonition admonition-tip alert alert--success">
          <div class="admonition-heading">
            <h5>
              <span class="admonition-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
                  ></path>
                </svg>
              </span>
              加密成功
            </h5>
          </div>
          <div class="admonition-content">
            <p>
              已加密成功，请在 application.yml 中按照下面的方式使用：
              <CodeBlock className="language-javascript">
                ENC({encrypted})
              </CodeBlock>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RSAEncryptor;
