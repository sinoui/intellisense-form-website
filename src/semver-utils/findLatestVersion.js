import { maxSatisfying } from "semver";

/**
 * 获取一组版本号中最新的版本号
 *
 * @param {strig[]} versions 一组版本号
 * @oaram {boolean} [includePrerelease=false] 是否包含先行版本号
 */
export default function findLatestVersion(versions, includePrerelease = false) {
  return maxSatisfying(versions, "*", {
    includePrerelease,
  });
}
