// class
class User {
    name(): void {
        console.log('I am openhe')
    }
}

const user: User = new User()
user.name()

// number
const num: number = 10

// bool
const flag: boolean = true

// array
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
console.log(arr)
console.log(arr2)

// tuple
let tuple: [string, number] = ['aaa', 111]
console.log(tuple)

// enum
enum Color {
    RED , BLUE, GREEN
}
let color: Color = Color.BLUE
console.log(color)

// null & undefined

// never
// only never type can be given to never
let x: never
x = (() => {
    throw new Error('exception')
})()