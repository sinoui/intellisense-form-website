import { compare } from "semver";
import getLatestVersion from "./getLatestVersion";
import getReleaseList from "./getReleaseList";
import type { ReleaseItem } from "./types";

/**
 * 判断指定对象是否是前端对象
 *
 * @param object 需要判定的对象
 *
 * @returns 如果是前端对象，则返回 true；否则返回 false
 */
function isFrontendObject(object: ReleaseItem) {
  return (
    (object.name.endsWith(".zip") || object.name.endsWith(".tar.gz")) &&
    object.name.indexOf("dynamic-font-server") === -1
  );
}

/**
 * 判断指定对象是否是后端对象
 *
 * @param object 需要判定的对象
 * @returns
 */
function isBackendObject(object: ReleaseItem) {
  return object.name.endsWith(".jar");
}

/**
 * 判断指定对象是否是字体对象
 * @returns
 */
function isFontObject(object: ReleaseItem) {
  return object.name.indexOf("dynamic-font-server") !== -1;
}

/**
 * 获取指定类型安装包的历史版本和下载链接
 *
 * @param type 类型
 */
export default async function getHistoryVersionList(
  type: "frontend" | "backend" | "font"
) {
  const latestVersion = await getLatestVersion();
  const list = await getReleaseList();
  return list
    .filter((item) =>
      type === "frontend"
        ? isFrontendObject(item)
        : type === "font"
        ? isFontObject(item)
        : isBackendObject(item)
    )
    .filter((item) => !item.isAlpha)
    .filter((item) => item.name.indexOf(latestVersion[type].version) === -1)
    .sort((item1, item2) => -compare(item1.version, item2.version));
}
