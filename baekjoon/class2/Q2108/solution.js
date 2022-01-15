const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

const answer = [];
input.sort((a, b) => a - b);

answer.push(getAvg());
answer.push(getMedian());
answer.push(getMostOften());
answer.push(getRange());

console.log(answer.join("\n"));

function getAvg() {
  return Math.round(input.reduce((prev, next) => prev + next) / input.length);
}

function getMedian() {
  return input[(input.length - 1) / 2];
}

function getMostOften() {
  const map = new Map();
  input.forEach((num) => {
    const count = map.get(num);
    map.set(num, count ? count + 1 : 1);
  });
  let max = Math.max(...[...map.values()]);

  const filtered = [...map]
    .filter((el) => el[1] === max)
    .sort((a, b) => a[0] - b[0]);
  return filtered.length > 1 ? filtered[1][0] : filtered[0][0];
}

function getRange() {
  return input[input.length - 1] - input[0];
}
