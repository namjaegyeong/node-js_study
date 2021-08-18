class Car{
    constructor(name,speed){
        this.name=name
        this.speed=speed

        this.printSpeed = () =>{
            console.log(this.speed)
        }
    }
    printName(){
        console.log(this.name)
    }
}

var car1=new Car('bmw',100)
var car2=new Car('kia',200)
var car3=new Car('toyota',300)

console.log(car1.name)
console.log(car2.name)
//console.log(car2.name)
car3.printName() 
console.log(car3)