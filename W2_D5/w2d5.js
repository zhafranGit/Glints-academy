/**
 * Good Algoritma
 * ===============
 * 1. algo tidak harus benar, tetapi juga harus efisien
 * 2. algo yg bagus adalah algo yg efisien
 * 3. keefisienan algo diukur dari berapa jumlah waktu dan ruang memory yg di butuhkan untuk menjalankannya
 * 4. algoritma yg efisien ialah algo yg meminimumkan kebutuhan waktu dan ruang
 */


/**
 * example 
 * =======
 * menghitung rata2
 * 0,a1,a2....., an
 * integer length = length(a),sum = 0, i= 0
 * while i < length do
 *  sum = sum + a1
 *  i++
 * end while
 * avg = sum / length
 */

function sayHintTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi!";
  }
  return hiArray
}

console.log(sayHintTimes(5));

function getLargestItem(items) {
  let largest = -Number.MAX_VALUE;
  items.forEach(item => {
    if (item > largest) {
      largest = item;
    }
    
  });
  return largest;
}



// console.log(student.year);
console.log(typeof null);

const temp = "";

function ucing () {
  const kucing = "hehe";
  return "ucing!"
}
// console.log(kucing);
console.log(temp);


function whatItDoesValue (val) {
  // return val ? 1 : 2;
  //!ternary operator 
  if (val) { //truthy -> bukan yg ada di falsy -> !null, !undefined, !false, !0,!0n,1-0
    return 1;
  } else { // falsy -> null,undefiined,NaN,0, 0n,-0, false dkk
    return 2;
  }
}

console.log(whatItDoesValue(null));


// ! accessing obj

const student = {
  name: 'Martin',
  program: "",
}

console.log(student.name);
console.log(student["name"]);