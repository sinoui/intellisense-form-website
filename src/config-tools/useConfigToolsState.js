import { useEffect, useState } from "react";
import { debounceTime } from "rxjs/operators";
import { useFormState } from "@sinoui/rx-form-state";
import deepmerge from "deepmerge";

/**
 * 默认的配置
 *
 * 需要特别注意：在新增配置项时，需要考虑缓存配置和默认配置的深合并是否兼容。采用 `deepmerge` 合并默认配置和缓存配置的，如下所示：
 *
 * ```js
 * import deepmerge from 'deepmerge';
 *
 * const config = deepmerge(defaultConfig, cacheConfig);
 * ```
 */
export const defaultConfig = {
  port: 8085,
  db: {
    type: "mysql",
    url: "jdbc:mysql://127.0.0.1:3306/form?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false",
    username: "root",
    password: "12345678",
  },
  mongodb: {
    host: "127.0.0.1",
    port: 27017,
  },
  sinomatrix: {
    ssoServerUrl: "http://127.0.0.1:18880/sso",
    workflowDesignServerUri: "127.0.0.1:8088",
    workflowServerUri: "127.0.0.1:18003",
    uiasServerUri: "127.0.0.1:18001",
  },
};

const CACHE_KEY = "BACKEND_CONFIG";

function readCache() {
  const content = localStorage[CACHE_KEY];
  if (content != null) {
    try {
      const result = JSON.parse(content);
      return deepmerge(defaultConfig, result);
    } catch (e) {
      return undefined;
    }
  }
}

function saveCache(state) {
  const content = JSON.stringify(state);
  localStorage[CACHE_KEY] = content;
}

function useConfigToolsState() {
  const [defaultState] = useState(() => readCache() ?? defaultConfig);
  const formState = useFormState(defaultState);

  useEffect(() => {
    const subscription = formState.values$
      .pipe(debounceTime(200))
      .subscribe(saveCache);

    return () => subscription.unsubscribe();
  }, []);

  return formState;
}

export default useConfigToolsState;
