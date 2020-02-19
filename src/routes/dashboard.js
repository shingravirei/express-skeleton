const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        sucess: req.flash('sucess')
    });
});

module.exports = router;
