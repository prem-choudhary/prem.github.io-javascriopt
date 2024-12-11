let x = 10;
console.log(x); // 10

let y = x++;
console.log(x); // 11

console.log(x, y); //  11 , 10

let stockPrice = 100;
let shortPositions = 50; // Number of short positions
const buyPressure = 5; // Number of buys required to cause a short squeeze

function buyStock() {
  stockPrice += 10; // Increase stock price
  console.log(`Stock price increased to: $${stockPrice}`);
}

function shortSqueeze() {
  while (shortPositions > 0) {
    console.log(`Short positions remaining: ${shortPositions}`);
    buyStock();
    shortPositions--;
  }
  console.log(`All short positions covered. Final stock price: $${stockPrice}`);
}

function simulateBubbleShort() {
  console.log(`Initial stock price: $${stockPrice}`);
  console.log(`Initial short positions: ${shortPositions}`);

  let buys = 0;
  while (buys < buyPressure) {
    buyStock();
    buys++;
  }

  console.log(`Buy pressure triggered. Starting short squeeze...`);
  shortSqueeze();
}

simulateBubbleShort();
