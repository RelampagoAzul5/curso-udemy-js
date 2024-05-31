// Factory Functions / Constructor Functions / Classes
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};
const p1 = criaPessoa('Giovanni', 'Henrique');
console.log(p1.nomeCompleto)


function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome;
    Object.freeze(this)
}

const p2 = new Pessoa('Juliana', 'Amaral');
p2.sobrenome = 'do Nascimento'
delete p2.nome
console.log(p2)