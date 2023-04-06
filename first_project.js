console.log("hello form js ");
var name="vansh";
var age=18;
console.log(name,age);
var okay=true;
console.log(okay)
var array=[1,2,3,4,5,6,7,8,9,0]
console.log(array)
console.log(array[2])
var obj = {
    name: "vansh",
    age: 18,
    test: ["pass","fail","pass"],
    exam : {
        mid: "pass",
        end: "pass"
    },
    "full name": "vansh kumar"
}
console.log(obj);
console.log(obj.name);
console.log(obj.exam);
console.log(obj.exam.mid)
console.log(obj["full name"])
// conditional statements
// if else
//switch

//if else
var a=0;

if(a>0){
    console.log("a is greater than 0")
}
else if(a<0){
    console.log("a is less than 0")
}
else{
    console.log("a is equal to 0")
}
// stitch
 var num1=20;
 var num2=30;

 switch(num1>num2){
    case true:
        console.log("positive")
        break;
    case false:
        console.log("negative")
        break;
    default:
        console.log("nothing")
 }
 // operators
 // == means comparision of value w
 // === means comparision of value and datatype
  var a=10;
  var b="10";

  if(a===b){
    console.log("a and b are equal in value and datatypes also ")
  }
else{
    console.log("a and b are not equal in datatypes and value ")
}
if(a==b){
    console.log("a and b are equal in value only")
}
else{
    console.log("a and b are not equal in values")
}


// logical operators

// && ,|| ,!
//&& means for adding more condition
//|| means for if any one condition is true its applies
//! means for negation ,!+ve =0 and !0 =+ve

var a=0;
 if(a===0&&a>0){
    console.log("a is equal to 0")
 }
 else {
    console.log("a is less than 0")
 }
 if(a===0||a>0){
    console.log("a is greater or equals to 0")
 }
 else{
    console.log("a is less than or equal to 0")
 }

 if(!a){
    console.log("a is +ve")
 }
 else{
    console.log("nothing")
}


//ternary operators

const mymarks=40;
mymarks>30 ? console.log("passed") : console.log("failed")

//

var a=0;
var b=0;
var c=0;

b=a++//postfrix
c=++a//prefix

console.log({a,b,c})


//loops
//for loop
//while loop
//do while loop

for(var a=0;a<=10;a++) {
    if(a%2===0)
    console.log(a)
}


var num=0;
while(num<=10){
    if(num%5===0){
    console.log(num);
    }
    num++;
}

var num1=0;
do{
    console.log("hey");
}while(num1>0);
