const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let answer = "";

for (let i = 1; i <= 9; i++) {
  answer += `${input} * ${i} = ${input * i}`;
  if (i < 9) answer += "\n";
}

console.log(answer);
