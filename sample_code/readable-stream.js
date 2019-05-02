var request = require('request');

var s = request('http://pluralsight.com/');

// s.on('start', function(){
//     console.log('Begin');
// });

s.on('data', function(chunk){
    console.log(">>>Data>>>"+chunk);
});

s.on('end', function(){
    console.log(">>>Done>>>");
});