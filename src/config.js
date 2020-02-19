const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const flash = require('connect-flash');
const exphbs = require('express-handlebars');
const passport = require('./config/passport');
// -----------------
// importing routers
// -----------------
const home = require('./routes/home');
const login = require('./routes/login');
const register = require('./routes/register');
const dashboard = require('./routes/dashboard');
const logout = require('./routes/logout');

// Instanciating express
const app = express();

// Cookie Parser
app.use(cookieParser());

// Session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
        cookie: {}
    })
);

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Connect flash
app.use(flash());

// passport
app.use(passport.initialize());
app.use(passport.session());

// Setting up public and views folders
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Router setup
app.use('/', home);
app.use('/', login);
app.use('/', logout);
app.use('/', register);
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
