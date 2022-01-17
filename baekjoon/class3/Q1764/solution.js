const fs = require('fs');
const [cnt, ...lines] = fs.readFileSync('input.txt').toString().trim().split('\n');

lines.sort();
let commons = [];
lines.reduce((prev, next) => {
  prev === next && commons.push(prev);
  return next;
});

console.log([commons.length, ...commons].join('\n'));
