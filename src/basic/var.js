// 1. use <type> var to convert one variable
// or use var as type
var str = '1';
// let num: number = str as any as number
var num = str;
console.log(num);
// 2. type infer
// 3. var scope
var global_num = 1;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 2;
    }
    Numbers.sval = 3;
    return Numbers;
}());
console.log(global_num);
console.log(Numbers.sval);
console.log(new Numbers().num_val);
// 4. typeof
var x = 100;
var y = 'hello';
console.log(typeof x);
console.log(typeof y);
