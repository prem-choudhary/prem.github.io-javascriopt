function memoizedFibonacci(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo[n]) return memo[n];

  memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);

  return memo[n];
}

console.log(memoizedFibonacci(10)); // Should output 55
console.log(memoizedFibonacci(50)); // Should output a large Fibonacci number efficiently
