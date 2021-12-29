/**
 * Diberikan sebuah function cariModus yang menerima sebuah array kumpulan angka.

Function akan me-return modus dari array atau deret angka tersebut.

Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.

Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.

Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

// membuat funsi modus
function NilaiModus(nilai) {
    // membuat array kosong untuk menampung nilai modus
    let kosong = [];
    sama = false;
    for (let i = 0; i < nilai.length; i++) {
        for (let j = i + 1; j < nilai.length; j++) {
            if (nilai[i] === nilai[j]) {
                kosong.push(nilai[i])
                sama = true;
            } else {
                sama=false
            }
        }
    }
    return (kosong[0] === undefined || sama) ? -1 : kosong[0]
}

console.log(NilaiModus([10, 4, 10, 2, 4])); // 4
console.log(NilaiModus([5, 10, 10, 10, 5])); // 5
console.log(NilaiModus([10, 3, 10, 3, 5])); // -1
console.log(NilaiModus([1, 2, 3, 3, 4, 5])); // 3
console.log(NilaiModus([7, 7, 7, 7, 7])); // -1