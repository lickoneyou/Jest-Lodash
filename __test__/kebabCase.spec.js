const _ = require("lodash");

test("kebabCase", () => {
  expect(_.kebabCase("a b")).toEqual("a-b");
  expect(_.kebabCase("a----b")).toEqual("a-b");
  expect(_.kebabCase("A b")).toEqual("a-b");
});
