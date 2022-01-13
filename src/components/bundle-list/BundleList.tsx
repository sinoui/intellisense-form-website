import React from "react";
import VersionBundleLink from "../version-bundle-link/VersionBundleLink";

interface Props {
  /**
   * 指定前端包版本
   */
  frontend: string;
  /**
   * 指定后端包版本
   */
  backend: string;
  /**
   * 指定字体服务版本
   */
  font?: string;

  version: string;
}

/**
 * 下载包列表
 */
const BundleList: React.FC<Props> = ({ font, frontend, backend, version }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>发布包名称</th>
          <th>下载链接</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>前端包{version === frontend ? "（新版本）" : ""}</td>
          <td>
            <VersionBundleLink type="frontend" version={frontend} />
          </td>
        </tr>
        <tr>
          <td>后端包{version === backend ? "（新版本）" : ""}</td>
          <td>
            <VersionBundleLink type="backend" version={backend} />
          </td>
        </tr>
        {font && (
          <tr>
            <td>字体服务{version === font ? "（新版本）" : ""}</td>
            <td>
              <VersionBundleLink type="font" version={font} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default BundleList;
