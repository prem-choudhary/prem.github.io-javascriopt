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
  

//   You handle the fulfillment or rejection of a promise using the .then() and .catch() methods.

myPromise
  .then((message) => {
    console.log(message); // This will run if the promise is resolved
  })
  .catch((error) => {
    console.log(error); // This will run if the promise is rejected
  });
