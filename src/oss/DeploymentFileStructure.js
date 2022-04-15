import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import FileTree from "../components/file-tree/FileTree";
import FileTreeNode from "../components/file-tree/FileTreeNode";
import useLatestPackage from "./useLatestPackage";

const stylesheet = {
  light: {
    codeblock: {
      color: "rgb(57, 58, 52)",
      backgroundColor: "rgb(246, 248, 250)",
    },
  },
  dark: {
    codeblock: {
      color: "rgb(248, 248, 242)",
      backgroundColor: "rgb(40, 42, 54)",
    },
  },
  strong: {
    fontSize: 16,
  },
};

/**
 * 推荐的部署文件结构
 */
const DeploymentFileStructure = () => {
  const { isDarkTheme } = useThemeContext();
  const styles = stylesheet[isDarkTheme ? "dark" : "light"];
  const result = useLatestPackage("backend");
  return (
    <div className="codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module">
      <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module">
        <pre
          className="prism-code language-undefined codeBlock_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module thin-scrollbar"
          style={styles.codeblock}
        >
          <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module">
            <FileTree>
              <FileTreeNode title="/apps/sino-intellisense-form">
                <FileTreeNode
                  title={<strong style={stylesheet.strong}>frontend</strong>}
                  description={
                    <>
                      智能表单前端文件夹，包含的子目录和文件都是从
                      <a href="#步骤二：下载智能表单前端发布包">前端压缩包</a>
                      中解压出来的
                    </>
                  }
                >
                  <FileTreeNode title="intellisense-form" />
                  <FileTreeNode title="intellisense-form-manager" />
                  <FileTreeNode title="intellisense-form-mobile" />
                </FileTreeNode>
                <FileTreeNode
                  title={<strong style={stylesheet.strong}>backend</strong>}
                  description="智能表单后端文件夹"
                >
                  <FileTreeNode
                    title={
                      <strong style={stylesheet.strong}>{result?.name}</strong>
                    }
                    description={
                      <>
                        需要
                        <a href="#步骤三：下载智能表单后端发布包">下载</a>
                      </>
                    }
                  />
                  <FileTreeNode
                    title={<strong style={stylesheet.strong}>config</strong>}
                    description={
                      <>
                        <a href="#步骤一：配置智能表单后端">后端配置</a>
                        ，可以通过工具生成
                      </>
                    }
                  >
                    <FileTreeNode title="application.yml" />
                    <FileTreeNode title="application-dev.yml" />
                    <FileTreeNode title="application-test.yml" />
                    <FileTreeNode title="application-prod.yml" />
                  </FileTreeNode>
                </FileTreeNode>
                <FileTreeNode
                  title={
                    <strong style={stylesheet.strong}>
                      dynamic-font-server
                    </strong>
                  }
                  description={
                    <>
                      智能表单字体服务文件夹。此服务是可选的，如果需要在 IE 11
                      中支持表单打印的pdf导出功能，需要部署字体服务
                      <a href="#步骤四：下载字体服务发布包">下载</a>
                    </>
                  }
                ></FileTreeNode>
              </FileTreeNode>
            </FileTree>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DeploymentFileStructure;
