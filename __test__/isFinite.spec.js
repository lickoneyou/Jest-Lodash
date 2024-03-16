const _ = require("lodash");

test("isFinite", () => {
  expect(_.isFinite(3)).toEqual(true);
  expect(_.isFinite('3')).toEqual(false);
  expect(_.isFinite(Infinity)).toEqual(false);
});
