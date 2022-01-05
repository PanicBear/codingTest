const fs = require("fs");
const input = parseInt(fs.readFileSync("input.txt").toString().trim());

let answer = "";

for (let i = 0; i < input; i++) {
  answer += input - i;
  if (i !== input - 1) answer += "\n";
}

console.log(answer);
