const nomes = [ 'Wallace', 'Lucas', 'André', 'João', 'Victor', 'Rafael' ];

// nomes.splice(indice atual, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(4,2, 'Giovanni', 'Henrique');

// pop
// const removidos = nomes.splice(-1,1)

// shift
// const removidos = nomes.splice(0,1)

// push
// nomes.splice(nomes.length,0,'Giovanni','Henrique')

// unshift
nomes.splice(0,0,'Giovanni','Henrique')

console.log(nomes);
