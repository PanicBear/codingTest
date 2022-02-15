const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("");

const stack = ["("];
let answer = 0;

input.reduce((prev, next) => {
  if (next === "(") {
    stack.push(next);
  } else {
    stack.pop();
    answer += prev !== next ? stack.length : 1;
  }
  return next;
});

console.log(answer);
