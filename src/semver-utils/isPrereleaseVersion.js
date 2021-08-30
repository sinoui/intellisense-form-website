import { prerelease } from "semver";

/**
 * 判断指定版本号是否是先行版本号
 *
 * @param {string} version 版本号
 * @returns 如果是先行版本号，则返回 true；否则返回 false
 */
export default function isPrereleaseVersion(version) {
  const prereleaseVersion = prerelease(version);

  return prereleaseVersion != null && prereleaseVersion.length > 0;
}
