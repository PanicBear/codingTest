const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");
const [a, b] = input;

if (a - b > 0) {
  console.log(">");
} else if (a - b === 0) {
  console.log("==");
} else {
  console.log("<");
}
