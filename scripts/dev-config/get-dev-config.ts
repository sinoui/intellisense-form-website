import { readFile } from "fs/promises";
import { resolve } from "path";
import DevConfig from "./DevConfig";

/**
 * 获取 .dev.json 中的配置
 *
 * @returns 返回解析后的配置
 */
export default async function getDevConfig(): Promise<DevConfig> {
  let content: string | undefined;
  try {
    content = await readFile(resolve(process.cwd(), ".dev.json"), "utf-8");
  } catch {}

  try {
    return content ? JSON.parse(content) : {};
  } catch (e) {
    console.error("无法解析 .dev.json 中的内容，请确认文件配置格式是否正确。");
    throw e;
  }
}
