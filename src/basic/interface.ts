interface IUser {
    username: string,
    password: string
    say: (() => string) | string
}

const customer: IUser = {
    username: 'openhe',
    password: '123456',
    say: () => 'customer say'
}

const employee: IUser = {
    username: 'openhe2',
    password: '123456',
    say: 'employee string'
}

// const fn: any = customer.say
console.log((<any>customer.say)()) // need conversion first
console.log(employee.say)

// extends
interface Person {
    age: number
}

interface Musician extends Person {
    instrument: string
}

const drummer = <Musician>{
    age: 10,
    instrument: 'drum'
}
console.log(drummer)
// same as
// const drummer2: Musician = {
//     age: 10,
//     instrument: 'drum'
// }
