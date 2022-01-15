const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, ...pairs] = input;
const place = [];
let list = pairs.map((el) => el.split(" ").map((num) => parseInt(num)));

for (let i = 0; i < N; i++) {
  let num = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      list[i][0] < list[j][0] && list[i][1] < list[j][1] && num++;
    }
  }
  place.push(num);
}

console.log(place.join(" "));
