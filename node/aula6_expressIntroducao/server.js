//         CRIAR   LER   ATUALIZAR APAGAR
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET   PUT     DELETE

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hello <b>world</b>!');
    res.send(`
        <form action = "/" method="POST">
        Nome: <input type="text" nome="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (req, res) => {
    res.send('Recebi o Formulário')
})

app.get(`/contato`, (req, res) => {
    res.send('Obrigado por entrar em contato conosco!')
})

app.listen(3000,() => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
