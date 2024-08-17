


class calculation{
 

add(num1,num2){
    console.log(num1+num2 )
}
add(num1,num2){
    console.log(num1+num2 )
}
}

//cal1.add(2,5)    // Here we calling add() method without creating 
// an object for a class so we will get  cannot access "call1" befor initialization

const cal1=new calculation()

// now we can access because we have created the obj for the class
cal1.add(2,5)  
cal1.add(5,5)


// Constructor = is a method  a class can have only one cnstructor 
class employee{


constructor(num1,num2){

    console.log("Addition of two Numbers:".concat(num1+num2))

console.log("Bnaglore")

}

add(num1,num2){
    console.log("Addition of two Numberswwwwww:".concat(num1+num2))

//console,log("Addition of two Numbers:"+ num1+num2)

}
}
const emp=new employee(10,20)
const emp1=new employee(30,20)


//Static non static

// Static members in a class  are variables and Methods   prifix with Static key word 
// Any member which have prefix with static key word we can say those are static members of a class

class Student{
static str="Harish"
static num1=89

static add(){

    console.log("girish")
}

}
// we can access the members in a class without creating an object for a clsaa if we declare as static  variable or method in class
console.log(Student.str)
Student.add()


// OOPS Cocepts

class maths{


add(num1,num2){

    var num3=num1+num2
console.log(num1+num2)
console.log(num3)
}
add2(num3,num4){
console.log(num3+num4)
}
}
const m1=new maths()
m1.add2(1,1,3)
