const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// some todos os numeros (reduce)
const total = numeros.reduce((acumulador,valor) => {
    return acumulador + valor;
})
// Retorne um array com os pares(filter)
const pares = numeros.reduce((acumulador,valor)=>{
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[])
// retorne um array com o dobro os valores
const dobroDosValores = numeros.reduce((acumulador,valor)=>{
    acumulador.push(valor * 2);
    return acumulador;
},[])

// some os pares

const totalPares = numeros.reduce((acumulador,valor) => {
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0)

// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoaMaisVelha = pessoas.reduce((acumulador, obj) => {
    if (obj.idade > acumulador.idade) acumulador = obj
    return acumulador
})

console.log(pessoaMaisVelha)