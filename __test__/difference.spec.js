const _ = require('lodash')

console.log(_.difference([2, 1], [2, 3]))

test('difference', () => {
  expect(_.difference([2, 1], [2, 3])).toEqual([1])
  expect(_.difference([2, 1, 4], [2, 3])).toEqual([1, 4])
})
