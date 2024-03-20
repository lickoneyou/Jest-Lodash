const _ = require("lodash");

test("toArray", () => {
  expect(_.toArray("123")).toEqual(["1", "2", "3"]);
  expect(_.toArray(1)).toEqual([]);
  expect(_.toArray({ a: "1" })).toEqual(["1"]);
});
