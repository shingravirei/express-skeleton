const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const home = require('./routes/home');
const login = require('./routes/login');
const dashboard = require('./routes/dashboard');
// Instanciating express
const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Setting up public and views dir
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Router setup
app.use('/', home);
app.use('/', login);
app.use('/dashboard', dashboard);

// Handlebars setup
app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
        partialsDir: path.join(__dirname, 'views/partials')
    })
);
app.set('view engine', 'hbs');

module.exports = app;
