function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this,'estoque',{
        enumerable: true, // mostra a chave
        configurable: false, // configuravel
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Valor Inválido')
            };
            estoquePrivado = valor;
        }
    })    
};

function criaProduto(nome){
    return {
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor.replace('Coisa.', '')
        }
    };
};
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
// console.log(p1.estoque);

p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer Coisa.'
console.log(p2.nome);

