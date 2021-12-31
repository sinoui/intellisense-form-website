/**
 * 自动发布 gitee page 的命令参数
 */
export default interface AutoReleaseGiteePageOptions {
  /**
   * 登录 gitee 的用户名。
   */
  userName: string;
  /**
   * 登录 gitee 的密码。
   */
  password: string;
  /**
   * 打开发布 gitee page 页面的浏览器。
   */
  browser: string;
}
