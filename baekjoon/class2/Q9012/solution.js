const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const answer = [];

for (let i = 1; i <= parseInt(input[0]); i++) {
  const length = [...input[i].trim().split("")].length;
  let str = input[i].trim();
  for (let j = 0; j < length; j++) {
    str = str.replaceAll("()", "");
    if (str.length === 0) {
      answer.push("YES");
      break;
    } else if (j === length - 1) {
      answer.push("NO");
    }
  }
}

console.log(answer.join("\n"));
