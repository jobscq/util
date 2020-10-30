import isFunction from '../is/fuction'

describe('isFunction', () => {
  it('test return true', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function(){})).toBe(true)
    expect(isFunction(new Function)).toBe(true)
  })

  it('test return false', () => {
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
  })
})
