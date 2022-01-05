const fs = require('fs');
const input = parseInt(fs.readFileSync('input.txt').toString().trim());

let answer = 'F';

switch (Math.floor(input / 10)) {
  case 10:
  case 9:
    answer = 'A';
    break;
  case 8:
    answer = 'B';
    break;
  case 7:
    answer = 'C';
    break;
  case 6:
    answer = 'D';
    break;
  default:
    answer = 'F';
}

console.log(answer);
