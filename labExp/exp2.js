const { isUtf8 } = require('buffer');
const { error } = require('console');
const fs=require('fs');
fs.writeFile("std.txt","Name: Paras Jain", (error)=>{
    if(error) console.log(error);
    else console.log("File Created");
});

fs.appendFile("std.txt","\tAIML-A",(error)=>{
    if(error) console.log(error);
    else console.log(`File Updated`);
});

fs.readFile("std.txt",'utf-8',(error,data)=>{
    if(error) console.log(error);
    else console.log(`File Read ${data}`);
});

fs.unlink('std.txt', (error)=>{
    if(error) console.log(error);
    else console.log("File Deleted"); 
});