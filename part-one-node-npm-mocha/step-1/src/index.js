var http = require('http');
var PORT = 8080;

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello node.js');
});

server.listen(PORT);
console.log('Server started on http://localhost:' + PORT);
