/**
 * 发布项目
 */
export interface ReleaseItem {
  /**
   * 名称
   */
  name: string;
  /**
   * 版本号
   */
  version: string;
  /**
   * 包下载链接
   */
  url: string;
  /**
   * 是否是预发布版本
   */
  isAlpha: boolean;
}
