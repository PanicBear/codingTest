const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const testCaseCount = parseInt(input[0]);
let answer = '';

for (let i = 1; i <= testCaseCount; i++) {
  const testCase = input[i].split('');
  let scoreSum = 0;
  let scoreStack = 0;

  for (let j = 0; j < testCase.length; j++) {
    if (testCase[j] === 'O') {
      scoreSum += ++scoreStack;
    } else {
      scoreStack = 0;
    }
  }

  answer += scoreSum;
  if (i !== testCaseCount) answer += '\n';
}

console.log(answer);
