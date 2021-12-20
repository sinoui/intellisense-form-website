import { prompt, Separator } from "inquirer";
import getDevConfig from "../dev-config";
import AutoReleaseGiteePageOptions from "./AutoReleaseGiteePageOptions";

/**
 * 获取自动发布 gitee Page 的命令行参数
 *
 * @param options 命令行中的参数
 *
 * @returns 获取发布 gitee page 的命令参数
 */
export default async function getAutoReleaseGiteePageOptions(
  options: Partial<AutoReleaseGiteePageOptions>
): Promise<AutoReleaseGiteePageOptions> {
  const devOptions = await getDevConfig();
  let userName = options.userName ?? devOptions.gitee?.userName;
  let password = options.password ?? devOptions.gitee?.password;
  let browser = options.browser ?? devOptions.browser;

  const questions = [
    !userName && {
      type: "input",
      name: "userName",
      message: "请输入登录 gitee 的用户名或者手机号",
    },
    !password && {
      type: "password",
      name: "password",
      message: "请输入登录 gitee 的密码",
    },
    !browser && {
      type: "list",
      name: "browser",
      message: "请选择浏览器",
      choices: ["edge", "chrome", new Separator(), "指定浏览器路径"],
      default: "edge",
    },
  ].filter(Boolean);

  if (questions.length > 0) {
    const result = await prompt(questions);
    userName = userName ?? result.userName;
    password = password ?? result.password;
    browser = browser ?? result.browser;

    if (browser === "指定浏览器路径") {
      const { browserPath } = await prompt([
        {
          type: "input",
          name: "browserPath",
          message:
            "请输入浏览器路径（如：C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe）",
          validate: (path) => {
            if (/^[A-Z]:(\\{2}[^\\]+)+$/.test(path)) {
              return true;
            }
            return `${path}, 请输入正确的路径，如C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe`;
          },
        },
      ]);
      browser = browserPath;
    }
  }

  return {
    userName: userName!,
    password: password!,
    browser: browser!,
  };
}
