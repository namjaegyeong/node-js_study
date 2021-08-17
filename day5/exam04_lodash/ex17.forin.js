import _ from 'lodash'

function foo(a,b){
    this.a = a;
    this.b = b;

}

foo.prototype.c = 1
foo.prototype.bar = function(){
    console.log(this.a)
}

let fooObj = new foo(1,2);
console.log(fooObj)

let fooObj2 = new foo(3,4);
console.log(fooObj)

// foo_a = _.bind(foo,obj)

_.forIn(fooObj,(o,key) => {
    console.log(o,key)
})

_.forIn(fooObj2,(o,key) => {
    console.log(o,key)
})

let obj = {a:1,b:2}
_.forIn(Obj,(o,key) => {
    console.log(o,key)
})

fooObj.bar()
fooObj2.bar()