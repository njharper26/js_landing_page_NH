var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){

    console.log("Client request.url: ", request.url);

    if (request.url === '/'){
        fs.readFile('index.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/ninjas'){
        fs.readFile('ninjas.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/dojo/new'){
        fs.readFile('dojo.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else {
        fs.readFile('error.html', 'utf-8', function (errors, contents){
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
});

server.listen(8000);

console.log("Server is running on port 8000");