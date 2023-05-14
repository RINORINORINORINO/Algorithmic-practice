const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());

    return result;
}

let arr = input[0].split(" ").map((el) => Number(el));
let sortedNums = mergeSort(arr);
console.log(sortedNums.join(" "));

