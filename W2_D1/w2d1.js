// ! Object

/**
 * 1. di bahasa pemrograman lain , biasanya disebut associative arr / hash (index berupa string)
 * 2. di js associative array tidak didukung
 * 3. untuk dfault index array di js berupa number, maka js akan merubah tipe data array -> obj. ini bisa berbahaya , karena bbrp operasi di array mungkin bisa berubah hasilnya
 */


/**
 * - tipe data yg mirip dengan tipe data array
 * - pembedanya -> index pada tipe object bisa menggunakan string
 * - index di obj disebut properties / attributes/ key. bukan index
 */


// arr -> []
// 1. tanpa menggunakan kutip -> gapake spasi
// 2. kalau ada spasi -> wajib menggunakan petik


//* cara memanggil value nya menggunakan key/attributes/prop
// console.log(bio.age);
// console.log(bio["age"]);
// console.log(bio.program);
// console.log(bio["program"]);

// ! ketika memakai . untuk key yg memakai kutip tidak bisa diakses

//* mengubah / menambah property di obj
// bio["skor akhir"] = 500;
// console.table(bio);

//* menambahkan
// bio["skor akhir"] = 123;
// console.table(bio)

// const bio = {
//   firstName : "Khalid",
//   "last name" : "Al Asad",
//   age : 13,
//   program : "backend",
//   "bahasa pemrograman": "javascript",
//   absensi : 0
// };

// bio.umur = 123;
// bio = 123;
// console.log(bio);

//*menghapus (delete)
// delete bio.age;
// console.table(bio);

//* mengakses property


// ! If Expression 
/**
 * 1. if salah satu kata kunci yg digunakan untuk percabangan
 * 2. percabangan -> bisa mengexecute program code tertentu ketika suatu kondisi sudah terpenuhi
 */

// const examScore = 30;
// 30 < 70 true
// if (examScore < 70) { //true
//   console.log('try again. dont give up!');
// }


// ! Else expression 
/**
 *  1. blok if akan diexecute ketika kondisi if bernilai true
 * 2. jika ingin melakukan execute program tertentu jika kpndisi if bernilai false
 */

// const examScore = 90;
// // 90 < 70 -> false
// if (examScore < 70) {
//   console.log('try again. dont give up!');
// } else { //ketika if scope bernilai false
//   console.log('great job!');
// }


// ! Else if expression
/**
 * 1. terkadang dlm if, butuh membuat beberapa kondisi yg banyak
 */
    


// const examScore = 0;
// // 90 > 85 -> true
// if (examScore > 85) {
//   console.log('great job!');
// } else if (examScore > 65) {
//   console.log('not bad');
// } else {
//   console.log('try again. dont give up!');
// }


// ! Switch statement

/**
 * 1. terkadang membutuhkan kondisi sederhana di if else statement, seperti perbandingan ===
 * 2. switch -> statement percabangan yg sama dengan if, namun lebih sederhana cara pembuatannya
 * 3. kondisi di switch statement hanya untuk perbandingan ===
 */

// const nilai = "A";
// switch (nilai) {
//   case 'A':
//     console.log(`HORE GUE DAPET NILAI A`);
//     break;
//   case "B":
//     console.log(`YAH NILAI GUE GASAMPE A`);
//     break;
//   case "C":
//     console.log(`YES UNTUNG GA NGULANG`);
//     break;
//   case "D":
//     console.log(`NGULANG DEH`);
//     break;
//   default: //else 
//     console.log('GAIKUTAN UJIAN SIH :(');
//     break;
// }


// ! In operator
/**
 * 1. untuk mengecek apakah sbuah prop ada di dalam obj atau tidak
 * 2. jika prop ada di obj, benilai true. jika tidak bernilai false
 * 3. in juga bisa untuk mengecek index di array
 */

/**
 * ! NOTES
 * 1. in operator hanya mengecek apakah sebuah key/prop ada atau tidak
 * 2. meskipun nilai prop / index/ key undefined / null, maka tetap dianggap ada
 */

// const dataList = {
//   firstName : 'tatank',
//   lastName : 'suratang',
//   absent : 10,
//   "best score" : 500
// }

// let mahasiswa = {
//   nama : "Habib",
//   umur : 20,
//   nilai : "A",
//   kampus : "ITB"
// }

// ! memanggil key yg ada di dlm varible 
// const result = 'lastName' in dataList;
// console.log(result);
// console.log('kampus' in mahasiswa );

//! selama index nya ada dan tersedia maka dianggap true
// const arr = [null, undefined,'acil',null];
// const result = 1 in arr;
// console.log(result);

// ! Ternary Operator

/**
 * 1. operator sederhana dari if statement
 * 2. terdiri dari kondisi yg eval, jika menghasilkan true maka nilai pertama diambil, jika false, maka nilai kedua diambil
 */

// const score = 70;
// let ucapan;

// if (nilai >= 70) {
//   ucapan = 'Congratulations!';
// } else {
//   ucapan = 'Try again later :(';
// }


// const ucapan = nilai >= 70 ? 'Congratulations!' : 'Try again later :('

// const score = "C";
/**
 * A -> cie dapat A 
 * B -> gapapa deh 
 */

// const hasil = score === "A" ? 'Cie dapat A' : 'Gapapa deh ;('
// console.log(hasil);


