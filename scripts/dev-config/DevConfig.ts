export default interface DevConfig {
  /**
   * gitee 登录信息
   */
  gitee?: {
    /**
     * 登录 gitee 的用户名。
     */
    userName?: string;
    /**
     * 登录 gitee 的密码。
     */
    password?: string;
  };
  browser?: string;
}
