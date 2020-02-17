var mongoose = require('mongoose');

var dishesSchema = new mongoose.Schema({
    name: {type: String, unique: true, required:true},
    category_id: {type: mongoose.Schema.Types.ObjectId, ref:'categories'},
    unit_price: {type: Number, required:true}
});

module.exports = mongoose.model('dishes', dishesSchema);