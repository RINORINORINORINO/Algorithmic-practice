const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = input[0].split(" ");
let a = "";
let b = "";

for (let i = 0; i < n[0].length; i++) {
    a = n[0][i] + a;
}

for (let i = 0; i < n[1].length; i++) {
    b = n[1][i] + b;
}

if (Number(a) > Number(b)) {
    console.log(Number(a));
} else {
    console.log(Number(b));
}