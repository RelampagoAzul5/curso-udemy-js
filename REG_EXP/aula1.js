// g - Global (Encontra todas as ocorrências)
// i - insensitive
// () - grupo
// | ou 
const { texto } = require('./base');

const regExp1 = /(Maria|Joao|Luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

// console.log(regExp1.exec(texto).index);
// console.log(regExp1.test(texto));
if (found){
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}
