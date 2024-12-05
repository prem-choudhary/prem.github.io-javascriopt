const p = { k: 1, l: 2 };
const q = { k: 1, l: 2 };
let isEqual = p == q;
let isStartEqual = p === q;
console.log(isEqual, isStartEqual); // false false

//  Object

let car = { 
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function () {
    console.log("Car started");
  },
};

console.log(car.make); // Toyota
car.start(); // Car started


