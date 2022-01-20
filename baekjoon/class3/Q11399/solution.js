const fs = require("fs");
const [length, list] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const nums = list
  .split(" ")
  .map((el) => parseInt(el))
  .sort((a, b) => a - b);
for (let i = 1; i < length; i++) {
  nums[i] = nums[i] + nums[i - 1];
}

console.log(nums.reduce((prev, next) => prev + next));
