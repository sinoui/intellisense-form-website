import React from "react";
import useLatestPackage from "./useLastestPackage";

/**
 * 智能表单发布包链接
 *
 * @returns
 */
const BundleLink = ({ children, type }) => {
  const result = useLatestPackage(type);

  return (
    <a href={result?.url}>
      {children}
      {result ? `(v${result.version})` : ""}
    </a>
  );
};

export default BundleLink;
