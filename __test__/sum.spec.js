const _ = require("lodash");

test("sum", () => {
  expect(_.sum([1, 2, 3, 4, 5, 6])).toEqual(21);
  expect(_.sum([1, 2])).toEqual(3);
  expect(_.sum([1, 1])).toEqual(2);
});
