// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o indice ou a chave (array, objetos ou strings)
// For of - Retorna o valor em si (iteraveis)

const nome = 'Giovanni Henrique'

// for (let i = 0; i< nome.length; i++){
//     console.log(nome[i])
// }
// for (let i in nome){
//     console.log(nome[i])
// }
for (let valor of nome){
    console.log(valor)
}
