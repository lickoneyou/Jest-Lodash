const _ = require("lodash");

test("take", () => {
  expect(_.take([2, 1, 2, 3])).toEqual([2]);
  expect(_.take([1, 2, 3, 3], 100)).toEqual([1, 2, 3, 3]);
  expect(_.take([1, 2, 3, 3], 0)).toEqual([]);
});
