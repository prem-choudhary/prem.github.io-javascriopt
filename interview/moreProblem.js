const prompt = require("prompt-sync")();

let who = prompt("Who is there? ");
if (who === "Admin") {

  let login = prompt("Password? ");
  if (login === "TheMaster") {
    console.log("Welcome");
  } else if (!login) {
    
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  } 

} else if (!who) {
  console.log("Canceled");
  console.log("----")
}

 else {
  console.log("I don't know you");
}

