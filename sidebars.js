module.exports = {
  someSidebar: [
    "introduction",
    "download",
    {
      部署: [
        "deployment",
        "integrate",
        "sinomatrix-docker-intellisenseform",
        "deployment-mongodb",
      ],
      应用程序配置: [
        "config-custom",
        "config-disable-modules",
        "config-data-perm",
        "config-resource-publish",
        "config-audit",
        "config-version",
        "config-external-intro",
      ],
      插件开发: [
        "plugin-index",
        {
          入门教程: [
            "guide-setup",
            "guide-hello",
            "guide-button",
            "guide-formfield",
            "guide-watch-form-values",
            "guide-control-button-click",
            "guide-control-button-formitem",
            "guide-form-style",
            "guide-summary",
          ],
          高级教程: [
            "use-app-setting",
            "plugin-field",
            "plugin-button",
            "plugin-detail-page-extend",
            "plugin-css",
            "plugin-module-federation",
            "plugin-test",
          ],
          最佳实践: [
            "plugin-document-structure",
            "plugin-naming-conventions",
            "plugin-dynamic-import",
          ],
        },
        "plugin-faq",
      ],
      样式定制: ["custom-css-pc", "custom-css-mobile", "custom-css-editor"],
      扩展: [
        {
          事件订阅: [
            "sinoform-sdk-event-starter",
            "sinoform-sdk-event-rudiments",
            "sinoform-sdk-event-data",
          ],
        },
        "extend-interface",
      ],
      常见问题: ["deployment-faq", "feature-faq"],
      版本变更记录: [
        "changelog-v1.12.2",
        "changelog-v1.12.1",
        "changelog-v1.12.0",
      ],
      序号组件: ["sinomatrix-sequence-table", "sinomatrix-sequence-interface"],
    },
  ],
};
