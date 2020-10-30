import isType from './type'

export default (value:any): value is Array<any> => Array.isArray ? Array.isArray(value) : isType(value, 'Array')