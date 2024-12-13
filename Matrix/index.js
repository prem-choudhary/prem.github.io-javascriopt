function printSpiralMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let val = 1;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (val <= n * n) {
    for (let i = left; i <= right; i++) matrix[top][i] = val++;
    top++;
    for (let i = top; i <= bottom; i++) matrix[i][right] = val++;
    right--;
    for (let i = right; i >= left; i--) matrix[bottom][i] = val++;
    bottom--;
    for (let i = bottom; i >= top; i--) matrix[i][left] = val++;
    left++;
  }

  matrix.forEach((row) => console.log(row.join(" ")));
}

printSpiralMatrix(3);
