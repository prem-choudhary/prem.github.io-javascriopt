function printZigZag(str, n) {
  if (n === 1) {
    console.log(str);
    return;
  }

  const rows = Array.from({ length: n }, () => []);
  let currentRow = 0;
  let goingDown = false;

  for (const char of str) {
    rows[currentRow].push(char);
    if (currentRow === 0 || currentRow === n - 1) goingDown = !goingDown;
    currentRow += goingDown ? 1 : -1;
  }

  for (const row of rows) {
    console.log(row.join(" "));
  }
}

printZigZag("PAYPALISHIRING", 3);
