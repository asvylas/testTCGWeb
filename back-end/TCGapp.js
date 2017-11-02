const http = require('http');
const port = 3000;
const server = http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end("html")
});

server.listen(port, "127.0.0.1");
console.log("Listening to port: " + port);
