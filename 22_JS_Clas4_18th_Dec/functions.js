//function Function_name()
//to avoid
function sum(value1, value2){
    let num1 = 16;
    let num2 = 25;
    console.log('Addition of two number are: ',value1 + value2);
}
sum(5,6);
sum(54,82);
//Normal function and function with arguments or parameters

//function with return type
// function sum(val1, val2){
//     let result = val1 + val2;
//     return result;
// }

// let add1 = sum(10, 25);
// console.log(add1);

// let add2 =  sum(10,43);
// console.log(add2)

//String
function URL(url, domain){
    let con = 'https://';
    let result = con +url +domain;
    return result;
}

let anu_site = URL('google','.com');
console.log(anu_site);

//function
function sum(arr){
    let sum = 0;
    for(let i =0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let sumArray = [1,2,3,4,5,6,7,8, 9];
let arrResult = sum(sumArray);
console.log(arrResult);

//js is an object
//return 
function anu(){
    //arguments - check on this
    console.log(arguments);
    let sum = 0;
    for(let i= 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(anu(7,8,9,10,11,12,14,15))