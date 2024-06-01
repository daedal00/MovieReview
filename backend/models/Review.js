// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
