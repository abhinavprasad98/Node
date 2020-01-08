module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array'; 
}
console.log('Deepak Ezaz Chinmoy Abhinav');
console.log(module.exports.counter(['Ezaz','Deepak','Chinmoy','Abhinav']));

module.exports.adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
};

module.exports.pi = 3.14;