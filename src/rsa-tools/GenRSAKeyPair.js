import React, { useCallback, useEffect, useState } from "react";
import Button from "@sinoui/core/Button";
import TabGroup, { Tab } from "@sinouiincubator/tab-group";
import CodeBlock from "@theme/CodeBlock";
import { genKeyPair } from "./rsa-tools-api";

/**
 * 生成 RSA 密钥对的工具
 */
export default function GenRSAKeyPair() {
  const [keyPair, setKeyPair] = useState();

  const load = useCallback(async () => {
    const keyPair = await genKeyPair();
    setKeyPair(keyPair);
  }, []);

  useEffect(() => {
    load();
  }, []);

  return (
    <p>
      <p>
        <Button raised onClick={load}>
          生成 RSA 密钥对
        </Button>
      </p>
      <blockquote>
        <p>注意，大概需要 3 ~ 5 秒生成密钥对，请耐心等待...</p>
      </blockquote>
      {keyPair ? (
        <TabGroup>
          <Tab title="公钥">
            <CodeBlock className="language-javascript">
              {keyPair.publicKey}
            </CodeBlock>
          </Tab>
          <Tab title="私钥">
            <CodeBlock className="language-javascript">
              {keyPair.privateKey}
            </CodeBlock>
          </Tab>
        </TabGroup>
      ) : (
        <div
          style={{
            height: 260,
          }}
        >
          正在生成密钥对，请稍等...
        </div>
      )}
    </p>
  );
}
