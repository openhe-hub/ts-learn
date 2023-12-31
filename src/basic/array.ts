// array
let nums: number[] = [1, 2, 3, 4]
nums.forEach((val, idx, arr) => {
    console.log(`idx = ${idx}, val = ${val}`)
})

// Array obj
let strs: string[] = new Array(4)
strs = new Array('a', 'b', 'c', 'd')
console.log(strs)

// destruction
console.log(...strs)
const [x, y, z, w] = strs

// multi-dim
let multi_dim: number[][] = [[1, 2, 3], [4, 5, 6]]
console.log(multi_dim)

// functions
let arr: number[] = [12, 5, 8, 130, 44]
// 1. every
let passed = arr.every((elem, idx, arr) => {
    return elem >= 10
})
console.log(passed)
// 2. filter
let res = arr.filter((elem, idx, arr) => {
    return elem >= 10
})
console.log(res)
// 3. map
res = arr.map((elem, idx, arr) => {
    return elem * 2
})
console.log(res)
// 4. reduce(left to right), reduceRight(right to left)
const sum = arr.reduce((sum, curr) => {
    return sum + curr
})
console.log(sum)
// 5. some
passed = arr.some((elem, idx, arr) => {
    return elem >= 10
})
console.log(passed)