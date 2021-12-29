let nama = "apaan";
let nilai = 90;
let absen = 5;

let abjad
let kelulusan;

if (nilai > 100 || nilai < 0) {
    abjad = 'nilai Invalid';
} else if (nilai > 79) {
    abjad = 'A';
} else if (nilai > 65) {
    abjad = 'B';
} else if (nilai > 49) {
    abjad = 'C';
} else if (nilai > 34) {
    abjad = 'D';
} else if (nilai >= 0) {
    abjad = 'E';
}


if (absen < 5 && nilai >= 70) {
    kelulusan = 'lulus';
} else {
    kelulusan = 'tidak lulus';
}

console.log(nama);
console.log(abjad);

if (abjad != 'nilai Invalid') {
    console.log(kelulusan);
}