import React from "react";
import CodeBlock from "@theme/CodeBlock";
import useLatestPackage from "./useLastestPackage";

const StartBackendShell = () => {
  const result = useLatestPackage("backend");

  const shell = `
  cd /apps/sino-intellisense-form/backend
  nohup java -Dspring.profiles.active=test -jar ${
    result?.name ?? ""
  } > intellisenseform.log &
  `
    .trim()
    .replace(/^ +/gm, "");

  return <CodeBlock className="language-bash">{shell}</CodeBlock>;
};

export default StartBackendShell;
