const fs = require("fs");
const input = parseInt(fs.readFileSync("input.txt").toString());

let num = 0;
let sum = 1;

while (sum < input) {
  sum += num++ * 6;
}

console.log(input === 1 ? 1 : num);
