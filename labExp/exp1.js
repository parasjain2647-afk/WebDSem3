const Event= require('events');
const A= new Event();
A.on('greet',(name)=>{
    console.log(`Hello ${name}`);
});
A.emit('greet','AIML');
A.on('exit',(name)=>{
    console.log(`Thanks ${name} for visiting`);
});
A.emit('exit','AIML');

class Button extends Event{
    click(){
        console.log('Button has been clicked.');
        this.emit("click");
    }
}
const btn = new Button();
btn.on("click",()=>{
    console.log(`Button has clicked`);
});
btn.click();

console.log("Start");
setTimeout(()=>{
    console.log("TimeOut");
},10000);
setImmediate(()=>{
    console.log("Immediate");
});
process.nextTick(()=>{
    console.log("NextTick");
});
console.log("Exit");