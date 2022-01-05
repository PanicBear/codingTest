const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let answer = "";
for (let i = 1; i <= parseInt(input); i++) {
  for (let j = 1; j <= i; j++) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer);
