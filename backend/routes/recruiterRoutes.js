// routes/recruiterRoutes.js
const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');

router.post('/recruiters', recruiterController.createRecruiter);
router.post('/recruiters/bulk', recruiterController.createMultipleRecruiters);
router.get('/recruiters', recruiterController.getAllRecruiters);

module.exports = router;
