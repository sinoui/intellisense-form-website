import { Command } from "commander";
import autoReleaseGiteePage from "./auto-release-gitee-page";

const program = new Command();
program.version("1.0.0");

program
  .command("auto-release-gitee-page")
  .description(
    "自动发布 gitee page，通过 puppeteer 模拟人打开 gitee page 页面，点击发布按钮的过程"
  )
  .option(
    "-u, --user-name, --user <userName>",
    "指定登录 gitee 的用户名，一般为手机号。默认从 .dev.json 配置文件中读取 gitee.userName。"
  )
  .option(
    "-p, --password <password>",
    "指定登录 gitee 的密码。默认从 .dev.json 配置文件中读取 gitee.password"
  )
  .option(
    "-b, --browser <browser>",
    "指定打开 gitee page 发布页面的浏览器，如 edge、chrome，或者浏览器可执行文件的路径。默认从 .dev.json 配置文件中读取 browser ，如果没有指定，则默认为 edge。"
  )
  .action((options) => {
    autoReleaseGiteePage(options);
  });

program.parse(process.argv);
