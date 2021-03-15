module.exports = {
  title: "intellisense-form",
  tagline: "The tagline of my site",
  url: "http://sinoui.gitee.io",
  baseUrl: "/intellisense-form-website/",
  favicon: "img/favicon.ico",
  organizationName: "sinoui", // Usually your GitHub org/user name.
  projectName: "intellisense-form-website", // Usually your repo name.
  githubHost: "gitee.com",
  themeConfig: {
    navbar: {
      title: "intellisense-form",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
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
