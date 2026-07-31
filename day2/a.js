variables
console.log("===varibles===");
var fName = "Paras";
var lName = "Jain";
var text = fName+" "+lName;
console.log(text);

conditionals
var a=40;
var b=30;

if(a>10) console.log("A is greater than 10.");
else console.log("A is lesser than 10.");

Functions
function abes(){
    console.log("Welcome students.")
    console.log("Welcome to Node.js");
}
abes();
abes();

function parameter
function greet(fName,lName){
    console.log("Hello",fName,lName);
}
greet("Paras","Jain");
greet("Paras","Jain");

function return
function sum(a,b){
    return a+b;
}
var add=sum(10,20)
console.log("Sum:",add);

Default functions
function fullName(fName="ABES", lName="EC"){
    return fName+" "+lName;
}
var name=fullName("Paras","Jain");
console.log(name);

function total(math, eng, sci){
    return math+eng+sci;
}
function percentage(total){
    return total/3;
}

var total= total(20,40,60);
console.log("Total Marks:",total);
console.log("Percentage",percentage(total),"%");

while 
var i=0;
while(i<=10){
    console.log(i);
    i++
}