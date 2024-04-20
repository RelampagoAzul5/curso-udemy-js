function criaPessoa(nome,sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        // getter
        get nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')

        },

        fala(assunto = 'NADA'){
            return `${this.nome} está falando sobre ${assunto}.`;
        },

        altura,
        peso,
        // Getter
         get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Giovanni', 'Fernandes', 1.72, 70);   
const p2 = criaPessoa('Juliana', 'Amaral', 1.57, 60);
// console.log(p1.fala('falando sobre JavaScript'))

p1.nomeCompleto = 'Juliana do Nascimento Amaral'

console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())