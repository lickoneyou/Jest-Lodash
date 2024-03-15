const _ = require("lodash");

test("castArray", () => {
  expect(_.castArray({a: 1})).toEqual([{a: 1}]);
  expect(_.castArray(1)).toEqual([1]);
});
