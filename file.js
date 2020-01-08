// //Synchronous file access
// var fs = require('fs');

// var readme = fs.readFileSync('readme.txt', 'utf8');
// var writeme = fs.writeFileSync('writeme.txt', 'readme');

//Asynchronous file access
var fs = require('fs');
fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('writeme.txt', data);
});
