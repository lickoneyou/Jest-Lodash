const _ = require('lodash')

test('drop', () => {
  expect(_.drop([2, 1, 2, 3])).toEqual([1, 2, 3])
  expect(_.drop([2, 1, 4, 3], 1)).toEqual([1, 4, 3])
  expect(_.drop([2, 1, 42, 3, 4], 100)).toEqual([])
})
