// generic function
function identity<T>(arg: T): T {
    return arg
}

console.log(identity<string>('hello world'))
console.log(identity<number>(100))

// generic interface
interface Pair<K, V> {
    first: K,
    second: V
}

let pair: Pair<number, string> = {
    first: 10,
    second: "hello"
}
console.log(pair)

// generic class
class Box<T> {
    private value: T

    constructor(value: T) {
        this.value = value
    }

    getter(): T {
        return this.value
    }
}

let str_box = new Box<string>('typescript')
console.log(str_box.getter())

// generic constraint
interface Lengthwise {
    length: number
}

function print_length<T extends Lengthwise>(arg: T): void {
    console.log(arg.length)
}

print_length<string>('hello')
// can omit
print_length('world')