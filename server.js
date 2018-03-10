'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Movie = require('./models/movies');
const movieRouter = require('./routes/movie-router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.json());
app.use('/api/movies', movieRouter);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});

// app.get('/', (req, res) => {
    //     res.send(new Date());
// });
// app.post('/', (req, res) => {
//     console.log("Got BODY:", req.body);
//     res.send(req.body);
// })
