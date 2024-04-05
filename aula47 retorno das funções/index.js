// return
// Retorna um Valor
// Termina a função

// Cria uma função que recebe o começo de uma frase
function falaFrase(comeco){
    // Cria uma função interna que recebe o final da frase
    function falaResto(resto){
        // retorna o começo da frase concatenado ao final da frase
        return comeco +' ' + resto
    }
    // Retorna a função interna
    return falaResto;
}

// Acaba virando a função interna
const olaMundo = falaFrase('Olá');
// Mostra na tela o valor retornado pela função interna
console.log(olaMundo('mundo!'))



// Exemplo de função onde isso é utilizado:

// Cria uma função que recebe um multiplicador
function criaMultiplicador(multiplicador){

    // Cria uma função que recebe um valor para multiplicar
    function multiplica(n){
        // Retorna o valor multiplicado
        return n * multiplicador
    }
    // Retorna a função
    return multiplica
}

// Cria uma função que duplica
const duplica = criaMultiplicador(2);

// Cria uma função que Triplica
const triplica = criaMultiplicador(3);

// Cria uma função que quadriplica
const quadriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))