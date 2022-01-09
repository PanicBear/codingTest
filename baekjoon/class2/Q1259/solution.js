const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let answer = "";

for (let i = 0; i < input.length - 1; i++) {
  const str = parseInt(input[i]).toString().split("");
  answer += isPelindrom(str);
  if (i !== input.length - 2) answer += "\n";
}

console.log(answer);

function isPelindrom(str) {
  const reversed = [...str].reverse();
  let answer = "yes";
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== reversed[i]) {
      answer = "no";
    }
  }
  return answer;
}
