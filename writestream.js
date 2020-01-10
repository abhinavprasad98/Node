

// var http = require('http');
var fs = require('fs');

// var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var mywritestream = fs.createWriteStream(__dirname + '/writeme.txt');

// myreadstream.on('data', function(chunk) {
//     console.log(chunk);
// mywritestream.write(chunk);    
// });

// fs.unlink('./writeme.txt' , function(chunk){
//     console.log('written file is deleted');
//     });

var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var mywritestream = fs.createWriteStream(__dirname + '/writeme.txt');

myreadstream.pipe(mywritestream);