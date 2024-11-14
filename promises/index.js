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


//   Chaining Promises

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First promise resolved!"), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second promise resolved!"), 2000);
  });
  
  promise1
    .then((result1) => {
      console.log(result1);
      return promise2;
    })
    .then((result2) => {
      console.log(result2);
    })
    .catch((error) => {
      console.log(error);
    });

  