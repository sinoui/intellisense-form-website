# 版本号辅助库

遵循 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/) 规则，提供与版本号相关的辅助函数。

## isPrereleaseVersion

判断先行版本号的函数。用法：

```javascript
isPrereleaseVersion("1.0.0-alpha.0"); // true
isPrereleaseVersion("1.0.0"); // false
```

## findLatestVersion

获取一组版本号中最新的版本号。示例：

```javascript
const versions = ["1.0.0", "1.2.0", "1.2.3", "2.0.0-beta.0"];

findLatestVersion(versions); // 1.2.3
findLatestVersion(versions, true); // 2.0.0-beta.0
```

注意：`findLatestVersion` 在比较版本号时会默认忽略先行版本号，如果不想忽略先行版本号，则将第二个参数指定为 `true` 即可。

## findLatestMinorVersions

获取一组版本号中与最新版本号在次版本号上是一致的版本号。示例：

```javascript
const versions = ["1.0.0", "1.2.0", "1.2.3", "2.0.0-beta.0", "2.0.0-beta.1"];

// 默认不包含先行版本号
findLatestMinorVersions(versions); // ["1.2.0", "1.2.3"]
// 包含先行版本号
findLatestMinorVersions(versions, true); // ["2.0.0-beta.0", "2.0.0-beta.1"]
```
