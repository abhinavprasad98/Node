// var http = require('http');
// var fs = require('fs');

// // Creating a server and give the response to the request

// var server = http.createServer(function(req, res) {
//   console.log(' Request was made to: ' +req.url);
//   res.writeHead('200', {'Content-Type': 'text/plain'});
//   var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
//   myreadstream.pipe(res);

// });

// // Listening to a port 

// server.listen(3000, '127.0.0.3');
// console.log('Hey bro i am listening to port number 3000');

//html
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  console.log(' Request was made to: ' +req.url);
  res.writeHead('200', {'Content-Type': 'application/json'});
  var myobj = {
    Name: 'Deepak',
    Job: 'Intern',
    Age: 21,
  };
  res.end(JSON.stringify(myobj));
  //var myreadstream = fs.createReadStream(__dirname + '/index.html', 'utf8');
 // myreadstream.pipe(res);

});

// Listening to a port 

server.listen(3000, '127.0.0.4');
console.log('Hey bro i am listening to port number 3000');



