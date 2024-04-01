function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString({hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12: false})
}

const timer = setInterval(() => console.log(mostraHora()), 1000)
setTimeout(() => {clearInterval(timer)}, 4000);

setTimeout(() => {console.log('Olá Mundo')},5000);