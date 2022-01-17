const fs = require('fs');
const [cnt, ...lines] = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M] = cnt
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

const sitePwMap = new Map();
const pwList = [];

for (let i = 0; i < N; i++) {
  const line = lines[i];
  const [site, pw] = line.trim().split(' ');
  sitePwMap.set(site, pw);
}

for (let i = N; i < N + M; i++) {
  pwList.push(sitePwMap.get(lines[i]));
}

console.log(pwList.join('\n'));
