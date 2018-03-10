const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Movie = require('../../models/movies');

function save(movie) {
  let movieModel = new Movie({
    title: movie.title,
    genre: movie.genre,
    rating: movie.rating,
  })

  return new Promise((resolve, reject) => {
    movieModel.save((err, savedMovie) => {
      resolve(savedMovie);
    })
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    Movie.findOne({_id: id}, (err, movies) => {
      resolve(movies);
    })
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    Movie.find((err, movies) => {
      resolve(movies);
    })
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
   Movie.remove({_id: id}, (err, movie) => {
      resolve(movie);
    })
  });
}

function removeAll() {
  return new Promise((resolve, reject) => {
    Movie.remove((err, movies) => {
      resolve(movies);
    })
  });
}

module.exports = {save, get, getAll, remove, removeAll};