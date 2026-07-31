const app = require('./app.js');
var a=20;
var b=20;
var c=20;
console.log(a+b+c);

var x=parseInt(prompt("Enter"));
if(x==20){
    console.log("x is 20");
}
else{
    console.log("Enter a valid number");
}

for(var i=0; i<=4; i++){
    console.log(i);
}

var x=[1,2,3,4];
for(var i=0; i<x.length; i++){
    console.log(i, x[i]);
}

console.log(app.x);