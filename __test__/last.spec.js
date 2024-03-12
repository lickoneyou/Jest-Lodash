const _ = require('lodash')

test('last', () => {
  expect(_.last([2, 1, 2, 3])).toEqual(3)
  expect(_.last([2, 1, 4, 3, 3, 4, 5, 6, 32, 3, 53])).toEqual(53)
  expect(_.last([])).toEqual(undefined)
})