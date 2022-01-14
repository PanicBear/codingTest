const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

class Queue {
  #tail = undefined;
  #head = undefined;
  #size = 0;

  init = (node) => {
    this.#tail = node;
    this.#head = node;
    this.#size++;
  };
  reset = () => {
    const value = this.#tail.value;
    this.#tail = undefined;
    this.#head = undefined;
    this.#size = 0;
    return value;
  };
  push = (value) => {
    const node = {
      value,
      next: undefined,
      prev: undefined,
    };
    if (this.#size === 0) {
      return this.init(node);
    }
    this.#head.prev = node;
    node.next = this.#head;
    this.#head = node;
    this.#size++;
  };
  pop = () => {
    if (this.#size === 0) {
      return -1;
    } else if (this.#size === 1) {
      return this.reset();
    } else {
      const value = this.#tail.value;
      this.#tail = this.#tail.prev;
      this.#tail.next = undefined;
      this.#size--;
      return value;
    }
  };
  getSize = () => this.#size;
  getHead = () => (this.#head ? this.#head.value : -1);
  getTail = () => (this.#tail ? this.#tail.value : -1);
}

const queue = new Queue();
const result = [];
const execCmd = (input) => {
  const [cmd, num] = input.split(' ');
  switch (cmd) {
    case 'push':
      queue.push(parseInt(num));
      break;
    case 'pop':
      result.push(queue.pop());
      break;
    case 'size':
      result.push(queue.getSize());
      break;
    case 'empty':
      result.push(queue.getSize() === 0 ? 1 : 0);
      break;
    case 'front':
      result.push(queue.getTail());
      break;
    case 'back':
      result.push(queue.getHead());
      break;
  }
};

for (let i = 1; i < input.length; i++) {
  execCmd(input[i]);
}

console.log(result.join('\n'));
