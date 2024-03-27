// o caracter \ serve como escape para um texto.
// ex
let string1 = "Um \"texto\"\\outro texto";
console.log(string1);

// Strings são indexadas, você pode escolher um determinado 
// indice de uma string colocando o número do indice entre colchetes por exemplo str[3]
// ou utilizando o método "str.charAt(indice)"

let string2 = "Um texto";
console.log(string2[3], string2.charAt(0));

// Para concatenar duas strings você pode usar o operador "+" ou o método "str.concat(string), ou utilizando as template strings"
console.log (string2 + 1, string2.concat(2), `${string2}3`);

// Para encontrar o índice de um determinado character ou de uma determinada palavra você pode usar o método "str.indexOf('Character/palavra')" além disso você também pode pular e começar de algum indice específico utilizando da seguinte forma "str.indexOf('Character/palavra', indice)"
// se o character não for encontrado, retornará o valor do indice como "-1"
console.log(string2.indexOf('t'), string2.indexOf('t',4));

// Ao "str.indexOf" temos o str.lastIndexOf que vai procurar o valor do indice começando pelo final
console.log(string2.lastIndexOf('t'), string2.lastIndexOf('U',3));

// Existem métodos em strings que fazem uso de expressões regulares.
// o metodo Match, nesse caso, retorna um Array com todas as letras minusculas da string
console.log(string2.match(/[a-z]/g));

// o metodo search retorna o indice do primeiro valor que ele encontrar dentro da expressão
console.log(string2.search(/[a-z]/g));

// o metodo replace serve para modificar partes da string
console.log(string2.replace('Um' , 'Outra'));
let string3 = "O rato roeu a roupa do rei de roma.";
console.log(string3.replace(/r/g , '#'));

// o metodo length retorna o tamanho da string
console.log(string3.length);

// o metodo slice serve para fatiar a string

console.log(string3.slice(-5, -1));

// substring pode fazer a mesma coisa que o slice, porem usa mais espaço no código
console.log(string3.substring(string3.length - 5,string3.length - 1));

// O metodo split serve para dividir a string em um array de palavras, usando algum character específico
console.log(string3.split(' ', 2));

// O metodo toUpperCase faz com que toda a string fique em letra maiuscula
console.log(string3.toUpperCase());

// O metodo toLowerCase faz com que toda a string fique em letra minuscula
console.log(string3.toLowerCase());

