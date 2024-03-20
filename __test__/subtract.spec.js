const _ = require("lodash");

test("subtract", () => {
  expect(_.subtract(3, 3)).toEqual(0);
  expect(_.subtract(100, 10)).toEqual(90);
  expect(_.subtract(99, 100)).toEqual(-1);
});
