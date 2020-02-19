const router = require('express').Router();

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'You are now logged out.');
    res.redirect('/login');
});

module.exports = router;
