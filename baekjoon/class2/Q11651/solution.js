const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const n = parseInt(input[0]);
const coords = [];

for (let i = 1; i <= n; i++) {
  coords.push(input[i].split(" ").map((num) => parseInt(num)));
}

console.log(
  coords
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1])
    .map((el) => `${el[0]} ${el[1]}`)
    .join("\n")
);
