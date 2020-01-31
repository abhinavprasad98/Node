var events = require('events');
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});
let inter = setInterval(function() {
    myEmitter.emit('someEvent', 'Abhinavs A2B');
},1000);
setTimeout(function() {
    clearInterval(inter);
},10000);

// var simple = setInterval(function() {
//     console.log('Hai Frendz, myself Abhinav');
// },1000);
// let helper = setTimeout(function() {
//     clearInterval(simple);
//     window.alert('STRANGER DANGER');
// },10000);
