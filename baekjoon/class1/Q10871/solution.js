const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [n, x] = input[0].split(" ").map((num) => parseInt(num));

console.log(
  input[1]
    .split(" ")
    .filter((el) => parseInt(el) < x)
    .join(" ")
);
