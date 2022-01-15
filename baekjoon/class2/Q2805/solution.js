const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [treeCnt, goal] = input[0].split(" ").map((el) => parseInt(el));
const list = input[1]
  .split(" ")
  .map((el) => parseInt(el))
  .sort((a, b) => a - b);

let answer = 0;
let min = 0;
let max = list[treeCnt - 1];

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let sum = 0;
  for (let i = 0; i < treeCnt; i++) {
    sum += list[i] >= mid ? list[i] - mid : 0;
  }
  if (sum >= goal) {
    if (mid > answer) {
      answer = mid;
    }
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(answer);
