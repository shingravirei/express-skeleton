const express = require('express');

const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const home = require('./routes/home');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Router setup
app.use('/', home);

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
