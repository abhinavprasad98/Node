var http = require('http');
var fs = require('fs');

var myserver = http.createServer(function(req,res) {
console.log('The request was made to:' +req.url);
if(req.url === '/home' || req.url === '/' ) {
res.writeHead(200, {'Content-Type' : 'text/html'});
fs.createReadStream(__dirname + '/index.html').pipe(res);
} else if(req.url == '/deepak') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact-us.html').pipe(res);
} else if(req.url === '/api/ezaz') {
    var ezaz = [{name: 'ezaz', Age: 21, occupation: 'Hipster'}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ezaz));
} else{
res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
}
});

myserver.listen(3000, '127.0.0.5');
console.log('Hey I am listening to port 3000 in 127.0.0.5');