const a={
    id:101,
    name:"Paras",
    job:"Teacher",
    show: function(){
        console.log("My ID:" + this.id);
        console.log("My Name:" + this.name);
    },
    job_title:"Assitant Prof",
    show: function(){
        console.log("My Job" + this.job);
        console.log("My Job Title:" + this.job_title);
    }
};
a.show();