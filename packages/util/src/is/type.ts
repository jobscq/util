const toString = {}.toString;

//attention this paramater{type}'s first letter must be upper. eg: 'String', 'Arguments', 'Array'...
const isType = (value: any, type: string): boolean => toString.call(value) === '[object ' + type + ']';

export default isType;
