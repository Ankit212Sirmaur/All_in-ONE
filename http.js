const http = require('http');

const port = 2200;

const server = http.createServer(function (request, response){

    if(request.url == '/home'){
        console.log('welcome to home');
        // response.end('success');
        response.write('first chunk data');
        response.write('second chunk data');
        response.end('write the end statement to terminate the sending the data');
    }
});


server.listen(port, function exec(){
    console.log(`sever successfully started at ${port}`);
});



