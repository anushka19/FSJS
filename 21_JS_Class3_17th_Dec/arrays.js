
// write list
let names = ['Hitesh Sir', 'Anurag','Surya','Anushka','Bipul']
console.log(names);
console.log(names.length);

console.log(names[2]);

console.log(names[names.length - 1]);
names[4] = "Vinay";
console.log(names);

//a not a recommended way
//let namess = new Array('Name 1', 'Names 2');
//console.log(namess);

//Push - to insert inside an array at the end
names.push('Gayathri');
console.log(names)

//Slice - start and end where end is exclusive
console.log(names.slice(1,7));

//Splice
let fruit =["Apple", "Ball","Cat","Dog"]
fruit.splice(2,1,"Cub","Candy")//instert at 2 - then continue and remove 0 or 1 after second index
console.log(fruit);

//Concatenation 
let arr1 =[1,2,3,4]
let arr2 = [4,5,6,7]
let arr3 = [6,7,6,7]

console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2, arr3));

//fill => homework
let arr4 = [1,2,3,4,5,6,7,8,9]
arr4.fill('Anurag',2,4)//fill 2 and3 4 exclusive
console.log(arr4)

arr4.fill('Anurag', 2, 4)
console.log(arr4)

//include - checks whether its there in the array - 7 value at index 6
let num = [1,2,3,4,5,6,7,8]
console.log(num.includes(7, 6));

//indexof
console.log(num.indexOf(5));

//isArray - to check whether its an array
let num1 = [ 1, 2, 'Anurag', 'Anurag', 5, 6, 7, 8, 9 ]
console.log(Array.isArray(num1))

//join - it joins the array with the char and converts the data type
let Arr1 = [1,2,3,4,4,5,6,7,4]
let var1 = Arr1.join(' or ')
console.log(typeof(var1))

//keys
// for of

//last index of - we get the last index of a repeatative value
//index of - gets the first index
console.log(Arr1.lastIndexOf(4))

//map - func applied to all the elements
let maths = [1,4,9,16,25]
console.log(maths.map(Math.sqrt))

//pop - remove something from last and returns a value by modifying the original array
console.log(maths.pop());
console.log(maths)

// reverse
console.log(maths.reverse())

//shift - removes from the start
console.log(maths.shift())

//sort - gives a sorted array and returns the array
console.log(names.sort())
console.log(names.reverse(names.sort()))

//unshift
console.log(fruit)
console.log(fruit.unshift('Apple 1','Grapes 2'))
console.log(fruit)

let name = 'Anushka';
let array1 = name.split('');
console.log(array1)

//for of - give it to arr from the main_array
let fruits = ['Apple','Mango','Banana','Watermelon']
let Upperfruit = [];
for(const UpperLetter of fruits){
    Upperfruit.push(UpperLetter.toUpperCase())
}
console.log(Upperfruit)

//break and continue
for(let i=0;i<=5;i++){
    if(i==3){
        break;//terminate and come out
    }
    console.log(i)
}
//continue
for(let i=0;i<=5;i++){
    if(i==3){
        continue;//skip 3 
    }
    console.log(i)
}


//object