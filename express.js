var express = require('express');
var bodyParser = require('body-Parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets/', express.static('assets'));
app.get('/', function(req, res) {
//    res.sendFile(__dirname + '/contact.html');
res.render('index');
 });


app.get('/contact', function(req, res) {
   //res.send('This is the contactpage');    
   res.render('contact', {qs: req.query});
});
app.post('/contact', urlencodedParser, function(req, res) {
   console.log(req.body);   
   res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res) {
   var data = {Age: 20, Job: 'Employee', Hobbies: ['Cricket', 'Piano', 'Reading Books']};
   res.render('profile', {Person: req.params.name, data: data});
});

app.listen(1234);