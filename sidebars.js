module.exports = {
  someSidebar: [
    "introduction",
    "download",
    {
      部署: [
        "deployment",
        "nav-in-sino-matrix",
        //"integrate",
        //"sinomatrix-docker-intellisenseform",
        "deployment-mongodb",
        "deployment-nodejs",
        "deployment-chrome",
        // "deployment-tomcat",
        {
          ["在 Kubernetes 中部署"]: [
            {
              type: "autogenerated",
              dirName: "dep-k8s",
            },
          ],
        },
      ],
      应用程序配置: [
        "config-custom",
        "config-disable-modules",
        "config-data-perm",
        "config-resource-publish",
        "config-workflow",
        "config-audit",
        "config-version",
        "config-external-intro",
        "config-remove-test-data",
        "config-move-form-to-application",
        "config-user-info",
        "nginx-location",
        "config-license",
        "config-file-store",
        "sinofrom-sinomatrix-import-export",
        "sinoform-import",
      ],
      插件开发: [
        "plugin-index",
        {
          入门教程: [
            "guide-setup",
            "guide-hello",
            "guide-button",
            "guide-formfield",
            "guide-button-in-detail-page",
            "guide-default-form-values",
            "guide-watch-form-values",
            "guide-validate",
            "guide-control-button-click",
            "guide-control-button-formitem",
            "guide-form-field-layout",
            "guide-field-select-options",
            "plugin-field-config-panel",
            "guide-custom-list-search-layout",
            "guide-global-ui",
            "guide-form-style",
            "guide-list-page-config",
            "plugin-custom-workflow-request",
            "plugin-custom-flow-candidates",
            "guide-draft-page-with-modal",
            "guide-i18n",
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
            "sinoform-sdk-use-case",
          ],
        },
        "extend-interface",
      ],
      常见问题: ["deployment-faq", "feature-faq", "issue"],
      版本变更记录: [
        {
          type: "autogenerated",
          dirName: "changelog",
        },
      ],
      表单配置教程: [
        "custom-print-template",
        "custom-form-app",
        "todo-integrate",
        "custom-icon-for-app",
        "expression-rules",
        "interpolation-expression",
        "custom-list-guide",
        "export-excel",
        "dictionary-manager",
        "guide-list-page-columns-config",
        "guide-list-page-transform-data",
        "extra-field",
      ],
    },
    {
      type: "category",
      label: "移动端集成",
      items: [
        {
          type: "autogenerated",
          dirName: "mobile",
        },
      ],
    },
  ],
};
