const router = require('express').Router();

const { ensureAuthenticated } = require('../config/auth');

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        success: req.flash('success'),
        isAuth: req.isAuthenticated()
    });
});

module.exports = router;
