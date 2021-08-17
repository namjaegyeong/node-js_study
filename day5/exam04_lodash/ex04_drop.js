import {drop,dropWhile,dropRight} from "lodash-es";

console.log(_.drop([1,2,3,4,5,6]))
console.log(_.drop([1,2,3,4,5,6],2))
console.log(_.drop([1,2,3,4,5,6],3))

console.log(dropRight([1,2,3,4,5,6]))


console.log(dropWhile([1,2,3,4,5,6],(o)=>{
    return o < 3

}))

console.log(dropWhile([1,2,3,4,5,6],(o=>o<3));
