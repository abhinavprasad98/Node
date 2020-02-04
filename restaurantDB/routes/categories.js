const router = require('express').Router();
const mongoose = require('mongoose');
const categories = mongoose.model('categories');

router.post('/categories', function(req, res) {
    categories.create(req.body).then(function(data) {
        res.send(data);
        console.log('Category created successfully');
    }).catch((err) => {
        console.log(err);
    })
});
router.put('/categories/:id', function(req, res) {
     categories.update(
         {_id: req.params.id},
         req.body
    ).then(function(data) {
        res.send(data);
        console.log('Category updated successfully');
    }).catch((err) => {
        console.log(err);
    })

})

router.get('/categories', function(req, res) {
    categories.findById(
        {_id: req.body._id}
    ).then(function(data) {
        res.send(data);
        console.log('Category ID found seccessfully');
    }).catch((err) => {
        console.log(err);
    })
       
    })
module.exports = router;
