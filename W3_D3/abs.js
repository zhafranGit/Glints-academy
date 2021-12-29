class Employee {
    constructor(name, baseSalary, bonus){
        this.name = name
        this.baseSalary = baseSalary
        this.bonus = 5000
        this.calculateFinalSalary= function(){
            let finalSalary = this.baseSalary + this.bonus
            console.log(`final salary is : ${finalSalary}`)
            
        }
        this.getDetail = function (){
            console.log(`name : ${this.name}`)
        }  
    }
}

// const programer = new Employee ("ucil", 7000, 5000)
// programer.getDetail()


class Counter{
#number;

    constructor(number){
        this._number = number
        
    }
    get hitung(){
        return this._number
    }
    set hitung(numberBaru){
        this._number = numberBaru
    }

    increment(){
    return this._number += 1;
    
    }

    decrement(){
    return this._number -= 1;
    
    }
    incrementByThree(){
        return this.increment(), this.increment(), this.increment()
        }

}

const test = new Counter (6)            // Nilai Awal diassingn number = 6
console.log(test.hitung)                // Get number = 6 sesuai dengan sebelumnya 
console.log(test.increment())           // Use method 6+1 = 7
console.log(test.decrement())           // Use method 7-1 = 6
console.log(test.incrementByThree())    // Use method 6+1+1+1 = 9
console.log(test.hitung)                // Get number 9
test.hitung = 20                        // Set number 20
console.log(test.hitung)                // Get number berubah jd 20 dari sebelumnya 9
console.log(test.incrementByThree())    // Use method 20+1+1+1 =23
console.log(test.hitung)                // Get number 23


class Book {
#author    
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);