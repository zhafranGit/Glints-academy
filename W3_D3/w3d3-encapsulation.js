class Counter {
  #count; // syntax untuk membuat property bersifat private
  constructor(count) {
    this.#count = count;
  }
  getCount() {
    // getter method
    return this.#count;
  }
  setCount(count) {
    // setter method
    this.#count = count;
  }
  #increment() {
    // setter method
    this.#count++;
  }
  decrement() {
    // setter method
    this.#count--;
  }
  increaseByTwo() {
    this.#increment();
    this.#increment();
  }
  increaseByThree() {
    this.#increment();
    this.#increment();
    this.#increment();
  }
}

class CounterV2 extends Counter {
  constructor(count) {
    this.#count = count;
  }
  getCount() {
    return this.count;
  }
  setCount(count) {
    this.count = count;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

const counter1 = new Counter(1);
counter1.increaseByTwo();
counter1.increaseByThree();
// counter1.#increment(); // will produce an error
// counter1.#count(); // will produce an error
console.log(counter1.getCount());

const counter2 = new CounterV2(1)
counter2.increaseByTwo()
