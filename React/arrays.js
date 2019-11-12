let numbers = [1,2,3,4,5,6];

let results = numbers.filter((item, index) => {
    return item > 3;
})

console.log(results);

results = numbers.map((item, index) => {
    return item * item;
});

console.log(results);