export default function ssoServerUrlValidateFn(url) {
  if (
    !(
      (url.startsWith("http://") || url.startsWith("https://")) &&
      url.indexOf("/sso") !== -1
    )
  ) {
    return "链接地址不正确";
  }
}
