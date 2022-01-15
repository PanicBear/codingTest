const fs = require("fs");
const [A, B, V] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

console.log(Math.ceil((V - B) / (A - B)));
