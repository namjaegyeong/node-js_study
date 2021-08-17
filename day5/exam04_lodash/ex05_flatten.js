import _ from 'lodash'

console.log(_.flatten([1,2,[3,4],[[7]]]));
console.log(_.flattenDeep([1,2,[3,4],[[7]]]));