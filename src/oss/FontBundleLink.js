import React from "react";
import useLatestPackage from "./useLatestPackage";

/**
 * 字体服务包下载链接
 *
 * @returns
 */
const FontBundleLink = ({ children, isAlpha }) => {
  const result = useLatestPackage("font", isAlpha);

  return result ? (
    <>
      字体服务包：
      <a href={result?.url}>
        {children}
        {result ? `(v${result.version})` : ""}
      </a>
    </>
  ) : null;
};

export default FontBundleLink;
