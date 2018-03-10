const mongoose = require('mongoose');
mongoose.connect();

let movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    rating: Number,

});

let Movie = mongoose.model('Movie', movieSchema)

let 