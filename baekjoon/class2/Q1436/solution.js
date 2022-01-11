const fs = require("fs");
const input = parseInt(fs.readFileSync("input.txt").toString().trim());

const list = [];
let num = 666;
while (list.length < input) {
  if (num.toString().match("666")) {
    list.push(num);
  }
  num++;
}

console.log(list.pop());
