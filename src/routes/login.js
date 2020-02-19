const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
    res.redirect('/dashboard');
});

module.exports = router;
