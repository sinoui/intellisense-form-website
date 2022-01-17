import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import type { CollapsedFieldProps } from "react-json-view";

interface Props {
  title?: string;
  src: object;
  shouldCollapse: (field: CollapsedFieldProps) => boolean;
  enableClipboardNode?: boolean;
}

/**
 * 展示 JSON 对象的组件
 */
const JSONViewer: React.FC<Props> = (props) => {
  const isBrowser = useIsBrowser();

  if (!isBrowser) {
    return null;
  }

  const JSONViewerBrowser = require("./JSONViewerBrowser").default;

  return <JSONViewerBrowser {...props} />;
};

export default JSONViewer;
