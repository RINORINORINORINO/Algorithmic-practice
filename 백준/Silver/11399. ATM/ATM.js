const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let person_arr = input[1].split(" ").map(Number);

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}

let sorted = mergeSort(person_arr);
let sumArr = [0];
for (let i = 0; i < n; i++) {
  let sum = sorted[i] + sumArr[i];
  sumArr.push(sum);
}
let summury = sumArr.reduce((acc, cur) => acc + cur);
console.log(summury);