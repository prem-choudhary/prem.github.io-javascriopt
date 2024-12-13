function printHourglass(n) {
  for (let i = n; i >= 1; i--) {
    let str = " ".repeat(n - i);
    let str2 = "*".repeat(2 * i - 1);
    console.log(str + str2 + str);
  }
  for (let i = 2; i <= n; i++) {
    let str = " ".repeat(n - i);
    let str2 = "*".repeat(2 * i - 1);
    console.log(str + str2 + str);
  }
}

printHourglass(5);
