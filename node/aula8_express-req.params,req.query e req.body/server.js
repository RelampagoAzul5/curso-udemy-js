// parametros de url
// /profile/5?
// campanha=googleleads&
// nome_campanha=seila
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <form action = "/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});
// Faz com que o navegador entenda que ele pode receber um parametro junto ta requisição
// Caso queira que o parametro seja opcional você pode colocar "?"
// http://localhost:3000/testes/numsei/123


// Caso a interrogação seja posta antes do parametro ela abre uma query: 
// http://localhost:3000/testes/?nome=giovanni&sobrenome=henrique&idade=21
app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
    console.log(req.query);
    res.send(`${req.params}`);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.listen(3000,() => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
