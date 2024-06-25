function formatCpfToNumber(cpf){
    let formatedCpf = '';
    for (digit of cpf){
        if (isNaN(Number(digit))){
            continue;
        }
        formatedCpf += digit;
    };
    return formatedCpf;
}

function getFirstDigitCpf(cpf){
    cpf = cpf.slice(0,9)
    let acumulador = 0;
    let contador = 10;
    for (digit of cpf){
        acumulador += digit * contador;
        contador -= 1;
    }
    let firstDigit = 11 - (acumulador % 11);
    if (firstDigit > 9) return 0;
    return firstDigit;
}

function getSecondDigitCpf(cpf){
    cpf = cpf.slice(0,10)
    let acumulador = 0;
    let contador = 11;
    for (digit of cpf){
        acumulador += digit * contador;
        contador -= 1;
    }
    let secondDigit = 11 - (acumulador % 11);
    if (secondDigit > 9) return 0;
    return secondDigit;
}

function checkCpfIsValid(cpf){
    const cpfDigits = cpf.slice(-2);
    const digit1 = `${getFirstDigitCpf(cpf)}`;
    const digit2 = `${getSecondDigitCpf(cpf)}`;
    if (digit1 === cpfDigits[0] && digit2 === cpfDigits[1]){
        return true;
    };
    return false;
}


const cpf = '070.987.720-03';
let formatedCpf = formatCpfToNumber(cpf);

if(checkCpfIsValid(formatedCpf)){
    console.log('Cpf é válido');
}else{
    console.log('Cpf é inválido');
}