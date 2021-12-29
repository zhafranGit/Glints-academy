// ! FUNCTION -> sub program yg dapat dipanggil di bagian lain pada program

// disebut jg sbg kumpulan statement u/ menjalankan tugas atau menghitung sebuah nilai


// reusability -> DRY (do not repeat ur self)
// agar menghindari kompleksitas
// modular



// built in dan user defined

// return untuk mengembalikan hasil yang bisa diolah lagi
// console.log() hanya menampilkan 

// fungsi menghitung pangkat 3

//params -> var yg ditulis di dlm kurung pada saat membuat funct. digunakan untuk menampung nilai yg dikirimkan saat function di panggil

//argument -> nilai yg dikirim ke params saat funct di panggil 

/**
 * ALGORITMA
 * =========
 */
// function pangkatTiga (angka) {
//   // console.log(angka ** 3);
//   return angka ** 3;
// }
// pangkatTiga(3); //27
// console.log(pangkatTiga(5));

// console.log(pangkatTiga());

// ! FOR LOOP 
// for ( let i = 0 ; i < 10 ; ++i) {
//   console.log(`javascript gampang perulangan ke - ${i}`);
// }
// for ( let i = 100 ; i < 110 ; i++) {
//   console.log(`hallo ke - ${i}`);
// }

// let nama = "rebecca";
// let name = "kucing gemoi";
// // ! memakai length agar dinamis

// for (let i = 0 ; i < name.length; i++) {
//   console.log(`${name[i]} loop ke - ${i}`);
// }

// let names = ["edwin", "khalid","huda", "habib"];
// let result = "";
// penampung memakai string kosong
// for (let i = 0; i < names.length ; i++) { // i += 1
//   // console.log(names[i]);
//   result += names[i]
// }

// console.log(result);
/**
 * Breakdown code 
 * 1. names.length -> 4;
 * 2. penampung yg namanya result berupa string kosong
 * 3. i = 0 -> 0 < 4 -> true
 * 4. i = 1 -> 1 < 4 -> true 
 * 5. i = 2 -> 2 < 4 -> true
 * 6 .....
 * 7. i = 4 -> 4 < 4 -> false 
 */


//* result -> edwinkhalidhuda

/**
 * ALGORITMA 
 * =========
 * 1. BILANGAN GENAP -> BILANGAN YG HABIS DIBAGI 2
 * 2. BUKAN GANJIL -> BILANGAN YG TIDAK HABIS DIBAGI 2
 * 3. PARAMETER -> ANGKA
 * 4. OPERASI -> % MODULO -> SISA HASIL BAGI 
 * 5. VAR RESULT
 */
// function bilanganGenap (angka) {
//   if (angka % 2 === 0 ) {
//     return `ini bilangan genap`;
//   } else {
//     return `ini bilangan ganjil`;
//   }
// }

// console.log(bilanganGenap(16));

/**
 * ALGORITMA
 * =========
 * 1. LOOP UNTUK ANGKA DARI 1 -10
 * 2. PENGECEKANNYA -> MODULO 2 YG HASIL NYA 0
 * 3. PENGECEKANNYA -> MODULO 2 YG HASIL NYA 1
 */

// function angkaGanjilGenap (angka) {
//   for (let i = 1; i <= angka; i++ ) {
//     if ((i % 2) == 0 ) {
//       console.log(`${i} -> angka genap`);
//     } else {
//       console.log(`${i} -> angka GANJIL`);
//     }
//   }
//   // return;
// }

// console.log(angkaGanjilGenap(10));
// 1 INI BILANGAN GANJIL
// 2 INI BILANGAN GENAP 

// ! WHILE LOOP
// let i = 1;
// while (i < 10) {
//   console.log('hello world!');
//   i++
// }


// ! Do WHILE

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// expected result: "12345"


// console.log(i);


// ! REKURSIF


/**
 * * sebuah fungsi yg memanggil dirinya sendiri
 */

// input -> function (memanggil dirinya sendiri) -> output

// ! harus berakhir dan menghasilkan nilai

// function main() {
//   return main();
// }

// main();
// ! faktorial -> 5! = n * (n-1) * (n-2) .....
// ! 5! = 5 * 4 * 3 * 2 * 1
//! 0! = 1

/**
 * 3! = 3 * 2 * 1 = 6
 * 2! = 2 * 1 = 2
 * 1! = 1 = 1
 * 0! = 1
 */

//! loop hitung 10 -1
// ! menggunakan recursive 

// function hitungMundur (n) {
//   console.log(n);
//   return hitungMundur(n-1);
// }

// hitungMundur(10);
// n = 10
// n = 9
// n = 8
// .
// .
// .

//* BASE CASE -> KONDISI AKHIR DARI REKURSIF YG MENGHASILKAN NILAI

// function hitungMundur (n) {
//   console.log(n);
//   if (n === 0) {
//     return;
//   }
//   return hitungMundur(n-1);
// }

// hitungMundur(10)


// ! faktorial -> perkalian semua bilangan asli yg <= n
//!  3! = 3 * 2 * 

// function factorial (n) {
//   let angka = 1;
//   let factorial = 1;

//   while (angka <= n){
//     // faktorial = faktorial* angka;
//     factorial *= angka;
//     angka = angka+ 1;
//     // angka++
//     // angkat += 1;
//   }
//   return factorial
// }

/**
 * breakdown code
 * 1. 1 <= 5 true
 * 2. faktorial 1 * 1 = 1
 * 3. 2
 * 4. 2 <= 5 true
 * 5. factorial 2 * 2 = 4
 * 6. 3
 * 7.
 */
// console.log (factorial(5));

// 5! -> 5.4.3.2.1
// 0 ! -> 1

function recursiveFactorial (n) {
  // base case
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(7));

// ! semua looping bisa dibuat recursive, tapi tidak sebaliknya



//! implementasi -> menggantikan lopping, fibonacci, bahasa pemrograman yg tidak memiliki pengulangan (Erlang,Prolog) dll