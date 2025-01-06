// Unique Animals

const herd = ["cow", "sheep", "goat", "cow", "sheep", "horse", "goat"];

function uniqueAnimals(herd) {
  const unique = [];
  for (const animal of herd) {
    if (!unique.includes(animal)) {
      unique.push(animal);
    }
  }
  return unique;
}

console.log(uniqueAnimals(herd));
// Output: ["cow", "sheep", "goat", "horse"]
