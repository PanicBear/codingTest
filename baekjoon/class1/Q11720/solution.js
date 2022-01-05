const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

console.log(
  input[1]
    .split("")
    .map((num) => parseInt(num))
    .reduce((prev, next) => prev + next)
);
