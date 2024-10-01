const {alfabeto} = require('./base');

// [ABC] -> conjunto
// [^] -> negação
// [min-max] - range numerico

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-k]+/g))
console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)) // Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) // Unicode

console.log(alfabeto.match(/\w+/g)) // [a-zA-Z0-9]
console.log(alfabeto.match(/\W+/g)) // [^a-zA-Z0-9]
console.log(alfabeto.match(/\d+/g)) // [0-9]
console.log(alfabeto.match(/\D+/g)) // [^0-9]
console.log(alfabeto.match(/\s+/g)) // encontrar espaços
console.log(alfabeto.match(/\S+/g)) // negar os espaços