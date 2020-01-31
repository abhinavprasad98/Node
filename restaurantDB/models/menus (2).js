var mongoose = require('mongoose');

var menusSchema = new mongoose.Schema({
    price: {type: String, required:true},
    categories: {type: String, unique: true, required:true}
});

mongoose.model('menus', menusSchema);