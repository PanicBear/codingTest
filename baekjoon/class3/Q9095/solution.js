const fs = require("fs");
const [cnt, ...list] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

const arr = [1, 1, 2];

for (let i = 3; i <= 10; i++) {
  let branch = arr[i - 3] + arr[i - 2] + arr[i - 1];
  arr.push(branch);
}

console.log(list.map((el) => arr[el]).join("\n"));
