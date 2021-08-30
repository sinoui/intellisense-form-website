import findLatestMinorVersions from "../findLatestMinorVersions";

it("获取与最新版本号同一个次版本号的所有版本号（不包含先行版本号）", () => {
  const expected = ["1.2.0", "1.2.1", "1.2.2"];
  const versions = [
    "1.0.0",
    "1.1.0",
    "1.2.0",
    "1.2.1",
    "1.2.2",
    "1.3.0-beta.0",
  ];

  const actual = findLatestMinorVersions(versions);

  expect(actual).toEqual(expected);
});

it("获取与最新版本号同一个次版本号的所有版本号（包含先行版本号）", () => {
  const expected = ["1.3.0-beta", "1.3.0-beta.1", "1.3.0-beta.2"];
  const versions = [
    "1.0.0",
    "1.1.0",
    "1.2.0",
    "1.2.1",
    "1.2.2",
    "1.3.0-alpha.10",
    "1.3.0-beta",
    "1.3.0-beta.1",
    "1.3.0-beta.2",
  ];

  const actual = findLatestMinorVersions(versions, true);

  expect(actual).toEqual(expected);
});
