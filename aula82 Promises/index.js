function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max-min) + min);
}
// USANDO CALLBACK

// function esperaAi(msg,tempo,cb){
//     setTimeout(() => {
//        console.log(msg) 
//        if(cb) cb();
//     }, tempo);
// }

// esperaAi('frase 1', aleatorio(1000,3000),function(){
//     esperaAi('frase 2', aleatorio(1000,3000),function(){
//         esperaAi('frase 3', aleatorio(1000,3000))
//     })
// })

function esperaAi(msg,tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(new Error('BAD VALUE'));
        setTimeout(() => {
           resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', aleatorio(1,3))
    .then(resposta =>{
        console.log(resposta)
        return esperaAi(2222, aleatorio(1,3));
    })
    .then(resposta =>{
        console.log(resposta)
        return esperaAi('Frase 3', aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e =>{
        console.log('ERRO:', e);
    })
