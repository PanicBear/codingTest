const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(input[0]);
const list = input[1].split(' ').map(num=>parseInt(num));

console.log(list.filter(num=>!isDividable(num)).length);

function isDividable(num){
  if(num===1){
    return true;
  }else{
    for(let i = 2; i<=Math.sqrt(num);i++){
      if(num%i===0) return true;
    }
  }
  return false;
}