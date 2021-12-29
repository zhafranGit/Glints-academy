class Animal {
  constructor(name, age){
      this.name = name
      this.age = age || 0
  }
  speak(){
      console.log("The animal Speaks :")
  }
  getSummary(){
      for(let i = 0; i < 10; i++){
          if(i % 2 == 0) console.log("Genap", i)
      }
      console.log(`This animal named ${this.name} and now is ${this.age} years old`) 
  }
  static sayHello(){
      console.log("Hello World")
  }
}

class Kucing extends Animal {
  constructor(name,age,color){
      super(name, age)
      this.color = color || "pink"
  }
  speak(){
      return `${this.name} say meow`
  }
}

class Burung extends Animal {
  constructor(name, age, legsColor){
      super(name, age)
      this.legsColor = legsColor
  }
  speak(){
      return `${this.name} say kuuk kuuk~`
  }
}

class Tikus extends Animal {
  constructor (name,tailColor, eyeColor) {
    super (name)
    this.tailColor = tailColor;
    this.eyeColor = eyeColor;
  }

  speak () {
    return `${this.name} say cit cit and the tail is so gorg!`
  }
}
//! instance object
const anggora = new Kucing("Pusi", 2, undefined);

const animal1 = new Animal("Hewan", 1);

const elang = new Burung ("cakra" ,undefined, "brown");

const tikus = new Tikus("jerry", "brown", "blue");

console.log(anggora)
// console.log(anggora.speak())
anggora.getSummary();
console.log(elang);
console.log(elang.speak());
console.log(tikus);
console.log(tikus.speak());
// Kucing.sayHello()
tikus.getSummary()



// child class dapat mengakses parents method dan property dengan cara menggunakan kata kunci super
// child class mewarisi method yang dimiliki oleh parent class, ini dibuktikan dengan class Kucing dapat memeanggil method getSummary milik parents class
// fungsi utama dari inheritance yaitu mempermudah serta mempersimpel code ketika harus membuat beberapa class yang hampir identik
