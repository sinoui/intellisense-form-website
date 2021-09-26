import type { ObjectMeta } from "ali-oss";
import { prerelease } from "semver";
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
 * @param obj
 * @returns
 */
const getObjectVersion = (obj: ObjectMeta) =>
  obj.name.split("/")[0].substring(1);

/**
 * 获取对象名称
 * @param obj
 * @returns
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
  return objects.map((item) => ({
    version: getObjectVersion(item),
    name: getObjectName(item),
    url: (item as any).url,
    isAlpha: prerelease(getObjectVersion(item)) != null,
  }));
};

export default memoAsyncFn(getReleaseList);
