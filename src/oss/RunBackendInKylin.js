import React from "react";
import CodeBlock from "@theme/CodeBlock";
import useLatestPackage from "./useLatestPackage";

/**
 * 展示在麒麟操作系统中运行智能表单后端的脚本
 */
const RunBackendInKylin = () => {
  const result = useLatestPackage("backend");

  const shell = `nohup java -Dspring.config.location=classpath:/ \\
  -Dspring.config.location=file:/apps/sino-intellisense-form/backend/config/ \\
  -Dspring.profiles.active=test \\
  -jar ${result?.name ?? "sino-intellisense-form-v1.12.0.jar"} \\
  > intellisenseform.log &`;
  return <CodeBlock className="language-bash">{shell}</CodeBlock>;
};

export default RunBackendInKylin;
