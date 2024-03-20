const _ = require("lodash");

test("camelCase", () => {
  expect(_.camelCase("a b")).toEqual("aB");
  expect(_.camelCase("a----b")).toEqual("aB");
  expect(_.camelCase("A b")).toEqual("aB");
});
