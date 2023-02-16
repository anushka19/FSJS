//HOF => Higher order function
//CALLBACK
// function is calling a function 
// definetion of callb ack from sir's copy
// function a(){
//     console.log("I was called by a function");
// }

// function b(){
//     a();
// }

// b();

//prog
const callback = (n) => {
    return n ** 2;
};

function cube(callback) {
    return callback(n) * n;
}

//console.log(cube(callback,2));

const arr = ["hey","hi","hello","hola","Namaste"];
//arr.forEach()
arr.forEach(myfunc)

function myfunc(val) {
    console.log(val)
}

setTimeout(()=>{
    console.log("Hello FSJS 2");
}, 3000)

//Destructuring, Spread and Rest,try catch promises


