//HOF and Callback
//Rest and Spread
//Try and Catch
// Promises

//Spread and Rest
//Spread - when everything needs to get expanded, Rest - whatever is left

//spreading something inside an Array

//sending data - spread ...
//accumulating the data - rest


function sumone(x, y,z){
    return x + y +z
}

let vari = [9,7,8,15]
//console.log(sumone(...vari));//send multiple data to a func - Spread

//rest
function sum(...args){ //rest operator
    //res op
    //console.log(args);
    let sum = 0
    for(const x of args){
        sum=sum+x
    }
    return sum
}

//console.log(sum(1,2,3,4,5,6,7,8));

//Spread - [] - breakin the array
//Rest [] - making the array


//Try and Catch
//Syntax
try{
    //code
    //logic error
    //console.log(Anushka);
}
catch(err){
    //catch the error - error message
    //console.log(err.name);
}

//database conncetion - if connection fails we get error message
//Syntax
try{
    let firstname = "Anurag"
    //console.log(firstname + "" +lastname);
}catch(err){
    //console.log(err.name, "Variable name missing");
}
finally{
   // console.log("Run");
}

//throw - HW explore

//Different types of error in JS
/* 3 - majorly all error lies under these 3 below category
- Syntax Error
- Reference Error
- TypeError 
*/

//Promise
/*
- Pending
- Fullfilled
- Rejected
*/

//Event Loop
//certain action happening repeatedly


const userOne = () => {
    
    //console.log("Hello one");
};

// const userTwo = () => {
//     setTimeout(() => { //promise => Resolve Reject - either get one and then move further
//         console.log("Hello here1");
//     }, 3000)
//     console.log("Hello two");
// };
// const userThree = () => {
//     setTimeout(() => {
//         console.log("Hello here2");
//     }, 3000)
//     console.log("Hello three");
// };

//each task comes to queue and the goes to stack(runs)

// userOne()
// //userTwo()
// userThree()
// userTwo() //after wait of 1 sec it will print hello here

//Event loop - HW

//Promise
const one = () => {
    return "index page";
};

const Two = () =>{
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("Credential Correct")
        }, 3000)
    })
};

const Three = () =>{
    return "Redirect to home page";
};

const callMe= async() =>{ //for promise - where whole thing is called
    let valOne = one();
    console.log(valOne);

    let valTwo = await Two(); //to wait for 2nd one as its a promise - where ever we want to wait
    console.log(valTwo);//to wait till logic page is done

    let valThree = Three();
    console.log(valThree);
}

callMe();
