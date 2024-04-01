function relogio (){
    function getTimeFromSeconds(seconds){
        const data = new Date(seconds * 1000)
        return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
    }
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    function startClock(){
        timer = setInterval(()=> {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', (e) =>{
        const el = e.target;
        if (el.classList.contains('iniciar')){
            clearInterval(timer)
            startClock();
            relogio.classList.remove('pause');
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pause');
        }
        if (el.classList.contains('zerar')){
            clearInterval(timer)
            segundos = 0;
            relogio.innerHTML = getTimeFromSeconds(segundos)
                relogio.classList.remove('pause');
        }
    })
    
}

relogio()