// ! Sorting -> pengurutan / mengurutkan 

//* proses mengurutkan sekumpulan data dari yang terkecil (asc) / terbesar(desc)

//sort jg bisa mengurutkan sekumpulan data berupa angka maupun tulisan (huruf)

/**
 * 1. Bubble
 * 2. Insertion
 * 3. Selection
 * 4. Merge 
 * 5. Quick
 */

// ? Bubble Sort
/**
 * Algoritma untuk pengurutan sekumpulan data dg membandingkan sekaligus menukar data (condition === true) dari nilai n dg nilai n+1
 * 
 * Banyak perbandingan 
 * = (jumlah data - 1) x (jumlah data - 1)
 */

//* 4   7   3   9
//* CEK 4 > 7 

// Bubble sort Implementation using Javascript
  
  
// Creating the bblSort function
function bblSort(arr){
  for(let i = 0; i < arr.length; i++){
    /**
     * i = 0 0 < 8 true
     * i = 1 1 < 8 true
     * i = 2 2 < 8 true
     * .
     * .
     * .
     * i = 8 8 < 8 false
     */
    // console.log(arr[i]);
    // Last i elements are already in place  
    for(let j = 0; j < ( arr.length - i - 1 ); j++){
      console.log(arr[j]);
        /**
         * Breakdown
         * j = 0  < 8 - 0 -1 = 7 true
         * j = 1  < 8 - 1 -1 = 6 true
         * j = 2  < 8 - 2 - 1 = 5 true
         * j = 3  < 8 - 3 - 1 = 4
         * j = 4  < 8 - 4 - 1 = 5 
         * j = 5 <  8 - 5 - 1 = 4 false 
         * .
         * .
         */
      // Checking if the item at present iteration 
      // is greater than the next iteration
      if(arr[j] > arr[j+1]){
        /**
         * temp = 234
         * arr[j] = 43
         * 
         */
        // If the condition is true then swap them
        //!temp variable untuk menampung nilai dari arr[j]
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  // Print the sorted array
  console.log(arr);
}
 // This is our unsorted array
// let arr = ;

 // Now pass this array to the bblSort() function
console.log(bblSort([4,7,3,9]));


// ? Selection Sort
/**
 * Pengurutan sekumpulan data dengan membandingkan semua data lalu setelah nilainya ditemukan barulah dilakukan pertukaran nilai
 * 
 * Nila yg sudah ditetapkan tidak akan dibandingkan lagi
 */

// ! ascending

//* 4   7   3   9
//! membuat 2 temp untuk menampung index mana yg mau ditampilkan 
//* 4   7   3   9
//! 0   2   
//* 



// ? Insertion Sort ->seperti bermain kartu
/**
 * Pengurutan sekumpulan data dg membandingkan semua data mulai dari  data ke-2 dg data ke-1 dan mulai dari datanya terus bertambah smpai brp jumlah sekumpulan data dan dibandingkan datanya sampai data ke-1
 */

//* 4   7   3   9
// ! apa arr ke1 < arr2
// ! apa arr ke3 < arr ke2



// ? Merge Sort
/**
 * Pengurutan yg dilakukan dg cara memecah kemudian menggabungkan sekaligus mengurutkan
 * 
 * Merge sort dirancang jika data tidak memungkinkan untuk ditampung dalam memory komputer krn jumlah yg terlalu besar
 */

// * 4    7   3   9   2   5   11    21
// ! dipecah 
// * 4    7   3   9       2   5   11    21
//          l                     R
// * 4    7     3   9     2   5     11    21
//      l         R         l           R
// *  4     7     3     9     2     5     11      21
//    l     R     L     R     L      R    L       R

// !ARRAY KOSONG UNTUK MEMECAH
//*  2      4     3    5     7      9      11     21



// ? Quick Sort 

/**
 * menggunakan teknik pemecahan data menjadi partisi-partisi,sehingga disbut exchange sort. untuk memulai iterasi pengurutan
 * 
 * Ini bisa mengambil salah satu elemen secara acak biasanya dari tengah (pivot) lalu menyimpan semua elemen yg lebih kecil di sebelah kiri pivot dan semua element yg lebih besar disebelah kanan 
 */

/**
 * Memilih pivot
 * =============
 * 1. Pilih pd nilai awal,tengah / akhir dari sebuah array 
 * 2. secara acak dari sebuah array
 * 3. pilih nilai median dari sebuah array
 */