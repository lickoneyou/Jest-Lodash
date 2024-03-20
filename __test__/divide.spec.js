const _ = require("lodash");

test("divide", () => {
  expect(_.divide(4, 2)).toEqual(2);
  expect(_.divide(10, 2)).toEqual(5);
  expect(_.divide(100, 50)).toEqual(2);
});
