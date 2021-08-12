const http = require('http')

const http_server = http.createServer(function (req,res){
    console.log(req.url);
    res.end('hello http server!');
});

http_server.listen(8080);

console.log('start http server at 8080');