//Design Pattern => IIFE(Immdiatly invoked function expression) => Scope


//Hoisting
console.log("x: ", x);
var x = 10;
console.log("x: ", x);

var y;
console.log("y: ", y);

//console.log("z: ", z);

// function statement
function foo(){
    var msg = "abc";
    console.log("foo..");

    if(x > 1){
        //var test = "Hello scope";
        // (function(){
        //     var test = "Hello scope";
        //     console.log("test", test);
        // })();
        let test = "Hello scope";
        console.log("test", test);
    }
    //console.log("test", test);

}

foo();

//function expresseion
//var bar = function(){console.log();}
//bar();

//iife
(function(){
    console.log("iife");
})();

console.log("App over");