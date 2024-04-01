// Escreva uma função que recebe um número e
// returne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o que recebeu
// Use a função com números de 0 a 100

const fizzBuzz = (num) => {
    let value = '';
    if (isNaN(num)) return num;
    if (num % 3 == 0) value += 'Fizz';
    if (num % 5 == 0) value += 'Buzz';
    if(!(num % 3 == 0) && !(num % 5 == 0)) return num;
    return value;
}
console.log('a', fizzBuzz('a'))
for (i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}