// class
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.name = function () {
        console.log('I am openhe');
    };
    return User;
}());
var user = new User();
user.name();
// number
var num = 10;
// bool
var flag = true;
// array
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(arr);
console.log(arr2);
// tuple
var tuple = ['aaa', 111];
console.log(tuple);
// enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color || (Color = {}));
var color = Color.BLUE;
console.log(color);
