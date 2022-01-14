const fs = require('fs');
const lines = fs.readFileSync('input.txt').toString().trim().split('\n');

const result = [];

for (let i = 1; i < lines.length; i++) {
  const [H, W, N] = lines[i].split(' ').map((num) => parseInt(num));
  const floor = N % H === 0 ? H : Math.floor(N % H);
  const room = N % H === 0 ? Math.floor(N / H) : Math.floor(N / H) + 1;
  result.push(`${floor}${room < 10 ? '0' + room : room}`);
}

console.log(result.join('\n'));
