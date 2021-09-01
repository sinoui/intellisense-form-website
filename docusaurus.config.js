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
    "./src/plugins/node-polyfills-plugin.js",
    "./src/plugins/web-worker-plugin.js",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "sinomatrix-intellisenseform-introduce",
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
