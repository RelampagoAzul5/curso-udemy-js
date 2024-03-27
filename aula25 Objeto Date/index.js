// const data = new Date(2024, 3, 20, 15,14,27,500); //Ano, mês, dia, hora, minuto, segundo, milesimo de segundo

// const data = new Date('2024-04-20 15:20:59.100');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now())
function zeroAEsqueda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth());
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());
    const seg = zeroAEsqueda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)