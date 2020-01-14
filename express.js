var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
//    res.sendFile(__dirname + '/contact.html');
res.render('index');
 });
app.get('/contact', function(req, res) {
   //res.send('This is the contactpage');
   res.render('contact');
});
app.get('/profile/:name', function(req, res) {
   var data = {Age: 20, Job: 'Employee', Hobbies: ['Cricket', 'Piano', 'Reading Books']};
   res.render('profile', {Person: req.params.name, data: data});
});
app.listen(1234);