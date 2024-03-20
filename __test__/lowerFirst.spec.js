const _ = require("lodash");

test("lowerFirst", () => {
  expect(_.lowerFirst("KiRiLL")).toEqual("kiRiLL");
  expect(_.lowerFirst("kiRILL")).toEqual("kiRILL");
  expect(_.lowerFirst("KIRILL")).toEqual("kIRILL");
});
