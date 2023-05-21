const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = []
for(let i = 1; i<=n; i++) {
    let [x, y] = input[i].split(" ").map(Number)
    arr.push([x, y])
}

const sortedXY = (a, b) => {
    if(a[0] !== b[0]) {
        return a[0] - b[0]
    } else {
        return a[1] - b[1]
    }
}

arr.sort(sortedXY)

let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(result);