// try {
//     // É executado quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch{
//     // É executado quando á erros
//     console.log('Tratndo o erro');
// }finally {
//     // É executado Sempre
// }

function retornaHora(data){
    if (data && !(data instanceof Date)){
       throw new TypeError('Esperando instância de Date.'); 
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    })
}

try{
    const hora = retornaHora(11);
    console.log(hora)
}catch(error){
    // tratar erro
} finally{
    console.log('Tenha um bom dia')
}