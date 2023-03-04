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
// setTimeout( () => {
//     console.log("hello, fsjs2");
// }, 3000)//3 seconds?

// setInterval(() =>{
//     console.log("😇");
// }, 1000)
 // after every interval it will print
//59:56

//ForEach
//map
//filter
//reduce
//find
//every
//some
//sort

//Map
const numbers = [1,2,3,4,5,6]
const numSqu  = numbers.map((num) => num * num)
//console.log(numSqu);

//Filter
const count = ["India", "Pakistan","Ireland","Russia","Italy","Kenya","Finland","Germany","Sri lanka","Japan"]
const store = count.filter((val) => val.includes("land"));
//console.log(store);

//Reduce(it reduces the value) - accumulater, inital, current
//Reduce takes a callback function. the callback function takes accumulater, current, and optional initial value as parameter and returns single value. It is a good practice to define an initia; value for the accumulator vallue. If we do not specify this parameter, by default accumulator will get array first value. if our array is an empty array, then javascript will throe an error.
const num = [1,2,3,4,5,6,7]
const sum = num.reduce((accumulater,current) => accumulater + current  , 1)
//console.log(sum);

//Sort
/*
Anushka
Madhav
Anirudh
Anurag
Hitesh
Snehal
Surya
naslun

*/

const names = ["Anushka",
    "Madhav",
    "Anirudh",
    "Anurag",
    "Hitesh",
    "Snehal",
    "Surya",
    "Naslun"]
//console.log(names.sort());
//console.log(names.reverse());

//Destructuring and Spread and Rest
const sci = [2.72,3.24,9.18,37,100];
let [e, pi,grav,bodytemp,boiltemp] = sci;

//console.log(e, pi,grav,bodytemp,boiltemp);

const arr1 = [1,2,3,4,5,6,7]
let [var1, , ,var2] = arr1 // to skip a variable - we get 1, 4
//console.log(var1,var2);

//Rest
const arr2 = [1,2,3,4,5,6,7,8]
let [num1, num2, ...rest] = arr2; //num1 -1, num2 - 2, and rest variable stored all other values
console.log(num1,num2);
console.log(rest);