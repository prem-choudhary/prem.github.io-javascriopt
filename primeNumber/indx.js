function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check if the number is divisible by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for factors up to the square root of the number
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
