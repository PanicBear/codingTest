const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const list = input[1].split(' ');
let min = 10000000;
let max = -10000000;

for (let i = 0; i < list.length; i++) {
  const num = parseInt(list[i]);
  max = num > max ? num : max;
  min = num < min ? num : min;
}

console.log(`${min} ${max}`);
