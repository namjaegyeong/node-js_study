//import _ from 'lodash'
import _ from 'lodash'

//console.log(_.VERSION)

//array
var users = [
    {'user':'barney', 'active':false},
    {'user':'fred','active':false},
    {'user':'pebbles','active':true}
];

let _findIndex = _.findIndex(users,(o)=>{
    return o.user =='fredxxx'
});

console.log(_findIndex);