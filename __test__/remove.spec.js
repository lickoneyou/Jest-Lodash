const _ = require("lodash");

test("remove", () => {
  expect(_.remove([2, 1, 2, 3], (el) => el == 2)).toEqual([2, 2]);
  expect(_.remove([2, 1, 2, 3], (el) => !(el % 2))).toEqual([2, 2]);
});
