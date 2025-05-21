const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// Use the same router for /signup and /login
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
