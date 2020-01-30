var mongoose = require('mongoose');

var waitersSchema = new mongoose.Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    status: {type: String, required:true},
    menu_id: {type: String, unique: true, required:true}
});

mongoose.model('waiters', waitersSchema);