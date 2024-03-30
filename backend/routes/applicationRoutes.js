// routes/applicationRoutes.js

const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/applications', applicationController.createApplication);
router.delete('/applications/:id', applicationController.deleteApplication);
router.put('/applications/:id', applicationController.updateApplication);
router.get('/users/:userId/applications', applicationController.getApplicationsByUser);
router.get('/application/job/:jobId', applicationController.getUsersByJob);
router.get('/applications', applicationController.getAllApplications);
// router.get('/jobs/:jobId/recruiters/:recruiterId/applications', applicationController.getApplicationsByJobForRecruiter);

module.exports = router;
