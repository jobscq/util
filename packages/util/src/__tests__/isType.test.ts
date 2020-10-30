import isType from '../is/type'

describe('isType', () => {
  it("test return true", () => {
    expect(isType('s', 'String')).toBe(true)
    expect(isType('', 'String')).toBe(true)
    expect(isType(undefined, 'Undefined')).toBe(true)
    expect(isType(null, 'Null')).toBe(true)
    expect(isType({}, 'Object')).toBe(true)
    expect(isType(NaN, 'Number')).toBe(true)
    expect(isType(isNaN, 'Function')).toBe(true)
    expect(isType(Math, 'Math')).toBe(true)
    expect(isType(+'', 'Number')).toBe(true)
    expect(isType(+true, 'Number')).toBe(true)
  })

  it("test return false", () => {
    expect(isType('s', 'string')).toBe(false)
    expect(isType('s', 'Number')).toBe(false)
  })
})
