const fs = require("fs");
const [L, str] = fs.readFileSync("input.txt").toString().trim().split("\n");

console.log(
  Number(
    str
      .split("")
      .reduce(
        (prev, next, idx) => prev + (next.charCodeAt() - 96) * getR(idx),
        0
      ) % 1234567891
  )
);

function getR(idx) {
  let num = 1;
  for (let i = 1; i <= idx; i++) {
    num *= 31;
    num %= 1234567891;
  }
  return num;
}
