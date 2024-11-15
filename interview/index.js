
function factorialIterative(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorialIterative(5)); // Output: 120
  
  function factorialRecursive(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    
    if (n === 0 || n === 1) {
      return 1;
    }
    
    return n * factorialRecursive(n - 1);
  }
  
  console.log(factorialRecursive(5)); // Output: 120
  