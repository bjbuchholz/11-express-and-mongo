'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(new Date());
});
app.post('/', (req, res) => {
    console.log("Got BODY:", req.body);
    res.send(req.body);
})

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});