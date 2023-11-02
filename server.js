var http = require ('http');  //1-Import Node.js core module

var server = http.createServer(function(req,res)
{//2- Creating Server)
    //handle incoming requests here

});

server.listen(5000);  //3- listen for any incoming requests

console.log('Node.js web server at port 5000')
