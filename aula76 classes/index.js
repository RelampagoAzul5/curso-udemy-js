class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this. sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }
};

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`);
};

Pessoa2.prototype.constructor = Pessoa2

const p1 = new Pessoa('Giovanni', 'Henrique');
const p1_2 = new Pessoa2('Giovanni', 'Henrique');
const p2 = new Pessoa('Juliana', 'Amaral');
const p3 = new Pessoa('Yuri', 'Leocardio');
const p4 = new Pessoa('André', 'Queiroz');

console.log(p1);
console.log(p1_2);

