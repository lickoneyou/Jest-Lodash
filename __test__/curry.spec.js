const _ = require('lodash')

const fn = (a, b) => {
    return a + b
}

test('curry', () => {
const curry = _.curry(fn)

  expect(curry(1)(2)).toEqual(3)
  expect(curry(1)(1)).toEqual(2)
})
