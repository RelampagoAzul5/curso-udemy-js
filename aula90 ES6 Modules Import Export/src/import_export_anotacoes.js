// *********************IMPORT*********************

import{ nome as nome2, // importa a variável, função ou classe alterando seu nome
    sobrenome as seila, 
    idade, 
    soma} from './modulo1';
const nome = 'Juliana'
console.log(nome2, seila, idade, soma(5, 4))
console.log(nome)

import * as meuModulo from './modulo1'; // Importa tudo que foi exportado do módulo

import qualquerCoisa from './modulo1' // Essa linha de código serve para importar o que foi exportado por padrão, não importando nem se o nome escrito para a importação for o mesmo definido na exportação, esse valor sempre será puxado por padrão

import multiplica, {nome, sobrenome, idade, soma} from './modulo1'; // Caso queira importar tanto o valor padrão como os outros usar uma linha de comando como essa

// Nada que não seja exportado, pode ser importado, então caso não exporte uma certa função, classe ou variável, ela será tratada como um elemento interno/privado daquele módulo



// *********************EXPORT*********************

// const nome = 'Giovanni';
const sobrenome = 'Henrique';
const idade = 21;

function soma(x, y){
    return x + y;
};
export {nome as nome2, // exporta a variável, função ou classe alterando seu nome
     sobrenome,
      idade,
       soma};
export const idade2 = 21; // Exporta a variável, função ou classe no mesmo momento em que ela é criada

export default function soma(x, y){
    return x + y;
}; // Torna um dado export padrão, oq significa que quando você precisar importar isso, se você não nomear o que vai importar, então ele automáticamente importará esse elemento

export {nome as default} // Para exportar uma constante/variável por padrão devemos usar a linha de comando desta forma

export default (x,y) => {
    return x * y
} // Também é possível exportar por padrão ArrowFunctions anonimas

