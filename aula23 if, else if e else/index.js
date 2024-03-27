// if Pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else if's na checagem
// Podemos usar condições dem else if, utilizando apenas if e else
// Só posso ter um else na checagem

const hora = 15;

if (hora >= 6 && hora <= 11){
    console.log('Bom dia');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else if (hora >= 0 && hora <= 5){
    console.log('Boa Madrugada');
} else{
    console.log('Olá');
}
