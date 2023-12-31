var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // constructor
    function Car(engine) {
        this.engine = engine;
    }
    // methods
    Car.prototype.display = function () {
        console.log("engine is ".concat(this.engine));
    };
    Car.class_name = 'car';
    return Car;
}());
var car = new Car('my engine');
car.display();
// extend
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.area = area;
    }
    Shape.prototype.display = function () {
        console.log("begin print");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("area = ".concat(this.area));
    };
    return Circle;
}(Shape));
var circle = new Circle(10);
circle.display();
// instance judge
console.log(circle instanceof Circle);
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.report = function () {
        return "user = ".concat(this.name);
    };
    return User;
}());
var user = new User('openhe');
console.log(user.report());
