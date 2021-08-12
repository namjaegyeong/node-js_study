import fs from "fs";

fs.writeFile(
    'test.txt', //파일 이름
    'hello', //데이터
    {
        encoding:'utf-8'
    },
    function(err){
        if(err){
            console.log(err);
        }
        else {
            console.log('ok');
        }
    }
);
console.log('done')