import { useEffect, useState } from "react";
import getLatestVersion from "./getLatestVersion";

/**
 * 使用最新版本的发布包
 * @param {'frontend' | 'backend'| 'font'} type
 * @param {boolean} isAlpha
 * @returns {{name: string; url: string; version: string} | undefined}
 */
function useLatestPackage(type, isAlpha) {
  const [result, setResult] = useState();

  useEffect(() => {
    let cancel = false;
    const init = async () => {
      const result = await getLatestVersion(isAlpha);
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
