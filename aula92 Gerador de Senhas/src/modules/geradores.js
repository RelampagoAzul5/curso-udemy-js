const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => rand(0,10);
const geraSimbolo = () => {
    const simbolos = '!@#$%^&*()-_{}[];:/?.,=+';
    return simbolos[rand(0, simbolos.length)];
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray=[];
    qtd = Number(qtd);
    for(let i = 0; i<qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0,qtd);
}