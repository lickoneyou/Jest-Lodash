const _ = require('lodash')

test('union', () => {
  expect(_.union([2, 1], [2, 3], [2], [4])).toEqual([2, 1, 3, 4])
  expect(_.union([2, 1, 4], [2, 3])).toEqual([2, 1, 4, 3])
  expect(_.union([2, 1, 4], [2, 3, 4])).toEqual([2, 1, 4, 3])
})
