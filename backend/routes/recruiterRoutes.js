// routes/recruiterRoutes.js
const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');

router.post('/recruiters', recruiterController.createRecruiter);

module.exports = router;
