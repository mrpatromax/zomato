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





//functions

const item ={
    food: 1000,
    drinks:200,
};
cart=0
var addtocart =(item)=>{
   return cart+item;
}
var addcartvalue=(item)=>{
    cart=addtocart(item);
}
addcartvalue(item.food);
addcartvalue(item.drinks)
console.log("cart: ",cart);

// key words
//this
console.log(this)
function getthis(){
    console.log(this);
}
getthis();
const arrowgetthis=()=>{
    console.log(this);
}
arrowgetthis();

const ourobject = {
    name: "this keyword",
    getthis : ()=>{
        console.log(this);
    }
};
ourobject.getthis();

//arrays
var myarray =[1,2,3,4,5,6,7];
console.log(myarray);
myarray.push(8);
console.log(myarray);
myarray.pop();
console.log(myarray);
myarray.unshift(0);// add something in the first position 
console.log(myarray);
myarray.shift();// remove something from the  first position
console.log(myarray);

//
var number=1;
function printnum(){
    console.log(number);
    number++;
    if(number<=10) {
        printnum();
    }
    else {
        console.log("hello");//it will print coz before return or after return it will not
        return;
    }
}
printnum();


//

function getarray(){
    return [1,2];
}
const [x,y,z]=getarray();
console.log(x);
console.log(y);
console.log(z);


//map and filter
// map
var MyArray = [1,2,3];
const newarray =MyArray.map((e) => (e+1));
console.log(newarray);
console.log(MyArray);


//filter

var abc =[10,20,50];
const array1 = abc.filter(
    e => e<50
);
console.log(array1)
console.log(abc)


//es 6
//world is printed coz even if the name is not passed the default is ready so no need of loops


function hello(name="world") { 
    console.log("hello "+ name);
}
hello("vansh");

//es 6 another feature
//tamplate literals

console.log("apple\nbanana\ngrapes")
console.log(
    `
apple
bananan
grapes
    `)
// scoping
function outer(){
    var name1="xyz";
    let name2="pqr"; // same for let

    function inner(){
        var name1="xxyyzz";
        console.log(name1)
    }
    inner()
    console.log(name1);
}
outer()

//a synchronous js
//promises
// async await

//promises
fetch("https://jsonplaceholder.typicode.com/users")
.then((result)  => result.json())
.then((data)=> console.log(data));

console.log("---------------");


const getdata =async () => {
    const result = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
};
getdata();

