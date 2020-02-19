const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/User');

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register',
        error: req.flash('error'),
        warning: req.flash('warning'),
        username: req.flash('username'),
        email: req.flash('email')
    });
});

router.post('/register', async (req, res) => {
    try {
        const { password, confirmPassword } = req.body;

        if (password === confirmPassword) {
            const { username, email } = req.body;
            const hash = bcrypt.hashSync(password, 10);

            const user = await User.findOne({ where: { username } });

            // If there is an user in the db, redirect to login
            if (user) {
                req.flash(
                    'warning',
                    'There is already an user with the same username'
                );
                req.flash('email', email);
                res.redirect('/register');
            } else {
                User.create({
                    username,
                    email,
                    password: hash
                }).then(() => {
                    req.flash(
                        'sucess',
                        'You have sucessfully created an account!'
                    );
                    res.redirect('/dashboard');
                });
            }
        }

        if (password !== confirmPassword) {
            req.flash('warning', ['Passwords do not match']);
            req.flash('username', req.body.username);
            req.flash('email', req.body.email);
            res.redirect('/register');
        }
    } catch (err) {
        console.log(err);
        req.flash('error', err);
        res.redirect('/register');
    }
});

module.exports = router;
