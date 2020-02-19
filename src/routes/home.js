const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', isAuth: req.isAuthenticated() });
});

module.exports = router;
