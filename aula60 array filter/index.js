// Filter -> vai sempre retornar um array, com a mesma quantidade de elemento ou menos

// retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];


const numerosFiltrados = numeros.filter( valor => valor > 10); // Forma simplificada
// const numerosFiltrados = numeros.filter( (valor, indice, array) => {
//     console.log(valor,indice, array);
//     return valor > 10;
// }); // versão mais longa com todos os valores que o filter joga pra função
// console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length >= 5 );
const pessoasComMaisDeCinquentaAnos = pessoas.filter( obj => obj.idade > 50 );
const pessoasCujoNomeTerminaComA = pessoas.filter( obj => obj.nome[obj.nome.length -1] === 'a');
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(pessoasCujoNomeTerminaComA);