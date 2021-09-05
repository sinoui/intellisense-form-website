import OSS from "ali-oss";
import {
  OSS_ACCESS_KEY_ID,
  OSS_ACCESS_KEY_SECRET,
  OSS_BUCKET,
  OSS_REGION,
} from "../contants";
import getLatestVersion from "./getLatestVersion";

let client;
const getClient = () => {
  if (!client) {
    client = new OSS({
      region: OSS_REGION,
      accessKeyId: OSS_ACCESS_KEY_ID,
      accessKeySecret: OSS_ACCESS_KEY_SECRET,
      bucket: OSS_BUCKET,
    });
  }

  return client;
};

/**
 * 获取服务器上的安装包列表
 */
async function getClientList() {
  const list = await getClient().list();

  return list.objects;
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
 * 获取指定类型安装包的历史版本和下载链接
 */
export default async function getHistoryVersionList(type) {
  const latestVersion = await getLatestVersion();
  const list = await getClientList();
  const filterListByType = list
    .filter((item) =>
      type === "frontend" ? isFrontendObject(item) : isBackendObject(item)
    )
    .filter((item) => item.name.indexOf(latestVersion[type].version) === -1)
    .map((item) => ({
      name: getObjectName(item),
      version: getObjectVersion(item),
      url: item.url,
    }))
    .reverse();

  return filterListByType;
}
