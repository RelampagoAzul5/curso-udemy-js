const nome = 'Giovanni Henrique';
const sobrenome = 'de Paula'
const peso = 68;
const idade = 21;
const alturaEmMetros = 1.70;
let imc = peso / (alturaEmMetros**2);
let anoNascimento = 2024-idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros} de altura e seu imc é de ${imc}`);
console.log(`e nasceu no ano de ${anoNascimento}.`);