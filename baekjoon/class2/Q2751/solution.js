const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

console.log(input.slice(1, input.length));

console.log(
  [...new Set(input.slice(1, input.length))]
    .sort((a, b) => parseInt(a) - parseInt(b))
    .join("\n")
);
