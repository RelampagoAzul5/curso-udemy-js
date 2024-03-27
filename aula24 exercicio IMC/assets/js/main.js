const form = document.querySelector('.form');
function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = '';
    const p = criaP();
    if (isValid){
        p.classList.add('valido');
    } else{
        p.classList.add('invalido');
        p.classList.add('invalido');
    };
    p.innerHTML = msg
    resultado.appendChild(p)
};
function calcImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};
function verificaIMC(imc){
    if (imc < 18.5){
        return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9){
        return 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9){
        return 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9){
        return 'Obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.9){
        return 'Obesidade grau 2'
    }
    return 'Obesidade grau 3'
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const formPeso = form.querySelector('#peso');
    const formAltura = form.querySelector('#altura');
    const peso = Number(formPeso.value);
    const altura = Number(formAltura.value);

    if (!peso){
        setResultado('Peso Inválido', false);
        return;
    };
    if (!altura){
        setResultado('Altura Inválida', false);
        return;
    };
    const imc = calcImc(peso, altura);
    const resultIMC = verificaIMC(imc);
    const msg = `Seu imc é ${imc} (${resultIMC})`
    setResultado(msg, true)
})
