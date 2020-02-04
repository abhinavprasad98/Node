const router = require('express').Router();
const mongoose = require('mongoose');
const chef = mongoose.model('chef');

var time = require('log-timestamp');
router.post('/chef', function(req, res) {
    chef.create(req.body).then(function(data) {
        res.send(data);
        console.log('Chef model created succerssfully in the DB' +`${new Date}`);
        console.log('After log-timestamp');
    }).catch((err) => {
        console.log(err);
    })
})

router.put('/chef/:id', function(req,res) {
       chef.update({_id:req.params.id},req.body
       ).then(function(data) {
           res.send(data);
           console.log('Order ID updated Successfully');
       }).catch((err) => {
           console.log(err);
       })
})

router.delete('/chef/:id', function(req, res) {
    chef.findByIdAndDelete({_id:req.params.id}
    ).then(function(data) {
        res.send(data);
        console.log('Selected Chef removed from the Database');
    }).catch((err) => {
        console.log(err);
    })
})
module.exports = router;