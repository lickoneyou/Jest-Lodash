const _ = require("lodash");

test("capitalize", () => {
  expect(_.capitalize("KiRiLL")).toEqual("Kirill");
  expect(_.capitalize("kiRILL")).toEqual("Kirill");
  expect(_.capitalize("KIRILL")).toEqual("Kirill");
});
