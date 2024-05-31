// objeto literal = {}
const pessoa1 = {
    nome: 'Giovanni',
    sobrenome: 'Henrique'
};

// objeto criado a partir da função
const pessoa2 = new Object();
pessoa2.nome = 'Juliana';
pessoa2.sobrenome = 'Amaral';
pessoa2.idade = 22

// existem duas formas de se chamar uma chave de um objeto
console.log(pessoa1['nome']);
console.log(pessoa1.sobrenome);

// console.log(pessoa2['nome']);
console.log(pessoa2.sobrenome);

// usando 'delete' podemos deletar uma chave do objeto
delete pessoa1.nome;
console.log(pessoa1);

// podemos criar metodos dentro do objeto
pessoa2.falarNome = function(){
    return (`${this.nome} está falando seu nome`);
}

pessoa2.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
for (let chave in pessoa2){
    console.log(pessoa2[chave]);
}
