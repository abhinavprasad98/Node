var mongoose = require('mongoose');

var chefSchema = new mongoose.Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    phone: {type: String, unique: true, required:true},
    order_id: {type: String, unique: true, required:true}
});

module.exports = mongoose.model('chef', chefSchema);