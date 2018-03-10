const mongodb = require('./mongodb-storage');

const Movie = require('../../models/movies');

// accepts some type of storage, removes everything in it
// then adds several common movies to it.
function seed(storage) {
  return storage.removeAll()
  .then(() => {
    return Promise.all([
      storage.save(new Movie({title: "Star Wars: The Last Jedi", genre: "Sci-fi", rating: 7.5})),
      storage.save(new Movie({title: "Jurassic World", genre: "Action", rating: 7.0})),
      storage.save(new Movie({title: "Dumb and Dumber", genre: "Comedy", rating: 7.3}))
    ])
  });
}

module.exports = {mongodb, seed};
