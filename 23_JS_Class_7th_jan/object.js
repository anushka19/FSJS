//console.log(this);
//key and value pair
const object = {
    rocket: 'r',
    home: 'h'
}

// for (k in object){
//     console.log(k)
// }

//string, number bigint, boolean, null, undefine, symbol

const obj1 = {

    rocket: 'r', //property
    fuel: 2,
    config: {
        name: 'mars'
    }
}

//adding property using dot  or array notation
obj1.fuel = 200
obj1['year'] = 2000
//console.log(obj1)

//part 2
const obj2 =  new Object() //constructor
obj2.redbook = 'red'
obj2.myValue = '1 blue book'
//console.log(obj2)

//part 3
const powers = {
    fly: true,
    coordinate: Math.random() + 2
}
const obj3 =  Object.create(powers)
//to keep object clean its inside prototype because we instatiate below
//console.log(obj3)
//console.log(obj3.coordinate)
//console.log(Object.getPrototypeOf(obj3))

//part  4
const obj4 = Object.create({});
//obj4.name = "anushka"
//console.log(obj4)
//to add a property to control so whe need getter and setter
Object.defineProperty(obj4, 'book', {
   // icon: 'b'
   get: () => 'b',
   enumerable: true
})
//console.log(obj4)
//console.log(obj4.book)
//console.log(Object.getPrototypeOf(obj4))


// for(k in obj4) {
//     console.log("Value is: ", k);
// }

//enumerable is not default

//part 5
let pen = 'anu'
const obj5 = {
    comics: 'marvel',
    pen: '',
    printComic: function() {
        
        this.pen += 'book' // to get which is inised the object and not which is outside
        console.log(this)
        return this
    }, // here this ref to parent obj in 1st printComic
    // printComic2: () =>{
    //     this.pen += 'book'
    //     console.log(this)
    // } //-> arrow functions dont have this keyword
}

console.log(obj5.printComic().printComic().printComic());
//console.log(obj5.printComic2());

