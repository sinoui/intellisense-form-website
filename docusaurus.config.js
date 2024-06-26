const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { compare } = require("semver");
const path = require("path");

function getVersionFromChangelogId(id) {
  const fileName = path.basename(id);
  return fileName.match(/.+?(\d+\.\d+\.\d+.*)/)?.[1];
}

module.exports = {
  title: "intellisense-form",
  tagline: "The tagline of my site",
  url: "https://sinoui.github.io",
  baseUrl: "/intellisense-form-website/",
  favicon: "img/favicon.ico",
  organizationName: "sinoui", // Usually your GitHub org/user name.
  projectName: "intellisense-form-website", // Usually your repo name.
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
              return sidebarItems.sort(
                (item1, item2) =>
                  -compare(
                    getVersionFromChangelogId(item1.id),
                    getVersionFromChangelogId(item2.id)
                  )
              );
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
