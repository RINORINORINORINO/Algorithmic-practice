const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

arr = [...new Set(arr)];

const sorting = (a, b) => {
  if (a.length < b.length) return -1;
  else if (a.length > b.length) return 1;
  else return a.localeCompare(b);
};

arr.sort(sorting);

let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i] + "\n";
}

console.log(result);