const router = require('express').Router();
const mongoose = require('mongoose');
const customers = mongoose.model('customers');

router.post('/customers', function(req, res) {
    customers.create(req.body).then(function(data) {
        res.send(data);
        console.log('Customer has been successfully added to the Database');
    }).catch((err) => {
        console.log(err);
    })
})
module.exports = router;