// normal function expression
function sayHi(){
    console.log('Say Hi');
}
sayHi();

function callfunction(fun){
    fun();
}

var saybye = function(){
    console.log('Say Bye');
}
callfunction(saybye);
