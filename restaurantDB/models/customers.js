var mongoose = require('mongoose');

var customersSchema = new mongoose.Schema({
    email: {type: String, unique: true, required:true},
    phone: {type: String, unique: true, required:true},
    firstname: {type: String, required:true},
    lastname: {type: String, required:true}
});

module.exports = mongoose.model('customers', customersSchema);