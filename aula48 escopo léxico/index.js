const nome = 'Giovanni';

function falaNome(){
    console.log(nome);
}
function usarFalaNome(){
    const nome = 'Henrique';
    falaNome();
}
usarFalaNome();