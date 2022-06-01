// Before ES6
// function Vehicle (engine, speed) {
//     this.engine = engine;
//     this.speed = speed;
//     this.info = function() {
//         console.log(`Engine: ${engine}, speed: ${speed}`);
//     };
// }
// // let car1 = new Vehicle("V8", "1000km/h")
// // console.log(car1)
// // console.log(car1.info())

// function Car (engine, speed, wheels, brake){
//     Vehicle.call(this, engine, speed);
//     this.wheels = wheels;
//     this.brake = brake;
//     this.honk = function(){
//         console.log("Clear out of the way!")
//     }
// }

// Car.isTesla = function() {
//     if(this.brake){
//         return true
//     } else {
//         return false
//     }
// }
// Car.prototype = Object.create(Vehicle.prototype);
// let car2 = new Car("V8", "1000km/h", 4, true)
// console.log(car2)
// console.log(car2.info())

// ES6

class Vehicle {
    constructor(engine, speed){
        this.engine = engine;
        this.speed = speed;
    }

    info() {
        console.log(`Engine: ${this.engine}, speed: ${this.speed}`);
    }
}

class Car extends Vehicle {
    constructor(engine, speed, wheels, brake){
        super(engine, speed)
        this.wheels = wheels;
        this.brake = brake;
    }

    honk() {
        console.log("Clear out of the way!")
    }

    static isTesla (){
        if(this.brake){
            return true;
        } else {
            false
        }
    }
}

const car1 = new Car("v8", "100km/h", 4, true)
console.log(car1)
console.log(car1.info())