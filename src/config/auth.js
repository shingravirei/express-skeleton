const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'Please log in to view that resource');
    return res.redirect('/login');
};

const forwardAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/dashboard');
};

module.exports = {
    ensureAuthenticated,
    forwardAuthenticated
};
