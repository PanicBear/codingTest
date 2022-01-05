const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((num) => parseInt(num));

let gap = 0;
let answer = 'mixed';

for (let i = 1; i < 8; i++) {
  gap = Math.abs(input[i] - input[i - 1]) > Math.abs(gap) ? input[i] - input[i - 1] : gap;
}

switch (gap) {
  case 1:
    answer = 'ascending';
    break;
  case -1:
    answer = 'descending';
    break;
}

console.log(answer);
