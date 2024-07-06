const nome = 'Giovanni';
const obj = {nome};
const novoObj = {...obj};

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
let n1 = rand(0,60);
let n2 = rand(0,60);

if(n1 === n2){
    console.log(`${n1} e ${n2} são iguais`);
}else if (n1 > n2){
    console.log(`${n1} é maior que ${n2}`);
}
console.log(novoObj);