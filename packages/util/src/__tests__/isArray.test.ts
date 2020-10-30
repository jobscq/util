import isArray from '../is/array'

test('test isArray return true', () => {
  const arr = []
  expect(isArray(arr)).toBeTruthy()
})

test('test isArray return true', () => {
  const name = undefined
  expect(isArray(name)).toBeFalsy()
})
