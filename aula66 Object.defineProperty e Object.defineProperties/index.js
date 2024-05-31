function Produto(nome, preco, estoque){
    Object.defineProperty(this,'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false // configuravel
    })

    Object.defineProperties(this,{
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configuravel            
        },
        preco:{
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        
        }
    })
}
const p1 = new Produto('Camiseta', 20, 3)


