const _ = require("lodash");

test("lowerCase", () => {
  expect(_.lowerCase("A B")).toEqual("a b");
  expect(_.lowerCase("A----B")).toEqual("a b");
  expect(_.lowerCase("A b")).toEqual("a b");
});
