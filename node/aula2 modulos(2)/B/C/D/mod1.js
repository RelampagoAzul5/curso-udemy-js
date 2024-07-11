// module.exports = function(x, y){
//     return x * y;
// }; // Também é possível exportar funções anonimas dessa forma

module.exports = class Animal{
    constructor(nome){
        this.nome = nome
    }
    latir(){
        console.log(`${this.nome} está fazendo AU AU`);
    }
};