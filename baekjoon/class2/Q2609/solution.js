const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

const getGCD = (A, B) => {
  if (B === 0) {
    return A;
  } else {
    return getGCD(B, A % B);
  }
};

const gcd = getGCD(input[0], input[1]);
const lcm = (input[0] * input[1]) / gcd;

console.log(`${gcd}
${lcm}`);
