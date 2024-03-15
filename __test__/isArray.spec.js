const _ = require('lodash')

test('isArray', () => {
  expect(_.isArray([2, 1])).toEqual(true)
  expect(_.isArray("a")).toEqual(false)
  expect(_.isArray(1)).toEqual(false)
})