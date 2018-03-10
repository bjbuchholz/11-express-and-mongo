const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');

//GET /api/cupcakes -> gets all the cupcakes
router.get('/', (req, res) => {
    const movies = [new Movie ('Star Wars: The Last Jedi', 'Sci-fi', 7.5)];
    res.send(movies);
});

module.exports = router;