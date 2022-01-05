const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((num) => parseInt(num));

const digitTable = new Array(10).fill(0);
const result = input
  .reduce((prev, next) => prev * next)
  .toString()
  .split('');
let answer = '';

result.forEach((digit) => digitTable[digit]++);

for (let i = 0; i < 10; i++) {
  answer += digitTable[i];
  if (i !== 9) answer += '\n';
}

console.log(answer);
