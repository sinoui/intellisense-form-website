import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import useLatestPackage from './useLatestPackage';

/**
 * 展示下载发布包脚本的组件
 */
const DownloadBundleShell = ({ type }) => {
  const result = useLatestPackage(type, type === 'font');

  const shell =
    type === 'frontend'
      ? `
        # 下载智能表单前端发布包
        wget ${result?.url ?? ''}
        # 解压缩智能表单前端发布包
        unzip ${result?.name ?? ''} -d /apps/sino-intellisense-form/frontend
        `
          .trim()
          .replace(/^ +/gm, '')
      : type === 'font'
      ? `
        # 下载智能表单字体服务包
        wget ${result?.url ?? ''}
        # 解压缩智能表单字体服务包
        unzip ${
          result?.name ?? ''
        } -d /apps/sino-intellisense-form/dynamic-font-server
        # 解压后node_modules中的文件只有读写权限，需要提升文件的执行权限
        cd /apps/sino-intellisense-form/dynamic-font-server && chmod -R 777 node_modules
        `
          .trim()
          .replace(/^ +/gm, '')
      : `
        # 下载智能表单后端发布包
        wget ${result?.url ?? ''}
        # 将发布包移入 backend 目录中
        mv ${result?.name ?? ''} /apps/sino-intellisense-form/backend
        `
          .trim()
          .replace(/^ +/gm, '');

  return <CodeBlock className="language-bash">{shell}</CodeBlock>;
};

export default DownloadBundleShell;
