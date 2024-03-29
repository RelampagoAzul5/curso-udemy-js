const frutas = ['Pera', 'Maçã', 'Uva']

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

// for (let i in frutas){
//     console.log(frutas[i])
// }

const pessoa ={
    nome: 'Giovanni',
    sobrenome: 'Fernandes',
    idade: 21
};
for (let key in pessoa){
    console.log(key,pessoa[`${key}`])
}