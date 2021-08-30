import { useEffect, useState } from "react";
import memoize from "lodash/memoize";

let fn;

const loadGetLatestVersion = async () => {
  if (!fn) {
    const { default: getLatestVersionFn } = await import("./getLatestVersion");
    fn = memoize(getLatestVersionFn);
  }
  return fn;
};

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
      const getLatestVersion = await loadGetLatestVersion();
      const result = await getLatestVersion();
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
