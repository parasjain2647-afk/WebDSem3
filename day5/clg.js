function clg(){
    console.log("Name:"+this.name);
    console.log("ID:"+this.id);
    console.log("College Name:"+this.college);
}
const Class={
    name:"AIML",
    id:101,
    college:"ABES",
    clg:clg
};

const dept={
    name:"CSE",
    id:153,
    college:"ABES",
    clg:clg
};
Class.clg();
dept.clg();