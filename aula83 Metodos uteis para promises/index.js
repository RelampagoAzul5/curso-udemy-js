function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Caí no erro');
                return
            }
            resolve(msg);
        }, tempo);
    });
};

// Promise.all Promise.race Promise.resolve Promise.reject


// PROMISE.ALL
// Resolve todas as promises de um determinado array, e retorna todos os valores de uma vez
// Se um erro for encontrado durante o promise.all nenhum dos outros valores é retornado, apenas o erro

const promisesAll = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000,1000), 
    'outro valor'
]

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });

// PROMISE.RACE
// Pega um conjunto de arrays e o primeiro que resolver ele retorna.

const promisesRACE = [
    // 'Primeiro valor', // Caso tenha um valor que não seja uma promise no array, ele sempre será retornado
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(1000,2000),
]
// Promise.race(promisesRACE)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });

// PROMISE.RESOLVE
// PROMISE.REJECT

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => {
        console.log(e);
    });