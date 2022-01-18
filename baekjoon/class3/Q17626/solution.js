const fs = require('fs');
const input = parseInt(fs.readFileSync('input.txt').toString());

const arr = new Array(input + 1).fill(0);
arr[1] = 1;

for (let i = 2; i <= input; i++) {
  let min = 4;
  for (let j = 1; j * j <= i; j++) {
    min = arr[i - j * j] < min ? arr[i - j * j] : min;
  }
  arr[i] = min + 1;
}

console.log(arr[input]);
