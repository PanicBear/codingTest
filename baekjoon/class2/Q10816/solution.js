const fs = require('fs');
const [N, cardStr, M, tableStr] = fs.readFileSync('input.txt').toString().trim().split('\n');
const map = new Map();

const table = tableStr.split(' ');
const card = cardStr.split(' ');

table.forEach((num) => map.set(num, 0));
card.forEach((num) => map.has(num) && map.set(num, map.get(num) + 1));

console.log(table.map((num) => map.get(num)).join(' '));
