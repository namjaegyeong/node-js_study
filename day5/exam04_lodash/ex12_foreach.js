import _ from 'lodash'

_.forEach([1,2,3,4],o=>console.log(o));

//let _a = [1,2,3,4]
//for(let i=0;i<a.length;i++){
//    console.log(_a[i]);
//}

console.log('----------')
_.forEach({'a':1,'b:2'},(o,key)=>{
    console.log(`key:${key},value,${o})`);
});