const _ = require("lodash");

test("isMap", () => {
  expect(_.isMap(new Map())).toEqual(true);
  expect(_.isMap(() => 2)).toEqual(false);
  expect(_.isMap(1)).toEqual(false);
});