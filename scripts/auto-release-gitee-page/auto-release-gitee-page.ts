import puppeteer from "puppeteer-core";
import AutoReleaseGiteePageOptions from "./AutoReleaseGiteePageOptions";
import getAutoReleaseGiteePageOptions from "./get-auto-release-gitee-page-options";
import getBrowserExecutablePath from "./get-browser-executable-path";

async function login(page: puppeteer.Page, userName: string, password: string) {
  await page.goto("https://gitee.com/login");
  await page.type("#user_login", userName);
  await page.type("#user_password", password);

  await Promise.all([
    page.waitForNavigation({
      timeout: 500000,
    }),
    page.click("input.large"),
  ]);
}

async function tryRelease(page: puppeteer.Page) {
  await page.goto("https://gitee.com/sinoui/intellisense-form-website/pages");
  const updateButton = await page.$(".button.update_deploy");

  if (updateButton) {
    page.once("dialog", (dialog) => {
      dialog.accept();
    });
    await updateButton.click();
    try {
      await page.waitForSelector("#pages_deploying");
    } catch {
      const maxMinute = await page.$("#max_1_minute");
      console.error(
        "发布失败，原因：" +
          (maxMinute ? "发布太频繁，1分钟后再发布" : "未知错误")
      );
      return false;
    }

    await page.waitForSelector("#pages_deploying", {
      hidden: true,
      // 5 分钟超时
      timeout: 5 * 60 * 1000,
    });
    return true;
  }
  return false;
}

/**
 * 自动推送 gitee page
 *
 * @param options 命令行中的参数
 *
 * @returns 获取发布 gitee page 的命令参数
 */
export default async function autoReleaseGiteePage(
  options: Partial<AutoReleaseGiteePageOptions>
) {
  const { userName, password, browser } = await getAutoReleaseGiteePageOptions(
    options
  );

  console.log("即将打开浏览器，并加载 gitee page 页面，请勿关闭。");

  const browserPath = getBrowserExecutablePath(browser);

  const browserObj = await puppeteer.launch({
    headless: false,
    executablePath: browserPath,
  });
  const page = await browserObj.newPage();

  if (!(await tryRelease(page))) {
    await login(page, userName, password);
  }

  if (await tryRelease(page)) {
    console.log("已发布 gitee page");

    try {
      page.close();
      browserObj.close();
    } catch {
      console.error("关闭浏览器失败，请自行关闭浏览器");
    }
  } else {
    console.log("gitee page 发布失败，请查明原因");
  }
}
