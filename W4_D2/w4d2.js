/**
 * ! SYNCHRONOUS 
 * * By default Javascript akan di execute baris per baris, proses di js dilakukan secara synchronous (baris selanjutnya akan di execute setelah baris sblmnya selesai dikerjakan)
 * ! proses sync disebut jg blocking (karena menunggu prosesnya sebelumnya selesai , lalu menuju ke block code selanjutnya)
 */


/**
 * ! ASYNCHRONOUS 
 * * pada proses ini, js tidak akann menunggu proses tsb selesai,melainkan js akan melanjutkan baris selanjutnya, tnpa harus menunggu asynchronous selesai (non-blocking)
 */

/**
 * ! Callback -> memanggil kembali 
 * * mekanisme untuk memanggil kembali code yg ada di program dr proses async
 * * callback dibuat dlm bentuk function, dan function akan dieksekusi saat proses async selesai
 * * dg menggunakan callback, program bisa menerima informasi yg dibutuhkan dari proses yg berjalan scr async
 * 
 */


/**
 * ! Contoh Async Method
 * * setTimeOut(handler,time) -> menjalankan proses Async sekali dalam waktu tertentu 
 * * setInterval(handler,time) -> untuk menjalankan proses async secara periodik dlm wktu tertentu
 */


// setTimeout(function () {
//   console.log('hallo');
// }, 2000)
// //! 5000 ms = 5 detik

// function callback () {
//   console.log('Hello World');
// }

// function buttonClick () {
//   // ! async 
//   // setTimeout( function () {
//   //   callback();
//   // }, 5000);
//   setInterval(function () {
//     callback();
//   }, 2000);
//   console.log('Button clicked');
// }
// callback()
// buttonClick();



/**
 * ! Promise 
 * why we use callback ?
 * cause it makes a callback hell
 */

// doFirst (data, function () {
//   doSecond(data, function () {
//     doThird (data, function () {
//       //Callback hell
//     })
//   })
// }) 


/**
 * ! Promise 
 * why we use callback ?
 * cause it makes a callback hell
 * * Promise merupakan proxy untuk sebuah nilai di masa depan (future) yg belum diketahui saat pembuatan promise
 * * Biasa promise digunakan sbg proxy untuk proses Async
 * * Penggunaan promise mudah , lebih mirip synchronous
 */


/**
 * !    Promise   \   Pending     \   Fulfilled   \   Rejected
 * !    Result     \   Undefined   \   Value       \   Error
*/


// const promise = new Promise (function (resolve,reject) {
//   if (success) {
//     resolve(value)
//   } else {
//     reject(error)
//   }
// })

function panggilAdik (nama) {
  return new Promise ((resolve,reject) => {
    if (nama) {
      resolve(`${nama} bantuin gue dong`)
    } else {
      reject('ini pesan error')
      // console.log(err);
    }
  })
}
// panggilAdik("ayana")
// console.log(panggilAdik("ayana"));
// console.log(panggilAdik());

/**
 * ! Promise then method
 * * Promise memiliki method yg bernama then. Then method ini bisa digunakan sbg callback ketika value pada promise telah diresolve
 * * Ketika menggunakanthen method bisa membuat chain method, sehingga tidak akan terjebak pada callback hell 
 */

// promise
//   .then ((value) => {
//     // do something here
//     return otherValue
//   }) 

//   .then ((otherValue) => {
//     //do something code
//     return otherValueAgain
//   })

// let terpenuhi = true;
// const promise1 =  new Promise((resolve,reject) => {
//   if (!terpenuhi) { //! falsy -> jika janji tidak terpenuhi
//     reject('Omong Doang!');
//   } else {
//     resolve('Nah gitu dong ditepati!')
//   }
// })

// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

//! other example

// let terpenuhi = false;
// const promise1 =  new Promise((resolve,reject) => {
//   if (!terpenuhi) { //! falsy -> jika janji tidak terpenuhi
//     setTimeout(() => {
//       reject('Omong Doang!');
//     }, 10000)
//   } else {
//     setTimeout(() => {
//       resolve('Nah gitu dong ditepati!')
//     },5000)
//   }
// })

// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   //! finally -> method yg akan dijalankan meskipun 2 2 nya terpenuhi
//   .finally(() => {
//     console.log(`oke uda kelar`);
//   })

/**
 * ! Promise catch method
 * * Promise memiliki method yg catch. Catch method ini digunakan sbg error callback yg bisa digunakan seperti then
 */


// promise
//   .then ((value) => {
//     //do something here
//     return otherValue
//   })
//   .catch ((error) => {
//     //do something here
//   })


/**
 * ! Promise Finally method
 * * Kadang ingin menjalankan code tertentu, baik saat sukses atau eror
 */

// promise
// .then ((value) => {
//   // do something here
//   return otherValue
// }) 

// .catch ((error) => {
//   //do something code
//   console.log(error);
// })

// .finally (() => {
//   console.log('Promise');
// })

//! meskipun sukses / gagal ttp dijalankan

/**
 * ! Promise All method
 * * Kadang memperlukan bbrp proses Async sekaligus
 * * Mengambil detail data produk dari server pada satu halaman web, dimana 1 halaman bisa menampilkan > 1 produk
 * * All method bisa kita gunakan untuk menggabungkan bbrp promise, menjadi promise baru yg berisi data array hasil promise-promise tsb
 */

// const student = new Promise ((resolve,reject) => {
//   resolve(
//     [
//       {
//         name: "Edwin",
//         program: "backend",
//         score: 100
//       }
//     ]
//   )
// })

// const program = new Promise ((resolve,reject) => {
//   resolve(
//     [
//       {
//         name: "Backend",
//         duration : 3
//       }
//     ]
//   )
// })

// // ! Promise.All()
// Promise.all([student, program])
//   .then((res) => {
//     console.log(res);
//   });
// student
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   })

// program
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   }) 


/**
 * ! Async Await
 * * Async await -> fitur js yg digunakan u/ memermudah proses pembuatan code promise
 * * Dg begitu, bisa membuat kode asynchronous dg model synchronous
 * * Async digunakan u/ menandakan bahwa function tsb adalah Async, dan mengembalikan promise
 * * Await digunakan u/ mendapatkan value hasil dari function yg memngembalikan promise
 * * Await hanya bisa digunakan dlm async function 
 */

// async function onSearch(keyword) {
//   const products = await searchProducts (keyword);
//   clearProducts();
//   displayProducts(products);
// }
function baju (item) {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      resolve(`aku beli baju ${item}`)
    },2000)
  })
}

function beliBaju (item) {
  return `aku beli baju ${item} ini harganya mahal`
}

//! ini main function 
async function main () {
  const tanpaPromise = beliBaju('dress');
  console.log(tanpaPromise);
  try {
    const beli = await beliBaju('rok');
    console.log(beli, `<<< ini dari beli`);
  } catch(err) {
    console.log(err);
  }
}
main()

/**
 * ! Async await error handler 
 * * Pada async await, bisa menggunakan gara synchrounous untuk menggunakan error handlernya. menggunakan try-catch dan try-catch-finally
 */

// async function onSearch(keyword) {
//   try {
//     const products = await searchProducts (keyword);
//     clearProducts();
//     displayProducts(products);
//   } catch(error) {
//   } finally {
//   }
// }