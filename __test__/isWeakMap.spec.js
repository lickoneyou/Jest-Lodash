const _ = require("lodash");

test("isWeakMap", () => {
  expect(_.isWeakMap(new Map())).toEqual(false);
  expect(_.isWeakMap(new Set())).toEqual(false);
  expect(_.isWeakMap('1')).toEqual(false);
  expect(_.isWeakMap('')).toEqual(false);
  expect(_.isWeakMap(Symbol.isConcatSpreadable)).toEqual(false);
  expect(_.isWeakMap(new WeakMap())).toEqual(true);
});