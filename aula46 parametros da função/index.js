// Quando a função é declarada com a palavra "function", ela pode armazenar dentro de uma variável pré definida pelo JavaScript todos os parametros enviados que não foram declarados na criação da função

// Além disso, mesmo que sejam mandados parametros para a função, todos os argumentos ainda ficam armazenados nessa variável.

function funcao(a,b,c){
    let total = 0;
    for(let argumento of arguments){
        total +=argumento;
    }
    console.log(total, a, b, c)
}
funcao( 1, 2, 3, 4, 5); // retorno: 15, 1, 2, 3


// Além disso, quando é criada uma função com vários parametros e o número de argumentos não se equipara ao número de parâmetros, as variáveis dos parâmetros retornam undefined

function funcao2(a,b,c,d,e,f){
    console.log(a, b, c, d, e, f)
}

funcao2( 1, 2, 3); // retorno 1, 2, 3, undefined, undefined, undefined

// É possível passar valores padrão para os parâmetros de uma função

function funcao3 (a,b=2, c=4){
    console.log(a+b+c);
}

// É possível forçar um parâmetro a utilizar um valor padrão, mesmo que você queira passar algum valor para um parâmetro que venha depois desse fazendo com que o valor da variável seja 'undefined'.

// Como no caso deste exemplo onde o parâmetro 'b' utiliza o valor padrão da variável, enquanto o parâmetro 'c' recebe o valor de 20.

funcao3(2, undefined, 20); // Retorno: 24

// Se utilizarmos outros tipos de valores, podem desencadear diversos comportamentos não esperados como por exemplo:

// Null vai se comportar como 0 na função:
funcao3(2, null, 20); // Retorno: 22

// Uma string vazia vai fazer com que os valores sejam concatenados e se tornem uma String:

funcao3(2, '', 20) // Retorno: 220

// Também é possível fazer Atribuição via desestruturação com funções.

// Atribuição via desestruturação com objetos:
function funcao4 ({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao4({nome:'Giovanni', sobrenome: 'Fernandes',idade:21}); // Retorno: Giovanni Fernandes 21

// Além disso também é possível criar um objeto como variável e mandar ele para a função:

const obj = {nome:'Giovanni', sobrenome: 'Fernandes',idade:21}
funcao4(obj); // Retorno: Giovanni Fernandes 21

// Atribuição via desestruturação com Arrays:

function funcao5([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
funcao5(['Giovanni Henrique', 'Fernandes', 21]) // Retorno: Giovanni Henrique Fernandes 21

// O mesmo vale para os arrays postos em variáveis

const meuArray = ['Giovanni Henrique', 'Fernandes', 21];

funcao5(meuArray) // Retorno: Giovanni Henrique Fernandes 21


// Existe um operador conhecido como 'rest operator' que funciona para criar um array com todos os argumentos que vierem a partir dele ou, como o próprio nome sugere, o 'resto' dos argumentos.
// O 'rest operator' deve ser sempre o ultimo parametro, pois tudo que vier a partir dele será armazenado nele.
// O rest Operator funciona com qualquer tipo de declaração de função.

function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50) // Retorno: 140

const conta2 = function (operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
conta2('+', 0, 20, 30, 40, 50) // Retorno: 140

const conta3 =(operador, acumulador, ...numeros) => {
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
conta3('+', 0, 20, 30, 40, 50) // Retorno: 140


// Vale ressaltar que os argumentos dentro do Rest operator são chamados no 'Arguments' da function, mas continuará não funcionando em outras funções

function conta4(operador, acumulador, ...numeros){
    console.log(arguments)
}
conta4('+', 0, 20, 30, 40, 50) // Retorno: objeto com todos os argumentos da função

const conta5 = (operador, acumulador, ...numeros) =>{
    console.log(arguments)
}
conta5('+', 0, 20, 30, 40, 50) // Retorno: um erro