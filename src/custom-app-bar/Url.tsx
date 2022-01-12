import React from "react";
import qs from "qs";
import CodeBlock from "@theme/CodeBlock";

interface Props {
  base: string;
  params?: Record<string, string>;
}

/**
 * 显示 url 的组件
 */
const Url: React.FC<Props> = ({ base, params }) => {
  const joiner = base.includes("?") ? "&" : "?";
  const searchParams = qs.stringify(params);
  return (
    <CodeBlock className="language-http">
      {base}
      {params && searchParams ? joiner : ""}
      {searchParams}
    </CodeBlock>
  );
};

export default Url;
