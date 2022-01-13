import React from "react";

interface Props {
  version: string;
  type: "frontend" | "backend" | "font";
}

const VersionBundleLink: React.FC<Props> = ({ version, type }) => {
  const name =
    type === "font"
      ? `dynamic-font-server-v${version}.zip`
      : `sino-intellisense-form-v${version}.${
          type === "backend" ? "jar" : "zip"
        }`;
  const href = `http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v${version}/${name}`;
  return <a href={href}>{name}</a>;
};

export default VersionBundleLink;
