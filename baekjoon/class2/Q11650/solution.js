const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let list = input.splice(1, parseInt(input[0]));

list.sort((a, b) => {
  const [ax, ay] = a.split(" ").map((el) => parseInt(el));
  const [bx, by] = b.split(" ").map((el) => parseInt(el));
  if (ax !== bx) {
    return ax - bx;
  } else {
    return ay - by;
  }
});

console.log(list.map((el) => el.trim()).join("\n"));
