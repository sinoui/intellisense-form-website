import type { ObjectMeta } from "ali-oss";
import { prerelease, valid } from "semver";
import {
  OSS_ACCESS_KEY_ID,
  OSS_ACCESS_KEY_SECRET,
  OSS_BUCKET,
  OSS_REGION,
} from "../contants";
import { ReleaseItem } from "./types";
import memoAsyncFn from "../utils/memo-async-fn";

/**
 * 获取 oss 客户端
 */
const getClient = async () => {
  const { default: OSS } = await import("ali-oss");
  return new OSS({
    region: OSS_REGION,
    accessKeyId: OSS_ACCESS_KEY_ID,
    accessKeySecret: OSS_ACCESS_KEY_SECRET,
    bucket: OSS_BUCKET,
  });
};

/**
 * 获取对象的版本号
 *
 * 从对象 name 中获取版本号，对象 name 示例：`v1.13.0/abc.zip`，则对象版本号为 `1.13.0`。
 *
 * 这里的对象对应 oss 中的一个文件，[对象存储](https://baike.baidu.com/item/%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8/6888656)的中一个项。
 *
 * @param obj oss 对象
 * @returns 返回对象的版本号
 */
const getObjectVersion = (obj: ObjectMeta) =>
  obj.name.split("/")[0].substring(1);

/**
 * 获取对象名称
 *
 * 从对象 name 中获取对象名称，对象 name 示例：`v1.13.0/abc.zip`，则对象名称为 `abc.zip`。
 *
 * @param obj oss 对象
 * @returns 返回对象名称
 */
const getObjectName = (obj: ObjectMeta) => obj.name.split("/")[1];

let isBrowser = typeof window !== "undefined";

/**
 * 获取所有的发行信息
 */
const getReleaseList = async (): Promise<ReleaseItem[]> => {
  if (!isBrowser) {
    return [];
  }

  const client = await getClient();
  const { objects } = await client.list(null, {});
  return objects
    .map((obj) => ({
      version: getObjectVersion(obj),
      name: getObjectName(obj),
      url: (obj as any).url,
      isAlpha: prerelease(getObjectVersion(obj)) != null,
    }))
    .filter((item) => valid(item.version));
};

export default memoAsyncFn(getReleaseList);
