const _ = require("lodash");

test("endsWith", () => {
  expect(_.endsWith("KiRiLL", "L")).toEqual(true);
  expect(_.endsWith("kiRILL", "l")).toEqual(false);
  expect(_.endsWith("KIRILL", "R", 3)).toEqual(true);
});
