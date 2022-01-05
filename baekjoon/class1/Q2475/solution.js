const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));
const powedSum = input
  .map((num) => Math.pow(num, 2))
  .reduce((prev, next) => prev + next);
console.log(powedSum % 10);
