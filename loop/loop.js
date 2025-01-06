// Reverse the Herd
const herd = ["cow", "sheep", "goat", "horse"];

function reverseHerd(herd) {
  const reversed = [];
  for (let i = herd.length - 1; i >= 0; i--) {
    reversed.push(herd[i]);
  }
  return reversed;
}

console.log(reverseHerd(herd));
// Output: ["horse", "goat", "sheep", "cow"]
