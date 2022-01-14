const fs = require('fs');
const lines = fs.readFileSync('input.txt').toString().trim().split('\n');
const data = lines.slice(1, parseInt(lines[0]) + 1).sort((a, b) => {
  const [aNum, aName] = a.split(' ');
  const [bNum, bName] = b.split(' ');

  if (aNum !== bNum) {
    return aNum - bNum;
  } else {
    return a;
  }
});

console.log(data.join('\n'));
