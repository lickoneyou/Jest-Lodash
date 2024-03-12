const _ = require('lodash')

test('head', () => {
  expect(_.head([2, 1, 2, 3])).toEqual(2)
  expect(_.head([2, 1, 4, 3])).toEqual(2)
  expect(_.head([])).toEqual(undefined)
})
