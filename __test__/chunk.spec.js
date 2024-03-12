const _ = require('lodash')

console.log(_.chunk([2, 1, 4, 2, 3], 2))

test('chunk', () => {
  expect(_.chunk([2, 1, 2, 3], 2)).toEqual([
    [2, 1],
    [2, 3],
  ])
  expect(_.chunk([2, 1, 4, 2, 3], 2)).toEqual([[2, 1], [4, 2], [3]])
})
