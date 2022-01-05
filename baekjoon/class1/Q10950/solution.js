const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const testCount = parseInt(input[0]);

let answer = "";

for (let i = 0; i < testCount; i++) {
  const [a, b] = input[i + 1].split(" ").map((num) => parseInt(num));
  answer += a + b + "\n";
}
console.log(answer);
