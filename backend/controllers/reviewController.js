// controllers/reviewController.js

const Review = require('../models/Review');

// Controller function to post a new review
exports.postReview = async (req, res) => {
  try {
    const { review, recruiterId, rating } = req.body;

    // Check if the review already exists for the given recruiterId
    const existingReview = await Review.findOne({ recruiterId, review });
    if (existingReview) {
      return res.status(400).json({ message: 'Review already exists' });
    }

    const newReview = new Review({ review, recruiterId, rating });
    await newReview.save();

    res.status(201).json({ message: 'Review posted successfully', review: newReview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get reviews by recruiterId
exports.getReviewsByRecruiterId = async (req, res) => {
  try {
    const { recruiterId } = req.params;
    const reviews = await Review.find({ recruiterId });

    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json({ reviews });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
