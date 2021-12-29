// ! DATA TYPES

// ? NUMBER
/**
 * Javascript hanya mempunyai 1 tipe data number, dimana tipe data number berupa bilangan bulat maupun desimal
 * Di bahasa pemrograman lain biasanya membedakan tipe data number bil bulat dan bil desimal. Di Javascript semuanya disatukan
 */

// let number = 15;
// console.log(number);
// // ! untuk menulis koma memakai titik 
// let decimal = 0.5;
// console.log(decimal);

// ! Number notation

/**
 * javascript mempunyai default base 10, javascript juga mendukung binary, hexadecimal dan octal
 *
 * Haxadecimal: 0xFF
 * Binary: 0b10101
 * Octal: 0o10
 */


// ! Operator Matematika
/**
 * Javascript mendukung banyak sekali operator matematika untuk tipe data number, seperti :
 * - Aritmatika = + / - *
 * - Augmented Assignments = += -= *= /= %=
 * - Unary = hanya membutuhkan 1 data saja
 * ex => + (positif), - (negative), ++ (increment/menaikkan 1 angka), -- (decrement/menurunkan 1 angka)
 * dll.
 */

// * example 
// let angka = 12;
// angka += 7; 
// // ! angka = angka + 7 
// console.log(angka);

// let angka1 = 3;
// angka1 -= 5;
// console.log(angka1);

// let angka2 = 10;
// angka2 *= 200;
// console.log(angka2);

// let angka3 = 123;
// angka3 /= 100;
// console.log(angka3);

// let angka4 = 150;
// hasil sisa bagi 
// 500 % 5 =(500 / 5) = 100 sisa 0
// 7 % 5 = (7 / 5) = 1 sisa 2
// angka4 %= 8;
// console.log(angka4);

// let angka = 1;
// angka --; //mengurangi 1 tingkat
// angka ++; //menambah 1 tingkat
// // console.log(angka);
// angka = -angka;
// console.log(angka);

// let i = 0;

// console.log(++i); // 1
// console.log(i); // 1

// let i = 0;

// console.log(i++); // 0
// console.log(i); // 1


// ! Operator Perbandingan 

/**
 * > -> lebih besar
 * < -> lebih kecil
 * >= -> lebih besar sama dengan
 * <= ->lebih kecil sama dengan
 * == -> sama dengan valuenya aja
 * === -> sama dengan value dan data type (strict)
 * != -> tidak sama dengan value
 * !== -> tidak sama dengan value dan data type
 */

// ! Operator Logika 

/**
 * && -> semua statement harus benar semua
 * || -> salah satu statement benar maka bernilai benar
 * ! -> tidak / bukan
 */

// Nilai 1   |   Operator    |   Nilai 2   |   Hasil     |
// true          &&           false         false
// false        &&            true          false
// true         &&            true          true
// false        &&            false         true

// Nilai 1   |   Operator    |   Nilai 2   |   Hasil     |
// true          ||          false          true
// false        ||           true          true
// true         ||            true          true
// false        ||            false         false

// Nilai 1   |   Operator       |   Hasil     |
// true          !              false
// false         !              true



// ! String template 
// Menambahkan string dengan data lain menggunakan operator +
// let firstName = "khalid";
// console.log(firstName + " pergi" + " ke" + " binar");

// ! template literal -> `` (backtick) ${} (memanggil variabel)

// console.log(`${firstName} pergi ke pasar`);

// ! Konversi string dan number
// ? terkadang saat membuat apk, kita membutuhkan input dari user dalam bentuk string.
// ? tapi ingin mengelola data dlm bentuk Number

// problem -> "1" + 1
// console.log("15" + 1);

/*
Built-in function :
parseInt() -> mengkonversi dari str ke number (bil.bulat)
parseFloat() -> str ke number(pecahan)
Number() -> str ke number (bulat / pecahan) universal
number.toString() -> number ke str
*/

// ? parseInt -> dibelakang koma dihiraukan 

// let num = "101.9";
// console.log(num);
// console.log(parseInt("100.67890")); //langsung
// console.log(parseInt(num)); // secara variable 

// let float = "25.95";
// console.log(parseFloat(float));

// let str = "5000";
// console.log(Number(str));
// let hasil = Number(str);
// console.log(typeof hasil);

