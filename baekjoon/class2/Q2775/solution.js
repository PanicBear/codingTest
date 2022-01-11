const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

const apt = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
const answer = [];

for (let i = 1; i <= 14; i++) {
  let arr = [];
  for (let j = 0; j < 14; j++) {
    if (j === 0) {
      arr.push(1);
    } else {
      arr.push(apt[i - 1].slice(0, j + 1).reduce((prev, next) => prev + next));
    }
  }
  apt.push(arr);
}

for (let i = 1; i < input.length; i += 2) {
  let k = input[i];
  let n = input[i + 1];
  answer.push(apt[k][n - 1]);
}

console.log(answer.join("\n"));
