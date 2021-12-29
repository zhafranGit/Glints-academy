// ! es6\
function multiply (x,y) {
  return x * y;
}

console.log(multiply(5,4));

// const sum = (a,b) => {
//   return a + b;
// }

// console.log(sum(10,5));

// ! one line code
const divide = (a,b) =>{return a / b};

console.log(divide(10,3));


const hitung = x => y => z => { return x * y * z }
console.log(`Hasil hitung = ${hitung(10)(10)(10)}`);

// .then(res =>{
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// })


function getMoneyBack(money, callback) {
  if (typeof money !== 'number') {
    callback(null, new Error('money is not a number'))
  } else {
    callback(money)
  }
}

const money = getMoneyBack(1200)
console.log(money)