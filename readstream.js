var http = require('http');
var fs = require('fs');

var myreadstream = fs.createReadStream(__dirname +'/readme.txt','utf8');
myreadstream.on('data', function(chunk) {
    console.log('New chunk recieved');
    console.log(chunk);
});