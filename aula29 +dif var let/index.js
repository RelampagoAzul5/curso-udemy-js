const verdadeira = true;

// Let tem escopo de bloco {... bloco }
// Var só tem escopo de função

let nome = 'Giovanni'; // Criando
var nome2 = 'Giovanni';

if (verdadeira){
    let nome = 'Henrique'; // Criando
    console.log(nome, nome2);
    if (verdadeira){
        let nome = 'Outra coisa'; // Criando
        console.log(nome, nome2);
        
    }
}
console.log(nome, nome2);
