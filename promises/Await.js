//  Async/Await

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log("Waiting for 1 second...");
    await wait(1000);
    console.log("1 second passed.");
    console.log("Waiting for another 2 seconds...");
    await wait(2000);
    console.log("2 more seconds passed.");
  }
  
  asyncFunction();
  