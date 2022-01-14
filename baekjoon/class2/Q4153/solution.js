const fs = require('fs');
const lines = fs.readFileSync('input.txt').toString().trim().split('\n');
const result = [];

for (let i = 0; i < lines.length - 1; i++) {
  const nums = lines[i]
    .split(' ')
    .map((el) => Math.pow(parseInt(el), 2))
    .sort((a, b) => a - b);

  result.push(nums[0] + nums[1] === nums[2] ? 'right' : 'wrong');
}

console.log(result.join('\n'));
