const mongoose = require('mongoose');

module.exports = mongoose.model('Movie', { title: String, genre: String, rating: Number });