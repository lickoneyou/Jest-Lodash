const _ = require("lodash");

const obj = { a: 1 };

test("clone", () => {
  const clone = _.clone(obj);
  expect(obj).toEqual(clone);
});
