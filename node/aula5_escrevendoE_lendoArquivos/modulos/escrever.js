const fs = require('fs').promises;

module.exports = (caminhoArquivo, dados) => {

    // flags: 'w' reescreve o arquivo, 'a'(ppend) adiciona o texto ao final do arquivo
    fs.writeFile(caminhoArquivo, dados, { flag: 'w' });
}