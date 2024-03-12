const _ = require('lodash')

test('isBoolean', () => {
  expect(_.isBoolean(true)).toEqual(true)
  expect(_.isBoolean({ a: 1, b: 'qwe', c: 2 }, _.isObject)).toEqual(false)
  expect(_.isBoolean(_)).toEqual(false)
})
