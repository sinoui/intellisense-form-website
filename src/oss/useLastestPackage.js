import { useEffect, useState } from "react";
import getLatestVersion from "./getLatestVersion";
import memoize from "lodash/memoize";

const memoGetLatestVersion = memoize(getLatestVersion);

/**
 * 使用最新版本的发布包
 * @param {'frontend' | 'backend'} type
 * @returns {{name: string; url: string; version: string} | undefined}
 */
function useLatestPackage(type) {
  const [result, setResult] = useState();

  useEffect(() => {
    let cancel = false;
    const init = async () => {
      const result = await memoGetLatestVersion();
      if (cancel) {
        return;
      }
      setResult(result[type]);
    };

    init();

    return () => {
      cancel = true;
    };
  }, []);

  return result;
}

export default useLatestPackage;
