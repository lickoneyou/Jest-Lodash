const _ = require('lodash')

test('nth', () => {
  expect(_.nth([2, 1, 2, 3], 1)).toEqual(1)
  expect(_.nth([2, 1, 4, 3, 3, 4, 5, 6, 32, 3, 53], -1)).toEqual(53)
  expect(_.nth([], 5)).toEqual(undefined)
})