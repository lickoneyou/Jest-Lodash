const _ = require("lodash");

test("add", () => {
  expect(_.add(1, 3)).toEqual(4);
  expect(_.add(1, 10)).toEqual(11);
  expect(_.add(1, 100)).toEqual(101);
});
