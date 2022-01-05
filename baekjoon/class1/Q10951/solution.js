const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let answer = "";

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map((num) => parseInt(num));
  answer += a + b;
  if (i !== input.length - 1) {
    answer += "\n";
  }
}
console.log(answer);
