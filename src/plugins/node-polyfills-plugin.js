/**
 * 启用 node polyfills 的插件
 *
 *  需要安装依赖：
 *
 * ```shell
 * yarn add crypto-browserify constants-browserify
 * ```
 */
function nodePolyfillsPlugin() {
  return {
    name: "node-polyfills-plugin",
    configureWebpack(config, isServer, utils) {
      // 参考 https://webpack.js.org/configuration/resolve/#resolvefallback
      return {
        resolve: {
          fallback: {
            crypto: require.resolve("crypto-browserify"),
            constants: require.resolve("constants-browserify"),
            assert: require.resolve("assert/"),
            buffer: require.resolve("buffer/"),
            stream: require.resolve("stream-browserify"),
            process: require.resolve("process/browser"),
            worker_threads: false,
          },
        },
      };
    },
  };
}

module.exports = nodePolyfillsPlugin;
