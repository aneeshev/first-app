const os = require('os');

var sayHello = function(){

    console.log('OS Level Information');
    
    var totalMemmory = os.totalmem();
    var freeMemmory = os.freemem();

    console.log('Total Memmory: '+totalMemmory)
    console.log('Free Memmory: '+freeMemmory)

    console.log('You can add more...');
}

sayHello();