// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number
num1 += num2
num1 += num2
num1 += num2

num1 = Number(num1.toFixed(2));
console.log(num1)

// console.log(num1.toString() + num2);
// num1 = num1.toString(); // converte o num1 para string

// console.log(num1.toString(2)); // faz aparecer o numero em binario

// console.log(num1.toFixed(2)); // Limita a quantidade de casas decimais que aparecem
// console.log(Number.isInteger(num1)); // Verifica se o numero é inteiro

// let temp = num1 * '5';
// console.log(Number.isNaN(temp));