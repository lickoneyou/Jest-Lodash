const _ = require('lodash')

test('dropRight', () => {
  expect(_.dropRight([2, 1, 2, 3])).toEqual([2, 1, 2])
  expect(_.dropRight([2, 1, 4, 3], 1)).toEqual([2, 1, 4, ])
  expect(_.dropRight([2, 1, 42, 3, 4], 100)).toEqual([])
})
