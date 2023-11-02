var http = require('http') ;//include http core module

var server = http.createServer(function(req,res)
//create server
{
    res.write("welcome to Node.js server   ....Hello")

    //Response
res.end()
})
server.listen(5000)  //port number
console.log("Server is running port 5000")