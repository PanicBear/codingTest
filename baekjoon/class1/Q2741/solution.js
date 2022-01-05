const fs = require('fs');
const input = parseInt(fs.readFileSync('input.txt').toString().trim());

let answer = '';

for (let i = 1; i <= input; i++) {
  answer += i;
  if (i !== input) answer += '\n';
}

console.log(answer);
