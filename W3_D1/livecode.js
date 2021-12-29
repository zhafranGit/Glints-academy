// function 
/**
 * Diberikan sebuah function cariModus yang menerima sebuah array kumpulan angka.

Function akan me-return modus dari array atau deret angka tersebut.

Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.

Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.

Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
    // you can only write your code here!
    let hasil = []
    sama = false

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                hasil.push(arr[i])
                sama = true
            } else {
                sama = false
            }
        }
    }

    return (hasil[0] === undefined || sama) ? -1 : hasil[0]
}

function tukarBesarKecil(kalimat) {
    kalimat = kalimat.split('')
    // you can only write your code here!
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === kalimat[i].toUpperCase()) {
            kalimat[i] = kalimat[i].toLowerCase()
        } else if (kalimat[i] === kalimat[i].toLowerCase()) {
            kalimat[i] = kalimat[i].toUpperCase()
        }
    }

    return kalimat.join('')
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


// TEST CASES
console.log(cariModus([10, 4, 10, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 10, 5])); // 5
console.log(cariModus([10, 3, 10, 3, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1



