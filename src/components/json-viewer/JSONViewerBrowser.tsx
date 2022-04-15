import React, { useState } from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import ReactJSON, { CollapsedFieldProps } from "react-json-view";
import copy from "copy-text-to-clipboard";
import githubTheme from "./json-viewer-theme-github";
import draculaTheme from "./json-viewer-theme-dracula";
import HighLight from "../high-light";
import "./JSONViewer.css";

interface Props {
  title?: string;
  src: object;
  shouldCollapse: (field: CollapsedFieldProps) => boolean;
  enableClipboardNode?: boolean;
}

/**
 * 展示 JSON 对象的组件
 */
const JSONViewerBrowser: React.FC<Props> = ({
  src,
  title,
  shouldCollapse,
  enableClipboardNode = false,
}) => {
  const { isDarkTheme } = useThemeContext();
  const theme = isDarkTheme ? draculaTheme : githubTheme;
  const code = JSON.stringify(src);

  const [showCopied, setShowCopied] = useState(false);
  const handleCopyCode = () => {
    copy(code);
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  return (
    <div className="sinoui-json-viewer">
      {title && (
        <HighLight language="json" code={code}>
          {({ style }) => (
            <>
              <div style={style} className="sinoui-json-viewer__title">
                {title}
              </div>
              <ReactJSON
                style={style}
                src={src}
                theme={theme}
                displayObjectSize={false}
                displayDataTypes={false}
                indentWidth={2}
                shouldCollapse={shouldCollapse}
                name={false}
                enableClipboard={enableClipboardNode}
              />
            </>
          )}
        </HighLight>
      )}
      <button
        className="sinoui-json-viewer__copy-button clean-btn"
        onClick={handleCopyCode}
      >
        {showCopied ? "已拷贝" : "拷贝"}
      </button>
    </div>
  );
};

export default JSONViewerBrowser;
