function solution(arr, n) {
    if(arr.length%2 === 0) {
        return arr.map((el, idx) => idx%2===1 ? el+n : el)
    } else if(arr.length%2 === 1) {
        return arr.map((el, idx) => idx%2===0 ? el+n : el)
    }
}