const mongoose = require('mongoose');

const storage = require('../lib/storage/storage');
const mongodbStorage = storage.mongodb;

const Movie = require('../models/movies');

describe("MongoDB Storage", () => {
  afterAll(() => {
    mongoose.disconnect();
  });

  test("seed create three movies", (done) => {
    storage.seed(mongodbStorage)
    .then(() => {
      return mongodbStorage.getAll();
    })
    .then(movies => {
      expect(movies.length).toEqual(3);
      done();
    });
  })

  test("can create a new movie", (done) => {
    let movie = new Movie({title: "Hackers", genre: "Sci-fi", rating: 6.2});
    mongodbStorage.save(movie)
    .then(() => {
      return mongodbStorage.getAll()
    })
    .then(movies => {
      expect(movies.length).toEqual(4);
      done();
    });
  })
})