/*Object.values é como o keys, mas retorna os valores
Object.entries retorna chave e valor
Object.assign(des, any) serve pra copiar o objeto em outra variavel
Object.getOwnPropertyDescriptor(o,'prop') mostra a descrição de uma determinada propriedade
... spread

// Já vimos

Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperty(define uma propriedade)
Object.defineProperties(define varias propriedades)
*/

// copiando um objeto em outra variável

const produto = {nome: 'Caneca', preco: 1.8}
const outroProduto = {...produto,
    tamanho: '4x4'
};
const outroProduto2 = Object.assign({},produto);
const outroProduto3 = {nome: produto.nome};

outroProduto.nome = 'Plastico';
outroProduto.preco = 2.5;
// console.log(produto);
// console.log(outroProduto);
// console.log(outroProduto2);
// console.log(outroProduto3);
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'))


for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}