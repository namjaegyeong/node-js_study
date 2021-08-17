import _ from 'lodash'

const _input = [1,2,3,4];
let _output = _.reduce(_input,(acc,o)=>{
    console.log(o);
    acc += o;
    return acc;
},0)

console.log(_output)


//map 처럼

_output = _.reduce(_input,(acc,o)=>{
    //console.log(o);
    acc.push(o);
    return acc;
},[])
console.log(_output)

//홀수만 추려내기

_output = _.reduce(_input,(acc,o)=>{
    //console.log(o);
    if(o%2){
        acc.push(o);
    }
    return acc;
},[])
console.log(_output)