// let number1 = 321;
// console.log(number1.toString());
// number.toString -> harus di simpan ke dalam varibel terlebih dahulu 

// let number2 = 123;
// let n = number2.toString()
// console.log(typeof n);




// ! NaN -> not a number
/**
 * data str yg ingin dikonversi ke number data yg tidak valid
 * Jika data str yg coba di konversikan bukan data valid maka menghasilkan NaN
 * NaN adalah number special yg menyebutkan bahwa data tersebut bukan number
 * jika NaN dioperasikan dengan data number, maka hasilya akan NaN lagi
 */

// let value = Number('ayam10');
// console.log(value);
// let value1 = 500;
// let sum = value1 + value;
//? NaN + Number
// console.log(sum);



// ! isNaN() -> adalah bukan angka 
/**
 * ingin check apakah number itu NaN atau bukan
 * hasilnya berupa data boolean -> false/true
 */

// console.log(isNaN(5)); //false -> KARENA 5 ADALAH ANGKA
// console.log(isNaN("edwin")); //true -> karena edwin adalah string 
// console.log(isNaN(10.9)); //false
// console.log(isNaN(NaN)); //true



//! Array

/**
 * Array adalah tipe data yang berisikan kumpulan data
 * Array juga bersifat dinamis (bisa bertambah saat ingin memasukkan data ke dalamnya)
 */

// let emptyArray = [];

/*
- data array akan disimpan dlm posisi yg berurutan, dmn urutan pertama dimulai dari 0
- setiap menambahkan data array, otomatis data akan disimpan di urutan terakhir
- urutan nya bisa disebut index
- tidak ada batasan untuk memasukkan data apapun
- bahkan bisa memasukkan array ke dalam array
*/

//? menambahan array -> push 
// ingin melihat dengan table -> console.table

// operasi array
/**
 * .push() -> menambahkan element di paling akhir
 * .pop() -> menghapus element di paling akhir
 * .shift() -> menghapus elemet di paling awal
 * .unshift() -> menambahkan element di paling awal
 * .length -> panjang data di dalam array, string, obj
 * array[index] -> manggil data sesuai index
 * array[index] = value -> reassignment data
 * delete array[index] -> menghapus array
 */
// console.info(emptyArray);
//          0           1         2       3         4       5
// let arr = ["Khalid", "Edwin", "Bayquni", "Hasby", "Huda", "Habib"];
// // console.log(arr[4]);
// // console.log(arr[3]);
// // Built in funct -> mengetahui total length dari array, string, obj
// console.log(arr.length);
// //! mengganti value dari array 
// arr[0] = "Oren";
// console.log(arr);
// // ! menghapus array 
// delete arr[4]
// console.log(arr);

// // push
// arr.push("Kochenk");
// // console.table(arr);

// // pop
// arr.pop();
// console.log(arr);

// // // shift 
// arr.shift()
// console.log(arr);

// // // unshift 
// arr.unshift("Khalid")
// console.log(arr);

// arr[3] = "Hara";
// console.log(arr);
// console.log(arr.length);

// arr[10] = "aca";
// console.log(arr);
// console.log(arr.length);

// console.log(arr[6]);
// console.log(arr[7]);
//! undefined

/**
 * - sebuah kata kunci
 * - sebuah tipe data
 * - sebuah var yg belum didefinisikan (belum ditambahkan nilai)
 * - undefined !== null
 */

// let name;
// console.log(name);

// if (name === undefined) {
//     console.log(`ini tipe data undefined`);
// } else {
//     console.log(`bukan undefined`);
// }

// //!array undefined

// const names = ['khalid', 'huda', 'habib', 'edwin'];

// if (names[3] === undefined) {
//     console.log(`data belum ada`);
// } else {
//     console.log(`Hello ${names[3]}`);
// }


// ! Null 

/**
 * - representasi data kosong
 * - berbeda dgn undefined, null berarti variable sudah ditambahkan valuenya, hanya saja valuenya null
 * - sedangkan undefined belum ditambahkan value apapun
 */

// let firstPet = "Snowy";
// // console.log(firstPet);

// if (firstPet === undefined) {
//   console.log(`ini tipe data undefined`);
// } else if (firstPet === null) {
//   console.log(`ini tipe data null`);
// } else {
//   console.log(firstPet);
// }

// console.log(null == undefined);
// console.log(null === undefined);