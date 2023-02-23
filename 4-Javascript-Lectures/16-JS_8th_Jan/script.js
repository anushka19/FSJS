//alert("hello")
let myHeros = ["thor","Spiderman"]
let dcHeros = ["batman", "black adam","superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    //method
    getSpiderPower: function () {
        console.log(`Spidy power os ${this.spiderman}`);
    }
}

Object.prototype.anu = function(){
    console.log(`Anu is present in all objects`);
}
//Arrays inheriting from object - we seee first arrays the  obj prototype in browser
//obj is parent to all

Array.prototype.heyAnu = function() {
    console.log(`Hitesh says hello`)
}
myHeros.anu()

//inheritance
const User = {

    name: "top name",
    email: "topuser@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssistant = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // will be found inside the object and inside that the lowest heirarchy will have all objects
}

//Binding 
Teacher.__proto__= User

//modern syntax of binding - teaching support will have teacher
Object.setPrototypeOf(TeachingSupport, Teacher)

//Goal: True length of string
//my try
// const truelength = {
//     getTrueLength: function(string) {
//         console.log(string.trim())
//     }
// }

String.prototype.truelength = function() {
    console.log(`true length is ${this.trim().length}`)//here this is current variable
}

//because truelength is a function add brackets

//prototype, inheritance, manipulating existing js