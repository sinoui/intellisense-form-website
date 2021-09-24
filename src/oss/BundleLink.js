import React from "react";
import useLatestPackage from "./useLatestPackage";

/**
 * 智能表单发布包链接
 *
 * @returns
 */
const BundleLink = ({ children, type, isAlpha }) => {
  const result = useLatestPackage(type, isAlpha);

  return (
    <a href={result?.url}>
      {children}
      {result ? `(v${result.version})` : ""}
    </a>
  );
};

export default BundleLink;
