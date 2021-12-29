/*
 * PSEUDOCODE 
 * ========================================
 * STORE nama AS STRING WITH ANY VALUE
 * STORE age AS NUMBER WITH ANY VALUE
 * STORE money AS NUMBER WITH ANY VALUE
 * STORE result AS UNDEFINED WITH ANY VALUE
 * 
 * IF name IS FALSY
 * 
 * ELSE 
 *  SET result AS "ANDA TIDAK BISA MASUK!"
 *  
 *  IF age IS LESS THAN 18
 *      IF money IS LESS THAN 45000
 *          SET result AS "YOUR MONEY IS'NT ENOUGH. YOU MUST GO HOME."
 *      ELSE
 *          money MINUS AND EQUALS TO 45000
 *          SET result "YOU CAN ORDER, CHANGE : CONCAT" WITH money.
 *      END IF
 *  ELSE 
 *      IF age IS LESS THAN 100000
 *          SET result AS "YOUR MONEY IS'NT ENOUGH. YOU MUSH GO HOME."
 *      ELSE
 *          money MINUS AND EQUALS TO 100000
 *          SET result "YOU CAN ORDER, CHANGE : CONCAT" WITH money.
 *      END IF
 *  END IF
 * END IF
 * 
 * DISPLAY result
 * 
 */
let nama = true;
let age = 24;
let money = 1000000;

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
