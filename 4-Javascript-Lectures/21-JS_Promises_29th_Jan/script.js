//HOF



//Spread
function sumOne(x,y) {
    return x + y
}

let vari = [9,7]//to pass an array to x and y 

//passing the value
console.log(sumOne(...vari)); //Spread
//9
//7 - divided the array data passed singlly for x and y

//Rest
function sum(...args){
    //Rest Op
    console.log(...args);
    let sum = 0;
    for(const x of args){
        sum = sum + x
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9,0));

//when we dont know how much data will come from user
//first convert to an array

//spread -> breaking the Array
//rest -> making the array

//Try and Catch

//Syntax
try {
    //logic error
    console.log(Anu)
}
catch(err){
    //error handling message
    console.log("String not matched");
}
finally{
    //will run in all cases
}

//throw => explore this topic

//Diff type of error we have in js
/*
Ref errpr
syntax error
typeError

*/

//promise
//-pending
//-fullfilled
//-rejected

