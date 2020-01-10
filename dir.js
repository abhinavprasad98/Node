// // Synchronous

// var fs = require('fs');
// fs.rmdirSync('stuff');

// //Asynchronous

// var fs = require('fs');

// fs.mkdir('stuff', function() {
//     fs.readFile('readme.txt', 'utf8', function(err, data) {
//         fs.writeFile('./stuff/writeme.txt', data, function() {
//             console.log('Directory has been created and a file has been read and written separately');
//         });
//     });
// });

// Removing the directory asynchronously

var fs = require('fs');
fs.unlink('./stuff/writeme.txt')
fs.rmdir('stuff', function() {
    console.log('Directory stuff has been removed');
});