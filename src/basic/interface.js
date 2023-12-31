var customer = {
    username: 'openhe',
    password: '123456',
    say: function () { return 'customer say'; }
};
var employee = {
    username: 'openhe2',
    password: '123456',
    say: 'employee string'
};
// const fn: any = customer.say
console.log(customer.say());
console.log(employee.say);
var drummer = {
    age: 10,
    instrument: 'drum'
};
console.log(drummer);
// same as
// const drummer2: Musician = {
//     age: 10,
//     instrument: 'drum'
// }
