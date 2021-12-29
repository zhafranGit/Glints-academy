// class Car {
//   constructor(name, price) {
//     if (this.constructor == Car) {
//       throw new Error("Cannot initiate abstract class to an object");
//     }
//     this.name = name;
//     this.price = price;
//   }
//   getSummary() {}
// }

// class Suv extends Car {
//   constructor(name, price, speed) {
//     super(name, price);
//     this.speed = speed;
//   }
//   getSummary() {
//     console.log(
//       "This Suv car named",
//       this.name,
//       "and price of",
//       this.price,
//       "with speed of",
//       this.speed
//     );
//   }
//   print(){
//       this.getSummary()
//   }
// }

// fortuner = new Suv("Fortuner", 470000000, "200km/h");
// mcclaren = new Suv('McClaren', 5000000000000, "1000km/h");
// console.log(fortuner.name);
// fortuner.getSummary();

// let angka = 10


// console.log(mcclaren.name);
// console.log(mcclaren);
// console.log(mcclaren.print());
// class Member {
//   constructor (name, age, address) {
//     this.name = name
//     this.#age = age
//     this.#address = address
//   }

//   greeting () {
//     return `Hello member ${this.name}, your age ${this.#age} and your address ${this.#address}`
//   }
// }

// const zhafran = new Member ("zhafran", 8, 'Jl.in dulu ajah');

// console.log(zhafran);

// console.log(zhafran.greeting());


class Employee {
  constructor (name, role,baseSalary, bonus) {
    this.name = name;
    this.role = role;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
    this.calculateFinalSalary = function () {
      let finalSalary
    }
  }
}