const _ = require("lodash");

test("snakeCase", () => {
  expect(_.snakeCase("a b")).toEqual("a_b");
  expect(_.snakeCase("a----b")).toEqual("a_b");
  expect(_.snakeCase("A b")).toEqual("a_b");
});
