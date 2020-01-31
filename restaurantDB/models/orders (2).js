var mongoose = require('mongoose');

var ordersSchema = new mongoose.Schema({
    order_time: {type: String, required:true},
    customer_id: {type: String, unique: true, required:true},
    quantity: {type: String, required:true},
});

mongoose.model('orders', ordersSchema);