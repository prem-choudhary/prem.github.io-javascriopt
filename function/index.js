function countdwon(n) {
  if (n <= 0) return;
  console.log(n);
  countdwon(n - 1);
}
countdwon(3);
