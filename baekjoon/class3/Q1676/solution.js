const fs = require("fs");
const num = parseInt(
  fs.readFileSync("input.txt").toString().trim().split("\n")
);

let two = 0;
let five = 0;

for (let i = 5; i <= num; i++) {
  count(i);
}

if (num === 5) {
  console.log(1);
} else {
  console.log(two < five ? two : five);
}

function count(num) {
  let isDividable = true;

  while (isDividable) {
    if (num % 2 === 0) {
      num /= 2;
      two++;
    } else if (num % 5 === 0) {
      num /= 5;
      five++;
    } else {
      isDividable = false;
    }
  }
}
