const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

async function leArquivo(caminhoArquivo){
    const dados = await ler(caminhoArquivo);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(element => console.log(element));
}

const pessoas = [
    { nome: 'Giovanni' },
    { nome: 'Juliana' },
    { nome: 'Breno' },
    { nome: 'André' },
];

const json = JSON.stringify(pessoas, '', 1)
escreve(caminhoArquivo, json);

const dadosArquivo = leArquivo(caminhoArquivo)
.then(dados => dados)
;