const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(num=>parseInt(num));

const [x,y,w,h]=input
let answer = 999;

answer=Math.abs(w-x)<answer?Math.abs(w-x):answer;
answer=Math.abs(h-y)<answer?Math.abs(h-y):answer;
answer=Math.abs(x-0)<answer?Math.abs(x-0):answer;
answer=Math.abs(y-0)<answer?Math.abs(y-0):answer;

console.log(answer)