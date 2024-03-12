const _ = require('lodash')

test('pull', () => {
  expect(_.pull([2, 1, 2, 3], 1)).toEqual([2, 2, 3])
  expect(_.pull([2, 1, 4, 3, 3, 4, 5, 6, 32, 3, 53], 2, 3, 4)).toEqual([
    1,
    5,
    6,
    32,
    53,
  ])
  expect(_.pull([], 5)).toEqual([])
})
