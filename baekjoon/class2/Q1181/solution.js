const fs = require("fs");
const { parse } = require("path");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

let orderByLength = new Array(50).fill(undefined).map((el) => (el = []));
let answer = [];

for (let i = 1; i <= parseInt(input[0]); i++) {
  const str = input[i].trim();
  orderByLength[str.length - 1].push(str);
}

for (let i = 0; i < 50; i++) {
  answer = [...answer, ...[...new Set(orderByLength[i])].sort()];
}

console.log(answer.join("\n"));
