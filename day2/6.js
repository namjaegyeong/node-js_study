import fs from 'fs'

let data = fs.readFileSync('text2.txt',
    {
        encoding:'utf-8'
    }
);

console.log(data);

let data = fs.readFile('text2.txt',
    {
        encoding:'utf-8'
    },
    function(err,data){
        if(err){
            console.log(err);
        }
        else {
            console.log('ok');

            console.log(data);
        }
    }
);
