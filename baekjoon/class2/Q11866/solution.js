const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

const [N, K] = input;
let arr = new Array(N).fill(0).map((_, idx) => idx + 1);

let answer = "<";
let pivot = K - 1;

for (let i = N; i >= 1; i--) {
  answer += arr.splice(pivot, 1)[0];
  if (i !== 1) answer += ", ";
  pivot =
    pivot + K - 1 < arr.length ? pivot + K - 1 : (pivot + K - 1) % arr.length;
}
answer += ">";

console.log(answer);