// Promise  race

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "First promise resolved");
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Second promise resolved");
  });
  
  Promise.race([promise1, promise2])
    .then((result) => {
      console.log(result); // "Second promise resolved"
    })
    .catch((error) => {
      console.log(error);
    });
  
