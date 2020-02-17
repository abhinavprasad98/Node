var router = require('express').Router();
var mongoose = require('mongoose');
var order_items = mongoose.model('order_items'); 
router.post('/order_items', (req, res) => {
    console.log('Abhinavs second branch of A2B Max')
    order_items.create({dishes_ordered:req.body.dishes_ordered, quantity:req.body.quantity, })
    .then((data) => {
            res.send(data);
            console.log('The order items have been created successfully in the database');
        }).catch((err) => {
            console.log(err);
            console.log('------');
        })
})

 router.put('/order_items/:id', (req, res) => {
       order_items.update({_id:req.params.id}, req.body
        ).then((data) => {
            res.send(data);
            console.log('The required order item details has been updated successfully');
        }).catch((err) => {
            console.log(err);
        })
 })

 router.delete('/order_items/:id', (req, res) => {
     order_items.deleteOne({_id:req.params.id}, req.body
        ).then((data) => {
            res.send(data);
            console.log('The required order item has been removed from the database successfully');
        }).catch((err) => {
            console.log(err);
        })
 })
module.exports = router;