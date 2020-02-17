const mongoose = require('mongoose');
const customers = require('./customers');

var ordersSchema = new mongoose.Schema({
    customer_id: {type: mongoose.Schema.Types.ObjectId, ref:'customers'},
    waiter_id: {type: mongoose.Schema.Types.ObjectId, required:true, ref:'waiters'}, 
    dishes_ordered: {type: [String], required:true},
    order_time: {type: String, required:true},
});

const Order = mongoose.model('orders', ordersSchema);
module.exports = {
    Order,
}