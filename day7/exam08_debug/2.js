import path from 'path'

console.log(`현재 위치 : ${path.resolve()}`);
console.log(process.env.NODE_ENV);
console.log(process.argv[2])
console.log(process.argv[3])