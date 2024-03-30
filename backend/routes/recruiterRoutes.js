// routes/recruiterRoutes.js
const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');

router.post('/recruiters', recruiterController.createRecruiter);
router.post('/recruiters/bulk', recruiterController.createMultipleRecruiters);
router.get('/recruiters', recruiterController.getAllRecruiters);
router.get('/recruiters/:id', recruiterController.getRecruiterByIdnew);
router.get('/recruiters/:recruiterId/jobs', recruiterController.getJobsByRecruiter);
router.post('/recruiters/login', recruiterController.recruiterLogin);

module.exports = router;
