const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const A = new Set(input[1].split(" ").map((el) => el.trim()));
const B = input[3].split(" ").map((el) => (A.has(el) ? 1 : 0));

console.log(B.join("\n"));
