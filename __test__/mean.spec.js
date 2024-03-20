const _ = require("lodash");

test("mean", () => {
  expect(_.mean([1, 2, 3, 4, 5, 6, 0])).toEqual(3);
  expect(_.mean([1, 2])).toEqual(1.5);
  expect(_.mean([1, 1])).toEqual(1);
});
