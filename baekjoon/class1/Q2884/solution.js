const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let [h, m] = input.map((num) => parseInt(num));

if (m >= 45) {
  m -= 45;
} else {
  m = m - 45 < 0 ? m + 60 - 45 : m - 45;
  h = h - 1 < 0 ? 23 : h - 1;
}

console.log(`${h} ${m}`);
