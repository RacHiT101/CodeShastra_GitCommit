// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser); // New route for user login
router.get('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);

module.exports = router;
