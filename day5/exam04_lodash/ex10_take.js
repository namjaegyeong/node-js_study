import _ from 'lodash'

console.log(_.take([1,2,3,4,5,6]))
console.log(_.take([1,2,3,4,5,6],2))

console.log(_.takeWhile([1,2,3,4,5,6],o=>o<3))