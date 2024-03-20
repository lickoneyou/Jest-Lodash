const _ = require("lodash");

test("upperFirst", () => {
  expect(_.upperFirst("KiRiLL")).toEqual("KiRiLL");
  expect(_.upperFirst("kiRILL")).toEqual("KiRILL");
  expect(_.upperFirst("KIRILL")).toEqual("KIRILL");
});
