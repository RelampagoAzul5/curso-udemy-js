require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const mongoosed = require('mongoose')
mongoosed.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('Conectado');
    app.emit('pronto');
})
.catch(e => console.log(e));

const routes = require('./routes');
const middlewareGlobal = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views',path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos proprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () =>{
    app.listen(3000,() => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    }); 
});