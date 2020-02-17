var router = require('express').Router();
var mongoose = require('mongoose');
var orders = mongoose.model('orders');
router.post('/orders', (req, res) => {
    orders.create(req.body).then((data) => {
        res.send(data);
        console.log('Orders list has been created successfully in the batabase');
    }).catch((err) => {
        console.log(err);
    })
});

router.put('/orders/:id', (req, res) => {
    orders.updateOne({_id:req.params.id}, req.body
        ).then((data) => {
            res.send(data);
            console.log('Orders list has been updated successfully');
        }).catch((err) => {
         console.log(err);
        })
})

module.exports = router;