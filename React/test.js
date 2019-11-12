var obj = {
    id: 100,
    print: function(msg){
        console.log("ID: ", this.id)
        console.log("Msg: ", msg)
    }
}

obj.print("abc");

var emp = {
    id: 200
};

//emp.print();

var fn = obj.print.bind(emp);
fn("xyz");

var fn1 = obj.print.bind(emp, "123");

fn1();

obj.print.call(emp, "234");