const data = { type: "user", name: "Prem" };

switch (data.type) {
  case "user":
    console.log(`User: ${data.name}`);
    break;
  case "admin":
    console.log(`Admin: ${data.name}`);
    break;
  default:
    console.log("Unknown type");
    break;
}
