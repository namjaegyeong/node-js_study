process.stdin.resume() //keyboard
process.stdin.setEncoding('utf-8')
const util = require('util')

process.stdin.on('data',function(text){
    console.log(`echo : ${text}`);
    //console.log('echo :' + text);
    if(text === 'exit\r\n'){
        process.exit()
    }
    // '1' == 1 true
    // '1' === 1 false
})