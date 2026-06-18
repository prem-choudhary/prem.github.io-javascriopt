const herd = ["cow", "sheep", "goat", "cow", "sheep", "horse", "cow"];

function countAnimals(herd) {
  const count = {};
  for (const animal of herd) {
    count[animal] = (count[animal] || 0) + 1;
  }
  return count;
}

console.log(countAnimals(herd));

const herd1 = ["cow", "sheep", "goat", "horse", "elephant", "cow", "goat"];

function filterAnimals(herd1) {
  const filtered = [];
  for (const animal of herd1) {
    if (animal.length >= 5) {
      filtered.push(animal);
    }
  }
  return filtered;
}
console.log(filterAnimals(herd1));
const arr = ["cow", "goat", "sheep", "horse", "cow", "horse"];
function findFirstHorse(arr) {
  for (let i = 0; i < herd.length; i++) {
    if (arr[i] === "horse") {
      return i;
    }
  }
  return -1;
}

console.log(findFirstHorse(arr));
// Output: 3
