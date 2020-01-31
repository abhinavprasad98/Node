var mongoose = require('mongoose');

var chefsSchema = new mongoose.Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    phone: {type: String, unique: true, required:true},
    order_id: {type: String, unique: true, required:true}
});

mongoose.model('chefs', chefsSchema);