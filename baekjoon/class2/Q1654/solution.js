const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map((el) => parseInt(el));
const lines = input.slice(1, K + 1).map((el) => parseInt(el));

let min = 1;
let max = Math.max(...lines);
let mid = Math.floor((max + min) / 2);
let answer = min;

while (min <= max) {
  let sum = 0;
  lines.forEach((line) => {
    sum += Math.floor(line / mid);
  });
  if (sum < N) {
    max = --mid;
  } else {
    answer = answer < mid ? mid : answer;
    min = ++mid;
  }
  mid = Math.floor((max + min) / 2);
}

console.log(answer);
