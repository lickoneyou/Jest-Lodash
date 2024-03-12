const _ = require('lodash')

test('compact', () => {
  expect(_.compact([false, null, '', 0, NaN])).toEqual([])
  expect(_.compact([12, null, undefined, 4, 5])).toEqual([12, 4, 5])
})
