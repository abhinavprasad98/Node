var events = require('events');

var myevent = new events.EventEmitter;

myevent.on('some event', function(msg){
    console.log(msg);
});

myevent.emit('some event','I have learnt events emitter');

