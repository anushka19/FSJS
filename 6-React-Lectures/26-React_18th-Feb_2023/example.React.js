function setState(){
	let score = 22
    return score

}

let myScore = setState()
console.log( myScore +" one")

//console.log(myScore);
myScore = 12 // copy of 22 is changed
console.log(myScore);

let anotherScore = setState()
anotherScore;

console.log(anotherScore)

//Number, string, Boolean - primitive - here copy of the value is changed
//Array and object - non - primitives actual value is changed

//for array by ref

//call by value and call by ref

