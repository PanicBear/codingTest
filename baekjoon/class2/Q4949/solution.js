const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const bracketStack = [];
  const inputArr = input[i].split("");
  let result = "yes";

  for (let j = 0; j < inputArr.length; j++) {
    const char = inputArr[j];
    if (char === "[" || char === "(") {
      bracketStack.push(char);
    } else if (char === "]") {
      if (bracketStack[bracketStack.length - 1] === "[") {
        bracketStack.pop();
      } else {
        result = "no";
        break;
      }
    } else if (char === ")") {
      if (bracketStack[bracketStack.length - 1] === "(") {
        bracketStack.pop();
      } else {
        result = "no";
        break;
      }
    }
  }
  answer.push(bracketStack.length === 0 && result === "yes" ? "yes" : "no");
}

console.log(answer.join("\n"));
