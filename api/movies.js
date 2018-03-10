var express = require('express')
var router = express.Router()

const storage = require('../lib/storage/storage').mongodb;

router.get('/', (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    storage.get(id)
    .then(movie => {
      res.send(movie);
    });
  } else {
    storage.getAll()
    .then(movies => {
      res.send(movies);
    });
  }
});

router.post('/', (req, res) => {
  // pick the movie attributes off the request.
  let movie = {
    title: req.body.title,
    genre: req.body.genre,
    rating: req.body.rating,
  };

  // save the movie to the database
  storage.save(movie)
  .then(movie => {
    res.status(200);
    res.send(movie);
  });
})

router.put('/', (req, res) => {
  let id = req.query.id;
  storage.get(id)
  .then(movie => {
    // Allow users to only send the properties they want to update
    // Only update a property if someone passed it.
    if (req.body.title) {
      movie.title = req.body.title;
    }
    if (req.body.genre) {
      movie.genre = req.body.genre;
    }
    if (req.body.rating) {
      movie.rating = req.body.rating;
    }

    movie.save((err, movie) => {
      res.send(movie);
    })
  });
});

router.delete('/', (req, res) => {
  let id = req.query.id;
  storage.remove(id)
  .then(movie => {
    res.send(movie);
  });
});

module.exports = router;