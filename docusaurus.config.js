module.exports = {
  title: "intellisense-form",
  tagline: "The tagline of my site",
  url: "http://sinoui.gitee.io",
  baseUrl: "/intellisense-form-website/",
  favicon: "img/favicon.ico",
  organizationName: "sinoui", // Usually your GitHub org/user name.
  projectName: "intellisense-form-website", // Usually your repo name.
  githubHost: "gitee.com",
  themeConfig: {},
  plugins: ["./src/plugins/web-worker-plugin.js"],
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["zh-cn"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "custom-css-editor",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
