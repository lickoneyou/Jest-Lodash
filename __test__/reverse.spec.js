const _ = require("lodash");

test("reverse", () => {
  expect(_.reverse([2, 1, 2, 3])).toEqual([3, 2, 1, 2]);
  expect(_.reverse([1, 2, 3, 3])).toEqual([3, 3, 2, 1]);
});
