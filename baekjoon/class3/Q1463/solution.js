const fs = require('fs');
let input = parseInt(fs.readFileSync('input.txt').toString());

let minLength = Number.MAX_SAFE_INTEGER;

getCnt(input, 0);

console.log(minLength);

function getCnt(num, cnt) {
  if (cnt > minLength) {
    return;
  } else if (num === 1) {
    minLength = cnt < minLength ? cnt : minLength;
    return;
  }
  num % 2 === 0 && getCnt(num / 2, cnt + 1);
  num % 3 === 0 && getCnt(num / 3, cnt + 1);
  num > 1 && getCnt(num - 1, cnt + 1);
}
