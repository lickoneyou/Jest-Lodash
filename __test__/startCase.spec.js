const _ = require("lodash");

test("startCase", () => {
  expect(_.startCase("a b")).toEqual("A B");
  expect(_.startCase("a----b")).toEqual("A B");
  expect(_.startCase("A b")).toEqual("A B");
});
