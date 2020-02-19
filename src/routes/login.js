const router = require('express').Router();

const passport = require('../config/passport');
const { forwardAuthenticated } = require('../config/auth');

router.get('/login', forwardAuthenticated, (req, res) => {
    res.render('login', {
        title: 'Login',
        error: req.flash('error'),
        success: req.flash('success'),
        isAuth: req.isAuthenticated()
    });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

module.exports = router;
