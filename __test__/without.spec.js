const _ = require("lodash");

test("without", () => {
  expect(_.without([2, 1, 2], 2)).toEqual([1]);
  expect(_.without([2, 1, 4, 4, 4, 4], 4, 2)).toEqual([1]);
  expect(_.without([20, 1, 4, 1, 2, 4], 1, 4)).toEqual([20, 2]);
});
