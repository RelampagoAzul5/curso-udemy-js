/*
REGRAS DE CRIAÇÃO DE VARIÁVEIS:

- Não podemos criar variáveis com palavras reservadas;
- Variáveis precisam ter nomes significativos
- Não pode começar o nome de uma variável com um número
- Não podem conter espaços ou traços
- Utilizamos camelCase
- Case-sensitive
- Não podemos redeclarar variáveis com let
- NÃO UTILIZE VAR, UTILIZE LET
*/

let nome = 'Giovanni'; // declaração da variável

let nome2; //eu não preciso necessáriamente declarar a variável e atribuir um valor a ela ao mesmo tempo, posso declarar o valor depois.
nome2 = 'Juliana'

console.log(nome,'nasceu em 2003');
console.log('Em 2023', nome, 'conheceu',nome2);
console.log(nome,'casou-se com',nome2, 'em 2026');
console.log(nome2,'teve 1 filho com', nome,'em 2032');