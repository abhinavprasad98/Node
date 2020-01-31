var fs = require('fs');
var readStream = fs.createReadStream(__dirname+'/helper.jpeg', 'utf8');
readStream.on('data',function(chunk) {
    console.log(chunk);
})