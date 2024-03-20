const _ = require("lodash");

test("multiply", () => {
  expect(_.multiply(1, 3)).toEqual(3);
  expect(_.multiply(1, 10)).toEqual(10);
  expect(_.multiply(2, 100)).toEqual(200);
});
