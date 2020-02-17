const router = require('express').Router();

const { login, handleLoginForm } = require('../controllers/login');

router.get('/login', login);

router.post('/login', handleLoginForm);

module.exports = router;
