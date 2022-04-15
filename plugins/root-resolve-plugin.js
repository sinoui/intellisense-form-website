const path = require("path");

/**
 * 根项目引用解析插件
 */
function rootResolvePlugin() {
  return {
    name: "root-resolve-plugin",
    configureWebpack(config) {
      if (!config.resolve) {
        config.resolve = {
          alias: {},
        };
      }

      if (!config.resolve.alias) {
        config.resolve.alias = {};
      }

      config.resolve.alias["@"] = path.resolve(__dirname, "../src");
      return {};
    },
  };
}

module.exports = rootResolvePlugin;
