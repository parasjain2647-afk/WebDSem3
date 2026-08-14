function calculatePercentage(a,b,c){
    return (a+b+c)/3;
}

let m1=parseInt(prompt("Enter your Marks in English"));
let m2=parseInt(prompt("Enter your Marks in Maths"));
let m3=parseInt(prompt("Enter your Marks in Science"));

let per=calculatePercentage(m1,m2,m3);
document.write("Your percentage:", per);