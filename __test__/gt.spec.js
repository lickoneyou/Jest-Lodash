const _ = require("lodash");

test("gt", () => {
  expect(_.gt(3, 4)).toEqual(false);
  expect(_.gt(1, 0)).toEqual(true);
  expect(_.gt(1, 1)).toEqual(false);
});
