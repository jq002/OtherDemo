# 说明
express demo
##
 express核心对http的再包装
```
node的http模块写法

var http = require("http");

var app = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello world!");
});

app.listen(3000, "localhost");
```
##中间件 middleWare
- 就是处理http请求的函数，一个中间件处理完，传给下一个中间件
- 每个中间件从app实例接受3个参数
```
function uselessMiddleware(req, res, next) {
    //req   http请求参数
    //res   http响应
    //next  洗一个中间件
  next();//调用下一个中间件
}
```
- use是express注册中间件的方法
```
var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();//传给第二个中间件
});

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world!\n");
});

http.createServer(app).listen(1337);
```
```
app.use('/path', someMiddleware);
//请求路劲与/path匹配才会调用中间件someMiddleware

app.use("/home", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the homepage!\n");
});

app.use("/about", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the about page!\n");
});
```
- express提供静态文件
```
app.use(express.static('public'));
```
