import _ from 'lodash'

let a = [1,2,3]
let b = [4,5,6]

let c = _.concat(a,b,[3,5,3,6],[4,5])

console.log(c)