var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect( 
    'mongodb+srv:abhinavs:Praveenkumar123@abhinav-ugqym.mongodb.net/test?retryWrites=true&w=majority',
   {
       useUnifiedTopology:true,
       useNewUrlParser:true,
       useCreateIndex:true
   })
   .then(success => {
       console.log('SUCCESS');
   })
   .catch(error =>
     console.log('ERROR')
   );

var todoschema = new mongoose.Schema({
    item: String
});

var todo = mongoose.model('todo', todoschema);

var urlencodedparser = bodyparser.urlencoded({extended: false});
module.exports = function(app) {
    app.get('/todo', function(req,res) {
        todo.find({}, function(err,data) {
            if (err) throw err;
            res.render('todo', {todos: data});
        })
    });

    app.post('/todo', urlencodedparser, function(req,res) {
        var newtodo = todo(req.body).save(function(err,data) {
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req,res) {
        todo.find({item:req.params.item.replace(/\-/g," ")}).deleteOne(function(err,data) {
            if (err) throw err;
            res.json(data);
        });
    });
};
