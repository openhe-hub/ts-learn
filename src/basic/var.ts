// 1. use <type> var to convert one variable
// or use var as type
let str: string = '1'
// let num: number = str as any as number
let num: number = <number><any>str
console.log(num)

// 2. type infer

// 3. var scope
const global_num: number = 1
class Numbers {
    num_val: number = 2
    static sval: number = 3
}
console.log(global_num)
console.log(Numbers.sval)
console.log(new Numbers().num_val)

// 4. typeof
let x = 100
let y = 'hello'
console.log(typeof x)
console.log(typeof y)
