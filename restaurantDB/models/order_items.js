var mongoose = require('mongoose');

var order_itemsSchema = new mongoose.Schema({
    dish: {type: String, unique: true, required:true},
    quantity: {type: String, required:true},
    unit_price: {type: String, required:true}
});

module.exports = mongoose.model('order_items', order_itemsSchema);