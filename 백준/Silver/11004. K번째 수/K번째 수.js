const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

let k = input[0].split(" ")[1]

let sortedArr = input[1].split(" ").map(Number).sort((a,b) => a-b)

console.log(sortedArr[k-1])