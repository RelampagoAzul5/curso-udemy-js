function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        inicia(){
            this.cliqueBotões();
            this.pressionaEnter();
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });

        },
        clearDisplay(){
            this.display.value = '';
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0,-1)
        },
        realizaConta(){
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
        },
        cliqueBotões(){
            document.addEventListener('click', (e) => {
                const el = e.target;
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
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora()

calculadora.inicia()
