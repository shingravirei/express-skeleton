const login = (req, res) => {
    res.render('login', { title: 'Login' });
};

const handleLoginForm = (req, res) => {
    res.redirect('/dashboard');
};

module.exports = {
    login,
    handleLoginForm
};
