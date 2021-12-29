/**
 * ! Object oriented programming -> sudut pandang bahasa pemrograman yg berkonsep objek
 * * Object -> data yg berisi field/ props/attributes dan method/ function/ behaviour
 */


/**
 * ! Class -> blueprint,prototype / cetakan blueprint untuk membuat obj
 * * Class -> declare semua props dan funct yg dimiliki oleh obj
 * tiap obj selalu dibuat dari class dan sebuah class bisa membuat obj tanpa batas
 */


/**
 * membuat object firstName dan lastName berbeda (2 obj berbeda) dlm 1 class yg sama
 */

/**
 * 1. Js sendiri dari awal dibuat sbg bahasa prosedural, bukan berbasis object
 * 2. Maka dari itu, implementasi OOP tidak sedetail bahasa lain
 */


/**
 * ! Constructor Function
 * * pembuatan obj menggunakan tipe data obj, akan membuatobj yg selalu unik, sedangkan dlm oop, membuat classsbg cetakan, sehingga bisa membuat obj dg karakteristik yg sama berkali kali tanpa hrs mendeclare obj berkali kali seperti menggunakan tipe data obj
 */

// const Huda = {
//   firstName : "Pugar",
//   lastName : "Huda"
// }

// const Habib = {
//   firstName : "Muhammad",
//   lastName : "Habiibullah"
// }

/**
 * !notes 
 * * sblm ecmaScript 6, pembuatan class menggunakan function. krn js bukan bahasa yg fokus ke oop
 * * u/ membuat class di js yg lama, bisa membuat function -> construction
 */


// function Person () {

// }

// const Huda = new Person();
// const Budi = new Person();


/**
 * ! Property construction 
 * * sm dgn membuat obj biasa
 * * namun, construction function yg sudah kita buat tidak terlalu berguna, karena prop hanya ada di obj yg kita tambahkan property
 * ! u/ menambhakan prop di dlm semua obj yg dibuat dari construct , bisa menggunakan kata kunci this
 */

// function Person () {
//   this.firstName = "";
//   this.lastName = "";
// }

// const Huda = new Person();
// Huda.firstName = "Pugar"

// const Budi = new Person();
// console.log(Budi);

/**
 * ! Method  constructor
 * sama seperti obj biasanya , bisa menambahkan method di dlm constructor
 * jika menambahkan method di constructor, scr otomatisobj yg dibuat akan memiliki method tsb
 */


// function Person () {
//     this.firstName = "";
//     this.lastName = "";
//     this.sayHello = function (name) {
//       console.info(`Hello ${name}, my name is ${this.firstName}`);
//     }
// }


// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   sayHello () {
//     console.info(`Hello ${name}, my name is ${this.firstName}`);
//   }
// }
// const Huda = new Person("Pugar", "Huda");
// Huda.firstName = "Pugar"
// console.log(Huda);
// const Budi = new Person("Budi", "Hartono");
// console.log(Budi);


/**
 * ! Params di constructor funct
 * by default class adalah berbentuk funct, maka bisa memiliki params
 */

// class Person {
//   constructor(name) {
//     //code apapun
//     console.log(`Membuat classperson ${name}`);
//   }
// }

// const Huda = new Person("Huda");
// console.info(Huda);


/**
 * ! Property in class
 * sm pada constructor , dlm class apapun bisa menambahkan prop 
 * hasil akhirnya adalah sebuah obj, jadi menambahkan prop di class bisa jg dilakukan di instance obj
 */


// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const Huda = new Person("Huda");
// console.info(Huda);
// console.info(Huda.name)


/**
 * ! Method in class
 * * method di class sebenarnya bisa dilakukan dg cara menambahka method di constructor function
 * * namun, hal tsb sbnrnya menambahkan method ke dalam instance obj
 * * khusus u/ method sebaiknya menambahkan prototype, bukan instance obj
 * * ada cara mudah menambahkan method scr otomatis ditambahkan ke prototype
 */


// class Person {
//   constructor (name) {
//     this.name = name;
//   }

//   sayHello(name) {
//     return `Hi ${this.name}, my name is ${this.name}`;
//   }
//   //akan menempel di person prototype, buka dlm obj person atau budi
// }

// const edwin = new Person("Edwin")
// console.log(edwin.sayHello());

// class Person {
//   constructor (name) {
//     this.name = name;
//     this.sayHello = function (name) {
//       console.info(`Hello ${name}, my name is ${this.name}`);
//     }
//     //ini akan menempel di object Huda
//   }
// }

// const Huda = new Person("Huda");
// console.info(Huda)
// console.info(Huda.name)

/**
 * ! Class Inheritence 
 * prototype mendukung pewarisan, sedikit tricky cara pembuatannya
 * diperbaiki di ES6 dg fitur class
 * class bisa mewariskan dg menggunakan kata kunci extends 
 * di js, inheritence hnya memiliki satu parent class
 */


// class Employee {
//   constructor(name) {
//     sayHello(name) {
//       console.info(`Hi ${name}, my name is employee ${this.name}`)
//     }
//   }
// }

// class Manager extends Employee {
//   constructor (name) {
//     sayHello(name) {
//       console.info(`Hi ${name}, my name is manager ${this.name}`)
//     }
//   }
// }


// class Employee {
//     sayHello(name) {
//       console.info(`Hi ${name}, my name is employee ${this.name}`)
//     }
// }

// class Manager extends Employee {
//     // sayHello(name) {
//     //   console.info(`Hi ${name}, my name is manager ${this.name}`)
//     // }
// }

