var array = ["Hello", 100];

// var msg = array[0];
// var id = array[1];


var [msg, id] = array;

console.log(msg);
console.log(id);

var obj = {
    id1: 100, name: "Anil", loc: "Mumbai"
};

var {id1, name, loc} = obj;

console.log(id1);
console.log(name);
console.log(loc);

var test = {
    name
}