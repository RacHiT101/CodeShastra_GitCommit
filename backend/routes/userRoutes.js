// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser); // New route for user login

module.exports = router;
