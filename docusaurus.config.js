const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "智能表单",
  tagline: "The tagline of my site",
  url: "http://sinoui.gitee.io",
  baseUrl: "/intellisense-form-website/",
  favicon: "img/favicon.ico",
  organizationName: "sinoui", // Usually your GitHub org/user name.
  projectName: "intellisense-form-website", // Usually your repo name.
  githubHost: "gitee.com",
  themeConfig: {
    prism: {
      additionalLanguages: ["java", "http", "nginx"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    navbar: {
      title: "智能表单",
      logo: { alt: "智能表单", src: "img/home/logo.png" },
      items: [{ to: "/docs", label: "文档", position: "left" }],
    },
    navbar: {
      title: "智能表单",
      logo: { alt: "智能表单", src: "img/home/logo.png" },
      items: [{ to: "/docs", label: "文档", position: "left" }],
    },
  },
  plugins: [
    "./plugins/enable-wasm-plugin.js",
    "./plugins/omit-license-plugin.js",
    "./plugins/root-resolve-plugin.js",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            if (sidebarItems[0]?.id?.startsWith("changelog/")) {
              return sidebarItems.reverse();
            }
            return sidebarItems;
          },
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
