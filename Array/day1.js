function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example
console.log(removeDuplicates([1, 2, 3, 2, 1])); // [1, 2, 3]
