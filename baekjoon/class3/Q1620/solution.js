const fs = require("fs");
const [nums, ...lines] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [listCnt, quizCnt] = nums.split(" ").map((el) => parseInt(el));
const list = lines.slice(0, listCnt);
const quiz = lines.slice(listCnt, listCnt + quizCnt);
const map = new Map();

list.forEach((el, idx) => map.set(el.trim().toLowerCase(), idx + 1));

console.log(
  quiz
    .map((el) => {
      if (isNaN(parseInt(el))) {
        return map.get(el.trim().toLowerCase());
      } else {
        return list[parseInt(el) - 1];
      }
    })
    .join("\n")
);
