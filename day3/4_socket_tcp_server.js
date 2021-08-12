//net -> http,ftp,ssh,smtp
import net from 'net'

const port = 8070

const tcp_server = net.createServer((_client) => {
    //packet 처리
    _client.on('data',(playload)=>{
        console.log(playload + "")

        _client.write("ok"); //응답
        _client.destroy();
    })
    
    _client.on('close',()=> {
        console.log('closed');
    })

}).listen(port)

console.log(`server listen ${port}`);
