const _ = require("lodash");

test("isWeakSet", () => {
  expect(_.isWeakSet(new Map())).toEqual(false);
  expect(_.isWeakSet(new Set())).toEqual(false);
  expect(_.isWeakSet("1")).toEqual(false);
  expect(_.isWeakSet("")).toEqual(false);
  expect(_.isWeakSet(Symbol.isConcatSpreadable)).toEqual(false);
  expect(_.isWeakSet(new WeakSet())).toEqual(true);
  expect(_.isWeakSet(new WeakMap())).toEqual(false);
});
