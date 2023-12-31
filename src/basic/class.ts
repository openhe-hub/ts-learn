class Car {
    // field
    engine: string
    static class_name: string = 'car'

    // constructor
    constructor(engine: string) {
        this.engine = engine
    }

    // methods
    display(): void {
        console.log(`engine is ${this.engine}`)
    }
}

const car = new Car('my engine')
car.display()

// extend
class Shape {
    protected area: number

    constructor(area: number) {
        this.area = area
    }

    display(): void {
        console.log("begin print")
    }
}

class Circle extends Shape {
    display() {
        super.display()
        console.log(`area = ${this.area}`)
    }
}

const circle = new Circle(10)
circle.display()

// instance judge
console.log(circle instanceof Circle)

// implement interface
interface Person {
    name: string
    report: () => string
}

class User implements Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    report(): string {
        return `user = ${this.name}`;
    }
}

const user = new User('openhe')
console.log(user.report())