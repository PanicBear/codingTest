const fs = require("fs");
const [n, ...list] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

class Stack {
  #answer = [];
  #num = 1;
  #size = 0;
  #head = undefined;
  constructor() {
    this.#num = 1;
  }
  push = () => {
    const node = {
      value: this.#num++,
      next: this.#head,
    };
    this.#head = node;
    this.#size++;
    this.#answer.push("+");
  };
  pop = () => {
    const currentHead = this.#head;
    const next = this.#head.next;
    this.#head = next;
    this.#size--;
    this.#answer.push("-");
    return currentHead.value;
  };
  getSize = () => this.#size;
  getHead = () => this.#head;
  resetAnswer = () => {
    this.#answer = [];
  };
  getAnswer = () => {
    if (this.#answer.length > 0) {
      return this.#answer.join("\n");
    } else {
      return "NO";
    }
  };
  getNum = () => this.#num;
}

const stack = new Stack();

for (let i = 0; i < n; i++) {
  let value = stack.getHead() ? stack.getHead().value : 0;
  while (value < list[i]) {
    stack.push();
    value = stack.getHead().value;
  }
  if (stack.pop() !== list[i]) {
    stack.resetAnswer();
    break;
  }
}

console.log(stack.getAnswer());
