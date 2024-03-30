// routes/applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/applications', applicationController.createApplication);

module.exports = router;
