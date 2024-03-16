const _ = require('lodash')

test('isError', () => {
  expect(_.isError(new Date())).toEqual(false)
  expect(_.isError(Error)).toEqual(false)
  expect(_.isError(new Error)).toEqual(true)
})