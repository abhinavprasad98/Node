const mongoose = require('mongoose');
const dishes = require('./dishes')
//const categories = require('./categories')

var menusSchema = new mongoose.Schema({
    // dishes:{type:mongoose.Schema.Types.ObjectId, ref:'dishes'},
    // price: {type: String, required:true},
    Name: {type:String,required:true}
});

module.exports = mongoose.model('menus', menusSchema);