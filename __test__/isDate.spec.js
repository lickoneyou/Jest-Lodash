const _ = require('lodash')

test('isDate', () => {
  expect(_.isDate(new Date())).toEqual(true)
  expect(_.isDate("a")).toEqual(false)
  expect(_.isDate(1)).toEqual(false)
})