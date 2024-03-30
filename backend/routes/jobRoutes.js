// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/jobs', jobController.createJob);
router.post('/jobs/bulk', jobController.createMultipleJobs);
router.get('/jobs', jobController.getAllJobs);

module.exports = router;
