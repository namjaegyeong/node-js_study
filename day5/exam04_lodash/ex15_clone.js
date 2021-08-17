import _ from 'lodash'

var objects = [{'a':1},{'b':2}];

let _objects2 = objects;
console.log(_objects === objects);

console.log('----clone ----')
let object2 = _.clone(objects)
console.log(objects === objects2);
console.log(objects[0] === objects2[0]);

console.log('----deep clone----')
let object3 = _.cloneDeep(object3)
console.log(objects === objects3);
console.log(objects[0] === objects3[0]);

