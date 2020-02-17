const router = require('express').Router();
const mongoose = require('mongoose');
const menus = mongoose.model('menus');
const dishes = mongoose.model('dishes');
router.post('/menus', (req, res) => {
    menus.create(req.body).then((data) => {
        res.send(data);
        console.log('Menu has been created successfully in the database');
    }).catch((err) => {
        console.log(err);
    })
})
router.get('/menu', async (req,res) => {
    try {
        let menu = await menus.findById(req.body._id)
        .populate({
            path:'categories',
            model: 'categories'
        })
        if(menu) {
            var k=0;
            // for(var i=0; i< menu.categories.length; i++) {
            //     dishes.findOne({category_id:menu.categories[i]})
            //     .then(data => {
            //         console.log(menu.categories[k]);
            //         console.log(data);
            //         k++;
            //     })   
            //     .catch(err => {
            //         console.log(err);
            //     })
            // }
            do {
                console.log(menu.categories[k]);
                for(var i=0; i<dishes.length; i++) {
                    dishes.find({category_id:menu.categories[k]})
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
                k++;
            } while(k!=menu.categories.length)
        }
        else {
            throw new Error ('Unable to fetch menu');
        }
    }
    catch(error) {
        console.log(error.message);
    } 
})
router.put('/menus/:id', (req, res) => {
    menus.update({_id:req.params.id}, req.body
        ).then((data) => {
            res.send(data);
            console.log('Menu has been updated successfully in the Database');
        }).catch((err) => {
            console.log(err);
        })
})

router.delete('/menus/:id', (req, res) => {
    menus.findByIdAndDelete({_id:req.params.id}, req.body
        ).then((data) => {
            res.send(data);
            console.log('The required menu field has been deleted');
        }).catch((err) => {
            console.log(err);
        })
})

module.exports = router;