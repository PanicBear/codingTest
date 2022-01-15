const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const answer = [];

for (let i = 1; i < input.length; i += 2) {
  const [N, M] = input[i].split(" ").map((num) => parseInt(num));
  const priority = input[i + 1].split(" ").map((num) => parseInt(num));
  const papers = new Array(N).fill(0).map((el, idx) => el + idx);
  const targetPage = papers[M];
  let cnt = 0;

  while (papers.length !== 0) {
    if (priority[0] === Math.max(...priority)) {
      cnt++;
      priority.shift();
      if (papers.shift() === targetPage) {
        break;
      }
    } else {
      priority.push(priority.shift());
      papers.push(papers.shift());
    }
  }
  answer.push(cnt);
}

console.log(answer.join("\n"));
