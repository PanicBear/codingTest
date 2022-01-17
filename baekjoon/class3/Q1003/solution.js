const fs = require("fs");
const [length, ...nums] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

const cntTable = [
  [1, 0],
  [0, 1],
];
const answer = [];

const initCntTable = () => {
  for (let i = 2; i <= 40; i++) {
    const zero = cntTable[i - 1][0] + cntTable[i - 2][0];
    const one = cntTable[i - 1][1] + cntTable[i - 2][1];
    cntTable.push([zero, one]);
  }
};
const setAnswer = () => {
  for (let i = 0; i < length; i++) {
    answer.push(cntTable[nums[i]].join(" "));
  }
};

initCntTable();
setAnswer();

console.log(answer.join("\n"));
