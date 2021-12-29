let a = true
let b = true
let c = false


console.log("a AND b", a && b)
console.log("a AND c", a && c)
console.log("c AND c", c && c)

console.log("not b AND c", !(b && c))
console.log("b AND not c", b && !c)

console.log("a OR b", a || b)
console.log("a OR c", a || c)
console.log("c OR c", c || c)

console.log("not a", !a)
console.log("not c", !c)