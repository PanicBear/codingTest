const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");
const [a, b] = input.map((num) => parseInt(num));
console.log(`${a + b}
${a - b}
${a * b}
${Math.floor(a / b)}
${a % b}
`);
