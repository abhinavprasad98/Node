const router = require('express').Router();
const mongoose = require('mongoose');
const waiters = mongoose.model('waiters');

router.post('/waiters', (req,res) => {
    waiters.create(req.body).then((data) => {
        res.send(data);
        console.log('Waiter details has been updated successfully in the DB');
    }).catch((err) => {
        console.log(err);
    })
})

router.put('/waiters/:id', (req, res) => {
    waiters.update({_id: req.params.id}, req.body
        ).then((data) => {
            res.send(data);
            console.log('Required details of a waiter has been updated successfully');
        }).catch((err) => {
            console.log(err);
        })
})

router.delete('/waiters/:id', (req, res) => {
    waiters.deleteOne({_id:req.params.id}, req.body
        ).then((data) => {
            res.send(data);
            console.log('The required field has been deleted from the database');
        }).catch((err) => {
            console.log(err);
        })

})

module.exports = router;