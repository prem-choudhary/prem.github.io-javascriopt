function match(value, patterns) {
  for (const [pattern, action] of patterns) {
    if (pattern(value)) {
      return action(value);
    }
  }
  throw new Error("No matching pattern");
}

const data = { type: "user", name: "Alice" };

match(data, [
  [(v) => v.type === "user", (v) => console.log(`User: ${v.name}`)],
  [(v) => v.type === "admin", (v) => console.log(`Admin: ${v.name}`)],
  [() => true, () => console.log("Unknown type")],
]);
