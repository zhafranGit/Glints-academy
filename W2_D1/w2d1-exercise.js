/**
 * Diberikan 3 variable yang me-representasikan seorang murid:

nama
nilai
absen

Buatlah algoritma/pseudocode dan implementasi sebuah kondisional yang menentukan apakah murid tersebut lulus atau tidak.

Murid dinyatakan lulus jika:

nilainya 70 keatas
absennya dibawah 5 kali
Tampilkan nama murid dan keterangan apakah murid tersebut 'lulus' atau 'tidak lulus'

RESTRICTION: Tidak boleh menggunakan built-in function apapun
 */

/**
 * ALGORITMA
 * 1. mendeskripsikan nilai , absen, dan nama
 * 2. membuat validasi yang berisi lulus dan tidak lulus
 * 3. membuat perkondisian jika nilai >= 70 dan absen < 5
 * 4. bikin variabel penampung untuk menyatakan lulus atau engga
 * 5. tampilkan hasil lulus atau tidak
 */

// ! FALSY -> "",NaN, null, undefined, 0 , -0, 0n
// !TRUTHY -> SEBALIKNYA 

// let result;
/**
 * PSEUDOCODE
 * ==========
 * STORE name AS string WITH ANY VALUE
 * STORE absen AS number WITH ANY VALUE
 * STORE nilai AS number WITH ANY VALUE
 * STORE result AS undefined
 * 
 * IF nilai MORE THAN EQUALS 70 AND absen LESS THAN 5 
 *  SET RESULT EQUALS TO "LULUS"
 * ELSE IF nilai LESS THAN 70 AND absen MORE THAN 5
 *  SET RESULT EQUALS TO "TIDAK LULUS"
 * END IF
 */

// CARA KEDUA 
/**
 * IF nilai MORE THAN EQUALS 70 AND absen LESS THAN 5 
 *  SET RESULT EQUALS TO "LULUS"
 * ELSE 
 *  SET RESULT EQUALS TO "TIDAK LULUS"
 * END IF
 */


const nama = "ucing";

// const nilai = 90;
// const absen = 8;


function validasi(nilai, absen) {
  // if (nilai >= 70 && absen < 5) { //true
  //   return 'lulus';
  // } else {
  //   return 'tidak lulus';
  // }
  return (nilai >= 70 && absen < 5) ? "lulus" : "tidak lulus"
}

console.log(validasi(90, 8));


// console.log(validasi());

// let nama = "icing";
// let absen = 3;
// let nilai = 55;
// let result; //undefined untuk menampung hasil

// if (nilai >= 70 && absen < 5) {
//   result = `${nama} LULUS`;
// } else {
//   result = `${nama} TIDAK LULUS`;
// }

// console.log(result);
// ! pake nested if

// if (nilai >= 70) {
//   if (absen < 5) {
//     result =  `${nama} LULUS`;
//   } else {
//     result = `${nama} TIDAK LULUS`;
//   }
// } else {
//   result = `${nama} TIDAK LULUS`;
// }

// console.log(result);