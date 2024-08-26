"use strict";
// console.log('Hello, world!');
// function sayHello(): string {
//     console.log();
//     return ('Hello, world!');
//   }
// const test = function() {
//     console.log('Hello, world!');
// }
// const test2 = () => {
//     console.log('Hello, world!');
// }
const user1 = {
    name: 'Daniel',
    age: 26,
    gender: "male"
};
const user2 = {
    name: 'Daniel',
    age: 26,
    gender: "male"
};
const user3 = {
    name: 'Daniel',
    age: 26,
    gender: "male"
};
//generic types
function identity(n1, n2) {
    return n1;
}
console.log(identity("1", true));
class Car {
    constructor(name) {
        this.name = name;
        console.log('Car class');
        console.log(`this car is ${this.name}`);
    }
    maxSpeed(speed) {
        return (`the max speed is ${speed}`);
    }
}
const car2 = new Car("red");
console.log(car2.maxSpeed(200));
class Car2 extends Car {
    constructor(name, color) {
        super(name);
        this.color = color;
        console.log(`the max speed is ${this.color}`);
    }
}
const car3 = new Car2("blue", "red");
