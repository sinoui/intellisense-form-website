import { compare, valid } from "semver";
import getReleaseList from "./getReleaseList";
import type { ReleaseItem } from "./types";

/**
 * 判断指定对象是否是前端对象
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
 * 获取最新版本的对象
 *
 * @param objects
 */
function getLatestVersionObject(objects: ReleaseItem[]) {
  let result = objects[0];

  if (result == null) {
    return result;
  }

  let latestVersion = result.version;

  objects.forEach((obj) => {
    const version = obj.version;
    if (compare(latestVersion, version) === -1) {
      result = obj;
      latestVersion = version;
    }
  });

  return result;
}

function getLatestPrerelease(items: ReleaseItem[]) {
  return getLatestVersionObject(items.filter((item) => item.isAlpha));
}

/**
 * 获取下载包的最新版本和下载链接
 *
 * @param isAlpha 是否包含预发布版本
 */
export default async function getLatestVersion(isAlpha = false): Promise<{
  backend: ReleaseItem;
  frontend: ReleaseItem;
  font: ReleaseItem;
}> {
  const releaseList = await getReleaseList();
  const objects = releaseList
    .filter(({ version }) => !!version && valid(version))
    .filter((item) => isAlpha || !item.isAlpha);

  const findLatest = (filter: (items: ReleaseItem) => boolean) => {
    const items = objects.filter(filter);
    if (isAlpha) {
      return getLatestPrerelease(items) ?? getLatestVersionObject(items);
    }
    return getLatestVersionObject(items);
  };

  const latestFrontend = findLatest(isFrontendObject);
  const latestBackend = findLatest(isBackendObject);
  const latestFont = findLatest(isFontObject);

  return {
    backend: latestBackend,
    frontend: latestFrontend,
    font: latestFont,
  };
}
