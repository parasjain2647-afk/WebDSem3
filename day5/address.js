function show(){
    console.log("Address"+this.add);
    console.log("City"+this.city);
}
const e={
    add:"ABES",
    city:"Ghaziabad",
    show:show
};

const f={
    add:"ABESEC",
    city:"Ghaziabad",
    show:show
};
e.show();
f.show();