const _ = require("lodash");

test("xor", () => {
  expect(_.xor([2, 1, 2], [4, 8, 16])).toEqual([2, 1, 4, 8, 16]);
  expect(_.xor([2, 1, 4, 4, 4, 4], [4, 2, 8])).toEqual([1, 8]);
  expect(_.xor([20, 1, 4, 1, 2, 4], [1, 4, 0])).toEqual([20, 2, 0]);
});
