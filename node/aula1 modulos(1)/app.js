
// Formas de se importar o modulo usando Require e Exports
// Módulos importados do padrão do node ou de instalação via NPM não precisam que o caminho do módulo seja informado na hora de importar.
const path = require('path');
const axios = require('axios');

// Para importar módulos feitos por mim os módulos devem ser importados usando o caminho do projeto, podendo ser o caminho completo ou o caminho relativo.
const mod1 = require('./mod1');

// const falaNome = require('./mod1').falaNome; // É possível você importar apenas o que você quer usar dessa forma.

// const falaNome = mod1.falaNome; // Também é possível você jogar o import para uma variável dessa formar, fazendo com que não necessite você usar o nome do módulo para utilizar a variável ou função.
const {nome, sobrenome, falaNome, Pessoa} =  require('./mod1S'); // Podemos também importar via desestruturação dessa forma, fazendo com que cada item ja seja jogado em sua respectiva variável.

// Vale ressaltar também que é possível criar uma variável com outro nome para utilizar a variável do módulo, por exemplo podemos colocar o nome 'Mod1Nome' na variável nome importada do módulo.

const p1 = new Pessoa('Juliana', 'Amaral');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
 .then(response => console.log(response.data))
 .catch(e => console.log(e));