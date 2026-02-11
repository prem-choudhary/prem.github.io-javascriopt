// push(): Adds one or more elements to the end of an array.
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]


//  pop(): Removes the last element from an array.
let arr1 = [1, 2, 3];
arr.pop();
console.log(arr1); // [1, 2]


//  shift(): Removes the first element from an array.
let arr2 = [1, 2, 3];
arr.shift();
console.log(arr2); // [2, 3]

// unshift(): Adds one or more elements to the beginning of an array.
let arr3 = [1, 2, 3];
arr.unshift(0);
console.log(arr3); // [0, 1, 2, 3]

// concat(): Merges two or more arrays.
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
console.log(arr4.concat(arr5)); // [1, 2, 3, 4, 5, 6]

// slice(): Extracts a section of an array and returns a new array.
let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.slice(1, 3)); // [2, 3]

// splice(): Adds/removes elements from an array.
let arr7 = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b");
console.log(arr7); // [1, 2, "a", "b", 4, 5]

// forEach(): Executes a function for each array element.
let arr8 = [1, 2, 3];
arr.forEach(item => console.log(item)); // 1 2 3

// map(): Creates a new array with the results of calling a function for every array element.
let arr9 = [1, 2, 3];
let newArr = arr9.map(item => item * 2);
console.log(newArr); // [2, 4, 6]

//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let Filter = [1, 2, 3, 4, 5];
let NewArr = Filter.filter(item => item > 2);
console.log(NewArr); // [3, 4, 5]

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
let Reduce = [1, 2, 3, 4];
let sum = Reduce.reduce((acc, current) => acc + current, 0);
console.log(sum); // 10

console.log(arr); // [1, 2, 3, 4]
console.log(arr1); // [1, 2]
console.log(arr2); // [2, 3]
console.log(arr3); // [0, 1, 2, 3]
console.log(arr4); // [1, 2, 3]
console.log(arr5); // [4, 5, 6]
console.log(arr6); // [1, 2, 3, 4, 5]
console.log(arr7); // [1, 2, "a", "b", 4, 5]
console.log(arr8); // [1, 2, 3]
console.log(arr9); // [1, 2, 3]
console.log(Filter); // [1, 2, 3, 4, 5]
console.log(Reduce); // [1, 2, 3, 4]
