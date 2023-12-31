// generic function
function identity(arg) {
    return arg;
}
console.log(identity('hello world'));
console.log(identity(100));
var pair = {
    first: 10,
    second: "hello"
};
console.log(pair);
// generic class
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getter = function () {
        return this.value;
    };
    return Box;
}());
var str_box = new Box('typescript');
console.log(str_box.getter());
function print_length(arg) {
    console.log(arg.length);
}
print_length('hello');
// can omit
print_length('world');
