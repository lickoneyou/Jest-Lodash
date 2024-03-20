const _ = require("lodash");

test("lte", () => {
  expect(_.lte(1, 2)).toEqual(true);
  expect(_.lte(2, 3)).toEqual(true);
  expect(_.lte(3, 3)).toEqual(true);
});
