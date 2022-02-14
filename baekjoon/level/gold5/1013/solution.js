const fs = require("fs");
const [length, ...str] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const answers = str.map((el) => isValidate(el));
console.log(answers.join("\n"));

function isValidate(str) {
  const regexp = /^((100+1+)|(01))+$/;
  return regexp.test(str) ? "YES" : "NO";
}
