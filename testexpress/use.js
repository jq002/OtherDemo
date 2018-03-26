var express = require("express");
var http = require("http");

var app = express();
app.use(express.static(__dirname+'/public'))//提供静态文件

app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});
app.use("/home", function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome to the homepage!\n");
  });
  
  app.use("/about", function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome to the about page!\n");
  });
app.use(function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("not fund\n");
});

http.createServer(app).listen(1337);
// app.listen(1337);