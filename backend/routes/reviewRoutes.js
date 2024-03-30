// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// POST a new review
router.post('/', reviewController.postReview);

// GET reviews by recruiterId
router.get('/recruiter/:recruiterId', reviewController.getReviewsByRecruiterId);

router.get('/', reviewController.getAllReviews);


module.exports = router;
