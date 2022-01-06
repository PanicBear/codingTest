const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const k = parseInt(input[0]);
const stack = [];

for (let i = 1; i <= k; i++) {
  const num = parseInt(input[i]);
  num ? stack.push(num) : stack.pop();
}

console.log(stack.reduce((prev, next) => prev + next, 0));
