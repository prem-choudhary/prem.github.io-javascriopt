function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimes(n) {
    for (let num = 2; num <= n; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

// Example usage:
let n = 50;
console.log(`Prime numbers up to ${n}:`);
printPrimes(n);
