function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.price
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else if (kembalian === 0){
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(uang)
      } else {
          console.log(`uang nya kurang nih buat beli ${obj.item} kekurangannya ${kembalian}`);
      cb(uang)
      }
  }, obj.waktu); // obj.waktu -> untuk melihat proses synchronous
}

// ! untuk mebuat file bisa dibaca di folder manapun
module.exports = beli;
