import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css'

function generator(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
};
generator();
document.addEventListener('click', (e)=>{
    const el = e.target
    if(el.classList.contains('gen-button')){
        generator();
    }
})