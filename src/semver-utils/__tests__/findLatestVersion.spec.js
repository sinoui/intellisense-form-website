const { default: findLatestVersion } = require("../findLatestVersion");

it("获取最新的版本号（不包括先行版本号）", () => {
  const expected = "1.2.3";
  const versions = ["1.0.0", "1.2.0", "1.2.3", "2.0.0-beta.0"];

  const actual = findLatestVersion(versions);

  expect(actual).toBe(expected);
});

it("获取最新的版本号（包含先行版本号）", () => {
  const expected = "2.0.0-beta.0";
  const versions = ["1.0.0", "1.2.0", "1.2.3", "2.0.0-beta.0"];

  const actual = findLatestVersion(versions, true);

  expect(actual).toBe(expected);
});
