const _ = require("lodash");

test("isFunction", () => {
  expect(_.isFunction(_)).toEqual(true);
  expect(_.isFunction(() => 2)).toEqual(true);
  expect(_.isFunction(1)).toEqual(false);
});
