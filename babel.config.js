// babel.config.js
module.exports = (api) => {
  const isTest = api.env("test");
  // 你可以使用 isTest 来决定需要使用到的预设和插件。

  if (isTest) {
    return {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    };
  }
  return {
    presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  };
};
