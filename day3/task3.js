function calculatePercentage(a,b,c){
    return (a+b+c)/3;
}

let m1=prompt("Enter your Marks in English");
let m2=prompt("Enter your Marks in Maths");
let m3=prompt("Enter your Marks in Science");

let per=calculatePercentage(m1,m2,m3);
console.log("Your percentage:", per);