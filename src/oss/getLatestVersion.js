import OSS from "ali-oss";
import findLatestMinorVersions from "../semver-utils/findLatestMinorVersions";
import {
  OSS_ACCESS_KEY_ID,
  OSS_ACCESS_KEY_SECRET,
  OSS_BUCKET,
  OSS_REGION,
} from "../contants";
import { compare, valid } from "semver";

const client = new OSS({
  region: OSS_REGION,
  accessKeyId: OSS_ACCESS_KEY_ID,
  accessKeySecret: OSS_ACCESS_KEY_SECRET,
  bucket: OSS_BUCKET,
});

/**
 * 获取最新的次版本号
 */
async function getLatestMinorVersion() {
  const subjects = await client.list({
    delimiter: "/",
  });
  const { prefixes } = subjects;

  const versions = prefixes
    .map((prefix) => prefix.substring(1, prefix.length - 1))
    .filter(valid);

  const latestMinorVersions = findLatestMinorVersions(versions);

  return latestMinorVersions.map((version) => `v${version}`);
}

/**
 * 判断指定对象是否是前端对象
 *
 * @param { import('ali-oss').ObjectMeta } object 需要判定的对象
 *
 * @returns 如果是前端对象，则返回 true；否则返回 false
 */
function isFrontendObject(object) {
  return object.name.endsWith(".zip") || object.name.endsWith(".tar.gz");
}

/**
 * 判断指定对象是否是后端对象
 *
 * @param { import('ali-oss').ObjectMeta } object 需要判定的对象
 * @returns
 */
function isBackendObject(object) {
  return object.name.endsWith(".jar");
}

/**
 * 获取对象的版本号
 *
 * @param {import('ali-oss').ObjectMeta} obj
 * @returns
 */
const getObjectVersion = (obj) => obj.name.split("/")[0].substring(1);

/**
 * 获取对象名称
 * @param {import('ali-oss').ObjectMeta} obj
 * @returns
 */
const getObjectName = (obj) => obj.name.split("/")[1];

/**
 * 获取最新版本的对象
 *
 * @param { import('ali-oss').ObjectMeta[] } objects
 */
function getLatestVersionObject(objects) {
  let result = objects[0];

  if (result == null) {
    return result;
  }

  let latestVersion = getObjectVersion(result);

  objects.forEach((obj) => {
    const version = getObjectVersion(obj);
    if (compare(latestVersion, version) === -1) {
      result = obj;
      latestVersion = version;
    }
  });

  return result;
}

/**
 * 获取下载包的最新版本和下载链接
 */
export default async function getLatestVersion() {
  const latestMinorVersions = await getLatestMinorVersion();
  const subjects = await client.list({
    prefixes: latestMinorVersions,
  });

  const latestFrontend = getLatestVersionObject(
    subjects.objects.filter(isFrontendObject)
  );
  const latestBackend = getLatestVersionObject(
    subjects.objects.filter(isBackendObject)
  );

  return {
    backend: {
      url: latestBackend.url,
      version: getObjectVersion(latestBackend),
      name: getObjectName(latestBackend),
    },
    frontend: {
      url: latestFrontend.url,
      version: getObjectVersion(latestFrontend),
      name: getObjectName(latestFrontend),
    },
  };
}
