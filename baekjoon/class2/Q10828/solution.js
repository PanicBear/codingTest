const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

class Stack {
  #head = undefined;
  #size = 0;
  constructor() {}
  push = (value) => {
    const node = {
      value,
      next: this.#head,
    };
    this.#head = node;
    this.#size++;
  };
  pop = () => {
    if (this.#head) {
      const value = this.#head.value;
      this.#head = this.#head.next;
      this.#size--;
      return value;
    } else {
      return -1;
    }
  };
  isEmpty = () => (this.#size === 0 ? 1 : 0);
  getSize = () => this.#size;
  getTop = () => {};
  getHead = () => this.#head;
}

const output = [];
const stack = new Stack();

for (let i = 1; i < input.length; i++) {
  const [cmd, num] = input[i].split(' ');
  switch (cmd) {
    case 'push':
      stack.push(num);
      break;
    case 'pop':
      output.push(stack.getSize() ? stack.pop() : -1);
      break;
    case 'size':
      output.push(stack.getSize());
      break;
    case 'empty':
      output.push(stack.isEmpty());
      break;
    case 'top':
      const head = stack.getHead();
      output.push(head ? head.value : -1);
      break;
  }
}

console.log(output.join('\n'));
