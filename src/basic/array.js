// array
var nums = [1, 2, 3, 4];
nums.forEach(function (val, idx, arr) {
    console.log("idx = ".concat(idx, ", val = ").concat(val));
});
// Array obj
var strs = new Array(4);
strs = new Array('a', 'b', 'c', 'd');
console.log(strs);
// destruction
console.log.apply(console, strs);
var x = strs[0], y = strs[1], z = strs[2], w = strs[3];
// multi-dim
var multi_dim = [[1, 2, 3], [4, 5, 6]];
console.log(multi_dim);
// functions
var arr = [12, 5, 8, 130, 44];
// 1. every
var passed = arr.every(function (elem, idx, arr) {
    return elem >= 10;
});
console.log(passed);
// 2. filter
var res = arr.filter(function (elem, idx, arr) {
    return elem >= 10;
});
console.log(res);
// 3. map
res = arr.map(function (elem, idx, arr) {
    return elem * 2;
});
console.log(res);
// 4. reduce(left to right), reduceRight(right to left)
var sum = arr.reduce(function (sum, curr) {
    return sum + curr;
});
console.log(sum);
// 5. some
passed = arr.some(function (elem, idx, arr) {
    return elem >= 10;
});
console.log(passed);
