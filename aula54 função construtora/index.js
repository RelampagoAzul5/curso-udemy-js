// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa(new)

function Pessoa (nome, sobrenome, valor){
    // variaveis criadas com const, let ou var são apenas para o escopo da função e não podem ser chamadas de fora, isso significa que o objeto não pode chamar as variaveis e metodos criadas fora dele

    // Atributos ou Metodos Privados
    const id = 123456;
    const metodoInterno = (id,valor)=>{
        console.log('Sou um metodo Interno', id + valor * id);
    }
    
    
    // Atributos ou Metodos Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = ()=> {
        console.log(this.nome,': sou um metodo');
        metodoInterno(id, valor);
    }
}


const p1 = new Pessoa('Giovanni', 'Henrique', 1);
const p2 = new Pessoa('André', 'Queiroz', 4);
const p3 = new Pessoa('Lucas', 'Chassot', 8);

console.log(p1.nome,p2.nome,p3.nome);
p1.metodo();
p2.metodo();
p3.metodo();