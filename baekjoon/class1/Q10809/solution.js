const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

const charTable = new Array(26).fill(-1);

for (let i = 0; i < 26; i++) {
  charTable[i] = input.indexOf(String.fromCharCode(97 + i));
}

console.log(charTable.join(' '));
