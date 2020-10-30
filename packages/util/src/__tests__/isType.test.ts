import isType from '../is/type'

test("test isType return true", () => {
    const str = 's'
    expect(isType(str, 'String')).toBeTruthy()
})

test("test 'isType': the String is not Number", () => {
  const str = 's'
  expect(isType(str, 'Number')).toBeFalsy()
})

test("test 'isType': the String is not string", () => {
  const str = 's'
  expect(isType(str, 'string')).toBeFalsy()
})
