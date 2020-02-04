const router = require('express').Router();
const mongoose = require('mongoose');
const dishes = mongoose.model('dishes');

router.post('/dishes', function(req, res) {
    dishes.create(req.body).then(function(data) {
        res.send(data);
        console.log('Dishes has been successfully added to the Database');
    }).catch((err) => {
        console.log(err);
    })
})
module.exports = router;