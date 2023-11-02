var http =require('http')
var server =http.createServer(function(req,res)
{

    res.writeHead(200,{'content-Type':'text/html'});
    res.write("<html><body bgcolor='blue'><h2>Hello All..</h2><h3>Hello from client </h3></body></html>")
    res.end();
})
server.listen(1234)
console.log("server is running on port 1234 ")