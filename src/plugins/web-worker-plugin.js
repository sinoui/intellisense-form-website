/**
 * 启用 web worker 的插件。
 *
 *  需要安装依赖：
 *
 * ```shell
 * yarn add worker-loader
 * ```
 */
function webWorkerPlugin() {
  return {
    name: "web-worker-plugin",
    configureWebpack(config, isServer, utils) {
      return {
        mergeStrategy: { "module.rules": "prepend" },
        module: {
          rules: [
            {
              test: /\.worker\.js$/, //以.worker.js结尾的文件将被worker-loader加载
              use: ["worker-loader"],
            },
          ],
        },
      };
    },
  };
}

module.exports = webWorkerPlugin;
