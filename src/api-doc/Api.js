import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Heading from "../components/heading";

const Api = ({
  name,
  title,
  description,
  method = "GET",
  requestParams,
  successExample,
  children,
  errorExample = {
    status: "0",
    msg: "响应失败",
  },
}) => {
  const id = title.toLocaleLowerCase().replace(/[ .]+/g, "-");
  return (
    <>
      <Heading id={id}>{title}</Heading>
      {description && <p>{description}</p>}
      <Heading as="h4" id={`${id}-配置项`}>
        配置项
      </Heading>
      <code>url.{name}</code>
      <Heading as="h4" id={`${id}-请求方法`}>
        请求方法
      </Heading>
      <p>
        <code>{method}</code>
      </p>
      {requestParams && requestParams.length > 0 && (
        <>
          <Heading as="h4" id={`${id}-请求参数`}>
            请求参数
          </Heading>
          <ul>
            {requestParams.map((param) => (
              <li key={param.name}>
                <code>{param.name}</code> - {param.message}
              </li>
            ))}
          </ul>
        </>
      )}
      <Heading as="h4" id={`${id}-接口响应`}>
        接口响应
      </Heading>
      <p>
        需要以 <code>application/json</code> 格式返回以下格式的信息：
      </p>
      <CodeBlock className="language-json">
        {JSON.stringify(successExample, null, 2)}
      </CodeBlock>
      {children}
      <p>如果获取失败，可以返回以下格式的信息：</p>
      <CodeBlock className="language-json">
        {JSON.stringify(errorExample, null, 2)}
      </CodeBlock>
    </>
  );
};

export default Api;
