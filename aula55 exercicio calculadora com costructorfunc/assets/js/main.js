function Calculadora(){
    this.display =  document.querySelector('.display')
    this.inicia = () =>{
        this.cliqueBotões();
        this.pressionaEnter();
    }
    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13){
                this.realizaConta();
            }
        });

    }
    this.clearDisplay = () =>{
        this.display.value = '';
    }
    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0,-1)
    }
    this.realizaConta = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);

            if(!conta){
                alert('Conta Inválida');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta Inválida');
        }
    }
    this.cliqueBotões = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;
            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }
            if(el.classList.contains('btn-cl')){
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
                this.deleteOne();
            }
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
            this.display.focus()
        })
    }
    this.btnParaDisplay = (valor) =>{
        this.display.value += valor;
    }
    };

const calculadora = new Calculadora()

calculadora.inicia()
