const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));
const max = Math.max(...input);

console.log(`${max}
${input.indexOf(max) + 1}`);
