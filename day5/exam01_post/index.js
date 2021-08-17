import http from 'http'
import { URL } from 'url'

const port = 8090

http.createServer((req, res) => {

    // console.log(req.headers);

    let _myCustomHeader = req.headers['my-custom-header'];
    console.log(_myCustomHeader)

    const urlObj = new URL(
        req.url,
        'http://example.com'
    );

    console.log(`pathname : ${urlObj.pathname}`);
    console.log(`search : ${urlObj.search}`);
    console.log(`hostname : ${urlObj.hostname}`);

    let result = {
        r: 'ok'
    }
    let header = {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '1000',
        "Access-Control-Allow-Headers": "*" //CORS 정책 허용  * 는 모두 허용 
    }
    res.writeHead(200, header);

    let method = req.method; //GET,POST 인지 구분 
    console.log(method)

    if(method === 'GET') { //get 처리 
        if (urlObj.pathname == '/echo') {
            let _title = urlObj.searchParams.get('title');
            let _msg = urlObj.searchParams.get('msg');
    
            result.title = _title
            result.msg = _msg
            
        }
        res.end(JSON.stringify(result));
    }
    else if(method === 'POST') //포스트 처리 
    { 
        if (urlObj.pathname == '/echo') {
            let body_data = ''
            req.on('data',(playlod)=> { //요청측 데이터를 받는 부분,데이터가 한번에 오지않을수도있다.
                body_data += playlod
            })
            req.on('end',()=> {
                result.data = body_data
                result.myheader = _myCustomHeader
                res.end(JSON.stringify(result));
            })
        }
    }
    //swich case , api가 많을 경우 
    

}).listen(port);

console.log(`listen : ${port}`);