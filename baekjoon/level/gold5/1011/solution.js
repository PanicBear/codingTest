const fs = require("fs");
const [length, ...nums] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const pairs = nums.map((el) => el.split(" ").map((num) => parseInt(num)));
const answers = [];

pairs.forEach((pair) => answers.push(getMinExec(pair[1] - pair[0])));

console.log(answers.join("\n"));

function getMinExec(gap) {
  const value = Math.floor(Math.sqrt(gap));
  if (gap === value * value) {
    return value * 2 - 1;
  } else if (gap <= value * value + value) {
    return value * 2;
  } else {
    return value * 2 + 1;
  }
}
