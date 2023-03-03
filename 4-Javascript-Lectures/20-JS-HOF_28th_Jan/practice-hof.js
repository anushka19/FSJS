// HOF => Higher order function
// Callback  - function is calling a function

// function a(){
//     console.log("Called by function");
// }

// function b(){
//     a();
// }

// b();
//above b is called as callback or HOF
//HOF are functions which take other function as a parameter or return a function as a value, the function passed as parameter is called as callback


//HOF understanding 1
// const callback = (n) =>{
//     return n**2
// }



// callback(2);

// function cube(callback){
//     return callback(n) * n
// }

// console.log(cube(callback,2));

// For Each
// const arr =["hey", "hi", "hello", "hola", "Namaste"];
// arr.forEach((val) => {
//     console.log(val);
// })
// forEach is a function and passing again func to print

//arr.forEach()

// arr.forEach(myfunc) //address
// function myfunc(val){ //home
//     console.log(val);
// }

//forEach is HOF, the () => {} inside it is callback

//SetTimeOut
setTimeout( () => {
    console.log("hello, fsjs2");
}, 3000)//3 seconds?

setInterval(() =>{
    console.log("😇");
}, 1000)

//59:56