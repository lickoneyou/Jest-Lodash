const _ = require("lodash");

test("isSymbol", () => {
  expect(_.isSymbol(new Map())).toEqual(false);
  expect(_.isSymbol(new Set())).toEqual(false);
  expect(_.isSymbol('1')).toEqual(false);
  expect(_.isSymbol('')).toEqual(false);
  expect(_.isSymbol(Symbol.isConcatSpreadable)).toEqual(true);
  expect(_.isSymbol(Symbol.iterator)).toEqual(true);
});