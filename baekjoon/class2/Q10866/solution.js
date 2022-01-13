const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const output = [];
const deque = [];

for (let i = 1; i < input.length; i++) {
  const [cmd, num] = input[i].split(' ');
  switch (cmd) {
    case 'push_front':
      deque.unshift(parseInt(num));
      break;
    case 'push_back':
      deque.push(parseInt(num));
      break;
    case 'pop_front':
      output.push(deque.shift() ?? -1);
      break;
    case 'pop_back':
      output.push(deque.pop() ?? -1);
      break;
    case 'size':
      output.push(deque.length);
      break;
    case 'empty':
      output.push(deque.length === 0 ? 1 : 0);
      break;
    case 'front':
      output.push(deque[0] ?? -1);
      break;
    case 'back':
      output.push(deque[deque.length - 1] ?? -1);
      break;
  }
}

console.log(output.join('\n'));
