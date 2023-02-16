const myObject = {

    city: "Paris",
    greet(){
        console.log(`Greetings from ${this.city}`);
    }
}


//myObject.greet()
//console.log(myObject.toString());

const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while(object)

const theDate =  new Date(1992,08,10);
console.log(theDate.getYear());

theDate.getYear = function() {
    console.log("Something else");
}

//theDate.getYear();

const personPrototype = {
    greet() {
        console.log("hello!");
    },
}
//personPrototype.greet()
//console.log();
const carl = Object.create(personPrototype);
//carl.greet();

const peoplePrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
}

function Person(name){
    this.name = name;
}

Object.assign(Person.prototype, peoplePrototype);
Person.greet()

//-------------------------------
