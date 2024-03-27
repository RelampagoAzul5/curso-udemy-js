/*
Primitivos (imutável) - string, number, boolean, undefined, null (bigint, symbol)

let a = 'A';
let b = a; // cria uma cópia da variável 'a', depois disso 'a' não tem mais nenhuma influência sobre 'b'
console.log(a, b); retorno: A A
a = 'outra coisa';
console.log(a, b); retorno: outra coisa A


Referência (mutável) - array, object, function - passados por referência

let a = [1,2,3];
let b = a; // faz com que a variavel 'b' se referencie ao mesmo lugar na memória que a variável 'a', assim, se você alterar a variável 'a' automáticamente você altera a variavel 'b' e vice versa.
console.log(a, b); // retorno: [ 1, 2, 3 ] [ 1, 2, 3 ]

c = [...a] // cria uma cópia exata da variavel 'a', se eu mexer em 'c', 'a' e 'b' não serão alteradas, mas se eu mexer em 'a', 'b' será alterada, e se eu mexer em 'b', 'a' será alterada.

a.push(4);
console.log(a, b); // retorno : [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

b.pop();
console.log(a, b); // retorno: [ 1, 2, 3 ] [ 1, 2, 3 ]
c.pop();
console.log(a, b, c); // retorno: [ 1, 2, 3 ] [ 1, 2, 3 ] [ 1, 2 ]
*/
