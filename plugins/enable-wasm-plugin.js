/**
 * 启用 wasm
 * ```
 */
function enableWasmPlugin() {
  return {
    name: "enable-wasm-plugin",
    configureWebpack(config, isServer, utils) {
      return {
        mergeStrategy: { "module.rules": "prepend" },
        module: {
          rules: [
            {
              test: /\.wasm$/,
              type: "webassembly/async",
            },
          ],
        },
        experiments: {
          asyncWebAssembly: true,
        },
      };
    },
  };
}

module.exports = enableWasmPlugin;
