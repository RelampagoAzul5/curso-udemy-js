const { texto, arquivos } = require('./base');

// * (opicional) se repete 0 ou n vezes
// + (obrigatorio) se repete 1 ou n vezes
// ? (opicional) se repete 0 ou 1 vez
// \ Caractere de escape
// {n, m} minimo e maximo
// {10,} no minimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10} especificamente 10 vezes


// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

// regExp2 = /\.jpe?g/gi;
regExp2 = /\.(jp|JP)(e|E)?(g|G)/gi;

for (const arquivo of arquivos){
    const valido =  arquivo.match(regExp2);

    if(!valido) continue;
    console.log(arquivo, valido);
};