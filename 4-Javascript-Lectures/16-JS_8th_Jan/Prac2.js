//Prototype and prototype inheritance - as video

//classical inheritence is different from inheritance

let arr1 = ["Anushka","Lekha"]
let object = {
    name: "Anushka",
    city: "Dehradhun",
    getIntro: function(){
        console.log(this.name + " from " + this.city);
    }
}
function fun(){

}
//js attches to hidden prop, even a plain function gets access to it,
//it puts all the properties into an object and attaches to main/original object
//js puts all func in __proto__

//arr1.__proto__ 
//Array.prototype

//Above 2 have same object means arr1.__proto__  is Array.prototype
//arr1.__proto__.__proto__  is object also has its own __proto__:arr1.__proto__.__proto__  in arr1 which is same as Object.prototype

//arr1.__proto__.__proto__.__proto__ is null

//Objects

// object.__proto__
// {anu: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
// Object.prototype
// {anu: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
// object.__proto__.__proto__
// null

//Functions

// fun.__proto__
// ƒ () { [native code] }
// Function.prototype
// ƒ () { [native code] }
// fun.__proto__.__proto__
// {anu: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
// Object.prototype
// {anu: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}

//ends at null

let object2 = {
    name:"Lekha",
    city:"Bangalore"
}

//never do the below in real life coding
//object2 inherits from object - prototypal inheritance
object2.__proto__ = object; // to access object property inside object2

//each and every function we create here will get access to mybind because directtly setting on prototype
Function.prototype.mybind = function() {
    console.log("hadfoh")
}

function fun(){

}

