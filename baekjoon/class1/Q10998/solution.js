const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

const [a, b] = input;

console.log(a * b);
