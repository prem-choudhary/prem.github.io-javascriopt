// Object.keys(): Returns an array of a given object's own property names.
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]

// Object.values(): Returns an array of a given object's own enumerable property values.
let obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj1)); // [1, 2, 3]

// Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj2)); // [["a", 1], ["b", 2], ["c", 3]]

// Object.assign(): Copies all enumerable own properties from one or more source objects to a target object.
let obj4 = { a: 1 };
let obj5 = { b: 2 };
let obj3 = Object.assign({}, obj4, obj5);
console.log(obj3); // { a: 1, b: 2 }

// 