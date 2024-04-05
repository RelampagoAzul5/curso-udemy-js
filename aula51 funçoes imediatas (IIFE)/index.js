// IIFE -> Immediately invoked function expression
(function(idade, peso, altura){
    const sobrenome = 'Fernandes';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Giovanni Henrique'));
    }
    falaNome();
    console.log(idade, peso, altura)
    
})(21,70,1.72);