const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("");
const countTable = new Array(26).fill(0);
let answer = 0;
for (let i = 0; i < input.length; i++) {
  let index = input[i].charCodeAt();
  index = index >= 97 ? index - 97 : index - 65;
  countTable[index]++;
}
countTable.forEach((el, idx) => {
  answer = el > countTable[answer] ? idx : answer;
});
console.log(
  countTable.filter((count) => count === countTable[answer]).length > 1
    ? "?"
    : String.fromCharCode(answer + 65)
);
