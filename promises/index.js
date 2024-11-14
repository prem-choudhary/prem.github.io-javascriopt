// promises
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    const success = true; // This is just an example condition
  
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  });
  