/**
 * 获取浏览器执行文件的路径
 *
 */
export default function getBrowserExecutablePath(browserNameOrPath: string) {
  switch (browserNameOrPath.toLowerCase()) {
    case "edge":
      return "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
    case "chrome":
      return "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
    case "firefox":
      return "C:\\Program Files\\Mozilla Firefox\\firefox.exe";
    default:
      return browserNameOrPath;
  }
}
