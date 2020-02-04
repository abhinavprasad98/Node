const express = require('express');
const router = express.Router();
const Ninja = require('./ninja');

// Get a list of ninjas from the db
router.get('/ninjas', function(req, res) {
    Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(ninjas) {
        res.send(ninjas);
    });
});

// Add a new ninja to the db
router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(ninja) {    // Instance of ninja and saves data from the request body onto ther db and it also returns a promise
    res.send(ninja); 
}).catch(next);
});

// Update a ninja in the db
router.put('/ninjas/:id', function(req, res, next) {
    // res.send({type: 'PUT'});
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        Ninja.findOne({_id: req.params.id}).then(function(ninja) {
            res.send(ninja);
        });    
    });
});

// Delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next) {
   // console.log(req.params.id);
   // res.send({type: 'DELETE'});
   Ninja.findByIdAndRemove({_id: req.params.id})
});

router.listen(4000);
