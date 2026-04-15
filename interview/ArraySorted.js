class Solution {
  // Function to find the single non-duplicate element
  singleNonDuplicate(arr) {
    const n = arr.length;

    // Edge cases
    if (n === 1) return arr[0];
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

    let low = 1;
    let high = n - 2;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      // Check if mid is the answer
      if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
        return arr[mid];
      }

      // Check pattern
      if (
        (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
        (mid % 2 === 1 && arr[mid] === arr[mid - 1])
      ) {
        low = mid + 1; // move right
      } else {
        high = mid - 1; // move left
      }
    }

    return -1;
  }
}
// Driver code
const arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
const obj = new Solution();
const ans = obj.singleNonDuplicate(arr);
console.log("The single element is:", ans);
//  The single element is: 4 ??? 