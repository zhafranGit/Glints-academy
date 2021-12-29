// /**Diberikan sebuah function angkaPrima yang menerima satu parameter berupa angka.

// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
// */
// function angkaPrima(angka) {
//   // you can only write your code here!
//   //! prime number -> faktornya hanya 1 dan dirinya sendir
//   //! prime number itu berawal dari 2
//   let isPrime = true;
//   //! flagging -> pengecekan 
//   if ( angka <= 1) {
//     isPrime = false;
//     // ! prime number isn't negative
//   } else {
//     for (let i = 2; i < angka; i++) {
//       if (angka % i === 0) {
//         isPrime = false
//       }
//     }
//   }
//   return isPrime;
// }

// // // TEST CASES
// console.log(angkaPrima(3)); // true
// console.log(angkaPrima(7)); // true
// console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false


/**
 * Diberikan sebuah function cariModus yang menerima sebuah array kumpulan angka.

Function akan me-return modus dari array atau deret angka tersebut.

Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.

Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.

Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
  // you can only write your code here!
  let result = {};
  //! used for temporary
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let num = arr[i];
    // console.log(num);
    if (result[num]) { //truthy
      result[num]++; // result[num] += 1
    } else if (!result[num] ) { //
      result[num] = 1;
    }
    // console.log(result);
  }
  // console.log(result);

  let temp = [];

  // iterate result 
  for (let x in result) {
    // console.log(x);
    for (let y in result) {

    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

/** 
 * const result = {
 * 10 : 1,
 * 4 : 2,
 * 5 : 1,
 * 2 : 1
 * }
*/



function tukarBesarKecil(kalimat) {
  // you can only write your code here!
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"