import React from "react";
import CodeBlock from "@theme/CodeBlock";
import useLatestPackage from "./useLastestPackage";

/**
 * 展示下载发布包脚本的组件
 */
const DownloadBundleShell = ({ type }) => {
  const result = useLatestPackage(type);

  const shell =
    type === "frontend"
      ? `
        # 下载智能表单前端发布包
        wget ${result?.url ?? ""}
        # 解压缩智能表单前端发布包
        unzip ${result?.name ?? ""} -d /apps/sino-intellisense-form/frontend
        `.trim()
        .replace(/^ +/gm, "")
      : `
        # 下载智能表单后端发布包
        wget ${result?.url ?? ""}
        # 将发布包移入 backend 目录中
        mv ${result?.name ?? ""} /apps/sino-intellisense-form/backend
        `
          .trim()
          .replace(/^ +/gm, "");

  return <CodeBlock className="language-bash">{shell}</CodeBlock>;
};

export default DownloadBundleShell;
