let nama = true;
let age = 24;
let money = 1000000;

// if (!nama) {
//     console.log("anda tidak boleh masuk");
// } else {
//     if (age <= 18) {
//         if (money - 45000 < 0) {
//             console.log("your money inst enogh. Pulang");
//         } else {
//             console.log("you can order, change : " + (money - 45000));
//         }
//     } else {
//         if (money - 100000 < 0) {
//             console.log("Pulang sana");
//         } else {
//             console.log("you can order, change : " + (money - 100000));
//         }
//     }
// }

if (nama) {
    result = "Selamat Datang Di Coffe Shop";
    if (age >= 18) {
        result = "Anda Bisa Memasan Kopi";
        if ((money - 100000) > 0) {
            result = `Uang anda Cukup dan ini Kembalian : ${money}`;
        } else {
            result = "Uang anda Kurang";
        }
    } else {
        result = "anda Hanya bisa Memesan Coklat";
        if ((money - 45000) > 0) {
            result = `Uang anda Cukup dan ini Kembalian : ${money}`;
        } else {
            result = "Uang anda Kurang";
        }
    } 
} else {
    result = "Anda tidak punya nama";
}
console.log(result);
