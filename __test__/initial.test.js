const _ = require('lodash')

test('initial', () => {
  expect(_.initial([2, 1, 2, 3])).toEqual([2, 1, 2])
  expect(_.initial([2, 1, 4, 3, 3, 4, 5, 6, 32, 3, 53])).toEqual([2, 1, 4, 3, 3, 4, 5, 6, 32, 3])
  expect(_.initial([])).toEqual([])
})
