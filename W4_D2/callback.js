function bacaBuku (time, buku, cb) {
  console.log(`Aku pengen baca buku ${buku.name}`);
  setTimeout(function () {
    let waktuSisa = 0;
    if (time > buku.timeSpent) {
      waktuSisa = time - buku.timeSpent;
      console.log(`Aku baru selesai baca buku ${buku.name}, dengan waktu ${buku.timeSpent}`);
      cb(waktuSisa);
      console.log(`waktu yg tersisa ${waktuSisa}`);
    } else {
      console.log(`waktunya udah habis`);
      cb(time)
    }
  },buku.timeSpent)
}

//! ingin file baca-buku terbaca di file lain, menggunakan module.exports

module.exports = bacaBuku;
//! export bacaBuku ke file lain 
//! memanggil dari file index.js