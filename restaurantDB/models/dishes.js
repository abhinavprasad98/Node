var mongoose = require('mongoose');

var dishesSchema = new mongoose.Schema({
    name: {type: String, unique: true, required:true},
    quantity: {type: String, required:true},
    unit_price: {type: String, required:true}
});

module.exports = mongoose.model('dishes', dishesSchema);