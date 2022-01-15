const fs = require("fs");
const input = parseInt(fs.readFileSync("input.txt").toString().trim());

let answer = 0;

for (let i = 1; i <= input; i++) {
  if (
    i
      .toString()
      .split("")
      .reduce((prev, next) => parseInt(prev) + parseInt(next), 0) +
      i ===
    input
  ) {
    answer = i;
    break;
  }
}

console.log(answer);
