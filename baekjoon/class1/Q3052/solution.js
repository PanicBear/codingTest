const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

console.log([...new Set(input.map((num) => parseInt(num) % 42))].length);
