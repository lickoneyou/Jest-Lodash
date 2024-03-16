const _ = require("lodash");

test("isString", () => {
  expect(_.isString(new Map())).toEqual(false);
  expect(_.isString(new Set())).toEqual(false);
  expect(_.isString('1')).toEqual(true);
  expect(_.isString('')).toEqual(true);
  expect(_.isString(String())).toEqual(true);
});