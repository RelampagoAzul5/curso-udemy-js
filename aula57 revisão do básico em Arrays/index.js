const nomes = ['Giovanni', 'Lucas', 'André'];
const novo = [...nomes];



const removido = novo.pop(); // remove do final
const removido2 = nomes.shift(); // removido do começo

nomes.push('João'); // Adiciona no final
nomes.unshift('Wallace'); // Adiciona no começo


// console.log(nomes,removido2);
// console.log(novo, removido);


const nomes2 = [ 'Wallace', 'Lucas', 'André', 'João', 'Victor', 'Rafael' ];

const novo2 = nomes2.slice(1,-1);


// console.log(nomes2);
// console.log(novo2);

// const nome = 'Giovanni Henrique de Paula Fernandes';
// const nomes3 = nome.split(' ');
const nomes3 = [ 'Giovanni', 'Henrique', 'de', 'Paula', 'Fernandes' ];
const nome = nomes3.join(' ')

console.log(nome)
