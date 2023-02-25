//Map filter and reduce
//Promises and fetch API
//Weather App

//map => iterate over array and perform a action on all the values
//filter => iterate pver array and filter out the elemnt
//rduce => do operations and bring single value

const numbers = [1,2,3,4,5,6]
const nums = numbers.map( (val) => val * 5);
//console.log(nums)

const count = ["india", "Finland", "SriLanka", "Ireland"];
const  counter = count.filter( (val) => val.includes("land"));
//console.log(counter);

//reduce - accum, curr, intial
const num1 = [1,2,3,4,5,6,7,8,9];
const sum = num1.reduce((acc,curr) => acc+ curr, 0 ) // if at 0 then its blank it will consider 0
console.log(sum);

//promise - databse req
const makePromise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        const arrone = ["HTML","CSS","Javascript","Tailwind"];
        if(arrone.length > 0){
            resolve("Completed")//it works like return
            
        }
        else{
            reject("Incomplete")
           
        }
    }, 2000);
}); 

makePromise.then((result) => { //placeholder to save resolve and reject data
    console.log(result);
}).catch( (result) => {
    console.log(result);
})

//Fetch API
const url = "https://restcountries.com/v2/all"; //Countries
fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error)) //if we return 2 things so 2 then
//1;9;49
