const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const count = input[0];
const list = input[1].split(" ").map((item) => parseInt(item));
const max = Math.max(...list);

const modifyScore = (score, max) => (score / max) * 100;

let newScores = list.map((score) => modifyScore(score, max));
let newTotal = newScores.reduce((prev, next) => prev + next);
console.log(newTotal / count);
