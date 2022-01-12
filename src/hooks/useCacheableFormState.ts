import { useFormState } from "@sinoui/rx-form-state";
import deepmerge from "deepmerge";
import { useEffect, useState } from "react";
import { debounceTime } from "rxjs/operators";

function readCache(name: string, defaultValue: Record<string, any>) {
  const content = localStorage[name];
  if (content != null) {
    try {
      const result = JSON.parse(content);
      return deepmerge(defaultValue, result);
    } catch (e) {
      return undefined;
    }
  }
}

const createSaveCache = (cacheName: string) =>
  function saveCache(state) {
    const content = JSON.stringify(state);
    localStorage[cacheName] = content;
  };

export default function useCacheableFormState(
  cacheName: string,
  defaultValue?: Record<string, any>
) {
  const [defaultState] = useState(
    () => readCache(cacheName, defaultValue) ?? defaultValue
  );
  const formState = useFormState(defaultState);

  useEffect(() => {
    const saveCache = createSaveCache(cacheName);
    const subscription = formState.values$
      .pipe(debounceTime(200))
      .subscribe(saveCache);

    return () => subscription.unsubscribe();
  }, [cacheName]);

  return formState;
}
