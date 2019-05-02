var request = require('request');
var zlib = require('zlib');
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

// To write the content.
request('http://pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));

// To zip the file.
request('http://pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.zip'));