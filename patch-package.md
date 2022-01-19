# 使用 patch-package 修改 node_modules 中的源码

- 安装依赖

```bash
yarn add patch-package postinstall-postinstall --dev
```

- 修改 package.json 中 script 脚本

```json
{
  "postinstall": "patch-package"
}
```

- 编辑 node_modules 中的源文件

- 生成 diff 记录

```bash
yarn patch-package webpack
```

patch-package 的 diff 是与依赖的 version 严格绑定的，如果版本改变，patch-package 的 diff 记录将失效。为了避免这种情况发生，依赖的版本号需要明确指定，不建议使用版本范围的声明版本。
