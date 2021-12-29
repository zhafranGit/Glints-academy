/*
STORE newton2 AS NUMBER
STORE masa AS NUMBER WITH 500
STORE kecepatan AS NUMBER WITH 2
STORE newton AS NUMBER WITH ANY VALUE

SET newton2 WITH masa TIMES kecepatan
DISPLAY newton2
*/

/*
PSEUDOCODE
STORE ResultanGaya AS NUMBER WITH ANY VALUE
STORE MassaBenda AS NUMBER WITH 600
STORE PercepatanBenda AS NUMBER WITH 2

SET ResultanGaya WITH MassaBenda MULTIPLY PercepatanBenda
DISPLAY ResultanGaya
*/


// const MassaBenda = 500;
// const PercepatanBenda = 2;
// let ResultanGaya = (MassaBenda * PercepatanBenda);

// console.log(ResultanGaya);

let MassaBenda;
let PercepatanBenda;

function ResultanGaya(MassaBenda, PercepatanBenda) {
    return MassaBenda * PercepatanBenda;
}

console.log(ResultanGaya(600, 2));
