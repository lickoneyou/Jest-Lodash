const _ = require("lodash");

test("max", () => {
  expect(_.max([1, 2, 3, 4, 5, 6])).toEqual(6);
  expect(_.max([1, 2])).toEqual(2);
  expect(_.max([1, 1])).toEqual(1);
});
