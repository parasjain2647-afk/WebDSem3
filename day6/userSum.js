function sum(name,...num){
    let sum=0;
    for(let n of num){
        sum+=Number(n);
    }
    console.log(name + " " + sum);
}
let input=prompt("Enter the array elements seperated by commas...");
let val=input.split(',');
sum("Hello", ...val);