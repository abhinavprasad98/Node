var mongoose = require('mongoose');

var paymentsSchema = new mongoose.Schema({
    customer_id: {type: String, unique: true, required:true},
    order_id: {type: String, unique: true, required:true},
    payment_time: {type: String, unique: true, required:true},
    amount: {type: String, unique: true, required:true},
    payment_type: {type: String, unique: true, required:true}
});

module.exports = mongoose.model('payments', paymentsSchema);