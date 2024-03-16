const _ = require("lodash");

test("isSet", () => {
  expect(_.isSet(new Map())).toEqual(false);
  expect(_.isSet(new Set())).toEqual(true);
  expect(_.isSet(1)).toEqual(false);
});