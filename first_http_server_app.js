const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        console.log('Hello World...');
        res.write('Hello World...');
        res.end();
    }

    if( req.url === '/api/addCustomer'){
        console.log('Customer added..')
        res.write('Customer added..');
        res.end();
    }
})

server.listen(3000);
console.log('Listening on port 3000...... http://localhost:3000/');
