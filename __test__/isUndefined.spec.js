const _ = require("lodash");

test("isUndefined", () => {
  expect(_.isUndefined(new Map())).toEqual(false);
  expect(_.isUndefined(new Set())).toEqual(false);
  expect(_.isUndefined('1')).toEqual(false);
  expect(_.isUndefined('')).toEqual(false);
  expect(_.isUndefined(Symbol.isConcatSpreadable)).toEqual(false);
  expect(_.isUndefined(undefined)).toEqual(true);
});