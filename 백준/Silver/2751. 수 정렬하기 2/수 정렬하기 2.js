const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input.shift())
let arr = input.map(Number)

arr.sort((a,b) => a-b)

let result = ""
for(let i=0; i<arr.length; i++) {
    result+=arr[i] + "\n";
}

console.log(result)