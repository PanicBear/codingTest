const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [row, col] = input[0].split(" ").map((el) => parseInt(el));
const colors = [];

let answer = row * col;

for (let i = 1; i <= row; i++) {
  const line = input[i].trim();
  const newArr = [];
  for (let j = 0; j < col; j++) {
    newArr.push(line[j]);
  }
  colors.push(newArr);
}

for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= col - 8; j++) {
    const count = modifyCount(i, j);
    answer = count < answer ? count : answer;
  }
}

console.log(answer);

function modifyCount(x, y) {
  let whiteFirstCount = 0;
  let blackFirstCount = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      const whiteFirst = (i + j) % 2 === 0 ? "W" : "B";
      const blackFirst = (i + j) % 2 === 0 ? "B" : "W";
      colors[i][j] !== whiteFirst && whiteFirstCount++;
      colors[i][j] !== blackFirst && blackFirstCount++;
    }
  }
  return whiteFirstCount < blackFirstCount ? whiteFirstCount : blackFirstCount;
}
