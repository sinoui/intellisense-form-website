import { parse, satisfies } from "semver";
import findLatestVersion from "./findLatestVersion";
import isPrereleaseVersion from "./isPrereleaseVersion";

function getRelaseVersionRange(version) {
  const parsedVersion = parse(version);
  const versionRange = `${parsedVersion.major}.${parsedVersion.minor}.x`;
  return versionRange;
}

function getPrereleaseVersionRange(version) {
  const parsedVersion = parse(version);
  const versionRange = `~${parsedVersion.major}.${parsedVersion.minor}.${parsedVersion.patch}-${parsedVersion.prerelease[0]}`;

  return versionRange;
}

/**
 * 获取最近的此版本号级别的版本号
 *
 * @param {string[]} versions 一组版本号
 *
 * @returns {string[]} 返回符合条件的版本号
 */
export default function findLatestMinorVersions(
  versions,
  includePrerelease = false
) {
  const latestVersion = findLatestVersion(versions, includePrerelease);
  const versionRange = isPrereleaseVersion(latestVersion)
    ? getPrereleaseVersionRange(latestVersion)
    : getRelaseVersionRange(latestVersion);

  return versions.filter((version) => satisfies(version, versionRange));
}
