const _ = require("lodash");

test("tail", () => {
  expect(_.tail([2, 1, 2, 3])).toEqual([1, 2, 3]);
  expect(_.tail([1, 2, 3, 3])).toEqual([2, 3, 3]);
});
