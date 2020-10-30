//attention this paramater{type}'s first letter must be upper. eg: 'String', 'Arguments', 'Array'...
/**
 * 测试类型
 * @param value 要测试的对象
 * @param type 猜测的类型(Null|Undefined|String|Number|Boolean|NaN===Number|isNaN===Function)
 * 更多用例查看 @__tests__/isType.test.ts
 */
const isType = (value: any, type: string): boolean => toString.call(value) === '[object ' + type + ']';

export default isType;
