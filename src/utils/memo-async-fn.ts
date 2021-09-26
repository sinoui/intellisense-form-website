function memoAsyncFn<T extends (...args: any) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => any
): T;

/**
 * 缓存异步函数
 *
 * 规则：
 *
 * * 只缓存正确的成果
 * * 只缓存 10 分钟
 *
 * @param fn
 */
function memoAsyncFn(fn: any) {
  const cache: Record<string, Promise<any>> = {};
  const memoizeFn = (...args: any[]) => {
    const key = args[0] ?? "$$$";
    const cacheValue = cache[key];
    if (cacheValue) {
      return cacheValue;
    }

    const resolvedValue = fn(...args);
    cache[key] = resolvedValue;
    resolvedValue.catch((e) => {
      delete cache[key];
      throw e;
    });
    setTimeout(() => {
      delete cache[key];
    }, 5 * 60 * 1000);

    return resolvedValue;
  };

  return memoizeFn;
}

export default memoAsyncFn;
