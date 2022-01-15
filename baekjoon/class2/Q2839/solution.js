const fs = require("fs");
const input = parseInt(fs.readFileSync("input.txt").toString());

const undividables = [4, 7];
let answer = -1;

if (!undividables.some((el) => el === input)) {
  switch (input % 5) {
    case 0:
      answer = input / 5;
      break;
    case 1:
      answer = (input - 6) / 5;
      answer += 2;
      break;
    case 2:
      answer = (input - 12) / 5;
      answer += 4;
      break;
    case 3:
      answer = (input - 3) / 5;
      answer++;
      break;
    case 4:
      answer = (input - 9) / 5;
      answer += 3;
      break;
  }
}

console.log(answer);
