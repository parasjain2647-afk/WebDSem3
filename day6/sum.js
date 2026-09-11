function sum(name,...num){
    sum=0;
    for(let n of num){
        console.log(name + " " + n);
        sum+=n;
    }
    console.log(name + " " + sum);
}

sum("Hello",10,20,30,40);