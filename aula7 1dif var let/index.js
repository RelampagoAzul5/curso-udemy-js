/*
Quando declarada com var, a variavel pode ser declarada novamente
Quando declarada com let, a variavel não pode ser declarada novamente
*/

var nome = 'Giovanni';
var nome = 'Henrique';

console.log(nome);

let nome2 = 'Giovanni';
// irá gerar um erro e o código não irá prosseguir
let nome2 = 'Henrique';
console.log(nome2);