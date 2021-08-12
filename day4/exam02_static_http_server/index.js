import http from 'http'
import nodeStatic from 'node-static'

const port = 8080;

const fileServer = new (nodeStatic.Server)('./www')

http.createServer((req,res)=> {

    console.log(req.url);
    fileServer.serve(req,res);

}).listen(port)

console.log(`listen ${port}`)