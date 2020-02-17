var mongoose = require('mongoose');

var order_itemsSchema = new mongoose.Schema({
    dishes_ordered: {type: [String], unique: true, required:true},
    quantity: {type: [Number], required:true},
    //unit_price: {type: [mongoose.Schema.Types.ObjectId], required:true, ref:'dishes'}
});

module.exports = mongoose.model('order_items', order_itemsSchema);