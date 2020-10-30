import isType from './type'

export default (value: any): value is Function => isType(value, 'Function')
