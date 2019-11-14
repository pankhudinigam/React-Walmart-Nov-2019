let numbers = [1,2,3,4,5,6];

let results = numbers.filter((item, index) => {
    return item > 3;
})
console.log(results);
results = numbers.map((item, index) => {
    return item * item;
});
console.log(results);

//copy

//ES6 ==> Spread operartor(iterator)
let copy = [ ...numbers ];
numbers[0] = 100;
console.log("copy", copy);
console.log("numbers", numbers);

copy = [ ...numbers, 100, 200, 300 ];
console.log("copy", copy);

let user = {
    id: 100, name: "Anil"
}

let copyUser = {...user, salary: 10000, name: "ANil J"}
console.log(copyUser);

