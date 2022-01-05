const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const testCount = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= testCount; i++) {
  const [r, s] = input[i].split(" ");
  const filteredStr = s.replace(/[^A-Z0-9!@#$%*+-.\\\/:]/, "").split("");
  filteredStr.forEach((char) => {
    for (let j = 0; j < r; j++) {
      answer += char;
    }
  });
  if (i !== testCount) answer += "\n";
}

console.log(answer);
