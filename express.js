var express = require('express');
var app = express();
app.get('/', function(req, res) {
   res.send('This is the homepage')
});
app.get('/contact', function(req, res) {
   res.send('This is the contactpage')
});
app.listen(1234);