// const ucil = new Employee();
// ucil.name = "Ucil";
// ucil.sayHello("Ucil");

// const icil = new Manager();
// icil.name = "Icil";
// icil.sayHello("Icil");

// console.info(ucil);
// console.info(icil);

/**
 * ! Super Constructor
 * * class inheritance sifatnya seperti prototype inheritance
 * * constructor inheritence hanya melakukan excecute constructor lain dg tujuan agar prop di constructor lain bisa ditambahkan ke instance obj ini
 * * in this case, jika igin mencapai hasil yg sama, bisa menggunakan kata kunci super dlm constructor
 * * kata kunci super digunakan u memanggil constructor super class
 * * jika di child class kita membuaut constructor super class
 * * jika child di class membuat constructor, maka wajib memanggil parent constructor, walaupun di parent tidak ada constructor
 */

// class Employee {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello(name) {
//     console.info(`Hello ${name}, my name is employee ${this.name}`)
//   }
// }

// class Manager extends Employee {
//   //karena pewarisan maka sudah ada constructor di employee nya
//   sayHello(name) {
//     console.info(`Hello ${name}, my name is employee ${this.name}`)
//   }
// }

// ! di child class harus memanggil constructor parent class -> jika tidak akan error
// ? super hanya dipanggil didalam constructor, tidak boleh di method

// class Employee {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   sayHello(name) {
//     console.info(`Hello ${name}, my name is employee ${this.name}`)
//   }
// }

// class Manager extends Employee {
//   constructor (firstName, lastName) {
//     //params tidak hrs diisi -> tetapi jika tidak diisi akan udefined
//     super(firstName);
//     //!wajib memanggil super -> jika tidak akan eror
//     // this.firstName = firstName //tidak perlu karena suda terpanggil di super
//     this.lastName = lastName
//   }

//   sayHello(name) {
//     console.info(`Hello ${name}, my name is employee ${this.firstName}`)
//   }
// }

// const aca = new Employee("Aca");
// aca.sayHello("Acil");

// const khalid = new Manager("Khalid", "Al-asad");
// khalid.sayHello("Acil");


/**
 * ! Super method
 * * Selain digunakan u/ memanggil constructor milih parent class, kata kunci super jg bisa digunakan untuk mengakses method parant class
 * * Caranya bisa menggunakan super titik nama functionnya
 * * Super -> reference ke parent prototype, mirip seperti __proto__
*/

// class Shape {
//   paint() {
//     console.info("Draw the shape")
//   }
// }

// class Rectangle extends Shape {
//   paint() {
//     // super.paint(); //memanggil paint() method parent class
//     //! reference 
//     console.info('Paint Rectangle');
//   }
// }

// const rectangle = new Rectangle();
// rectangle.paint();


/**
 * ! Getter & Setter 
 * * class mendukung pembuatan getter & setter
 * * notes : getter dan setter akan berada di prototype, bukan di instance obj
 */


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName} `
  }

  set fullName(value) {
    const result = value.split(' ');
    this.firstName = result[0];
    this.lastName = result[1]
  }
}

const mekl = new Person("Edwin", "Mekl");
console.info(mekl);
console.info(mekl.fullName);

mekl.fullName = 'Muhammad Edwin';

console.info(mekl);

/**
 * ! Class Field
 * * Biasanya, saat kita ingin menambahkan field (property yg berisi value) , kita biasanya tambahkan di constructor
 * ? ada di ecmaScript yg mengajukan pembuatan public class field ditempatkan di luar constructor, selevel dg penempatan method (blm final)
 */

// ! javascript secara default berbasis public

/**
 * * didalamnya akan mendukung access modifier public dan private
 * * public artinya bisa diakses dr luar class, dan private hanya bisa diakses dari dlm class aja
 * * membuatnya bisa langsung membuat nama field dgn alue selevel dg method
 * ! jika tidak memasukkan value ke dalam field tersebut, artinya field tersebut memiliki value (undefined)
 */

class Member {
  firstName;
  lastName;
  point = 0;
}

const Deva = new Member();
console.info(Deva);

//! ini menempel di instance obj


/**
 * ! Private Class Field
 * default, ketika menambahkan field, makan field tsb bisa diakses dari manapun
 * ! jika kita ingin membuat field yg bersifat private (hanya bisa diakses dlm class), kita bisa menggunakan tanda # sebelum nama fieldnya (karena bisa diakses dlm class sj)
 */


// class Hitung {
//   #menghitung = 0;
//   //! agar tidak bisa diubah
//   increment () {
//     this.#menghitung++;
//   }

//   decrement () {
//     this.#menghitung--;
//   }

//   get () {
//     return this.#menghitung;
//   }
// }
// //! instance object
// const menghitung = new Hitung();

// menghitung.increment();
// menghitung.increment();
// menghitung.increment();
// menghitung.increment();
// menghitung.increment();
// menghitung.decrement();menghitung.decrement();

// console.info(menghitung.get());
// menghitung.#hitung = 50;

// console.info(menghitung);

/**
 * ! Private method
 */

class People {

  say (name) {
    if (name) {
      this.#sayWithName(name);
    } 
    else {
      this.#sayNoName();
    }
  }

  #sayNoName () {
    console.log(`Heyy`);
  }

  #sayWithName (name) {
    console.log(`Hello ${name}`);
  }
}

const Ucil = new People();
Ucil.say('Bayquni');
// Ucil.#sayNoName();

