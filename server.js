'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cupcake = require('./models/cupcake');

app.use(bodyParser.json());


app.get('/api/cupcakes', (req, res) => {
    const cupackes = [new Cupcake ('Red Velvet Deluxe', true)];
    res.send(cupcakes);
})


// app.get('/', (req, res) => {
//     res.send(new Date());
// });
// app.post('/', (req, res) => {
//     console.log("Got BODY:", req.body);
//     res.send(req.body);
// })

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});