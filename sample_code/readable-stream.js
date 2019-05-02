var request = require('request');
var fs = require('fs');

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

//using pipe() concept.
request('http://pluralsight.com/').pipe(process.stdout);

request('http://pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));
