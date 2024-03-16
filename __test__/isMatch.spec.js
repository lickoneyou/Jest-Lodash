const _ = require("lodash");

var object = { a: 1, b: 2 };

test("isMatch", () => {
  expect(_.isMatch(object, { b: 2 })).toEqual(true);
  expect(_.isMatch(object, { b: 1 })).toEqual(false);
  expect(_.isMatch(object, { a: 2 })).toEqual(false);
});
