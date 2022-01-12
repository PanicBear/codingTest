const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let arr = new Array(parseInt(input)).fill(0).map((_, idx) => idx + 1);

while (arr.length !== 1) {
  if (arr.length % 2) {
    const last = arr.pop();
    arr = arr.filter((_, idx) => idx % 2);
    arr = [last, ...arr];
  } else {
    arr = arr.filter((_, idx) => idx % 2);
  }
}

console.log(...arr);
