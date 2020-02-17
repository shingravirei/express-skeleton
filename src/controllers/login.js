const login = (req, res) => {
    res.render('login', {
        title: 'Login',
        error: [],
        warning: []
    });
};

const handleLoginForm = (req, res) => {
    res.redirect('/');
};

module.exports = {
    login,
    handleLoginForm
};
