//  all promises 

  // Promise.all

  const promise1 = Promise.resolve("Promise 1 resolved");
  const promise2 = Promise.resolve("Promise 2 resolved");
  const promise3 = Promise.reject("Promise 3 rejected");
  
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(results); // ["Promise 1 resolved", "Promise 2 resolved"]
    })
    .catch((error) => {
      console.log(error);
    });
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error); // "Promise 3 rejected"
    });
  
    