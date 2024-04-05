function retornaFuncao(){
    const nome = 'Giovanni'
    return function(){
        return nome
    }
}

const funcao = retornaFuncao()
console.dir(funcao)