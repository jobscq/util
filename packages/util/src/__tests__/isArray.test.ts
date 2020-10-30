import isArray from '../is/array'

describe('isArray', () => {
  it('test isArray: return true', () => {
    expect(isArray([])).toBe(true)
    expect(isArray(new Array)).toBe(true)
  })

  it('test isArray: return false', () => {
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray({length:0})).toBe(false)
  })
})
