

// function sum(){
//     console.log("in sum no args");
// }

// implicit args => this, arguments
function sum(x, y){
    console.log("in sum: ", arguments);
}

sum(2,3);
sum();
sum(2,3,4,5);
