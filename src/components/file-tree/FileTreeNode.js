import React from "react";

const stylesheet = {
  description: {
    color: "rgb(153, 153, 136)",
    fontSize: 14,
    paddingLeft: "1em",
    fontStyle: "italic",
  },
};

/**
 * 文件树节点
 */
const FileTreeNode = ({ children, title, description, level = 0 }) => {
  const childNodes = React.Children.toArray(children)
    .filter(Boolean)
    .filter(React.isValidElement)
    .map((child) => React.cloneElement(child, { level: level + 1 }));

  const paddingLeft = level > 1 ? 24 : 0;
  return (
    <div className="file-tree-node" style={{ paddingLeft }}>
      <div className="file-tree-node-title">
        {level > 0 ? "|____ " : ""}
        {title}
        <span style={stylesheet.description}>{description}</span>
      </div>
      {children && <div className="file-tree-node-children">{childNodes}</div>}
    </div>
  );
};

export default FileTreeNode;
