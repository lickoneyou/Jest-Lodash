const _ = require('lodash')

test('uniq', () => {
  expect(_.uniq([2, 1, 2])).toEqual([2, 1])
  expect(_.uniq([2, 1, 4, 4, 4, 4])).toEqual([2, 1, 4])
  expect(_.uniq([20, 1, 4, 1, 2, 4])).toEqual([20, 1, 4, 2])
})
