var angka = 500;
var angkaDesimal = 3.5;
var angkaNegatif = -500;
var angkanegatif = -300;

// Snake Case = angka_negatif
// Camel Case = angkaDesimalBulat

var kata = "Halo";
var nama = "Seiga";

var penjumlahan = angkaDesimal + angka;
var concatString = kata + ":" + nama;

var benar = true; // 1
var salah = false; // 0

let bapak1 = 10;
let bapak2 = 20;

// Perbedaan var dan let

if (true) {
  // parent block (anaknya dari global scope)
  var nama1 = "Nama1";
  let nama2 = "Nama2";
  const nama3 = "Nama3";

  console.log(bapak1, bapak2);
  if (true) {
    // child block (anaknya dari parent block)
    const nama4 = "Nama4";
    var nama5 = "Nama5";
    console.log(nama3);
  }
  console.log(nama5);
}

// var nama2 = "Makanan"
// penggunaan const

let hewan = "anjing";
hewan = "kucing";

const buah = "Jeruk";

// var                          let                                 const
// Bisa diubah nilainya         Bisa diubah nilainya                Tidak bisa diubah nilainya
// Global Scope (Luar Block)    Tidak bisa diakses dari luar block  Tidak bisa diakses dari luar block
