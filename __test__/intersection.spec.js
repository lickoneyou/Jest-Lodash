const _ = require('lodash')

test('intersection', () => {
  expect(_.intersection([2, 1], [2, 3])).toEqual([2])
  expect(_.intersection([2, 1, 4], [2, 3])).toEqual([2])
  expect(_.intersection([2, 1, 4], [2, 3, 4])).toEqual([2, 4])
})
