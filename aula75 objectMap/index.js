const pessoas = [
    { id: 3, nome: 'Giovanni' },
    { id: 2, nome: 'Juliana' },
    { id: 1, nome: 'Lucas' },
];


// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const{ id } = pessoa;
//     novasPessoas[id] = {...pessoa};
// }
// console.log(novasPessoas)

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}
// console.log(novasPessoas)
// console.log(novasPessoas.get(2))

// for (const [identifier, {id, nome}] of novasPessoas) {
    //     console.log(identifier, id, nome);
    // }

    // for (const pe of novasPessoas.values()) {
//     console.log(pe);
// }

novasPessoas.delete(2);
console.log(novasPessoas);