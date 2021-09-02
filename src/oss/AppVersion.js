import React from 'react';
import { maxSatisfying } from 'semver';
import useLatestPackage from "./useLastestPackage";

/**
 * 应用版本号
 */
const AppVersion = () => {
  const backend = useLatestPackage('backend');
  const frontend = useLatestPackage('frontend');
  const latestVersion = backend?.version && frontend?.version ?
  maxSatisfying([backend.version, frontend.version], '*') : '';

  return <span>{latestVersion}</span>;
}

export default AppVersion;
