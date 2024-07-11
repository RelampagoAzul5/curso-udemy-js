const nome = 'Giovanni';
const sobrenome = 'Henrique';

const falaNome = () => nome + ' ' + sobrenome;;

// module.exports.nome = nome; // Exporta a variavel usando o objeto exports no module
// module.exports.nome = sobrenome;
// module.exports.nome = falaNome;

exports.nome = nome; // Faz a mesma coisa que o de cima, mas é a versão abreviada.
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar'; // Também serve para exportar da mesma forma que os anteriores.    

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Pessoa = Pessoa

module.exports = {
    nome, sobrenome, Pessoa
}; // é possível exportar o módulo assim, porém ele só funcionará dessa forma, se utilizar apenas a palavra "exports" não funcionará.

// console.log(module.exports);


// console.log(exports)
