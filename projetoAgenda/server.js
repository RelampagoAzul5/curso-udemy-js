require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {;
    app.emit('pronto');
})
.catch(e => console.log(e));
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const routes = require('./routes');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({extended: true})); // Permite que formularios sejam usados
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'GRSJNGPDFSNGPFSNPGFJSFOGMPKGM',
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        //     Miles  sec  min  hora dia
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views',path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos proprios middlewares
app.use(middlewareGlobal);
app.use(csrfMiddleware, checkCsrfError);
app.use(routes);

app.on('pronto', () =>{
    app.listen(3000,() => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    }); 
});