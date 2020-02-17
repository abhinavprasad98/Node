var mongoose = require('mongoose');
const menus = require('./menus');

var categoriesSchema = new mongoose.Schema({
    name: {type: String, unique: true, required:true},
    menu_id:{type:mongoose.Schema.Types.ObjectId, ref:'menus'},
});
mongoose.model('categories', categoriesSchema);