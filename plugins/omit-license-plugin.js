const TerserPlugin = require("terser-webpack-plugin");

/**
 * 删除 .LICENSE.txt 文件
 */
function omitLicensePlugin() {
  return {
    name: "omit-license-plugin",
    configureWebpack(config) {
      const { minimizer } = config.optimization;
      const index =
        minimizer?.findIndex((item) => item instanceof TerserPlugin) ?? -1;
      if (index !== -1) {
        minimizer[index] = new TerserPlugin({
          parallel: true,
          extractComments: false,
          test: /\.[cm]?js(\?.*)?$/i,
        });
      }
      return {};
    },
  };
}

module.exports = omitLicensePlugin;
