// function criaPessoa(nome, sobrenome, idade){
//     return {
//         nome,
//         sobrenome,
//         idade
//     }
// }


// const pessoa1 = criaPessoa('Giovanni', 'Fernandes', 21)
// const pessoa2 = criaPessoa('Lucas', 'Chassot', 24)
// const pessoa3 = criaPessoa('André', 'queiroz', 23)

// console.log(pessoa1.nome, pessoa2.nome)

const pessoa1 = {
    nome: 'Giovanni',
    sobrenome: 'Fernandes',
    idade: 21,

    fala() {
        console.log (`Meu nome é ${this.nome} ${this.sobrenome}, e minha idade é ${this.idade}`);
    },
    incrementaIdade (){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();