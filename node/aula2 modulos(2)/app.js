const Cachorro = require('./Z/mod'); // Quando importar dessa forma, o que vai ser importado vai ser automáticamente o valor exportado por padrão
// const Cachorro = require('./Z/mod,js'); // Não é obrigatório utilizar a extenção do arquivo quando for um arquivo JS

const c1 = new Cachorro('Amora');

c1.latir();

// Variáveis que podem ser usadas com modulos no node
// Elas vão puxar o nome completo do arquivo desde a raiz até o local
console.log(__filename); //Nome do Arquivo
console.log(__dirname); //Nome da pasta atual

const path = require('path');

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));