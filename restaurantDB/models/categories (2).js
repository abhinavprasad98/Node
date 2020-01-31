var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
    name: {type: String, unique: true, required:true}
});

mongoose.model('categories', categoriesSchema);