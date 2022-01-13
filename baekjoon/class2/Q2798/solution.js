const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const [N, sum] = input[0].split(' ').map((el) => parseInt(el));
const list = input[1]
  .split(' ')
  .map((el) => parseInt(el))
  .sort((a, b) => a - b);

let largestSum = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 1; j < 100; j++) {
    for (let k = 2; k < 100; k++) {
      if (i !== j && j !== k && k !== i) {
        let currentSum = list[i] + list[j] + list[k];
        if (currentSum > largestSum && currentSum <= sum) {
          console.log(list[i], list[j], list[k]);
          largestSum = currentSum;
        } else if (currentSum === sum) {
          break;
        }
      }
    }
  }
}

console.log(largestSum);
