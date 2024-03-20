const _ = require("lodash");

test("lt", () => {
  expect(_.lt(1, 2)).toEqual(true);
  expect(_.lt(2, 3)).toEqual(true);
  expect(_.lt(3, 3)).toEqual(false);
});
