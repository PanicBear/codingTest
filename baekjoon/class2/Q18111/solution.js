const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M, B] = input
  .shift()
  .split(" ")
  .map((num) => parseInt(num));
input = input.map((line) => line.split(" ").map((num) => parseInt(num)));

let lowestLevel = Math.floor(getBlocks() / N / M);
let enableLevel =
  (getBlocks() + B) / N / M > 256 ? 256 : Math.floor((getBlocks() + B) / N / M);
let minTime = Number.MAX_SAFE_INTEGER;
let highstLevel = 0;

for (let i = lowestLevel; i <= enableLevel; i++) {
  const time = calcTime(i);
  if (minTime >= time) {
    minTime = time;
    highstLevel = i;
  }
}

console.log([minTime, highstLevel].join(" "));

function getBlocks() {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      sum += input[i][j];
    }
  }
  return sum;
}

function calcTime(level) {
  let totalTime = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      totalTime =
        level - input[i][j] > 0
          ? (totalTime += level - input[i][j])
          : (totalTime -= (level - input[i][j]) * 2);
    }
  }
  return totalTime;
}
