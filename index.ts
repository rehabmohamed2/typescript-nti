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
const user1: User = {
    name: 'Daniel',
    age: 26,
    gender: "male"
}
const user2: User  = {
    name: 'Daniel',
    age: 26,
    gender: "male"
}
const user3: User  = {
    name: 'Daniel',
    age: 26,
    gender: "male"
}

type Max = number | string;
type Max2 = 'female' | 'male';

type User = {
    readonly name: string,
    age: Max,
    gender?: Max2

}
// reopen and inhert the User interface
interface User2 {
    name: string,
    age: number,

}
//generic types
function identity<T =number , T2 =string>( n1:T , n2:T2): T {
    return n1;
}
console.log(identity<string , boolean>("1", true));

class Car {
    
    constructor(private name : string) {
        console.log('Car class');
       
        console.log(`this car is ${this.name}`);

    }
    maxSpeed(speed: number): string {
        return(`the max speed is ${speed}`);}
}
const car2 : Car = new Car("red");
console.log(car2.maxSpeed(200));
class Car2 extends Car {
    constructor(name: string , private color: string) {
        super(name);
        console.log(`the max speed is ${this.color}`);
    }
}
const car3 : Car2 = new Car2("blue", "red");
