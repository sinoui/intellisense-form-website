const { default: isPrereleaseVersion } = require("../isPrereleaseVersion");

it("1.0.0-beta.0 是先行版本号", () => {
  const actual = isPrereleaseVersion("1.0.0-beat.0");

  expect(actual).toBe(true);
});

it("1.0.0 不是先行版本号", () => {
  const actual = isPrereleaseVersion("1.0.0");

  expect(actual).toBe(false);
});
