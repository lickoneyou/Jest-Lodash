const _ = require("lodash");

test("gte", () => {
  expect(_.gte(3, 4)).toEqual(false);
  expect(_.gte(1, 0)).toEqual(true);
  expect(_.gte(1, 1)).toEqual(true);
});
