const emp={
    name:"Utkarsh",
    salary:15000,
    disp:function(){
        console.log(this.salary);
    },
    increaseSalary:function(){
        this.salary=this.salary+5000;
    }
};
emp.disp();
emp.increaseSalary();
emp.disp();