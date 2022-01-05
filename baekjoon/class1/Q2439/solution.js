const fs = require("fs");
const input = parseInt(fs.readFileSync("input.txt").toString().trim());
let answer = "";
for (let i = 1; i <= input; i++) {
  for (let j = 0; j < input; j++) {
    answer += j >= input - i ? "*" : " ";
  }
  answer += "\n";
}
console.log(answer);
