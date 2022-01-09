const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

let answer = 1;

for (let i = 0; i < input[1]; i++) {
  answer *= input[0] - i;
  answer /= i + 1;
}

console.log(answer);
