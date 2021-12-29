
function urutkanAbjad(str) {
  // you can only write your code here!
  let result = "";
  let array = [];
  let strlength = str.length;

  for (let i = 1; i <= strlength; i++) {
    array[i] = str[strlength - i];
    result += array[i];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'