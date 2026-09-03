const student={
    name:"Aman",
    marks:70,
    add:function(){
        this.marks+=5;
    },
    disp:function(){
        console.log(this.marks)
    }
};
student.disp();
student.add();
student.disp();