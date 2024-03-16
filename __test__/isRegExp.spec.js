const _ = require("lodash");

test("isRegExp", () => {
  expect(_.isRegExp(/qwe/)).toEqual(true);
  expect(_.isRegExp(new RegExp())).toEqual(true);
  expect(_.isRegExp(1)).toEqual(false);
});
