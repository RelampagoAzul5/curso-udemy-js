const pessoa = {
    nome: 'Giovanni',
    sobrenome: 'Fernandes',
    idade: 21,
    endereco:{
        rua: 'Montese',
        // numero: 1994,
        complemento: 'D'
    }
};


const { nome: teste = '', sobrenome, idade } = pessoa;
const {endereco : {rua : r, numero = '0000', complemento}, endereco} = pessoa;
const {nome,... resto} = pessoa;

console.log( teste, sobrenome, idade );
console.log(r, numero, complemento);
console.log(nome, resto)