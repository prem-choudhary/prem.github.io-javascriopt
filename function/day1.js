// Traditional function

function greet1(name) {
  return `Hello, ${name}`;
}
console.log(greet1());

//  Arrow Function

const greet = (name) => `Hello, ${name}`;
console.log(greet());

const name = "Prem";
const message = `Hello, ${name}! welcome!`;
console.log(message);

// Bad

var score = 10;
if (score == "10") {
  console.log("...... true ......");
}

//  Good
if (score === 10) {
  console.log("...... false .....");
}

//  try and catch

// try data = JSON.parse(input){
// } catch (error){
//     console.log('failed to parse JSON', error)}

let testVar = 10;
(() => {
  testVar = 20;
  var testVar;
})();
console.log(testVar);


{
    let x= 20
console.log(x)

}
