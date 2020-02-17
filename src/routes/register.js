const router = require('express').Router();

const { register, handleRegisterForm } = require('../controllers/register');

router.get('/register', register);

router.post('/register', handleRegisterForm);

module.exports = router;
