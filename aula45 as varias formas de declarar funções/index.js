// Declaração de função (function hoisting)
// Function hoisting significa que a engine do JavaScript vai elevar todas as declarações de função para o topo do arquivo
falaOi();
function falaOi(){
    console.log('oi');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function(){
    console.log('Sou um Dado');
}
souUmDado()

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow Function');
};
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...')
    }
}