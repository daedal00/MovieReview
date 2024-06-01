// controllers/reviewController.js
const Review = require('../models/Review');

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createReview = async (req, res) => {
    const review = new Review(req.body);
    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getReviews, createReview };
