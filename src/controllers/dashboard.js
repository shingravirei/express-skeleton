const dashboard = (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        sucess: req.flash('sucess')
    });
};

module.exports = dashboard;
