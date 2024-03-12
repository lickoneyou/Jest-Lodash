const _ = require('lodash')

test('pickBy', () => {
  expect(_.pickBy({ a: 1, b: 'qwe', c: 2 }, _.isNumber)).toEqual({ a: 1, c: 2 })
  expect(_.pickBy({ a: 1, b: 'qwe', c: 2 }, _.isObject)).toEqual({})
  expect(_.pickBy({ a: 1, b: 'qwe', c: 2 }, _.isNull)).toEqual({})
})
