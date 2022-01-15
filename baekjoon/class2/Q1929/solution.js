const fs = require("fs");
const [M, N] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

const primes = [];

for (let i = M; i <= N; i++) {
  isPrime(i) && primes.push(i);
}

console.log(primes.join("\n"));

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
