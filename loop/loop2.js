// Check if All Animals are Cows

const herd = ["cow", "cow", "cow", "cow"];

function allCows(herd) {
  for (const animal of herd) {
    if (animal !== "cow") {
      return false;
    }
  }
  return true;
}

console.log(allCows(herd));
// Output: true
