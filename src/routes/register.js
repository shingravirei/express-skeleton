const router = require('express').Router();
const bcrypt = require('bcrypt');
const { forwardAuthenticated } = require('../config/auth');
const { User, Op } = require('../models/User');

router.get('/register', forwardAuthenticated, (req, res) => {
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

        if (password !== confirmPassword) {
            req.flash('warning', ['Passwords do not match']);
            req.flash('username', req.body.username);
            req.flash('email', req.body.email);
            res.redirect('/register');
        }

        const { username, email } = req.body;

        // Checking if there is already an user in the db
        const user = await User.findOne({
            where: { [Op.or]: [{ username }, { email }] }
        });

        // If there is an user in the db, redirect to register page again
        if (user) {
            req.flash(
                'warning',
                'There is already an user with the same username or email'
            );
            req.flash('email', email);
            res.redirect('/register');
        } else {
            const hash = bcrypt.hashSync(password, 10);

            User.create({
                username,
                email,
                password: hash
            }).then(() => {
                req.flash(
                    'success',
                    'Account succeffuly created! You can login now.'
                );
                res.redirect('/dashboard');
            });
        }
    } catch (err) {
        console.log(err);
        req.flash('error', err.Error);
        res.redirect('/register');
    }
});

module.exports = router;
