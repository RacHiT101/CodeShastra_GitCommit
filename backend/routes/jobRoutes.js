// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/jobs', jobController.createJob);

module.exports = router;
