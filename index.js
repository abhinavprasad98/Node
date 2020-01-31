const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyparser.json());


// Initialise routes
app.use('/api', require('./routes/api'));

// Error Handling Middleware
app.use(function(err, req, res, next) {
    // console.log(err);
    res.status(404).send({error: err.message});
});


// Listen to the requests
app.listen(4000, function() {
    console.log('Now listening for requests');
})